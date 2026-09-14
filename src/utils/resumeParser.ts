import { 
  CAREER_OPPORTUNITIES_CATALOG, 
  COURSES_CATALOG, 
  CareerRoleOpportunity, 
  CourseSuggestion 
} from '../data/resumeData';

export interface ParsedResumeResult {
  candidateName: string;
  inferredCurrentTitle: string;
  experienceLevel: 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Staff / Lead';
  yearsEstimate: string;
  extractedSkills: string[];
  roleMatches: (CareerRoleOpportunity & {
    userVerifiedSkills: string[];
    userMissingSkills: string[];
    adjustedMatchScore: number;
  })[];
  recommendedCourses: CourseSuggestion[];
  atsScore: number;
  atsRecommendations: string[];
  suggestedKeywords: string[];
}

const KNOWN_SKILLS_DICTIONARY = [
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Bash',
  'React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'TailwindCSS',
  'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Snowflake', 'BigQuery', 'Cassandra', 'Elasticsearch', 'GraphQL',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Git', 'Linux', 'Microservices', 'REST APIs',
  'Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'RAG Architecture',
  'LangChain', 'LlamaIndex', 'Vector Databases', 'Pinecone', 'Transformers', 'Hugging Face', 'NLP', 'Computer Vision',
  'Tableau', 'Power BI', 'Excel', 'Statistics', 'A/B Testing', 'ETL Pipelines', 'dbt', 'Airflow', 'Spark', 'Kafka',
  'System Design', 'Agile', 'Jira', 'Problem Solving', 'Communication', 'Project Management'
];

export function parseResumeText(rawText: string): ParsedResumeResult {
  const cleanText = rawText.trim();
  const lowerText = cleanText.toLowerCase();

  // 1. Extract Candidate Name
  let candidateName = 'Candidate';
  const lines = cleanText.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length > 0) {
    const firstLine = lines[0];
    if (firstLine.length < 40 && !firstLine.toLowerCase().includes('resume') && !firstLine.toLowerCase().includes('curriculum')) {
      candidateName = firstLine.replace(/[^a-zA-Z\s]/g, '').trim() || 'Candidate';
    }
  }

  // 2. Infer Experience Level
  let experienceLevel: 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Staff / Lead' = 'Mid-Level';
  let yearsEstimate = '3-5 years';
  if (lowerText.includes('senior') || lowerText.includes('lead') || lowerText.includes('architect') || lowerText.includes('staff')) {
    experienceLevel = lowerText.includes('lead') || lowerText.includes('staff') || lowerText.includes('principal') ? 'Staff / Lead' : 'Senior';
    yearsEstimate = '5-8+ years';
  } else if (lowerText.includes('recent graduate') || lowerText.includes('student') || lowerText.includes('b.s. in computer') && lowerText.includes('2025') || lowerText.includes('2026')) {
    experienceLevel = 'Entry-Level';
    yearsEstimate = '0-2 years';
  }

  // 3. Infer Current Title
  let inferredCurrentTitle = 'Software Engineer';
  if (lowerText.includes('data analyst')) {
    inferredCurrentTitle = 'Data Analyst';
  } else if (lowerText.includes('data scientist') || lowerText.includes('machine learning')) {
    inferredCurrentTitle = 'Machine Learning Engineer';
  } else if (lowerText.includes('full stack')) {
    inferredCurrentTitle = 'Full Stack Developer';
  } else if (lowerText.includes('frontend') || lowerText.includes('react')) {
    inferredCurrentTitle = 'Frontend Engineer';
  } else if (lowerText.includes('devops') || lowerText.includes('cloud') || lowerText.includes('infrastructure')) {
    inferredCurrentTitle = 'Cloud / DevOps Engineer';
  }

  // 4. Extract Skills using Dictionary Matching
  const detectedSkillsSet = new Set<string>();
  KNOWN_SKILLS_DICTIONARY.forEach(skill => {
    // Regex boundary check to avoid substring false positives
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (regex.test(cleanText)) {
      detectedSkillsSet.add(skill);
    }
  });

  const extractedSkills = Array.from(detectedSkillsSet);

  // If very few detected due to minimal resume text, inject baseline fallback skills
  if (extractedSkills.length === 0) {
    extractedSkills.push('Python', 'SQL', 'Git', 'REST APIs', 'Problem Solving');
  }

  // 5. Match against Career Opportunities Catalog
  const roleMatches = CAREER_OPPORTUNITIES_CATALOG.map(role => {
    const verified = role.requiredSkills.filter(req => 
      extractedSkills.some(userSkill => userSkill.toLowerCase() === req.toLowerCase() || req.toLowerCase().includes(userSkill.toLowerCase()))
    );
    const missing = role.requiredSkills.filter(req => 
      !verified.includes(req)
    );

    // Dynamic match score computation
    const ratio = verified.length / Math.max(1, role.requiredSkills.length);
    const baselineScore = Math.round(55 + (ratio * 40));
    const adjustedMatchScore = Math.min(96, Math.max(62, baselineScore));

    return {
      ...role,
      userVerifiedSkills: verified,
      userMissingSkills: missing,
      adjustedMatchScore,
    };
  }).sort((a, b) => b.adjustedMatchScore - a.adjustedMatchScore);

  // 6. Match Course Suggestions against Identified Skill Gaps
  const topRole = roleMatches[0];
  const allMissingSkills = Array.from(new Set(roleMatches.flatMap(r => r.userMissingSkills)));

  const recommendedCourses = COURSES_CATALOG.filter(course => {
    return allMissingSkills.some(missing => 
      course.skillTarget.toLowerCase().includes(missing.toLowerCase()) || 
      missing.toLowerCase().includes(course.skillTarget.toLowerCase()) ||
      course.syllabusHighlights.some(s => s.toLowerCase().includes(missing.toLowerCase()))
    );
  });

  // Ensure at least 3 high-impact courses are returned
  if (recommendedCourses.length < 3) {
    COURSES_CATALOG.forEach(c => {
      if (!recommendedCourses.some(rc => rc.id === c.id) && recommendedCourses.length < 4) {
        recommendedCourses.push(c);
      }
    });
  }

  // 7. ATS Scoring and Recommendations
  let atsScore = 74;
  if (extractedSkills.length >= 8) atsScore += 10;
  if (cleanText.includes('%') || /\$\d+/.test(cleanText)) atsScore += 8; // Quantifiable metrics check
  if (lowerText.includes('github.com') || lowerText.includes('linkedin.com')) atsScore += 5;
  atsScore = Math.min(95, atsScore);

  const atsRecommendations = [
    'Quantify business impact: Include metrics like "reduced latency by 35%" or "served 120k DAU" in every bullet.',
    'Surface target role keywords in the Professional Summary section for automated applicant tracking systems.',
    'Group technical competencies into clear subcategories (Languages, Cloud/DevOps, AI/ML, Databases).',
    'Include direct links to live GitHub repositories or deployed demo case studies.'
  ];

  const suggestedKeywords = topRole.userMissingSkills.slice(0, 6);

  return {
    candidateName,
    inferredCurrentTitle,
    experienceLevel,
    yearsEstimate,
    extractedSkills,
    roleMatches,
    recommendedCourses,
    atsScore,
    atsRecommendations,
    suggestedKeywords
  };
}

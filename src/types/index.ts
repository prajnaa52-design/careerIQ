export interface CareerMatch {
  id: string;
  title: string;
  matchScore: number;
  salaryRange: string;
  growthRate: string;
  strongestSkills: { name: string; score: number }[];
  skillGaps: string[];
  readinessScore: number;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'Technical' | 'Analytical' | 'Soft Skills';
  userStatus: 'mastered' | 'proficient' | 'needs_work' | 'missing';
  userScore: number;
  required: boolean;
  explanation: string;
  impactScore: number;
}

export interface RoadmapStep {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  skillsGained: string[];
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  matchScore: number;
  salary: string;
  verifiedSkills: string[];
  missingSkills: string[];
  whyMatch: string;
}

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  recommendation?: {
    action: string;
    resource: string;
  };
}

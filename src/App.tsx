import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './components/auth/LoginPage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { CareerIntelligence } from './components/CareerIntelligence';
import { SkillGap } from './components/SkillGap';
import { CareerSimulator } from './components/CareerSimulator';
import { CareerRoadmap } from './components/CareerRoadmap';
import { JobMatching } from './components/JobMatching';
import { AICareerAssistant } from './components/AICareerAssistant';
import { Ecosystem } from './components/Ecosystem';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { ResumeScannerSection } from './components/resume/ResumeScannerSection';
import { ResumeScannerModal } from './components/resume/ResumeScannerModal';
import { ResumeBuilderModal } from './components/resume/ResumeBuilderModal';

import { CourseSuggestionsPage } from './components/CourseSuggestionsPage';
import { JobVacanciesPage } from './components/JobVacanciesPage';

function AppContent() {
  const { authView } = useAuth();
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedTargetRole, setSelectedTargetRole] = useState('data-analyst');

  const handleOpenAssessment = () => setIsAssessmentOpen(true);
  const handleCloseAssessment = () => setIsAssessmentOpen(false);

  const handleOpenScanner = () => setIsScannerOpen(true);
  const handleCloseScanner = () => setIsScannerOpen(false);

  const handleOpenBuilder = () => setIsBuilderOpen(true);
  const handleCloseBuilder = () => setIsBuilderOpen(false);

  // If user navigated to Login, Sign Up, or Password Reset, show the dedicated Auth view
  if (authView !== 'home') {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-blue-600/40 selection:text-white font-sans antialiased relative">
      {/* Top Navbar */}
      <Navbar 
        onOpenAssessment={handleOpenAssessment} 
        onOpenScanner={handleOpenScanner} 
        onOpenBuilder={handleOpenBuilder}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenAssessment={handleOpenAssessment} />

        {/* Resume Scanner Section */}
        <ResumeScannerSection onOpenScanner={handleOpenScanner} />

        {/* Section 2: The Problem */}
        <ProblemSection onOpenAssessment={handleOpenAssessment} />

        {/* Section 3: How CareerIQ Works */}
        <HowItWorks />

        {/* Section 4: AI Career Intelligence */}
        <CareerIntelligence onOpenAssessment={handleOpenAssessment} />

        {/* Section 5: Skill Gap Analysis */}
        <SkillGap />

        {/* Section 6: Course Suggestions Page / Section */}
        <CourseSuggestionsPage 
          initialRoleId={selectedTargetRole}
          onOpenAssessment={handleOpenAssessment}
        />

        {/* Section 7: Career Simulator */}
        <CareerSimulator onOpenAssessment={handleOpenAssessment} />

        {/* Section 8: Personalized Roadmap */}
        <CareerRoadmap onOpenAssessment={handleOpenAssessment} />

        {/* Section 9: Job & Internship Vacancies Exchange Page */}
        <JobVacanciesPage 
          onOpenAssessment={handleOpenAssessment}
          onOpenScanner={handleOpenScanner}
        />

        {/* Section 10: Job Matching */}
        <JobMatching onOpenAssessment={handleOpenAssessment} />

        {/* Section 10: AI Career Assistant */}
        <AICareerAssistant />

        {/* Section 11: CareerIQ Ecosystem */}
        <Ecosystem />

        {/* Section 12: Final Call to Action */}
        <FinalCTA onOpenAssessment={handleOpenAssessment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Assessment Modal */}
      <AssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={handleCloseAssessment} 
        onSelectRole={(roleId) => setSelectedTargetRole(roleId)}
      />

      {/* Resume Scanner Modal */}
      <ResumeScannerModal
        isOpen={isScannerOpen}
        onClose={handleCloseScanner}
      />

      {/* Resume Builder Modal */}
      <ResumeBuilderModal
        isOpen={isBuilderOpen}
        onClose={handleCloseBuilder}
      />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

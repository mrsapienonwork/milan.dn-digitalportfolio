import ExpertiseHero from '../components/Expertise/ExpertiseHero';
import ExpertiseOverview from '../components/Expertise/ExpertiseOverview';
import DeepExpertise from '../components/Expertise/DeepExpertise';
import TechnologyStack from '../components/Expertise/TechnologyStack';
import ExpertiseMatrix from '../components/Expertise/ExpertiseMatrix';
import ExpertiseCTA from '../components/Expertise/ExpertiseCTA';

export default function Work() {
  return (
    <div className="min-h-screen bg-[#02050A]">
      <ExpertiseHero />
      <ExpertiseOverview />
      <DeepExpertise />
      <TechnologyStack />
      <ExpertiseMatrix />
      <ExpertiseCTA />
    </div>
  );
}

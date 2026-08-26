import About from '../components/About';
import ExperienceEducation from '../components/ExperienceEducation';
import Expertise from '../components/Expertise';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-[80vh]">
      <About />
      <ExperienceEducation />
      <Expertise />
    </div>
  );
}

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ShiftSection from "./components/ShiftSection";
import AIBarSection from "./components/AIBarSection";
import AgentSection from "./components/AgentSection";
import DesktopSection from "./components/DesktopSection";
import ReaderSection from "./components/ReaderSection";
import VisionSection from "./components/VisionSection";
import MediaSection from "./components/MediaSection";
import PrivacySection from "./components/PrivacySection";
import MetricsSection from "./components/MetricsSection";
import ArabicSection from "./components/ArabicSection";
import MobileSection from "./components/MobileSection";
import RoadmapSection from "./components/RoadmapSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionDivider />
      <ProblemSection />
      <ShiftSection />
      <SectionDivider />
      <AIBarSection />
      <SectionDivider />
      <AgentSection />
      <SectionDivider />
      <DesktopSection />
      <SectionDivider />
      <ReaderSection />
      <SectionDivider />
      <VisionSection />
      <SectionDivider />
      <MediaSection />
      <SectionDivider />
      <PrivacySection />
      <SectionDivider />
      <MetricsSection />
      <SectionDivider />
      <ArabicSection />
      <SectionDivider />
      <MobileSection />
      <SectionDivider />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </>
  );
}

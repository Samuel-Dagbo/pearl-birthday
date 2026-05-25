import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsSection from "@/components/ReasonsSection";
import FinalSection from "@/components/FinalSection";
import SectionDivider from "@/components/SectionDivider";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050d1a] overflow-x-hidden relative">
      <ScrollProgress />
      <ParticleBackground />
      <div className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <LoveLetter />
        <SectionDivider />
        <CountdownTimer />
        <SectionDivider />
        <PhotoGallery />
        <SectionDivider />
        <ReasonsSection />
        <SectionDivider />
        <FinalSection />
        <BackToTop />
      </div>
    </main>
  );
}

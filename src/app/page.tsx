import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsSection from "@/components/ReasonsSection";
import FinalSection from "@/components/FinalSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <LoveLetter />
      <CountdownTimer />
      <PhotoGallery />
      <ReasonsSection />
      <FinalSection />
    </main>
  );
}

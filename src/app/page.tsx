import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TechStack from "@/components/TechStack";
import TrustManifest from "@/components/TrustManifest";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <HeroSection />
      <TechStack />
      <ServicesGrid />
      <TrustManifest />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-surface-border">
        © {new Date().getFullYear()} Pugofka Studio. Built for the future.
      </footer>
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TechStack from "@/components/TechStack";
import TrustManifest from "@/components/TrustManifest";
import CasesGrid from "@/components/CasesGrid";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <HeroSection />
      <TechStack />
      <section id="services">
        <ServicesGrid />
      </section>
      <section id="portfolio">
        <CasesGrid />
      </section>
      <ClientLogos />
      <Testimonials />
      <TrustManifest />
    </main>
  );
}

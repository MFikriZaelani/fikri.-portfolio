import { portfolioData } from "@/data/portfolio";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  const {
    profile,
    projects,
    certificates,
    techStack,
    education,
    experience,
    socials,
    whatsappNumber,
  } = portfolioData;

  return (
    <main>
      <LoadingScreen logo={profile.logo} />
      <CustomCursor />
      <BackgroundGrid />
      <ScrollReveal />
      <Navbar logo={profile.logo} />

      <HeroSection
        eyebrow={profile.eyebrow}
        titleLine1={profile.titleLine1}
        titleLine2={profile.titleLine2}
        handle={profile.handle}
        typewriterRoles={profile.typewriterRoles}
        heroDescription={profile.heroDescription}
        heroTags={profile.heroTags}
        heroSubtitle1={profile.heroSubtitle1}
        heroSubtitle2={profile.heroSubtitle2}
        photoUrl={profile.photoUrl}
      />

      <AboutSection
        fullName={profile.fullName}
        bio={profile.bio}
        quote={profile.quote}
        photoUrl={profile.photoUrl}
        cvUrl={profile.cvUrl}
        stats={profile.stats}
      />

      <PortfolioSection
        projects={projects}
        certificates={certificates}
        techStack={techStack}
        education={education}
        experience={experience}
      />

      <ContactSection socials={socials} email={profile.email} />

      <Footer logo={profile.logo} />
      <WhatsAppFab phone={whatsappNumber} />
    </main>
  );
}

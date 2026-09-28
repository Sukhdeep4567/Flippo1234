import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Research } from "@/components/sections/Research";
import { FlipStats } from "@/components/sections/FlipStats";
import { SmarterWay } from "@/components/sections/SmarterWay";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DesignedForImpact } from "@/components/sections/DesignedForImpact";
import { Accounts } from "@/components/sections/Accounts";
import { Team } from "@/components/sections/Team";
import { Enquiry } from "@/components/sections/Enquiry";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Research />
      <FlipStats />
      <SmarterWay />
      <Testimonials />
      <WhoWeHelp />
      <HowItWorks />
      <DesignedForImpact />
      <Accounts />
      <Team />
      <Enquiry />
      <FaqSection />
      <FinalCta />
    </>
  );
}

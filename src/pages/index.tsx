import Head from "next/head";
import HeroSection from "components/HeroSection";
import SkillsSection from "components/SkillsSection";
import ProjectsSection from "components/ProjectsSection";
import ContactSection from "components/ContactSection";
import ResumeSection from "components/ResumeSection";
import CustomCursor from "components/CustomCursor";
import ScrollProgress from "components/ScrollProgress";
import ParticlesBackground from "components/ParticlesBackground";
import StatsSection from "components/StatsSection";
import Timeline from "components/Timeline";
import FloatingActionButton from "components/FloatingActionButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amrit Joshi - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Portfolio of Amrit Joshi - Full-stack developer specializing in React, Next.js, Node.js, and AI-powered solutions. Based in India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Amrit Joshi" />
        <meta property="og:title" content="Amrit Joshi - Full-Stack Developer" />
        <meta property="og:description" content="Crafting exceptional digital experiences with cutting-edge technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global Components */}
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />
      <FloatingActionButton />

      <main className="overflow-hidden relative z-10">
        <HeroSection />
        <SkillsSection />
        <StatsSection />
        <ProjectsSection />
        <Timeline />
        <ResumeSection />
        <ContactSection />
      </main>
    </>
  );
}

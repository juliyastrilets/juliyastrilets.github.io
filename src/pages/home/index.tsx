import { Header } from '@/components/header';
import { Section } from '@/shared/section';
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Process } from '@/components/process';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Section id="hero" short>
        <Hero />
      </Section>
      <Section id="skills" gradient short>
        <Skills />
      </Section>
      <Section id="process" short>
        <Process />
      </Section>
      <Section id="projects" short>
        <Projects />
      </Section>
      <Footer id="footer" />
    </>
  );
}

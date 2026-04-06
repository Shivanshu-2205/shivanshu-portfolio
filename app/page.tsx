import Cursor        from "@/components/Cursor";
import ProgressBar   from "@/components/ProgressBar";
import ParticleCanvas from "@/components/ParticleCanvas";
import Nav           from "@/components/Nav";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Projects      from "@/components/Projects";
import Stack         from "@/components/Stack";
import Education     from "@/components/Education";
import Achievements  from "@/components/Achievements";
import Architecture  from "@/components/Architecture";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ProgressBar />
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Education />
        <Achievements />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

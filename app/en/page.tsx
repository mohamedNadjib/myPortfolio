import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { educationEn, experienceEn, projectsEn, profileEn } from "@/lib/data";

export default function EnglishHome() {
  return (
    <>
      <Nav locale="en" />
      <Hero profile={profileEn} locale="en" />

      <section id="experience" className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Experience" />
          <Timeline
            items={experienceEn.map((e) => ({
              title: e.company,
              subtitle: e.role,
              period: e.period,
              description: e.description,
              location: e.location,
              tags: e.stack,
            }))}
          />
        </div>
      </section>

      <section id="projects" className="section-pad px-6 md:px-10 bg-raised/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Projects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsEn.map((p, i) => (
              <ProjectCard
                key={p.name}
                name={p.name}
                description={p.description}
                tags={p.tags}
                image={p.image}
                github={p.github}
                index={i}
                locale="en"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-pad px-6 md:px-10 bg-raised/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Education" />
          <Timeline
            items={educationEn.map((e) => ({
              title: e.school,
              subtitle: e.degree,
              period: e.period,
            }))}
          />
        </div>
      </section>

      <Contact locale="en" />
      <Footer locale="en" />
    </>
  );
}

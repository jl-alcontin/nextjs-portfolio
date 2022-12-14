import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/header";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/About";
import WorkExperience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchProject } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FB2576]/50 hover:scrollbar-thumb-[#FB2576]/80 scrollbar-thumb-rounded-full">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>
      <Header socials={socials} />
      {/* {header} */}

      {/* {hero} */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* {about} */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* {experience} */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* {skills} */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* {projects} */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* {contact me} */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full z-0">
        <div className="flex items-ceter justify-center z-0">
          <Link href="#hero" className="z-50">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
              src="http://www.rirca.es/wp-content/uploads/2016/09/super_saiyan_rose_by_rmehedi-dafyvt9.jpg"
              alt=""
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // export const getStaticProps: GetStaticProps<Props> = async () => {
  // export async function GetServerSideProps() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperience();
  const skills = await fetchSkills();
  const projects = await fetchProject();
  const socials = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
}

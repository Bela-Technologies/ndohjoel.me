import { useRef } from "react";
import ProjectHeader from "../../components/projects/ProjectHeader";
import ProjectsList from "../../components/projects/ProjectsList";
import ProjectsNavigation from "../../components/projects/ProjectsNavigation";

function Projects() {
  const realWorldProjectsRef = useRef(null);

  return (
    <>
      <ProjectsNavigation />
      <div ref={realWorldProjectsRef}>
        <ProjectHeader projectType="Real-world Projects"/>
        <ProjectsList projectType="Real-world"/>
        <ProjectHeader projectType="Personal Projects"/>
        <ProjectsList projectType="Personal"/>
      </div>
    </>
  );
}

export default Projects;

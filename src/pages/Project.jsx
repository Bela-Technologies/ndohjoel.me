import { useParams } from "react-router-dom";
import Projects from "../data/project.json";
import ProjectNavigation from "../../components/project/ProjectNavigation";
import ProjectInfo from "../../components/project/ProjectInfo";
import ProjectBody from "../../components/project/ProjectBody";
import ProjectDemo from "../../components/project/ProjectDemo";

function Project() {
  const { projectName } = useParams();

  if (Projects[projectName]) {
    const ProjectComponent = ProjectBody[Projects[projectName].componentName];
    return (
      <>
        <ProjectNavigation demo={Projects[projectName].demo} />
        <ProjectInfo project={projectName} />
        <ProjectComponent/>
        <ProjectDemo projectName={projectName}/>
      </>
    );
  } else {
    return;
  }
}

export default Project;

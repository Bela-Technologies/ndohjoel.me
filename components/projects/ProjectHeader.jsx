import "../../src/styles/projects/ProjectHeader.scss"

// eslint-disable-next-line react/prop-types
function ProjectHeader({projectType}) {
    let sectionId = projectType === "Personal Projects" ? "personal-projects" : "real-world-projects"
  return (
    <section className="container" id={sectionId}>
    <div className="container-wrapper">
      <div className="projects">
        <div className="projects-header">
          <div className="projects-header-title">
            <div className="projects-header-title-wrapper">
              <h1>
                {projectType}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectHeader
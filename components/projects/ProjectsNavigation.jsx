import { useEffect, useState } from "react";
import "../../src/styles/projects/ProjectNavigation.scss";

// eslint-disable-next-line react/prop-types
function ProjectsNavigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <header
        id="header"
        className={`header ${isSticky ? "stickySubNav" : ""}`}
      >
        <div className="header-border section-border">
          <div className="header-inner">
            <div className="header-display">
              <div className="header-title-nav-wrapper">
                <div className="header-title">
                  <div className="header-title-text">
                    <a
                      href="#real-world-projects"
                      id="site-title"
                      onClick={(event) => handleScrollToSection(event, "real-world-projects")}
                    >
                      Real-world Projects
                    </a>
                    |
                    <a
                      href="#personal-projects"
                      onClick={(event) => handleScrollToSection(event, "personal-projects")}
                    >
                      Personal Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ProjectsNavigation;

import { useEffect, useState } from "react";

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

  return (
    <>
      <header id="header" className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-border">
          <div className="header-inner">
            <div className="header-display-desktop">
              <div className="header-title-nav-wrapper">
                <div className="header-title">
                  <div className="header-title-text">
                    <a href="#real-word-projects" id="site-title">
                      Real-world Projects
                    </a>
                    |<a href="#personal-projects">Personal Projects</a>
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

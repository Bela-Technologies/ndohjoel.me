import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function ProjectNavigation({ demo }) {
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
      behavior: "smooth",
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
                      href="#problem"
                      id="site-title"
                      onClick={(event) =>
                        handleScrollToSection(event, "problem")
                      }
                    >
                      Problem
                    </a>
                    |
                    <a
                      href="#solution"
                      onClick={(event) =>
                        handleScrollToSection(event, "solution")
                      }
                    >
                      Solution
                    </a>
                    |
                    <a
                      href="#tech"
                      onClick={(event) => handleScrollToSection(event, "tech")}
                    >
                      Tech
                    </a>
                    {demo && (
                      <>
                      |
                        <a
                          href="#demo"
                          onClick={(event) =>
                            handleScrollToSection(event, "demo")
                          }
                        >
                          Demo
                        </a>
                      </>
                    )}
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

export default ProjectNavigation;

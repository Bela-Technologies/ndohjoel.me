import React from "react";
import {
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import SideBar from "./SideBar";

function NavBar() {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // Nav bar

    <>
      <header id="header" className="header">
        <div className="header-border">
          <div className="header-inner">
            <div className="header-display-desktop">
              <div className="header-title-nav-wrapper">
                <div className="header-title">
                  <div className="header-title-text">
                    <a href="/" id="site-title">
                      Ndoh Joel
                    </a>
                  </div>
                </div>
                <div className="header-nav">
                  <div className="header-nav-wrapper">
                    <nav className="header-nav-list">
                      <div className="header-nav-item">
                        <a href="/">🏠</a>
                      </div>
                      <div className="header-nav-item">
                        <a href="/projects">⚒️</a>
                      </div>
                      <div className="header-nav-item">
                        <a href="/recognitions">🏅</a>
                      </div>
                      <div className="header-nav-item">
                        <a href="/about-me">👋🏽</a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-display-mobile">
              <div className="header-title-nav-wrapper">
                <div className="header-title">
                  <div className="header-title-text">
                    <a href="/" id="site-title">
                      Ndoh Joel
                    </a>
                  </div>
                </div>
                <div className="header-nav">
                  <div className="header-nav-wrapper">
                    <nav className="header-nav-list">
                      <Button
                        ref={btnRef}
                        colorScheme="teal"
                        key="full"
                        m={4}
                        onClick={onOpen}
                        className="menu-btn"
                      >
                        <span></span>
                        <span></span>
                      </Button>
                      <SideBar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
                    </nav>
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

export default NavBar;

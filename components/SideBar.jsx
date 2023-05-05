import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import "../src/styles/SideBar.scss";

// eslint-disable-next-line react/prop-types
function SideBar({ isOpen, onClose, btnRef }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="close-btn-div">
            <DrawerCloseButton className="close-btn" />
          </div>

          <div className="side-nav-wrapper">
            <nav className="side-nav-list">
              <div className="side-nav-item">
                <a href="/">🏠</a>
              </div>
              <div className="side-nav-item">
                <a href="/projects">⚒️</a>
              </div>
              <div className="side-nav-item">
                <a href="/recognitions">🏅</a>
              </div>
              <div className="side-nav-item">
                <a href="/about-me">👋🏽</a>
              </div>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;

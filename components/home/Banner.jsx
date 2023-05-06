import "../../src/styles/home/Banner.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Socials from "../../src/data/socials.json";

function Banner() {
  return (
    <main className="container">
      <div className="content-wrapper">
        <div className="content">
          <div className="data-fluid-engine">
            <div className="fluid-engine">
              <div className="name-container">
                <div className="block-content">
                  <h1>
                    <span>Ndoh Joel</span>
                    <div className="Textshape-node">
                      <svg
                        height="99"
                        viewBox="0 0 870 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5543 88.0408C6.81947 88.0408 9.48763 83.4715 15.9912 81.4171C52.4183 69.9104 89.066 62.3107 126.369 56.578C256.862 36.5241 387.133 21.6153 518.516 15.9155C624.941 11.2985 731.238 6.11123 837.417 15.3636C841.411 15.7116 871.193 21.5237 853.726 29.1631C847.749 31.7773 831.58 39.4965 833.34 35.0508"
                          stroke="#00B5FF"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
            <div className="sub-text">
              <div className="name-container">
                <div className="block-content">
                  <p className="building-something">building something...</p>
                </div>
              </div>
              <div className="name-container">
                <div className="block-content">
                  <nav className="social-icons">
                    <a href={Socials.twitter} target="_blank" rel="noreferrer">
                      <TwitterIcon />
                    </a>
                    <a href={Socials.linkedIn} target="_blank" rel="noreferrer">
                      <LinkedInIcon />
                    </a>
                    <a href={Socials.dev} target="_blank" rel="noreferrer">
                      <LogoDevIcon />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner;

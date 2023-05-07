import "../../src/styles/home/UserDescription.scss";
import HomeData from "../../src/data/home.json"

function UserDescription() {
  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="content">
          <div className="content-header">
            <div className="content-header-title">
              <div className="content-header-title-wrapper">
                <h1>
                  Hey! 🙋🏽‍♂️
                </h1>
              </div>
            </div>
            <div className="content-header-link">
              <div className="content-header-link-wrapper">
                <a href="/about-me" className="content-header-link-btn">
                  more ...
                </a>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="content-body-wrapper">
                <p>{HomeData.specification}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDescription;

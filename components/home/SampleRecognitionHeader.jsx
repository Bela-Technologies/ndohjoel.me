import "../../src/styles/home/UserDescription.scss";

function SampleRecognitionHeader() {
  return (
    <section className="container">
    <div className="container-wrapper">
      <div className="content">
        <div className="content-header">
          <div className="content-header-title">
            <div className="content-header-title-wrapper">
              <h1>
                Recognition
              </h1>
            </div>
          </div>
          <div className="content-header-link">
            <div className="content-header-link-wrapper">
              <a href="/recognitions" className="content-header-link-btn">
                see more ...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SampleRecognitionHeader
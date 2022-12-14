import CvBackgroundImage from "../assets/img/gallery/cv_bg.jpg";

function FeaturePackage() {
  return (
    <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          style={{backgroundImage: `url(${CvBackgroundImage})`}}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">FEATURED TOURS Packages</p>
                  <p className="pera2">
                    {" "}
                    Make a Difference with Your Online Resume!
                  </p>
                  <a href="#" className="border-btn2 border-btn4">
                    Upload your cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FeaturePackage
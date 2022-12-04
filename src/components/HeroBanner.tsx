import AboutUsBackgroundImage from '../assets/img/hero/about.jpg';

function HeroBanner({text}:{text:string}) {
  return (
    <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            style={{backgroundImage: `url(${AboutUsBackgroundImage})`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>{text}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeroBanner
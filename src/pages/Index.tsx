import MyBackgroundImage from '../assets/img/hero/h1_hero.jpg';
import FeaturePackage from '../components/FeaturePackage';
import ApplyProcess from '../components/ApplyProcess';
import Testimony from '../components/Testimony';
import WhatWeAreDoing from '../components/WhatWeAreDoing';
import LatestBlog from '../components/LatestBlog';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Header from '../components/Header';


function Index() {
  return (
    <>
      {/* Preloader Start */}
      <Preloader />
      {/* Preloader Start */}
      <header>
        {/* Header Start */}
        <Header />
        {/* Header End */}
      </header>
      <main>
        {/* slider Area Start*/}
        <div className="slider-area ">
          {/* Mobile Menu */}
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{backgroundImage: `url(${MyBackgroundImage})`}}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <h1>Find the most exciting startup jobs</h1>
                    </div>
                  </div>
                </div>
                {/* Search Box */}
                <div className="row">
                  <div className="col-xl-8">
                    {/* form */}
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                        />
                      </div>
                      <div className="select-form">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">Location BD</option>
                            <option value="">Location PK</option>
                            <option value="">Location US</option>
                            <option value="">Location UK</option>
                          </select>
                        </div>
                      </div>
                      <div className="search-form">
                        <a href="#">Find job</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
        {/* Our Services Start */}
        <div className="our-services section-pad-t30">
          <div className="container">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>FEATURED TOURS Packages</span>
                  <h2>Browse Top Categories </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-tour" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Design &amp; Creative</a>
                    </h5>
                    <span>(653)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-cms" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Design &amp; Development</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-report" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Sales &amp; Marketing</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-app" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Mobile Application</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-helmet" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Construction</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-high-tech" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Information Technology</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-real-estate" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Real Estate</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-content" />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="job_listing.html">Content Writer</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* More Btn */}
            {/* Section Button */}
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a href="job_listing.html" className="border-btn2">
                    Browse All Sectors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services End */}
        {/* Online CV Area Start */}
        <FeaturePackage />
        {/* Online CV Area End*/}
        {/* Featured_job_start */}
        <section className="featured-job-area feature-padding">
          <div className="container">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>Recent Job</span>
                  <h2>Featured Jobs</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="job_details.html">
                        <img src="assets/img/icon/job-list1.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="job_details.html">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="job_details.html">
                        <img src="assets/img/icon/job-list2.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="job_details.html">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="job_details.html">
                        <img src="assets/img/icon/job-list3.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="job_details.html">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="job_details.html">
                        <img src="assets/img/icon/job-list4.png" alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="job_details.html">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured_job_end */}
        {/* How  Apply Process Start*/}
        <ApplyProcess />
        {/* How  Apply Process End*/}
        {/* Testimonial Start */}
        <Testimony />
        {/* Testimonial End */}
        {/* Support Company Start*/}
        <WhatWeAreDoing />
        {/* Support Company End*/}
        {/* Blog Area Start */}
        <LatestBlog />
        {/* Blog Area End */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Index;

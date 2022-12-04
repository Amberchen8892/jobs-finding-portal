<<<<<<< HEAD



import HeroBanner from '../components/HeroBanner';
import WhatWeAreDoing from '../components/WhatWeAreDoing';
import ApplyProcess from '../components/ApplyProcess';
import FeaturePackage from '../components/FeaturePackage';
import LatestBlog from '../components/LatestBlog';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
function About() {
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
        {/* Hero Area Start*/}
        <HeroBanner text='About Us'/>
        {/* Hero Area End */}
        {/* Support Company Start*/}
        <WhatWeAreDoing />
        {/* Support Company End*/}
        {/* How  Apply Process Start*/}
        <ApplyProcess />
        {/* How  Apply Process End*/}
        {/* Testimonial Start */}
        <Testimony />
        {/* Testimonial End */}
        {/* Online CV Area Start */}
        <FeaturePackage />
        {/* Online CV Area End*/}
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

export default About;
=======
import React from 'react'

function About() {
  return (
    <div>About</div>
  )
}

export default About
>>>>>>> ac43213bd44132f43213cf5e5ce3c532e08b4a64

import React, { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Recommended from './components/Recommended';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    }); 
    sr.reveal(
      `
      nav,
      #home,
      #services,
      #recommend,
      #testimonials,
      footer`,
      {
        opacity: .8,
        interval: 300,
      }
    )
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommended />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;
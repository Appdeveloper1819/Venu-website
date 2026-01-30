import Header from "./Header";
import About from "./pages/About";
import Features from "./pages/Features";
import CTA from "./pages/CTA";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";

const Home = () => {
  return (
    <>
      <Header />
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="hero-content">
                <h1 className="text-[50px] font-bold font-weight-700">
                  You are using free lite version of VenuPilot
                </h1>
                <p className="text-[18px] font-weight-400 leading-[25px]">
                  Please, purchase full version of the template to get all
                  sections, elements and permission to remove footer credits.
                </p>
                <a href="#0" className="main-btn btn-hover no-underline">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="hero-image text-center text-lg-end">
                <img src="assets/images/hero/hero-image.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Features />
      <Products />
      <CTA />
      <Blogs />
    </>
  );
};

export default Home;

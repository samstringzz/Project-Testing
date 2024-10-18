import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <GetInTouch />
      <Footer />
    </>
  );
}

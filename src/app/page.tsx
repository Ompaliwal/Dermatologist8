import Image from "next/image";
import Hero from "./home/page";
import Navbar from "./navbar/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import Testimonials from "./testimonials/page";
import ContactPage from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
 <>
 <Navbar/>
 <Hero/>
 <AboutPage/>
 <ServicesPage/>
 <Testimonials/>
 <ContactPage/>
 <Footer/>
 </>
  );
}

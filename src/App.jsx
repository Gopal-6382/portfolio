import { Hero2 } from "./Component/Hero2";
import { Navbar } from "./Component/Navbar";
import "./Sass/Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "./Component/Skills";
import ProjectSection from "./Component/Project";
import ContactForm from "./Component/Contact";
import CertificateSection from "./Component/Certificate";
import {Footer} from "./Component/Footer";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Skills />
      <ProjectSection />
      <CertificateSection />
      <ContactForm />
      <Footer />
      <Analytics />
    </>
  );
};
export default App;

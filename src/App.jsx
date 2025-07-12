import { Hero2 } from "./Component/Hero2";
import { Navbar } from "./Component/Navbar";
import "./Sass/Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "./Component/Skills";
import ProjectSection from "./Component/Project";
import ContactForm from "./Component/Contact";
import {Footer} from "./Component/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Skills />
      <ProjectSection />
      <ContactForm />
      <Footer/>
    </>
  );
};
export default App;

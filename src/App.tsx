import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AssemblyProject from "./components/Projects/assembly-project";
import DigitalSign from "./components/Projects/digital-sign";
import BranchControl from "./components/Projects/branch-control";



function App() {
const params = new URLSearchParams(window.location.search);
const project = params.get("project");


  if (project === "assembly-project") {
    return (<AssemblyProject />);
  }

  if (project === "digital-sign") {
    return (<DigitalSign />);
  }

  if (project === "branch-control") {
    return (<BranchControl />);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}



export default App;
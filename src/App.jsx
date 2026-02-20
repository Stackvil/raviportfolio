import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { AllProjects } from "./sections/AllProjects";

import { Contact } from "./sections/Contact";
import { Workflow } from "./sections/Workflow";

import { Background3D } from "./components/layout/Background3D";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white selection:bg-primary/30 relative">
      <Background3D />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Workflow />
        <Projects />
        <AllProjects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Info from "./components/Info";
import PersonalData from "./components/PersonalData";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";
function App() {
  return (
    <main className="flex flex-col min-h-[100dvh] justify-center px-6 md:px-8 lg:pl-[70px] py-8 w-full bg-[#0a0a0a] text-white">
      <Header />
      <PersonalData />
      <Info />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;

import Header from "./layout/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="relative h-[5000px]">
        <div className="absolute top-36 left-16 sm:left-44 md:left-60 lg:left-32 xl:left-72 2xl:left-96 -z-10 bg-rose-300 2xl:bg-rose-400 h-72 w-72 rounded-full blur-[120px] 2xl:blur-[150px]" />
        <div className="hidden lg:block absolute top-52 right-32 xl:right-72 2xl:right-96 -z-10 bg-sky-300 2xl:bg-sky-400 h-72 w-72 rounded-full blur-[150px] 2xl:blur-[180px]" />

        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

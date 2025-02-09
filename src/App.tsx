import Header from "./layout/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <>
      <Header />

      <main className="relative mt-32">
        <div className="absolute top-24 left-16 sm:left-44 md:left-60 lg:left-32 xl:left-72 2xl:left-96 -z-10 bg-rose-300 2xl:bg-rose-400 h-72 w-72 rounded-full blur-[150px] 2xl:blur-[180px]" />
        <div className="hidden lg:block absolute top-40 right-32 xl:right-72 2xl:right-96 -z-10 bg-sky-300 2xl:bg-sky-400 h-72 w-72 rounded-full blur-[200px] 2xl:blur-[240px]" />

        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ThemeSwitch />
    </>
  );
}

export default App;

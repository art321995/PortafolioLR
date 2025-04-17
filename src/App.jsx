import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import HeroContent from "./Components/HeroContent";
import Projects from "./Components/Projects";


function App() {


  return (
    <div className="overflow-x-hidden text-gray-900 antialiased selection:bg-blue-500 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>
      <div className="mx-auto">
       <HeroContent />
       <AboutMe />
       <Experience/>
       <Education/>
       <Projects/>
      </div>
    </div>
  )
}

export default App;

import HeroContent from "./Components/HeroContent";


function App() {


  return (
    <div className="overflow-x-hidden text-gray-900 antialiased selection:bg-cyan-500 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
       <HeroContent/>
      </div>
    </div>
  )
}

export default App;

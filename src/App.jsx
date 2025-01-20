import BGblurry from "./assets/bbblurry.svg";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 h-[2000px] overflow-x-clip">
      <img
        src={BGblurry}
        alt="bg-blurry"
        className="absolute animate-slow-pulse pointer-events-none"
      />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

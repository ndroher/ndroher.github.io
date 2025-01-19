import BGblurry from "./assets/bbblurry.svg";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="bg-slate-950 h-[2000px] overflow-x-clip">
      <img
        src={BGblurry}
        alt="bg-blurry"
        className="absolute animate-slow-pulse"
      />
      <Header />
      <About />
    </div>
  );
}

export default App;

import "./App.css";
import ChartJs from "./components/ChartJs";
import Recharts from "./components/Recharts";

function App() {
  return (
    <div className="App">
      {/* ========== React Chart JS ========== */}
      <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-[#1d548d]">
        PIE CHART <br />
        <span className="italic">INFOGRAPHIC</span>
      </h1>
      <div className="mt-10 lg:mt-20 relative">
        <ChartJs className=""></ChartJs>
        <div className="absolute top-0 sm:top-5 md:top-10 lg:top-14 left-0 sm:left-5 md:left-10 lg:left-14 text-right text-gray-500">
          <h3 className="text-xl font-semibold">01</h3>
          <p className="text-xs sm:text-sm font-semibold">TITLE HERE</p>
        </div>
        <div className="absolute top-0 sm:top-5 md:top-10 lg:top-14 right-0 sm:right-5 md:right-10 lg:right-14 text-right text-gray-500">
          <h3 className="text-xl font-semibold">02</h3>
          <h4 className="text-xs sm:text-sm font-semibold">TITLE HERE</h4>
        </div>
        <div className="absolute top-[60%] right-0 sm:right-5 md:right-10 lg:right-14 text-right text-gray-500">
          <h3 className="text-xl font-semibold">03</h3>
          <h4 className="text-xs sm:text-sm font-semibold">TITLE HERE</h4>
        </div>
        <div className="absolute bottom-0 right-[45%] text-right text-gray-500">
          <h3 className="text-xl font-semibold">04</h3>
          <h4 className="text-xs sm:text-sm font-semibold">TITLE HERE</h4>
        </div>
        <div className="absolute bottom-10 sm:bottom-32 md:bottom-40 lg:bottom-64 left-0 text-right text-gray-500">
          <h3 className="text-xl font-semibold">05</h3>
          <h4 className="text-xs sm:text-sm font-semibold">TITLE HERE</h4>
        </div>
      </div>
      <div style={{ stroke: "0px" }}>{/* <Recharts></Recharts> */}</div>
    </div>
  );
}

export default App;

import "./App.css";
import ChartJs from "./components/ChartJs";
import Recharts from "./components/Recharts";

function App() {
  return (
    <div className="App">
      {/* ========== React Chart JS ========== */}
      <ChartJs></ChartJs>
      <div style={{ stroke: "0px", padding: "0px" }}>
        <Recharts></Recharts>
      </div>
    </div>
  );
}

export default App;

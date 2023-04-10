import React from "react";
import BarChart from "./Components/BarChart";
import ScatterChart from "./Components/ScatterChart";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Bar Chat</h1>
      <BarChart />
      <h1 style={{ textAlign: "center" }}>Scatter Plot</h1>
      <ScatterChart />
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({ usd: 0, inr: 0 });
  function changeValue(e) {
    console.log("setData : ");
    setData({
      ...data,
      [e.target.name]: parseInt(e.target.value)
    });
  }
  const setCurrencyConvert = () => {
    document.getElementById("inr").value = data.usd * 80;
    document.getElementById("usd").value = data.inr / 80;
  };
  useEffect(() => {
    console.log(data);
    setCurrencyConvert();
  }, [data]);

  return (
    <div className="App">
      <h2>
        Currency Conversion Using
        <span style={{ color: "purple" }}> Functional Component</span>
      </h2>
      <h1>USD:</h1>
      <span> &#36;</span>
      <input
        id="usd"
        name="usd"
        type="number"
        value={data.usd}
        onChange={(e) => changeValue(e)}
      />
      <h1>INR:</h1>
      <span>&#8377;</span>
      <input
        id="inr"
        name="inr"
        type="number"
        value={data.inr}
        onChange={(e) => changeValue(e)}
      />
    </div>
  );
}

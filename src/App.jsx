import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <>
      <h2>Calculator</h2>
      <div id="calculator">
        <input id="display" value={display} readOnly />
        <div id="keys">
          <button className="operator-btn" onClick={() => appendToDisplay("+")}>
            +
          </button>

          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>

          <button className="operator-btn" onClick={() => appendToDisplay("-")}>
            -
          </button>

          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>

          <button className="operator-btn" onClick={() => appendToDisplay("*")}>
            *
          </button>

          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>

          <button className="operator-btn" onClick={() => appendToDisplay("/")}>
            /
          </button>

          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={() => appendToDisplay("00")}>00</button>
          <button onClick={() => appendToDisplay(".")}>.</button>

          <button className="operator-btn clear-btn" onClick={clearDisplay}>
            {" "}
            AC{" "}
          </button>

          <button className="equal-btn" onClick={calculate}>
            {" "}
            ={" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

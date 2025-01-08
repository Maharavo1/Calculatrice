import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [lastAnswer, setLastAnswer] = useState(""); 

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const sanitizedInput = input.replace(/,/g, ".").replace(/sin|cos|tan|log|sqrt|exp/g, (match) => {
          switch (match) {
            case "sin":
              return "Math.sin";
            case "cos":
              return "Math.cos";
            case "tan":
              return "Math.tan";
            case "log":
              return "Math.log";
            case "sqrt":
              return "Math.sqrt";
            case "exp":
              return "Math.exp";
            default:
              return match;
          }
        });
        const result = eval(sanitizedInput); 
        const formattedResult = result.toString().replace(/\./g, ","); 
        setInput(formattedResult); 
        setLastAnswer(formattedResult); 
      } catch (error) {
        setInput("Erreur");
      }
    } else if (value === "C") {
      setInput(""); 
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); 
    } else if (value === "Ans") {
      setInput(input + lastAnswer); 
    } else {
      setInput(input + value); 
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("sin(")}>sin</button>
        <button onClick={() => handleClick("cos(")}>cos</button>
        <button onClick={() => handleClick("tan(")}>tan</button>
        <button onClick={() => handleClick("log(")}>log</button>
        <button onClick={() => handleClick("sqrt(")}>√</button>
        <button onClick={() => handleClick("exp(")}>exp</button>

        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick(",")}>,</button>
        <button onClick={() => handleClick("Ans")}>Ans</button> 
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")} className="operator">/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")} className="operator">*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")} className="operator">-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")} className="operator">=</button>
        <button onClick={() => handleClick("+")} className="operator">+</button>

        <button onClick={() => handleClick("DEL")} className="delete">DEL</button>
        <button onClick={() => handleClick("C")} className="clear">C</button>
      </div>
    </div>
  );
}

export default App;

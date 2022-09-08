import ReactDOM from "react-dom";

import { Input } from "./components/input/Input";
import { Label } from "./components/label/Label";
import { Header } from "./components/header/Header";
import { useState } from "react";

import "./App.css";
import "./css/component/c-input-container.css";
import "./css/layout/l-main.css";

function App() {
  const [decimalValue, setDecimalValue] = useState(0);
  const [isInvalid, setIsInvalid] = useState(false);

  function convertBinaryToDecimal(binaryValueInString: string): number {
    const invertedBinaryValueInString = binaryValueInString
      .split("")
      .reverse()
      .join("");

    let decimalValueResult = 0;

    for (let i = 0; i < invertedBinaryValueInString.length; i++) {
      decimalValueResult +=
        Number(invertedBinaryValueInString.charAt(i)) * Math.pow(2, i);
    }

    return decimalValueResult;
  }

  function onBinaryInput(e: any) {
    const inputValueInString = e.target.value;
    const isValidBinaryValue = inputValueInString.match(/^[0-1]*$/);

    if (!isValidBinaryValue) {
      setIsInvalid(true);
      setDecimalValue(0);

      return;
    }

    setDecimalValue(convertBinaryToDecimal(inputValueInString));
    setIsInvalid(false);
  }

  return (
    <>
      <Header />
      <main className="l-main">
        <div className="c-input-container">
          <div className="c-input-container__group">
            <Label htmlFor="bin" text="Binary" />
            <Input
              id="bin"
              onInput={onBinaryInput}
              borderColor={isInvalid ? "error" : "default"}
            />
            {isInvalid && (
              <span
                style={{
                  paddingTop: "5px",
                  color: "rgb(255, 18, 35)",
                  fontSize: "18px",
                }}
              >
                Invalid binary value!
              </span>
            )}
          </div>

          <div className="c-input-container__group">
            <Label htmlFor="dec" text="Decimal" />
            <Input
              id="dec"
              value={decimalValue.toString()}
              borderColor="default"
            />
          </div>
        </div>
      </main>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

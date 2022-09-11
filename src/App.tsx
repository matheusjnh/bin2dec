import { createRoot } from "react-dom/client";

import { Input } from "./components/input/Input";
import { Label } from "./components/label/Label";
import { Header } from "./components/header/Header";
import { useState } from "react";

import "./App.css";

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

  function onBinaryInput(e: Event) {
    const inputValueInString = (e.target as HTMLInputElement).value;
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
      <main className="main">
        <div className="input-container">
          <div className="input-container__group">
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

          <div className="input-container__group">
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

const appContainer = document.getElementById("app");
createRoot(appContainer!).render(<App />);

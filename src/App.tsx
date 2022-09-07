import ReactDOM from "react-dom";

import { InputText } from "./components/input/InputText";
import { Label } from "./components/label/Label";
import { Header } from "./components/header/Header";
import { useState } from "react";

import "./AppStyles.css";
import "./css/component/c-input-container.css";
import "./css/layout/l-main.css";

function App() {
  const [decimal, setDecimal] = useState(0);
  const [isInvalid, setIsInvalid] = useState(false);

  function convertBinaryToDecimal(binary: number): number {
    const binaryValueInString = binary.toString();
    const binaryValueLength = binaryValueInString.length;

    let decimalValue = 0;

    for (let i = 0; i < binaryValueLength; i++) {
      const powerExponent = binaryValueLength - i - 1;

      decimalValue +=
        Number(binaryValueInString.charAt(i)) * Math.pow(2, powerExponent);
    }

    return decimalValue;
  }

  function onBinaryInput(e: any) {
    const inputValueInString = e.target.value;
    const isValidBinaryValue = inputValueInString.match(/^[0-1]*$/);

    if (!isValidBinaryValue) {
      setIsInvalid(true);
      setDecimal(0);

      return;
    }

    setDecimal(convertBinaryToDecimal(Number(inputValueInString)));
    setIsInvalid(false);
  }

  return (
    <>
      <Header />
      <main className="l-main">
        <div className="c-input-container">
          <div className="c-input-container__group">
            <Label htmlFor="bin" text="Binary" />
            <InputText id="bin" onInput={onBinaryInput} isInvalid={isInvalid} />
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
            <InputText id="dec" value={decimal.toString()} />
          </div>
        </div>
      </main>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

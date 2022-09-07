import { InputText } from "./components/input/InputText";
import { Label } from "./components/label/Label";
import { Header } from "./components/header/Header";
import { useState } from "react";

import "./AppStyles.css";
import "./css/component/c-input-container.css";
import "./css/layout/l-main.css";

export function App() {
  const [decimal, setDecimal] = useState(0);

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
    setDecimal(convertBinaryToDecimal(Number(e.target.value)));
  }

  return (
    <>
      <Header />
      <main className="l-main">
        <div className="c-input-container">
          <div className="c-input-container__group">
            <Label htmlFor="bin" text="Binary" />
            <InputText id="bin" onInput={onBinaryInput} />
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

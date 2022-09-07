import { InputText } from "./components/input/InputText";
import { Label } from "./components/label/Label";
import { Header } from "./components/header/Header";

import "./AppStyles.css";
import "./css/component/c-input-container.css";
import "./css/layout/l-main.css";

export function App() {
  return (
    <>
      <Header />
      <main className="l-main">
        <div className="c-input-container">
          <div className="c-input-container__group">
            <Label htmlFor="bin" text="Binary" />
            <InputText id="bin" />
          </div>

          <div className="c-input-container__group">
            <Label htmlFor="dec" text="Decimal" />
            <InputText id="dec" />
          </div>
        </div>
      </main>
    </>
  );
}

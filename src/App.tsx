import { InputText } from "./components/input/InputText";

export function App() {
  return (
    <>
      <header>
        <h1>B2D - Binary to Decimal</h1>
      </header>

      <main>
        <InputText text="Binary" />
        <InputText text="Decimal" />
      </main>
    </>
  );
}

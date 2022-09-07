import { InputText } from "./components/input/InputText";

export function App() {
  return (
    <>
      <header>
        <h1>B2D - Binary to Decimal</h1>
      </header>

      <main>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <InputText
            id="bin"
            placeholder="Binary"
            style={{
              flex: 1,
            }}
          />

          <InputText
            id="dec"
            placeholder="Decimal"
            style={{
              flex: 1,
            }}
          />
        </div>
      </main>
    </>
  );
}

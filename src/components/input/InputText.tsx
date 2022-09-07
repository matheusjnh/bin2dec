import "./InputTextStyles.css";

type InputProps = {
  placeholder?: string;
  style?: { [key: string]: string | number };
};

export function InputText({ placeholder, style }: InputProps) {
  return (
    <input
      className="input-text"
      type="text"
      placeholder={placeholder}
      style={style}
    />
  );
}

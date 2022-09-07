import "./InputTextStyles.css";

type InputProps = {
  id: string;
  placeholder?: string;
  style?: { [key: string]: string | number };
};

export function InputText({ id, placeholder, style }: InputProps) {
  return (
    <input
      className="input-text"
      id={id}
      type="text"
      placeholder={placeholder}
      style={style}
    />
  );
}

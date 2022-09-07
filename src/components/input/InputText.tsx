import "./InputTextStyles.css";

type InputProps = {
  id: string;
  placeholder?: string;
  style?: { [key: string]: string | number };
  onInput?: any;
};

export function InputText({ id, placeholder, style, onInput }: InputProps) {
  return (
    <input
      className="c-input-text"
      id={id}
      type="text"
      placeholder={placeholder}
      style={style}
      onInput={onInput}
    />
  );
}

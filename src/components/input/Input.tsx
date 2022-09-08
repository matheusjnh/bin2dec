import "./Input.css";

type InputProps = {
  id: string;
  placeholder?: string;
  value?: string;
  style?: { [key: string]: string | number };
  onInput?: any;
  borderColor: "default" | "error";
};

export function Input({
  id,
  placeholder,
  style,
  value,
  onInput,
  borderColor = "default",
}: InputProps) {
  const className = `c-input c-input--border-${borderColor}`;

  return (
    <input
      className={className}
      id={id}
      type="text"
      placeholder={placeholder}
      style={style}
      value={value}
      onInput={onInput}
    />
  );
}

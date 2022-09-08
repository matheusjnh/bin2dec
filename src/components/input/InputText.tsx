import "./InputTextStyles.css";

type InputProps = {
  id: string;
  placeholder?: string;
  value?: string;
  style?: { [key: string]: string | number };
  onInput?: any;
  borderColor: "default" | "error";
};

export function InputText({
  id,
  placeholder,
  style,
  value,
  onInput,
  borderColor = "default",
}: InputProps) {
  const className = `c-input-text c-input-text--border-${borderColor}`;

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

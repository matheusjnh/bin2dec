import "./InputTextStyles.css";

type InputProps = {
  id: string;
  placeholder?: string;
  value?: string;
  style?: { [key: string]: string | number };
  onInput?: any;
  isInvalid?: boolean;
};

export function InputText({
  id,
  placeholder,
  style,
  value,
  onInput,
  isInvalid = false,
}: InputProps) {
  const cssClassForInvalidInput = isInvalid ? " c-input-text--invalid" : "";
  const className = "c-input-text" + cssClassForInvalidInput;

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

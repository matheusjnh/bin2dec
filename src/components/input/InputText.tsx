type InputProps = {
  text?: string;
};

export function InputText({ text }: InputProps) {
  return <input type="text" value={text} />;
}

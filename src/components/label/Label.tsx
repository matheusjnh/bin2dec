import "./LabelStyles.css";

type LabelProps = {
  text: string;
  htmlFor: string;
};

export function Label({ htmlFor, text }: LabelProps) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

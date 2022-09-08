import "./Label.css";

type LabelProps = {
  text: string;
  htmlFor: string;
};

export function Label({ htmlFor, text }: LabelProps) {
  return (
    <label className="c-label" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

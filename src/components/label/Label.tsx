type LabelProps = {
  text: string;
  htmlFor: string;
};

export function Label({ htmlFor, text }: LabelProps) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h1 className="text-start font-semibold text-xl">{text}</h1>;
}

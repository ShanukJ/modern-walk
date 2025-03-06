interface CategoryTileProps {
  text: string;
  color: string;
}

export function CategoryTile({ text, color }: CategoryTileProps) {
  return (
    <div>
      <h1 className="text-start font-semibold text-xl">{text}</h1>
    </div>
  );
}

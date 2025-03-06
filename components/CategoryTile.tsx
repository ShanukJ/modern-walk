interface CategoryTileProps {
  text: string;
  color: string;
}

export function CategoryTile({ text, color }: CategoryTileProps) {
  return (
    <div
      className="min-h-80 rounded-xl flex items-center justify-center shadow-2xl"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-start font-bold text-3xl text-white">{text}</h1>
    </div>
  );
}

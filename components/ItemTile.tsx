interface ItemTileProps {
  title: string;
  image: string;
  price: number;
  info: string;
  color: string;
}

export function ItemTile({title}: ItemTileProps) {
  return (
    <div>
      <h1 className="text-start font-semibold text-xl">{title}</h1>
    </div>
  );
}

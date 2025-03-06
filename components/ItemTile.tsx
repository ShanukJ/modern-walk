import Image from "next/image";

interface ItemTileProps {
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export function ItemTile({ data }: { data: ItemTileProps }) {
  return (
    <div className="flex flex-col items-center text-center gap-5 rounded-3xl shadow-[0px_18px_25px_24px_rgba(0,_0,_0,_0.1)] bg-white min-h-80">
      {/* Title Section */}
      <div className="pt-5 px-5">
        <h1 className="text-center font-semibold text-lg line-clamp-1">
          {data.title}
        </h1>
      </div>

      {/* Image Section */}
      <Image
        alt={data.title}
        className="object-center"
        height={120}
        src={data.image}
        width={120}
      />

      {/* Price & Description Section (Aligned at Bottom) */}
      <div
        className={`rounded-2xl p-5 w-full shadow-md mt-auto ${
          data.category === "women's clothing" ? "bg-[#FF5E84]" : "bg-[#2BD9AF]"
        }`}
      >
        <span className="text-center block font-semibold text-xl text-[#0E42FD] mb-2">
          Rs {data.price}
        </span>
        <span className="line-clamp-4 font-[450]">{data.description}</span>
      </div>
    </div>
  );
}

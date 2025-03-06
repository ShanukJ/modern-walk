import { CategorySection } from "@/components/CategorySection";
import { ItemTile } from "@/components/ItemTile";
import { SectionTitle } from "@/components/SectionTitle";

export default async function Home() {
  let data = [];

  try {
    const res = await fetch(`${process.env.BASE_URL_API}/flash-sale`);

    if (!res.ok) throw new Error("Failed to fetch data");
    data = await res.json();
  } catch (error: any) {
    console.log("Error fetching data: " + (error.message || error));
  }

  return (
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div className="pb-8">
        <SectionTitle text="Flash Sale" />
      </div>

      {/* Responsive Grid Layout - Flash Sale*/}
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-8">
        {data.map((item: any) => (
          <ItemTile key={item.id} data={item} />
        ))}
      </div>

      {/* Section Title */}
      <div className="pt-20 pb-5">
        <SectionTitle text="Categories" />
      </div>

      {/* Responsive Grid Layout - Categories*/}
      <CategorySection />
    </div>
  );
}

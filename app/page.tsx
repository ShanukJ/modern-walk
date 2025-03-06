import { CategorySection } from "@/components/CategorySection";
import { FlashSale } from "@/components/FlashSale";
import { SectionTitle } from "@/components/SectionTitle";

export default async function Home() {

  return (
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div className="pb-8">
        <SectionTitle text="Flash Sale" />
      </div>

      {/* Responsive Grid Layout - Flash Sale*/}
      <FlashSale />

      {/* Section Title */}
      <div className="pt-20 pb-5">
        <SectionTitle text="Categories" />
      </div>

      {/* Responsive Grid Layout - Categories*/}
      <CategorySection />
    </div>
  );
}

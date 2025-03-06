"use client";

import { useRouter } from "next/navigation";

import { CategoryTile } from "./CategoryTile";

export const CategorySection = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 pb-10 gap-8">
      <button onClick={() => router.push("/mens-clothing")}>
        <CategoryTile color="#2BD9AF" text="Men's Clothing" />
      </button>
      <button onClick={() => router.push("/womens-clothing")}>
        <CategoryTile color="#FF5E84" text="Women's Clothing" />
      </button>
    </div>
  );
};

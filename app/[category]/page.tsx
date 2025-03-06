"use client";
import { use } from "react";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = use(params);

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
};

export default CategoryPage;

"use client";
import { use, useEffect, useState } from "react";

import { ItemTile } from "@/components/ItemTile";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = use(params);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data based on the category parameter
  const fetchCategoryData = async () => {
    try {
      const res = await fetch(`${process.env.BASE_URL_API}/${category}`);

      setData(await res.json());
      setLoading(false);
    } catch (error: any) {
      alert("Error fetching data: " + (error.message || error));
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center content-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-8 pb-10">
      {data.map((item: any) => (
        <ItemTile key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CategoryPage;

"use client";

import { useEffect, useState } from "react";
import { Skeleton, Card } from "@heroui/react";

import { ItemTile } from "./ItemTile";

export const FlashSale = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchSaleData = async () => {
    try {
      const res = await fetch(`${process.env.BASE_URL_API}/flash-sale`);

      setData(await res.json());
      setLoading(false);
      setIsLoaded(true);
    } catch (error: any) {
      alert("Error fetching data: " + (error.message || error));
    }
  };

  useEffect(() => {
    fetchSaleData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-8 min-h-80">
        {/* Skeleton for each item in the flash sale */}
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="w-full space-y-5 p-4 min-h-80"
            radius="lg"
          >
            {/* Skeleton for title */}
            <Skeleton className="rounded-lg" isLoaded={isLoaded}>
              <div className="h-5 w-3/5 rounded-lg bg-secondary" />
            </Skeleton>

            {/* Skeleton for image */}
            <Skeleton className="rounded-lg" isLoaded={isLoaded}>
              <div className="h-60 w-24 rounded-lg bg-secondary" />
            </Skeleton>

            {/* Skeleton for price & description */}
            <div className="space-y-3">
              {/* Skeleton for price */}
              <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                <div className="h-4 w-full rounded-lg bg-secondary-200" />
              </Skeleton>
              {/* Skeleton for description */}
              <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                <div className="h-3 w-full rounded-lg bg-secondary-300" />
              </Skeleton>
              <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                <div className="h-3 w-full rounded-lg bg-secondary-300" />
              </Skeleton>
              <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                <div className="h-3 w-full rounded-lg bg-secondary-300" />
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Responsive Grid Layout - Flash Sale*/}
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-8">
        {data.map((item: any) => (
          <ItemTile key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

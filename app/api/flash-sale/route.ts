const BASE_URL = process.env.BASE_URL;

export async function GET() {
  try {
    const mensClothingResponse = await fetch(
      `${BASE_URL}/products/category/men's clothing?limit=2`,
    );
    const womensClothingResponse = await fetch(
      `${BASE_URL}/products/category/women's clothing?limit=2`,
    );

    if (!mensClothingResponse.ok || !womensClothingResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const mensClothing = await mensClothingResponse.json();
    const womensClothing = await womensClothingResponse.json();

    // Merge arrays
    const mergedArray: any[] = [];
    const maxLength = Math.max(mensClothing.length, womensClothing.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < mensClothing.length) mergedArray.push(mensClothing[i]);
      if (i < womensClothing.length) mergedArray.push(womensClothing[i]);
    }

    return Response.json(mergedArray, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { error: "Error fetching data", message: error.message || error },
      { status: 500 },
    );
  }
}

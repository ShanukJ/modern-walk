const BASE_URL = process.env.BASE_URL;

export async function GET() {
  try {
    const womensClothingResponse = await fetch(
      `${BASE_URL}/products/category/women's clothing`,
    );

    if (!womensClothingResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const womensClothing = await womensClothingResponse.json();

    return Response.json(womensClothing, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { error: "Error fetching data", message: error.message || error },
      { status: 500 },
    );
  }
}

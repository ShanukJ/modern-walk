const BASE_URL = process.env.BASE_URL;

export async function GET() {
  try {
    const mensClothingResponse = await fetch(
      `${BASE_URL}/products/category/men's clothing`,
    );

    if (!mensClothingResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const mensClothing = await mensClothingResponse.json();

    return Response.json(mensClothing, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { error: "Error fetching data", message: error.message || error },
      { status: 500 },
    );
  }
}

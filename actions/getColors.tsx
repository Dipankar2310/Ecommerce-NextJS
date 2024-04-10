import getProducts from "./getProducts";

// getColors fetches all the colors that products can have eg. Red, Blue, Purple
// TODO: Colors for different products can be stored in db and then fetched through an API.
const getColors = async (): Promise<string[]> => {
  let products = await getProducts({});
  const colors = new Set(
    Object.values(products).map((product) => product.color)
  );
  return Array.from(colors);
};

export default getColors;

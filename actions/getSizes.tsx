import getProducts from "./getProducts";

// getSizes fetches all the Sizes that products can have eg. Red, Blue, Purple
// TODO: Sizes for different products can be stored in db and then fetched through an API.
const getSizes = async (): Promise<string[]> => {
  let products = await getProducts({});
  const sizes: string[] = [];
  for (let prod in products) {
    if (!sizes.includes(products[prod].size)) sizes.push(products[prod].size);
  }
  return sizes;
};

export default getSizes;

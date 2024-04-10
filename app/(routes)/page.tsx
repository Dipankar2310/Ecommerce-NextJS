import dynamic from "next/dynamic";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/getBillboards";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/productList";
export const revalidate = 0;
const Page = async () => {
  const products = await getProducts({ isFeatured: true });
  let billboard = await getBillboard("0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}></Billboard>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}></ProductList>
        </div>
      </div>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });

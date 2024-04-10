import { BillBoard } from "@/types";
import getCategories from "./getCategories";

// getBillboard fetches billboard for requested category id.
// TODO: BillBoards for different categories can be stored in db and then fetched through an API.
const getBillboard = async (categoryId: string): Promise<BillBoard> => {
  const categories = await getCategories();
  const billboardCat = categories.filter((item) => item.id === categoryId);
  if (billboardCat.length === 0) {
    return {
      id: "1010",
      label: "Discover Your Perfect Style Here!",
      imageUrl:
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  }

  return billboardCat[0].billboard;
};

export default getBillboard;

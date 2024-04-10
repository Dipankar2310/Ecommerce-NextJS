import Container from "./ui/container";
import Link from "next/link";
import MainNav from "@/components/mainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "@/components/navbarActions";
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl"> Urban</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions></NavbarActions>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

import dynamic from "next/dynamic";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10"></div>
      <p className="text-center text-xs text-black">
        &copy; 2024 URBAN E-RETAIL LIMITED. All Rights Reserved.
      </p>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

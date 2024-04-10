import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import StoreProvider from "../providers/storeProvider";
import ModalProvider from "@/providers/modalProvider";
import PreviewModal from "@/components/previewModal";
import ToastProvider from "@/providers/toastProvider";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      
      <body className={font.className}>
        <StoreProvider>
          <ModalProvider>
            <PreviewModal/>
          </ModalProvider>
          <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </StoreProvider>
      </body>
      
     
    </html>
  );
}

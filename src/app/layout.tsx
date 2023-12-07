import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import ProviderToolkit from "@/feature/ProviderToolkit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping",
  description: " you find every product with us ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderToolkit>
      <html lang="en">
        <body className={`${inter.className} bg-gray-300`}>
          <nav className=" bg-slate-700 text-white font-bold">
            <Nav />
          </nav>
          <div>{children}</div>
        </body>
      </html>
    </ProviderToolkit>
  );
}

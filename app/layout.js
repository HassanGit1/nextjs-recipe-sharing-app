import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/mainHeader/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}

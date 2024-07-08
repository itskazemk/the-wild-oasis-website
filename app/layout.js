import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/globals.css";
import { Vazirmatn, Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const font = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  // title: "The Wild Oasis",
  title: { template: "%s | The Wild Oasis", default: "Welcome The Wild Oasis" },
};

// * making main element take all screen except footer: by using flex in body and then flex-1 in div we give all remaining space to flex-1

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer className="w-full bg-blue-700">copyright 2024.</footer>
      </body>
    </html>
  );
}

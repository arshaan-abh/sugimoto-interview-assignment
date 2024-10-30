import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MaterialSymbolsShoppingCart from "~icons/material-symbols/shopping-cart.jsx";
import MaterialSymbolsPerson from "~icons/material-symbols/person.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Homely. An Interview Assignment",
  description:
    "A Next.js product page built for an e-commerce site, showcasing product details, images, and reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-geist-sans overflow-x-hidden`}
      >
        <div className="w-full aspect-square absolute bg-white rounded-full translate-x-1/4 -translate-y-1/4 -z-10" />

        <div className="px-24 flex flex-col">
          <header className="py-12 flex items-center gap-14 mb-12">
            <button>
              <h1 className="uppercase font-bold text-primary text-xl">
                Homely.
              </h1>
            </button>

            <div className="ml-auto flex gap-14 [&_*:has(svg)]:text-primary">
              <button>Home</button>

              <button>About</button>

              <button>Shop</button>

              <button>Contact</button>

              <button>
                <MaterialSymbolsShoppingCart fontSize={20} />
              </button>

              <button className="border border-primary rounded-full p-1">
                <MaterialSymbolsPerson fontSize={20} />
              </button>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}

/* TODO list:
   Add a readme file
   Product detail component
   Product option selector component
   Product reviews component
   Extras:
      Add a "sold out" or "out of stock" state for some variants that don't exist
      Connect the thumbnails to the main carousel
*/

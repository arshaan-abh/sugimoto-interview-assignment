import type { Metadata } from "next";
import localFont from "next/font/local";
import NavigationLinks from "@/components/navigation-links";
import MaterialSymbolsMenuOpenRounded from "~icons/material-symbols/menu-open-rounded.jsx";
import { Toaster } from "@/components/ui/sonner";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import "./globals.css";

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
        <div className="w-full aspect-square fixed bg-white rounded-full translate-x-1/4 -translate-y-1/4 -z-10" />

        <div className="flex flex-col px-6 sm:px-12 lg:px-24 2xl:px-48">
          <header className="flex items-center gap-14 mb-6 py-6 sm:mb-12 sm:py-12">
            <button>
              <h1 className="uppercase font-bold text-primary text-xl">
                Homely.
              </h1>
            </button>

            <NavigationLinks className="hidden md:flex ml-auto gap-14" />

            <Sheet>
              <SheetTrigger asChild>
                <button className="ml-auto border border-primary rounded-full p-1 text-primary md:hidden">
                  <MaterialSymbolsMenuOpenRounded fontSize={20} />
                </button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>

                  <SheetDescription>Where do you wanna go?</SheetDescription>
                </SheetHeader>

                <NavigationLinks className="flex flex-col gap-4 mt-4 items-center sm:items-start" />
              </SheetContent>
            </Sheet>
          </header>

          {children}
        </div>

        <footer className="h-32" />

        <Toaster />
      </body>
    </html>
  );
}

/* TODO list:
   Add a readme file - Almost done
   Product detail component - Done
   Product option selector component - Done
   Product reviews component - Done
   Extras:
      Connect the thumbnails to the main carousel
      Add a "sold out" or "out of stock" state for some variants that don't exist
      Reset form after successful submission
*/

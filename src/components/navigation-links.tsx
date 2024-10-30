import MaterialSymbolsShoppingCart from "~icons/material-symbols/shopping-cart.jsx";
import MaterialSymbolsPerson from "~icons/material-symbols/person.jsx";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface NavigationLinksProps {
  className?: string;
}

const NavigationLinks: FC<NavigationLinksProps> = ({ className }) => {
  return (
    <div className={cn("[&_*:has(svg)]:text-primary", className)}>
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
  );
};

export default NavigationLinks;

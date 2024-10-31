"use client";

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CarouselContextType {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const defaultCarouselContext: CarouselContextType = {
  activeIndex: 0,
  setActiveIndex: () => null,
};

export const CarouselContext = createContext<CarouselContextType>(
  defaultCarouselContext
);

interface CarouselProviderProps {
  children: ReactNode;
}

const CarouselProvider: FC<CarouselProviderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(
    defaultCarouselContext.activeIndex
  );

  return (
    <CarouselContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;

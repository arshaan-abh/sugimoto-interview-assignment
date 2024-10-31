import { FC, useCallback, useMemo, useState } from "react";
import { Rating as RatingType } from "@/interfaces/review";
import { cn } from "@/lib/utils";
import MaterialSymbolsKidStar from "~icons/material-symbols/kid-star.jsx";
import MaterialSymbolsKidStarOutline from "~icons/material-symbols/kid-star-outline.jsx";

interface RatingProps {
  rating: RatingType;
  onRate: (rating: RatingType) => void;
  maxRating?: number;
  ratingsLength?: number;
  className?: string;
  oneTimeUse?: boolean;
}

const Rating: FC<RatingProps> = ({
  rating: initialRating,
  maxRating = 5,
  onRate,
  ratingsLength,
  className,
  oneTimeUse,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [rated, setRated] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleMouseEnter = useCallback(
    (rating: RatingType) => {
      if (!disabled) setRating(rating);
    },
    [disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!disabled) setRating(initialRating);
  }, [disabled, initialRating]);

  const handleClick = useCallback(
    (rating: RatingType) => {
      if (!disabled) {
        setRating(rating);
        onRate(rating);
        setRated(true);
        if (oneTimeUse) setDisabled(true);
      }
    },
    [disabled, onRate, oneTimeUse]
  );

  const roundedRating = useMemo(() => Math.round(rating), [rating]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="flex items-center text-yellow-500"
        onMouseLeave={handleMouseLeave}
      >
        {[...Array(roundedRating)].map((_, index) => (
          <button
            key={"filled-" + index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onClick={() => handleClick(index + 1)}
            disabled={disabled}
            type="button"
          >
            <MaterialSymbolsKidStar />
          </button>
        ))}

        {[...Array(maxRating - roundedRating)].map((_, index) => (
          <button
            key={"empty-" + index}
            onMouseEnter={() => handleMouseEnter(index + roundedRating + 1)}
            onClick={() => handleClick(index + roundedRating + 1)}
            disabled={disabled}
            type="button"
          >
            <MaterialSymbolsKidStarOutline />
          </button>
        ))}
      </div>

      {ratingsLength && (
        <div className="font-medium text-lg opacity-75">
          ({rated ? ratingsLength + 1 : ratingsLength})
        </div>
      )}
    </div>
  );
};

export default Rating;

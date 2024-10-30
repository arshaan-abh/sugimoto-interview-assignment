import { FC, useCallback, useMemo, useState } from "react";
import { Rating as RatingType } from "@/interfaces/review";
import MaterialSymbolsKidStar from "~icons/material-symbols/kid-star.jsx";
import MaterialSymbolsKidStarOutline from "~icons/material-symbols/kid-star-outline.jsx";

interface RatingProps {
  rating: RatingType;
  onRate: (rating: RatingType) => void;
  maxRating?: number;
  ratingsLength?: number;
}

const Rating: FC<RatingProps> = ({
  rating: initialRating,
  maxRating = 5,
  onRate,
  ratingsLength,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [rated, setRated] = useState(false);

  const handleMouseEnter = useCallback(
    (rating: RatingType) => {
      if (!rated) setRating(rating);
    },
    [rated]
  );

  const handleMouseLeave = useCallback(() => {
    if (!rated) setRating(initialRating);
  }, [initialRating, rated]);

  const handleClick = useCallback(
    (rating: RatingType) => {
      if (!rated) {
        setRating(rating);
        onRate(rating);
        setRated(true);
      }
    },
    [onRate, rated]
  );

  const roundedRating = useMemo(() => Math.round(rating), [rating]);

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center text-yellow-500"
        onMouseLeave={handleMouseLeave}
      >
        {[...Array(roundedRating)].map((_, index) => (
          <button
            key={"filled-" + index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onClick={() => handleClick(index + 1)}
            disabled={rated}
          >
            <MaterialSymbolsKidStar />
          </button>
        ))}

        {[...Array(maxRating - roundedRating)].map((_, index) => (
          <button
            key={"empty-" + index}
            onMouseEnter={() => handleMouseEnter(index + roundedRating + 1)}
            onClick={() => handleClick(index + roundedRating + 1)}
            disabled={rated}
          >
            <MaterialSymbolsKidStarOutline />
          </button>
        ))}
      </div>

      {ratingsLength && (
        <div>({rated ? ratingsLength + 1 : ratingsLength})</div>
      )}
    </div>
  );
};

export default Rating;

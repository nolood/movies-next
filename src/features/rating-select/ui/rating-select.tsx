import { StarIcon } from "lucide-react";
import { useCallback, useState } from "react";

const RatingSelect = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [rating, setRating] = useState<number>(-1);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    setRating(index);
  }, []);

  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <StarIcon
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              onClick={() => handleClick(index)}
              fill={
                activeIndex >= index && rating <= 0
                  ? "#f5c211"
                  : index <= rating
                    ? "#f5c211"
                    : ""
              }
              className={"text-amber-300"}
            />
          </div>
        ))}
    </div>
  );
};

export default RatingSelect;

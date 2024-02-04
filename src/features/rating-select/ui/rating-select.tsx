import { StarIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendRating } from "~/features/rating-select/lib";
import { type IMovie } from "~/entities/movie/model/types";

// TODO: Отображение рейтинга если пользователь оценил фильм (Это не было бы проблемой, если бы фильмы хранились в нашей базе данных, а при работе со сторонним API это задачка на подумать)

const RatingSelect = ({
  item,
  staticRating,
}: {
  item?: IMovie;
  staticRating?: number | null;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [rating, setRating] = useState<number>(staticRating ?? -1);

  const mutation = useMutation({
    mutationFn: sendRating,
  });

  const handleClick = useCallback(
    (index: number) => {
      if (staticRating === undefined) {
        setActiveIndex(index);
        setRating(index);
        if (item) mutation.mutate({ movie: item, rating: index + 1 });
      }
    },
    [mutation, item, staticRating],
  );

  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <StarIcon
              onMouseEnter={() =>
                // Можно найти более элегантное решение
                staticRating === undefined && setActiveIndex(index)
              }
              onMouseLeave={() =>
                staticRating === undefined && setActiveIndex(-1)
              }
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

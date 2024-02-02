import { data } from "~/shared/lib";
import { MovieCard } from "~/entities/movie/ui";
import { RatingSelect } from "~/features/rating-select/ui";
import { ViewMark } from "~/features/view-mark/ui";

const MoviesList = () => {
  return (
    <ul className="grid grid-cols-4 gap-[20px]">
      {data.map((item) => (
        <li key={item.imdbID}>
          <MovieCard
            item={item}
            footer={
              <>
                <RatingSelect />
                <ViewMark />
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

import { type IFullMovie } from "~/entities/movie/model/types";
import Image from "next/image";
import { RatingSelect } from "~/features/rating-select/ui";
import { ViewMark } from "~/features/view-mark/ui";

const MovieInfo = ({ data }: { data: IFullMovie | null }) => {
  if (!data) return <h1>Sorry, we dont have that movie in our library</h1>;

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[50px]">
        <Image
          src={
            data.Poster !== "N/A" && data.Poster
              ? data.Poster
              : "/no-poster.png"
          }
          alt={"Movie without poster"}
          width={200}
          height={350}
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl">{data.Title}</h1>
          <div className="flex gap-[50px]">
            <ViewMark />
            <RatingSelect item={data} />
          </div>
        </div>
      </div>
      <p>IMDB Rating: {data.imdbRating}</p>
      <p>Country: {data.Country}</p>
    </div>
  );
};

export default MovieInfo;

import { api } from "~/shared/api/api";
import { type IMovie } from "~/entities/movie/model/types";

export const setViewedMark = async ({
  movie,
  value,
}: {
  movie: IMovie;
  value: boolean;
}) => {
  try {
    await api.post("/api/viewed", {
      movie: { imdbId: movie.imdbID, poster: movie.Poster, title: movie.Title },
      value,
    });
  } catch (e) {
    console.log(e);
  }
};

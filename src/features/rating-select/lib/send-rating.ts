import { api } from "~/shared/api/api";
import { type IMovie } from "~/entities/movie/model/types";

export const sendRating = async ({
  movie,
  rating,
}: {
  movie: IMovie;
  rating: number;
}) => {
  try {
    await api.post("/api/rating", {
      movie: { imdbId: movie.imdbID, poster: movie.Poster, title: movie.Title },
      rating,
    });
  } catch (e) {
    console.error(e);
  }
};

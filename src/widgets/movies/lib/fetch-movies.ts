import { api } from "~/shared/api/api";
import type { IMovie, IViewedMovie } from "~/entities/movie/model/types";

export type MoviesResponse = {
  nextPage: number | null;
  data: IMovie[];
};

export const fetchMovies = async (page: number, search: string) => {
  try {
    const res = await api.get<MoviesResponse>(
      `/api/movies?page=${page}&search=${search}`,
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export type ViewedMoviesResponse = {
  data: IViewedMovie[];
  nextPage: number | null;
};

export const fetchViewedMovies = async (page: number) => {
  try {
    const res = await api.get<ViewedMoviesResponse>(
      "/api/viewed-movies?page=" + page,
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

import { api } from "~/shared/api/api";

export const sendRating = async ({
  imdbId,
  rating,
}: {
  imdbId: string;
  rating: number;
}) => {
  try {
    await api.post("/rating", { imdbId, rating });
  } catch (e) {
    console.error(e);
  }
};

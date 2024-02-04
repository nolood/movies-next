import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";
import { movie } from "~/server/db/schema";
import { eq } from "drizzle-orm";

type RequestData = {
  movie: {
    imdbId: string;
    poster: string;
    title: string;
  };
  rating: number;
};

type ResponseData = void;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // TODO: Возможно при выставлении оценки стоило бы сразу сделать фильм просмотренным
  if (req.method === "POST") {
    const body: RequestData = req.body;

    if (!body.movie.imdbId || !body.rating) res.status(400);

    const isMovie = await db
      .select()
      .from(movie)
      .where(eq(movie.imdbId, String(body.movie.imdbId)));

    if (isMovie.length) {
      await db
        .update(movie)
        .set({ rating: Number(body.rating) })
        .where(eq(movie.imdbId, String(body.movie.imdbId)));
    } else {
      await db
        .insert(movie)
        .values({ ...body.movie, rating: Number(body.rating) });
    }

    res.status(200);
  }
}

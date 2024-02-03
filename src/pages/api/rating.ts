import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";
import { movie } from "~/server/db/schema";
import { eq } from "drizzle-orm";

type ResponseData = any;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { imdbId, rating } = req.body;

  if (!imdbId || !rating) res.status(400);

  const isMovie = await db
    .select()
    .from(movie)
    .where(eq(movie.imdbId, String(imdbId)));

  if (isMovie) {
    await db
      .update(movie)
      .set({ rating: Number(rating) })
      .where(eq(movie.imdbId, String(imdbId)));
  } else {
    await db
      .insert(movie)
      .values({ imdbId: String(imdbId), rating: Number(rating) });
  }

  res.status(200);
}

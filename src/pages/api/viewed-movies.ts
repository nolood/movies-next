import type { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "~/shared/api/api";
import { type IMovie, type IViewedMovie } from "~/entities/movie/model/types";
import { db } from "~/server/db";
import { movie } from "~/server/db/schema";
import { eq } from "drizzle-orm";

type ResponseData = {
  data: IViewedMovie[];
  nextPage: number | null;
};

// interface Response {
//   Search: IMovie[];
//   totalResults: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const page = parseInt(req.query?.page as string) || 1;

  const movies = await db.select().from(movie).where(eq(movie.isViewed, true));

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;

  // TODO: Явно не best practice
  const data = movies.slice(startIndex, endIndex) as unknown as IViewedMovie[];
  const nextPage = endIndex < movies.length ? page + 1 : null;

  res.status(200).json({ data, nextPage });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "~/shared/api/api";
import { type IMovie } from "~/entities/movie/model/types";

type ResponseData = {
  nextPage: number | null;
  data: IMovie[];
};

interface Response {
  Search: IMovie[];
  totalResults: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const page = parseInt(req.query?.page as string) || 1;
  const search = String(req.query?.search);

  if (search) {
    const data = await serverApi.get<Response>(`/?s=${search}&page=${page}`);

    const totalResults = Number(data.data.totalResults);
    const totalPages = Math.ceil(totalResults / 10);

    const response: ResponseData = {
      data: data.data.Search,
      nextPage: page !== totalPages ? page + 1 : null,
    };

    res.status(200).json(response);
  }
}

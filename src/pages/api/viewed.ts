import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = any;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200);
}

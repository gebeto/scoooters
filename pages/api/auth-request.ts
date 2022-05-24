import type { NextApiRequest, NextApiResponse } from "next";

import { requestSms } from "../../services/ewings/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const data = await requestSms(req.query.phone as string);
    res.status(200).json(data);
  }
  res.status(200).json({ ok: true });
}

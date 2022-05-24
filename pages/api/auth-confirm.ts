import type { NextApiRequest, NextApiResponse } from "next";

import { confirmSms } from "../../services/ewings/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const data = await confirmSms(
      req.query.phoneNumber as string,
      req.query.code as string
    );
    res.status(200).json(data);
  }
  res.status(200).json({ error: true });
}

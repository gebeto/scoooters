import type { NextApiRequest, NextApiResponse } from "next";
import { LVIV_CENTER } from "../../entitites/Scooter";
import { Scooter, ScooterService, ScooterType } from "../../entitites/Scooter";

type Data = Scooter[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: "test",
      type: ScooterType.scooter,
      service: ScooterService.ewings,
      battery: 70,
      title: "Hello",
      location: {
        lat: LVIV_CENTER[0],
        lon: LVIV_CENTER[1],
      },
    },
  ]);
}

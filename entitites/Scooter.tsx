export enum ScooterService {
  ewings = "ewings",
  kiwi = "kiwi",
  bolt = "bolt",
}

export enum ScooterType {
  scooter = "scooter",
}

export type Scooter = {
  service: ScooterService;
  type: ScooterType;
  id: string | number;
  title: string;
  battery: number;
  location: {
    lat: number;
    lon: number;
  };
};

export const LVIV_CENTER: [number, number] = [
  49.8360948918759, 24.025636129081246,
];

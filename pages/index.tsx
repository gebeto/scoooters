import React from "react";

import { Map, Marker } from "pigeon-maps";

import { ScootersMap } from "../components/ScootersMap";
import { ScooterDescription } from "../components/ScooterDescription";
import { Scooter, ScooterService, ScooterType } from "../entitites/Scooter";

export const LVIV_CENTER: L.LatLngTuple = [
  49.8360948918759, 24.025636129081246,
];

export async function fetchScooters() {
  const response = await fetch("/scooters.json");
  try {
    return (await response.json()) as Scooter[];
  } catch (e) {
    console.error(e);
  }
  return [];
}

// export const App = () => {
//   const [scooters, setScooters] = React.useState<Scooter[]>([]);
//   const [scooter, setScooter] = React.useState<Scooter>();

//   React.useEffect(() => {
//     fetchScooters().then(setScooters);
//   }, []);

//   return (
//     <React.Fragment>
//       <ScooterDescription
//         open={!!scooter}
//         scooter={scooter}
//         handleClose={() => setScooter(undefined)}
//       />
//       <ScootersMap
//         center={LVIV_CENTER}
//         scooters={scooters}
//         onScooterSelect={setScooter}
//       />
//     </React.Fragment>
//   );
// };

export default function App() {
  const [scooters, setScooters] = React.useState<Scooter[]>([
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
  const [scooter, setScooter] = React.useState<Scooter>();

  // React.useEffect(() => {
  //   fetchScooters().then(setScooters);
  // }, []);

  return (
    <>
      <ScooterDescription
        open={!!scooter}
        scooter={scooter}
        handleClose={() => setScooter(undefined)}
      />
      <ScootersMap
        center={LVIV_CENTER}
        scooters={scooters}
        onScooterSelect={setScooter}
      />
    </>
  );
}

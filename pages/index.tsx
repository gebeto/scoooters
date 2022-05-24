import React from "react";

import { Map, Marker } from "pigeon-maps";

import { ScootersMap } from "../components/ScootersMap";
import { ScooterDescription } from "../components/ScooterDescription";
import { LVIV_CENTER, Scooter } from "../entitites/Scooter";

export async function fetchScooters() {
  const response = await fetch("/api/scooters");
  try {
    const scooters = await response.json();
    return scooters as Scooter[];
  } catch (e) {
    console.error(e);
  }
  return [];
}

export default function App() {
  const [scooters, setScooters] = React.useState<Scooter[]>([]);
  const [scooter, setScooter] = React.useState<Scooter>();

  React.useEffect(() => {
    fetchScooters().then(setScooters);
  }, []);

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

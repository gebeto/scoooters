import React from "react";
import { Map, Marker, Point, ZoomControl } from "pigeon-maps";

import { Scooter } from "../../entitites/Scooter";
import { ScooterMarker } from "../ScooterMarker";

export type ScootersMapProps = {
  scooters: Scooter[];
  center: Point;
  onScooterSelect: (scooter: Scooter) => void;
};

export const ScootersMap: React.FC<ScootersMapProps> = ({
  scooters,
  center,
  onScooterSelect,
}) => {
  const [location, setLocation] = React.useState<Point>();

  return (
    <Map defaultCenter={center} defaultZoom={13} maxZoom={18} minZoom={13}>
      {location && <Marker /* icon={locationMarker} */ anchor={location} />}
      {scooters.map((scooter) => (
        <Marker
          key={scooter.id}
          anchor={[scooter.location.lat, scooter.location.lon]}
          payload={scooter}
          onClick={(e) => {
            onScooterSelect(e.payload);
          }}
        />
      ))}
      <ZoomControl />
    </Map>
  );

  // return (
  //   <MapContainer
  //     //   whenCreated={(map) => {
  //     //     map.on("locationfound", (e) => {
  //     //       setLocation(e.latlng);
  //     //     });
  //     //     map.locate({ setView: true, maxZoom: 16 });
  //     //   }}
  //     className="map-container"
  //     center={center}
  //     zoom={13}
  //     scrollWheelZoom={false}
  //     maxZoom={18}
  //     minZoom={13}
  //   >
  //     <TileLayer
  //       attribution="&copy; Scoooters"
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //     />
  //     {location && <Marker icon={locationMarker} position={location} />}
  //     {scooters.map((scooter, index: number) => (
  //       <ScooterMarker
  //         key={index}
  //         scooter={scooter}
  //         onSelect={onScooterSelect}
  //       />
  //     ))}
  //   </MapContainer>
  // );
};

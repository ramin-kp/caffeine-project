"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const center = [35.72021225108499, 51.42222691580869];
  const position = [35.72021225108499, 51.42222691580869];

  return (
    <>
      <MapContainer
        className="w-full h-[300px] rounded-lg"
        center={center}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>coffee</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;

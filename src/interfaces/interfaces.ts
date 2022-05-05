import { LatLngExpression } from "leaflet";
import React from "react";

export interface Point {
  key: React.Key;
  name: string;
  latLng: LatLngExpression;
}

export interface Order {
  key: React.Key;
  name: string;
  from: Point;
  to: Point;
}

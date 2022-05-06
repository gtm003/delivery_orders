import { LatLngExpression } from "leaflet";
import React from "react";

export interface Point {
  key: number;
  name: string;
  latLng: LatLngExpression;
}

export interface Order {
  key: number;
  name: string;
  from: Point;
  to: Point;
}

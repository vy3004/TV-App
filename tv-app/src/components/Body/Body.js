import React from "react";
import DetailMovie from "../DetailMovie/DetailMovie";
import SliderMovie from "../SliderMovie/SliderMovie";
import "./Body.css";

export default function Body() {
  return (
    <div className="body-container">
      <DetailMovie />
      <SliderMovie />
    </div>
  );
}

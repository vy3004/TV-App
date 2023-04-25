import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import bg from "../assets/images/bg.png";
import { useStateProvider } from "../utils/StateProvider";
import "./Home.css";

export default function Home() {
  const [{ current_movie }] = useStateProvider();

  return (
    <div
      className="home-container"
      style={{
        background: `url(${current_movie ? current_movie.image : bg})`,
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

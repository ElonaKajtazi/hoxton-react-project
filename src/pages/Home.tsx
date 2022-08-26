import { Link } from "react-router-dom";
import { HomeMain } from "../components/HomeMain";

import { NavBar } from "../components/NavBar";

export function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <HomeMain />
    </div>
  );
}

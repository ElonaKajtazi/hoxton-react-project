import { Link } from "react-router-dom";
import { HomeMain } from "../components/HomeMain";

import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HomeMain />
    </div>
  );
}

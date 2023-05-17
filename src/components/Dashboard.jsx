import React from "react";
import "./styles.scss";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Hero />
    </div>
  );
};

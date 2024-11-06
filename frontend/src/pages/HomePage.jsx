import React from "react";
import Wave from "react-wavify";
import "../css/HomePage.css";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div className="home-container">
      <Wave
        fill="#8aef8a"
        paused={false}
        className="wave wave-top"
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.15,
          points: 5,
        }}
      />
      <div className="text-section">
        <h1>Bienvenue dans l'application de données sur les arbres de Paris</h1>
        <p>
          Découvrez des informations détaillées sur les arbres dans différents
          arrondissement.
        </p>
        <Button type="primary" size="large" href="/trees">
          Voir les arbres
        </Button>
      </div>
      <Wave
        fill="#8aef8a"
        paused={false}
        className="wave wave-bottom"
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.15,
          points: 5,
        }}
      />
    </div>
  );
};

export default HomePage;

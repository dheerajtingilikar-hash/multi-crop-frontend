import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#1f2937" }, // dark gray
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#00ff99", distance: 150 },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
      }}
    />
  );
}

export default Background;

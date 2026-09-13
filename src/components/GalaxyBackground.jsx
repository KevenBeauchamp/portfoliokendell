import Particles from "react-tsparticles";

export default function GalaxyBackground() {
  return (
    <Particles
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 120 },
          size: { value: 2 },
          move: { speed: 0.3 },
          links: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.4
          }
        }
      }}
    />
  );
}
import { useEffect, useState } from "react";

export default function TerminalIntro({ onFinish }) {
  const lines = [
    "Initializing portfolio...",
    "Loading projects...",
    "Loading security modules...",
    "Access granted ✔"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => setIndex(index + 1), 2400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 1000);
    }
  }, [index]);

  return (
    <div className="terminal">
      {lines.slice(0, index).map((line, i) => (
        <p key={i}>$ {line}</p>
      ))}
    </div>
  );
}
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COULEURS } from "../theme";
import { Branche } from "./Feuille";

// Balayage vert foncé bordé d'or, avec quelques branches, entre deux scènes (24 images).
export const Transition: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 24], [-1500, 1600], { easing: Easing.inOut(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -300,
          left: x,
          width: 760,
          height: 2600,
          transform: "rotate(16deg)",
          background: `linear-gradient(90deg, rgba(31,107,46,0) 0%, rgba(31,107,46,0.6) 30%, ${COULEURS.vert} 50%, rgba(31,107,46,0.6) 70%, rgba(31,107,46,0) 100%)`,
          borderRight: `10px solid ${COULEURS.orClair}`,
          borderLeft: `6px solid ${COULEURS.rouge}`,
        }}
      />
      {[250, 800, 1350].map((y, i) => (
        <div key={y} style={{ position: "absolute", top: y, left: x + 220 + i * 60, transform: `rotate(${80 + i * 20}deg)` }}>
          <Branche taille={160} couleur={COULEURS.vertClair} />
        </div>
      ))}
    </AbsoluteFill>
  );
};

import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COULEURS } from "../theme";
import { Branche } from "./Feuille";

// Balayage de feuilles vertes et d'un liseré doré qui passe sur l'écran
// pendant le changement de scène (20 images).
export const Transition: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 20], [-1400, 1500], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -300,
          left: x,
          width: 700,
          height: 2600,
          transform: "rotate(18deg)",
          background: `linear-gradient(90deg, rgba(46,139,58,0) 0%, rgba(46,139,58,0.55) 30%, ${COULEURS.vert} 50%, rgba(46,139,58,0.55) 70%, rgba(46,139,58,0) 100%)`,
          borderRight: `10px solid ${COULEURS.orClair}`,
        }}
      />
      {[300, 800, 1300].map((y, i) => (
        <div key={y} style={{ position: "absolute", top: y, left: x + 200 + i * 60, transform: `rotate(${80 + i * 20}deg)` }}>
          <Branche taille={160} couleur={COULEURS.vertClair} />
        </div>
      ))}
    </AbsoluteFill>
  );
};

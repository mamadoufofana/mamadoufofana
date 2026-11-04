import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";
import { COULEURS, HAUTEUR, LARGEUR } from "../theme";
import { Branche, Foliole } from "./Feuille";

// Fond clair naturel : dégradé crème/vert pâle, branches qui se balancent
// dans les coins, folioles qui tombent doucement et lueur dorée.
export const Fond: React.FC = () => {
  const frame = useCurrentFrame();
  const balance = (phase: number, amp = 4) => Math.sin(frame / 30 + phase) * amp;
  const lueur = interpolate(Math.sin(frame / 40), [-1, 1], [0.18, 0.32]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COULEURS.fondCreme} 0%, ${COULEURS.fondClair} 55%, #E4F2DC 100%)`,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 42%, rgba(235,203,103,${lueur}) 0%, rgba(235,203,103,0) 45%)`,
        }}
      />

      {/* Branches dans les coins */}
      <div style={{ position: "absolute", left: -90, top: -130, transformOrigin: "50% 100%", transform: `rotate(${150 + balance(0)}deg)` }}>
        <Branche taille={240} opacite={0.9} />
      </div>
      <div style={{ position: "absolute", right: -80, top: -120, transformOrigin: "50% 100%", transform: `rotate(${-150 + balance(1.5)}deg)` }}>
        <Branche taille={200} couleur={COULEURS.vertClair} opacite={0.85} />
      </div>
      <div style={{ position: "absolute", left: -80, bottom: -80, transformOrigin: "50% 100%", transform: `rotate(${35 + balance(2.4)}deg)` }}>
        <Branche taille={230} couleur={COULEURS.vertClair} opacite={0.6} />
      </div>
      <div style={{ position: "absolute", right: -70, bottom: -60, transformOrigin: "50% 100%", transform: `rotate(${-30 + balance(3.1)}deg)` }}>
        <Branche taille={250} opacite={0.55} />
      </div>

      {/* Folioles qui tombent */}
      {new Array(14).fill(0).map((_, i) => {
        const vitesse = 1.2 + random(`v${i}`) * 1.6;
        const x0 = random(`x${i}`) * LARGEUR;
        const y = ((random(`y${i}`) * (HAUTEUR + 200) + frame * vitesse) % (HAUTEUR + 200)) - 100;
        const x = x0 + Math.sin(frame / 25 + i) * 40;
        const rot = frame * (1 + random(`r${i}`) * 2) + i * 40;
        return (
          <div key={i} style={{ position: "absolute", left: x, top: y, transform: `rotate(${rot}deg)`, opacity: 0.35 + random(`o${i}`) * 0.3 }}>
            <Foliole taille={24 + random(`t${i}`) * 26} couleur={i % 3 === 0 ? COULEURS.vert : COULEURS.vertClair} />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

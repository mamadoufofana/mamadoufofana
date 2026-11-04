import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";
import { COULEURS, HAUTEUR, LARGEUR } from "../theme";
import { Branche, Foliole } from "./Feuille";

// Fond beige chaleureux, branches vertes qui se balancent, folioles qui tombent,
// lueur dorée discrète et fin cadre doré.
export const Fond: React.FC = () => {
  const frame = useCurrentFrame();
  const balance = (phase: number, amp = 4) => Math.sin(frame / 32 + phase) * amp;
  const lueur = interpolate(Math.sin(frame / 45), [-1, 1], [0.14, 0.26]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COULEURS.blancCasse} 0%, ${COULEURS.beigeClair} 50%, ${COULEURS.beige} 100%)`,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill style={{ background: `radial-gradient(circle at 50% 40%, rgba(232,203,106,${lueur}) 0%, rgba(232,203,106,0) 48%)` }} />

      <div style={{ position: "absolute", left: -90, top: -130, transformOrigin: "50% 100%", transform: `rotate(${150 + balance(0)}deg)` }}>
        <Branche taille={240} couleur={COULEURS.vert} opacite={0.75} />
      </div>
      <div style={{ position: "absolute", right: -80, top: -120, transformOrigin: "50% 100%", transform: `rotate(${-150 + balance(1.5)}deg)` }}>
        <Branche taille={200} couleur={COULEURS.vertClair} opacite={0.7} />
      </div>
      <div style={{ position: "absolute", left: -80, bottom: -80, transformOrigin: "50% 100%", transform: `rotate(${35 + balance(2.4)}deg)` }}>
        <Branche taille={230} couleur={COULEURS.vertClair} opacite={0.5} />
      </div>
      <div style={{ position: "absolute", right: -70, bottom: -60, transformOrigin: "50% 100%", transform: `rotate(${-30 + balance(3.1)}deg)` }}>
        <Branche taille={250} couleur={COULEURS.vert} opacite={0.45} />
      </div>

      {new Array(12).fill(0).map((_, i) => {
        const vitesse = 1 + random(`v${i}`) * 1.4;
        const x0 = random(`x${i}`) * LARGEUR;
        const y = ((random(`y${i}`) * (HAUTEUR + 200) + frame * vitesse) % (HAUTEUR + 200)) - 100;
        const x = x0 + Math.sin(frame / 28 + i) * 40;
        const rot = frame * (0.8 + random(`r${i}`) * 1.5) + i * 40;
        return (
          <div key={i} style={{ position: "absolute", left: x, top: y, transform: `rotate(${rot}deg)`, opacity: 0.3 + random(`o${i}`) * 0.3 }}>
            <Foliole taille={22 + random(`t${i}`) * 24} couleur={i % 3 === 0 ? COULEURS.vert : COULEURS.vertClair} />
          </div>
        );
      })}

      <AbsoluteFill style={{ margin: 44, border: `2px solid rgba(201,162,39,0.45)`, borderRadius: 10 }} />
    </AbsoluteFill>
  );
};

import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";
import { COULEURS, DUREE_TOTALE, HAUTEUR, LARGEUR } from "../theme";

// Fond noir élégant : halo doré qui respire, particules dorées qui montent
// et fines lignes de cadre.
const NB_PARTICULES = 45;

export const Fond: React.FC = () => {
  const frame = useCurrentFrame();

  const respiration = interpolate(Math.sin(frame / 25), [-1, 1], [0.12, 0.22]);
  const haloY = interpolate(frame, [0, DUREE_TOTALE], [42, 50]);

  return (
    <AbsoluteFill style={{ backgroundColor: COULEURS.noir, overflow: "hidden" }}>
      {/* Halo doré central */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% ${haloY}%, rgba(212,175,55,${respiration}) 0%, rgba(212,175,55,0.04) 35%, rgba(0,0,0,0) 65%)`,
        }}
      />

      {/* Particules dorées */}
      {new Array(NB_PARTICULES).fill(0).map((_, i) => {
        const x = random(`x${i}`) * LARGEUR;
        const vitesse = 0.6 + random(`v${i}`) * 1.8;
        const taille = 2 + random(`t${i}`) * 5;
        const depart = random(`y${i}`) * HAUTEUR;
        const y = (((depart - frame * vitesse) % HAUTEUR) + HAUTEUR) % HAUTEUR;
        const scintillement = interpolate(
          Math.sin(frame / (6 + random(`s${i}`) * 10) + i),
          [-1, 1],
          [0.15, 0.85]
        );
        const derive = Math.sin(frame / 40 + i) * 12;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x + derive,
              top: y,
              width: taille,
              height: taille,
              borderRadius: "50%",
              backgroundColor: COULEURS.orClair,
              opacity: scintillement,
              boxShadow: `0 0 ${taille * 3}px ${COULEURS.or}`,
            }}
          />
        );
      })}

      {/* Cadre fin doré */}
      <AbsoluteFill
        style={{
          margin: 40,
          border: `2px solid rgba(212,175,55,0.25)`,
          borderRadius: 8,
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Vignette pour concentrer le regard */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

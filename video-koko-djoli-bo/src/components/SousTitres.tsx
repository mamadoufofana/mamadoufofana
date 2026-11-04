import { interpolate, useCurrentFrame } from "remotion";
import { SOUS_TITRES } from "../script";
import { COULEURS, FPS, MARGE_COTES, POLICE } from "../theme";

// Sous-titres français synchronisés avec la voix off (horaires dans script.ts).
export const SousTitres: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const actif = SOUS_TITRES.find((l) => t >= l.debut && t < l.fin);
  if (!actif) return null;
  const fDebut = actif.debut * FPS;
  const fFin = actif.fin * FPS;
  const opacite = interpolate(frame, [fDebut, fDebut + 5, fFin - 4, fFin], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, [fDebut, fDebut + 6], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", top: 1390, left: MARGE_COTES, right: MARGE_COTES, display: "flex", justifyContent: "center", opacity: opacite, transform: `translateY(${y}px)` }}>
      <div
        style={{
          background: "rgba(18,74,30,0.92)",
          borderRadius: 22,
          padding: "20px 34px",
          maxWidth: 880,
          textAlign: "center",
          fontFamily: POLICE,
          fontWeight: 800,
          fontSize: 46,
          lineHeight: 1.28,
          color: COULEURS.blanc,
          borderBottom: `4px solid ${COULEURS.or}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        }}
      >
        {actif.texte}
      </div>
    </div>
  );
};

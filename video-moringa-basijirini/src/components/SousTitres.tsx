import { interpolate, useCurrentFrame } from "remotion";
import { SCRIPT } from "../script";
import { COULEURS, FPS, MARGE_COTES, POLICE } from "../theme";

// Sous-titres français synchronisés avec la voix off (horaires dans script.ts).
// Placés au-dessus de la zone des boutons TikTok / Instagram.
export const SousTitres: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const lignes = SCRIPT.flatMap((r) => r.sousTitres);
  const actif = lignes.find((l) => t >= l.debut && t < l.fin);
  if (!actif) return null;

  const fDebut = actif.debut * FPS;
  const fFin = actif.fin * FPS;
  const opacite = interpolate(frame, [fDebut, fDebut + 5, fFin - 4, fFin], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [fDebut, fDebut + 6], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        top: 1370,
        left: MARGE_COTES,
        right: MARGE_COTES,
        display: "flex",
        justifyContent: "center",
        opacity: opacite,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          background: "rgba(18,58,28,0.88)",
          borderRadius: 22,
          padding: "20px 34px",
          maxWidth: 860,
          textAlign: "center",
          fontFamily: POLICE,
          fontWeight: 800,
          fontSize: 50,
          lineHeight: 1.25,
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

import { COULEURS } from "../theme";

// Petite branche de moringa stylisée (tige + folioles ovales), dessinée en SVG.
export const Branche: React.FC<{ taille?: number; couleur?: string; opacite?: number }> = ({
  taille = 220,
  couleur = COULEURS.vert,
  opacite = 1,
}) => {
  const folioles = [0, 1, 2, 3, 4, 5];
  return (
    <svg width={taille} height={taille * 1.6} viewBox="0 0 100 160" style={{ opacity: opacite, overflow: "visible" }}>
      <path d="M50 160 Q48 80 50 6" stroke={COULEURS.vertFonce} strokeWidth={2} fill="none" opacity={0.7} />
      {folioles.map((i) => {
        const y = 140 - i * 24;
        return (
          <g key={i}>
            <ellipse cx={34} cy={y} rx={14} ry={8} transform={`rotate(-28 34 ${y})`} fill={couleur} />
            <ellipse cx={66} cy={y - 8} rx={14} ry={8} transform={`rotate(28 66 ${y - 8})`} fill={couleur} />
            <path d={`M24 ${y + 4} L44 ${y - 4}`} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
            <path d={`M56 ${y - 12} L76 ${y - 4}`} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
          </g>
        );
      })}
      <ellipse cx={50} cy={4} rx={9} ry={13} fill={couleur} />
    </svg>
  );
};

// Une seule foliole (pour les feuilles qui tombent)
export const Foliole: React.FC<{ taille?: number; couleur?: string }> = ({ taille = 40, couleur = COULEURS.vertClair }) => (
  <svg width={taille} height={taille * 0.6} viewBox="0 0 50 30">
    <ellipse cx={25} cy={15} rx={24} ry={13} fill={couleur} />
    <path d="M3 15 L47 15" stroke="rgba(255,255,255,0.45)" strokeWidth={1.5} />
  </svg>
);

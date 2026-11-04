import { COULEURS, POLICE } from "../theme";

// Bandeau rouge inspiré de l'étiquette, pour le nom du produit.
export const NomProduit: React.FC<{ taille?: number }> = ({ taille = 84 }) => (
  <div
    style={{
      display: "inline-block",
      background: `linear-gradient(180deg, ${COULEURS.rouge}, ${COULEURS.rougeFonce})`,
      color: COULEURS.blanc,
      fontFamily: POLICE,
      fontWeight: 900,
      fontSize: taille,
      letterSpacing: 2,
      padding: `${taille * 0.22}px ${taille * 0.5}px`,
      borderRadius: 18,
      border: `4px solid ${COULEURS.orClair}`,
      boxShadow: "0 16px 34px rgba(154,22,19,0.35)",
      whiteSpace: "nowrap",
    }}
  >
    KOKO-DJOLI-BÔ
  </div>
);

// Bandeau vert (texte secondaire)
export const BandeauVert: React.FC<{ children: React.ReactNode; taille?: number }> = ({ children, taille = 40 }) => (
  <div
    style={{
      display: "inline-block",
      background: COULEURS.vert,
      color: COULEURS.blanc,
      fontFamily: POLICE,
      fontWeight: 800,
      fontSize: taille,
      padding: `${taille * 0.4}px ${taille * 0.9}px`,
      borderRadius: 50,
      border: `3px solid ${COULEURS.orClair}`,
      boxShadow: "0 10px 24px rgba(18,74,30,0.3)",
    }}
  >
    {children}
  </div>
);

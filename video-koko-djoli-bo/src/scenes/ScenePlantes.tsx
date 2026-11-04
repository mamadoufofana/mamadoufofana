import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Foliole } from "../components/Feuille";
import { Scene, ZoneTitre } from "../components/Scene";
import { COULEURS, POLICE } from "../theme";

// 19 → 30 s : la photo reste visible ; les noms des plantes apparaissent un par un.
const PLANTES = ["Acacia", "Vernonia", "Kotschyana", "Nilotica"];

const Plante: React.FC<{ nom: string; index: number }> = ({ nom, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - 40 - index * 28, fps, config: { damping: 14, stiffness: 110 } });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        background: COULEURS.blancCasse,
        border: `3px solid ${COULEURS.or}`,
        borderRadius: 50,
        padding: "14px 34px 14px 20px",
        boxShadow: "0 10px 24px rgba(27,46,30,0.15)",
        transform: `scale(${p})`,
        opacity: p,
      }}
    >
      <div style={{ transform: "rotate(-30deg)" }}>
        <Foliole taille={52} couleur={COULEURS.vert} />
      </div>
      <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 52, color: COULEURS.vertFonce }}>{nom}</div>
    </div>
  );
};

export const ScenePlantes: React.FC = () => (
  <Scene>
    <ZoneTitre haut={180}>
      <Apparition delai={4}>
        <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 50, color: COULEURS.vertFonce, lineHeight: 1.2 }}>Plantes mentionnées</div>
        <div style={{ fontFamily: POLICE, fontWeight: 500, fontSize: 44, color: COULEURS.texte }}>sur l’étiquette</div>
      </Apparition>
    </ZoneTitre>
    <div style={{ position: "absolute", top: 400, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
      <Apparition delai={2} depuis="zoom">
        <Carte src="images/produit-deux-pots.jpg" largeur={620} hauteur={515} zoomDe={1} zoomA={1.06} duree={300} rayon={24} />
      </Apparition>
    </div>
    <div style={{ position: "absolute", top: 960, left: 0, right: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 22, padding: "0 110px" }}>
      {PLANTES.map((n, i) => (
        <Plante key={n} nom={n} index={i} />
      ))}
    </div>
  </Scene>
);

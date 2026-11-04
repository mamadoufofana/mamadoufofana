import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { COULEURS, POLICE } from "../theme";

// 21 → 27 s : produit et photo côte à côte, puis bouton « Contactez-nous ».
export const SceneInvitation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bouton = spring({ frame: frame - 50, fps, config: { damping: 11, stiffness: 120 } });
  const pulse = 1 + Math.max(0, Math.sin((frame - 60) / 7)) * 0.04;

  return (
    <Scene>
      <ZoneTitre haut={200}>
        <Apparition delai={4}>
          <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: 72, lineHeight: 1.15, color: COULEURS.vertFonce }}>
            Vous souhaitez
            <br />
            en savoir plus ?
          </div>
        </Apparition>
      </ZoneTitre>
      <ZoneVisuel haut={430} bas={1150}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <Apparition delai={8} depuis="gauche">
            <div style={{ transform: "rotate(-4deg)" }}>
              <Carte src="images/emballage-face.png" largeur={400} hauteur={563} zoomA={1.04} duree={180} rayon={20} />
            </div>
          </Apparition>
          <Apparition delai={16} depuis="droite">
            <div style={{ transform: "rotate(4deg)" }}>
              <Carte src="images/dr-mangane.jpg" largeur={400} hauteur={563} zoomA={1.06} duree={180} position="38% 0%" origine="45% 10%" rayon={20} />
            </div>
          </Apparition>
        </div>
      </ZoneVisuel>
      <div style={{ position: "absolute", top: 1180, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            transform: `scale(${bouton * pulse})`,
            background: `linear-gradient(180deg, ${COULEURS.vert}, ${COULEURS.vertFonce})`,
            color: COULEURS.blanc,
            fontFamily: POLICE,
            fontWeight: 900,
            fontSize: 62,
            padding: "22px 60px",
            borderRadius: 70,
            border: `4px solid ${COULEURS.orClair}`,
            boxShadow: "0 16px 34px rgba(20,90,36,0.4)",
          }}
        >
          Contactez-nous
        </div>
      </div>
    </Scene>
  );
};

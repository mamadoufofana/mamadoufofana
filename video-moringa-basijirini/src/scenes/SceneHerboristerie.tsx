import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE } from "../theme";

// 12 → 21 s : photo réelle du Dr Mangané, avec un lent mouvement de caméra
// numérique (zoom/translation de l'image entière, visage non modifié).
export const SceneHerboristerie: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const formes = spring({ frame, fps, config: { damping: 20, stiffness: 70 } });
  const badge = spring({ frame: frame - 120, fps, config: { damping: 10, stiffness: 120 } });

  return (
    <Scene>
      <ZoneTitre haut={180}>
        <Apparition delai={4}>
          <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 46, letterSpacing: 8 }}>
            <TexteOr>HERBORISTERIE</TexteOr>
          </div>
        </Apparition>
        <Apparition delai={10}>
          <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: 70, lineHeight: 1.12, color: COULEURS.vertFonce }}>
            Dr Chouaïbou Mangané
          </div>
        </Apparition>
      </ZoneTitre>
      <ZoneVisuel haut={420} bas={1340}>
        {/* formes vertes et dorées */}
        <div
          style={{
            position: "absolute",
            width: 660,
            height: 660,
            borderRadius: "50%",
            background: COULEURS.vert,
            opacity: 0.18,
            transform: `translate(${interpolate(formes, [0, 1], [-600, -170])}px, -120px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `6px solid ${COULEURS.or}`,
            opacity: 0.7,
            transform: `translate(${interpolate(formes, [0, 1], [600, 230])}px, 230px) rotate(${frame}deg)`,
            borderStyle: "dashed",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50% 0 50% 0",
            background: COULEURS.vertClair,
            opacity: 0.35,
            transform: `translate(${interpolate(formes, [0, 1], [700, 260])}px, -300px) rotate(${-frame / 3}deg)`,
          }}
        />
        <Apparition delai={2} depuis="zoom">
          <Carte
            src="images/dr-mangane.jpg"
            largeur={680}
            hauteur={800}
            zoomDe={1.0}
            zoomA={1.1}
            duree={270}
            position="38% 0%"
            origine="42% 15%"
            derive={[0, 0]}
          />
        </Apparition>
        {/* badge « Demandez conseil » */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            transform: `scale(${badge})`,
            background: COULEURS.vert,
            color: COULEURS.blanc,
            fontFamily: POLICE,
            fontWeight: 800,
            fontSize: 54,
            padding: "18px 44px",
            borderRadius: 60,
            border: `4px solid ${COULEURS.orClair}`,
            boxShadow: "0 14px 30px rgba(20,90,36,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          Demandez conseil
        </div>
      </ZoneVisuel>
    </Scene>
  );
};

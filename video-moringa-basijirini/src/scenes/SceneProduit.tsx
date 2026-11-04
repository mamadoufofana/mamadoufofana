import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Foliole } from "../components/Feuille";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE, POLICE_ELEGANTE } from "../theme";

// 5 → 12 s : face avant de la boîte (image réelle recadrée, non modifiée).
export const SceneProduit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entree = spring({ frame: frame - 4, fps, config: { damping: 16, stiffness: 80 } });
  const flottement = Math.sin(frame / 20) * 8;

  return (
    <Scene>
      <ZoneTitre haut={190}>
        <Apparition delai={4}>
          <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 66, color: COULEURS.vertFonce }}>Découvrez le Moringa</div>
        </Apparition>
        <Apparition delai={14} depuis="zoom">
          <div style={{ fontFamily: POLICE_ELEGANTE, fontStyle: "italic", fontWeight: 700, fontSize: 120, lineHeight: 1.15 }}>
            <TexteOr>Basijirini</TexteOr>
          </div>
        </Apparition>
      </ZoneTitre>
      <ZoneVisuel haut={500}>
        {/* halo vert derrière la boîte */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,195,110,0.45) 0%, rgba(124,195,110,0) 70%)",
            transform: `scale(${entree})`,
          }}
        />
        {/* folioles qui tournent autour */}
        {new Array(8).fill(0).map((_, i) => {
          const a = (i / 8) * Math.PI * 2 + frame / 50;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                transform: `translate(${Math.cos(a) * 380}px, ${Math.sin(a) * 430}px) rotate(${a * 57 + 90}deg) scale(${entree})`,
                opacity: 0.8,
              }}
            >
              <Foliole taille={46} couleur={i % 2 ? COULEURS.vert : COULEURS.vertClair} />
            </div>
          );
        })}
        <div
          style={{
            transform: `translateY(${interpolate(entree, [0, 1], [700, 0]) + flottement}px) rotate(${interpolate(entree, [0, 1], [10, -2])}deg)`,
          }}
        >
          <Carte src="images/emballage-face.png" largeur={540} hauteur={760} zoomDe={1} zoomA={1.05} duree={210} rayon={22} />
        </div>
      </ZoneVisuel>
    </Scene>
  );
};

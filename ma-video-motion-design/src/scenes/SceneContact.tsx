import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LigneOr } from "../components/LigneOr";
import { Revelation } from "../components/Revelation";
import { SortieScene } from "../components/SortieScene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE_ELEGANTE, POLICE_TITRE } from "../theme";

// 11 → 15 s : « Contactez Mamadou Fofana » / « Créateur de contenu IA »
export const SceneContact: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nom = spring({ frame: frame - 10, fps, config: { damping: 200, mass: 0.8 } });
  const espacement = interpolate(nom, [0, 1], [30, 0]);

  // Fondu au noir final sur les 12 dernières images
  const fin = interpolate(frame, [108, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SortieScene sansSortie>
      <div style={{ opacity: fin }}>
        <Revelation delai={2}>
          <div
            style={{
              fontFamily: POLICE_TITRE,
              fontWeight: 800,
              fontSize: 96,
              color: COULEURS.blanc,
              letterSpacing: 8,
            }}
          >
            CONTACTEZ
          </div>
        </Revelation>

        <div
          style={{
            fontFamily: POLICE_ELEGANTE,
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 150,
            lineHeight: 1.1,
            marginTop: 20,
            letterSpacing: espacement,
            opacity: nom,
            transform: `translateY(${interpolate(nom, [0, 1], [40, 0])}px)`,
          }}
        >
          <div>
            <TexteOr>Mamadou</TexteOr>
          </div>
          <div>
            <TexteOr>Fofana</TexteOr>
          </div>
        </div>

        <LigneOr delai={26} largeur={560} />

        <Revelation delai={32}>
          <div
            style={{
              fontFamily: POLICE_TITRE,
              fontWeight: 500,
              fontSize: 70,
              color: COULEURS.blanc,
              letterSpacing: 2,
            }}
          >
            Créateur de contenu IA
          </div>
        </Revelation>
      </div>
    </SortieScene>
  );
};

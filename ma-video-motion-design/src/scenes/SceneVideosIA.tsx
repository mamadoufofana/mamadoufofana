import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LigneOr } from "../components/LigneOr";
import { Revelation } from "../components/Revelation";
import { SortieScene } from "../components/SortieScene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE_TITRE } from "../theme";

// 3 → 7 s : « VIDÉOS IA POUR VOTRE BUSINESS »
export const SceneVideosIA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // « VIDÉOS IA » arrive en zoom avec un léger rebond
  const pop = spring({ frame: frame - 4, fps, config: { damping: 12, stiffness: 120 } });
  const echelle = interpolate(pop, [0, 1], [2.2, 1]);
  const flou = interpolate(pop, [0, 1], [20, 0], { extrapolateRight: "clamp" });

  // Petit flottement continu pour garder du mouvement
  const flottement = Math.sin(frame / 14) * 6;

  const base: React.CSSProperties = {
    fontFamily: POLICE_TITRE,
    fontWeight: 900,
    lineHeight: 1.05,
  };

  return (
    <SortieScene>
      <div style={{ transform: `translateY(${flottement}px)` }}>
        <div
          style={{
            ...base,
            fontSize: 190,
            transform: `scale(${echelle})`,
            filter: `blur(${flou}px)`,
            opacity: interpolate(pop, [0, 0.2], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div>
            <TexteOr>VIDÉOS</TexteOr>
          </div>
          <div style={{ fontSize: 240 }}>
            <TexteOr>IA</TexteOr>
          </div>
        </div>
        <LigneOr delai={20} largeur={600} />
        <Revelation delai={24}>
          <div style={{ ...base, fontWeight: 800, fontSize: 92, color: COULEURS.blanc, letterSpacing: 6 }}>
            POUR VOTRE
          </div>
        </Revelation>
        <Revelation delai={30}>
          <div style={{ ...base, fontWeight: 900, fontSize: 118, color: COULEURS.blanc, letterSpacing: 4 }}>
            BUSINESS
          </div>
        </Revelation>
      </div>
    </SortieScene>
  );
};

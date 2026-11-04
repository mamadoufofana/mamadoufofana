import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LigneOr } from "../components/LigneOr";
import { Revelation } from "../components/Revelation";
import { SortieScene } from "../components/SortieScene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE_TITRE } from "../theme";

// 0 → 3 s : « DONNEZ VIE À VOS IDÉES »
export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = interpolate(frame, [0, 90], [1.08, 1]);
  const espacement = interpolate(
    spring({ frame, fps, config: { damping: 200 } }),
    [0, 1],
    [40, 4]
  );

  const style: React.CSSProperties = {
    fontFamily: POLICE_TITRE,
    fontWeight: 900,
    fontSize: 150,
    lineHeight: 1.05,
    letterSpacing: espacement,
    color: COULEURS.blanc,
  };

  return (
    <SortieScene>
      <div style={{ transform: `scale(${zoom})` }}>
        <Revelation delai={2}>
          <div style={style}>DONNEZ</div>
        </Revelation>
        <Revelation delai={8}>
          <div style={style}>VIE</div>
        </Revelation>
        <LigneOr delai={14} />
        <Revelation delai={18}>
          <div style={{ ...style, fontSize: 132 }}>
            <TexteOr>À VOS</TexteOr>
          </div>
        </Revelation>
        <Revelation delai={24}>
          <div style={{ ...style, fontSize: 132 }}>
            <TexteOr>IDÉES</TexteOr>
          </div>
        </Revelation>
      </div>
    </SortieScene>
  );
};

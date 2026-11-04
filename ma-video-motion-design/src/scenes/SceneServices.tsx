import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SortieScene } from "../components/SortieScene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE_TITRE } from "../theme";

// 7 → 11 s : « Publicités • Histoires • Réseaux sociaux »
const SERVICES = ["Publicités", "Histoires", "Réseaux sociaux"];

const Service: React.FC<{ texte: string; index: number }> = ({ texte, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delai = 4 + index * 14;
  const p = spring({ frame: frame - delai, fps, config: { damping: 14, stiffness: 110 } });
  const sens = index % 2 === 0 ? -1 : 1; // alterne gauche / droite
  const x = interpolate(p, [0, 1], [sens * 700, 0]);
  const point = spring({ frame: frame - delai - 6, fps, config: { damping: 10 } });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {index > 0 && (
        <div
          style={{
            fontSize: 140,
            lineHeight: 1,
            margin: "0 0 6px",
            transform: `scale(${point})`,
          }}
        >
          <TexteOr>•</TexteOr>
        </div>
      )}
      <div
        style={{
          fontFamily: POLICE_TITRE,
          fontWeight: 800,
          fontSize: texte.length > 12 ? 104 : 120,
          color: COULEURS.blanc,
          transform: `translateX(${x}px)`,
          opacity: interpolate(p, [0, 0.4], [0, 1], { extrapolateRight: "clamp" }),
          textShadow: "0 0 30px rgba(212,175,55,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        {texte}
      </div>
    </div>
  );
};

export const SceneServices: React.FC = () => {
  return (
    <SortieScene>
      <div>
        {SERVICES.map((s, i) => (
          <Service key={s} texte={s} index={i} />
        ))}
      </div>
    </SortieScene>
  );
};

import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Fait apparaître un élément en glissant de bas en haut derrière un masque.
export const Revelation: React.FC<{
  children: React.ReactNode;
  delai?: number;
  style?: React.CSSProperties;
}> = ({ children, delai = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delai, fps, config: { damping: 200, mass: 0.6 } });
  const y = interpolate(p, [0, 1], [110, 0]);
  return (
    <div style={{ overflow: "hidden", padding: "0 10px 12px", ...style }}>
      <div
        style={{
          transform: `translateY(${y}%)`,
          opacity: interpolate(p, [0, 0.3, 1], [0, 1, 1]),
        }}
      >
        {children}
      </div>
    </div>
  );
};

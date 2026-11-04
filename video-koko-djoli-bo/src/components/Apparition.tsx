import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Apparition douce : montée + fondu + léger zoom, avec délai en images.
export const Apparition: React.FC<{
  children: React.ReactNode;
  delai?: number;
  depuis?: "bas" | "gauche" | "droite" | "zoom";
  style?: React.CSSProperties;
}> = ({ children, delai = 0, depuis = "bas", style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delai, fps, config: { damping: 18, stiffness: 90, mass: 0.8 } });
  const d = interpolate(p, [0, 1], [1, 0]);
  const transform =
    depuis === "bas"
      ? `translateY(${d * 80}px)`
      : depuis === "gauche"
        ? `translateX(${-d * 600}px) rotate(${-d * 8}deg)`
        : depuis === "droite"
          ? `translateX(${d * 600}px) rotate(${d * 8}deg)`
          : `scale(${0.6 + p * 0.4})`;
  return (
    <div style={{ transform, opacity: interpolate(p, [0, 0.35], [0, 1], { extrapolateRight: "clamp" }), ...style }}>
      {children}
    </div>
  );
};

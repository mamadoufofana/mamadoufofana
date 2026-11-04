import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Balayage lumineux doré en diagonale qui masque le changement de scène.
export const FlashTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const progression = interpolate(frame, [0, 16], [-60, 160], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flash = interpolate(frame, [6, 8, 11], [0, 0.35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          background: `linear-gradient(115deg, transparent ${progression - 30}%, rgba(212,175,55,0.0) ${progression - 18}%, rgba(245,215,122,0.9) ${progression}%, rgba(212,175,55,0.0) ${progression + 18}%, transparent ${progression + 30}%)`,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill style={{ backgroundColor: `rgba(245,215,122,${flash})` }} />
    </AbsoluteFill>
  );
};

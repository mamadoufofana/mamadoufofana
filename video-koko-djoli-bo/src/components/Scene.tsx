import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MARGE_COTES } from "../theme";

export const Scene: React.FC<{ children: React.ReactNode; sansSortie?: boolean }> = ({ children, sansSortie }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = sansSortie
    ? 0
    : interpolate(frame, [durationInFrames - 14, durationInFrames], [0, 1], {
        easing: Easing.in(Easing.cubic),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  return (
    <AbsoluteFill
      style={{
        paddingLeft: MARGE_COTES,
        paddingRight: MARGE_COTES,
        opacity: 1 - s,
        transform: `translateY(${-s * 50}px) scale(${1 - s * 0.03})`,
        filter: `blur(${s * 8}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const ZoneTitre: React.FC<{ children: React.ReactNode; haut?: number }> = ({ children, haut = 190 }) => (
  <div style={{ position: "absolute", top: haut, left: MARGE_COTES, right: MARGE_COTES, textAlign: "center" }}>{children}</div>
);

export const ZoneVisuel: React.FC<{ children: React.ReactNode; haut: number; bas?: number }> = ({ children, haut, bas = 1330 }) => (
  <div style={{ position: "absolute", top: haut, height: bas - haut, left: MARGE_COTES, right: MARGE_COTES, display: "flex", justifyContent: "center", alignItems: "center" }}>
    {children}
  </div>
);

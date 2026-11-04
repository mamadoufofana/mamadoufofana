import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MARGE_COTES } from "../theme";

// Conteneur de scène avec sortie fluide (fondu + léger glissement vers le haut).
export const Scene: React.FC<{ children: React.ReactNode; sansSortie?: boolean }> = ({ children, sansSortie }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = sansSortie
    ? 0
    : interpolate(frame, [durationInFrames - 12, durationInFrames], [0, 1], {
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
        transform: `translateY(${-s * 60}px) scale(${1 - s * 0.04})`,
        filter: `blur(${s * 8}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// Zone de titre (en haut, sous la zone des icônes du téléphone)
export const ZoneTitre: React.FC<{ children: React.ReactNode; haut?: number }> = ({ children, haut = 190 }) => (
  <div style={{ position: "absolute", top: haut, left: MARGE_COTES, right: MARGE_COTES, textAlign: "center" }}>{children}</div>
);

// Zone visuelle centrale (au-dessus des sous-titres)
export const ZoneVisuel: React.FC<{ children: React.ReactNode; haut: number; bas?: number }> = ({ children, haut, bas = 1330 }) => (
  <div
    style={{
      position: "absolute",
      top: haut,
      height: bas - haut,
      left: MARGE_COTES,
      right: MARGE_COTES,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

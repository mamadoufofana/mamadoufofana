import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Conteneur de scène : centre le contenu et gère une sortie fluide
// (léger zoom + flou + fondu) pendant les dernières images de la scène.
export const SortieScene: React.FC<{
  children: React.ReactNode;
  sansSortie?: boolean;
}> = ({ children, sansSortie }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const debutSortie = durationInFrames - 10;
  const s = sansSortie
    ? 0
    : interpolate(frame, [debutSortie, durationInFrames], [0, 1], {
        easing: Easing.in(Easing.cubic),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        // Légèrement au-dessus du centre pour éviter l'interface TikTok en bas
        paddingBottom: 220,
        paddingLeft: 70,
        paddingRight: 70,
        textAlign: "center",
        opacity: 1 - s,
        transform: `scale(${1 + s * 0.15})`,
        filter: `blur(${s * 14}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

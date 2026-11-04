import { Easing, interpolate, useCurrentFrame } from "remotion";
import { COULEURS } from "../theme";

// Fine ligne dorée qui se déploie depuis le centre.
export const LigneOr: React.FC<{ delai?: number; largeur?: number }> = ({
  delai = 0,
  largeur = 520,
}) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame - delai, [0, 18], [0, largeur], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        width: w,
        height: 5,
        margin: "34px auto",
        borderRadius: 3,
        background: `linear-gradient(90deg, transparent, ${COULEURS.orClair}, transparent)`,
        boxShadow: `0 0 20px ${COULEURS.or}`,
      }}
    />
  );
};

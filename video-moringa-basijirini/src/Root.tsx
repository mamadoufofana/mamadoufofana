import { Composition } from "remotion";
import { PubMoringa, proprietesParDefaut } from "./PubMoringa";
import { DUREE_TOTALE, FPS, HAUTEUR, LARGEUR } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PubMoringa"
      component={PubMoringa}
      durationInFrames={DUREE_TOTALE}
      fps={FPS}
      width={LARGEUR}
      height={HAUTEUR}
      defaultProps={proprietesParDefaut}
    />
  );
};

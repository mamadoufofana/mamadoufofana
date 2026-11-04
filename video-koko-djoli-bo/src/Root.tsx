import { Composition } from "remotion";
import { PubKoko, proprietesParDefaut } from "./PubKoko";
import { DUREE_TOTALE, FPS, HAUTEUR, LARGEUR } from "./theme";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="PubKoko"
    component={PubKoko}
    durationInFrames={DUREE_TOTALE}
    fps={FPS}
    width={LARGEUR}
    height={HAUTEUR}
    defaultProps={proprietesParDefaut}
  />
);

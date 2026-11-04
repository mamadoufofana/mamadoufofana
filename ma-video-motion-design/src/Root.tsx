import { Composition } from "remotion";
import { Publicite } from "./Publicite";
import { DUREE_TOTALE, FPS, HAUTEUR, LARGEUR } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PubliciteTikTok"
      component={Publicite}
      durationInFrames={DUREE_TOTALE}
      fps={FPS}
      width={LARGEUR}
      height={HAUTEUR}
    />
  );
};

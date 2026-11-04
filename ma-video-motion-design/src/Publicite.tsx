import { AbsoluteFill, Sequence } from "remotion";
import { Fond } from "./components/Fond";
import { FlashTransition } from "./components/FlashTransition";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneVideosIA } from "./scenes/SceneVideosIA";
import { SceneServices } from "./scenes/SceneServices";
import { SceneContact } from "./scenes/SceneContact";
import { SCENES } from "./theme";

export const Publicite: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Fond animé commun à toute la vidéo */}
      <Fond />

      <Sequence from={SCENES.intro.debut} durationInFrames={SCENES.intro.duree}>
        <SceneIntro />
      </Sequence>
      <Sequence from={SCENES.videosIA.debut} durationInFrames={SCENES.videosIA.duree}>
        <SceneVideosIA />
      </Sequence>
      <Sequence from={SCENES.services.debut} durationInFrames={SCENES.services.duree}>
        <SceneServices />
      </Sequence>
      <Sequence from={SCENES.contact.debut} durationInFrames={SCENES.contact.duree}>
        <SceneContact />
      </Sequence>

      {/* Balayages dorés entre les scènes */}
      {[SCENES.videosIA.debut, SCENES.services.debut, SCENES.contact.debut].map((t) => (
        <Sequence key={t} from={t - 8} durationInFrames={16}>
          <FlashTransition />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

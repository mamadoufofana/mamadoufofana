import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { Fond } from "./components/Fond";
import { SousTitres } from "./components/SousTitres";
import { Transition } from "./components/Transition";
import { SceneConclusion } from "./scenes/SceneConclusion";
import { SceneContacts } from "./scenes/SceneContacts";
import { SceneIntro } from "./scenes/SceneIntro";
import { ScenePlantes } from "./scenes/ScenePlantes";
import { SceneProduit } from "./scenes/SceneProduit";
import { ScenePrudence } from "./scenes/ScenePrudence";
import { DUREE_TOTALE, SCENES, sec } from "./theme";

export type Proprietes = {
  // true une fois votre voix off placée dans public/audio/voix.mp3
  avecVoix: boolean;
  avecSousTitres: boolean;
};
export const proprietesParDefaut: Proprietes = { avecVoix: false, avecSousTitres: true };

const scenes = [
  { cle: "intro", Composant: SceneIntro },
  { cle: "produit", Composant: SceneProduit },
  { cle: "plantes", Composant: ScenePlantes },
  { cle: "prudence", Composant: ScenePrudence },
  { cle: "contacts", Composant: SceneContacts },
  { cle: "conclusion", Composant: SceneConclusion },
] as const;

export const PubKoko: React.FC<Proprietes> = ({ avecVoix, avecSousTitres }) => {
  const volumeMusique = avecVoix ? 0.12 : 0.3;
  return (
    <AbsoluteFill>
      <Fond />
      {scenes.map(({ cle, Composant }) => {
        const s = SCENES[cle];
        return (
          <Sequence key={cle} from={sec(s.debut)} durationInFrames={sec(s.fin - s.debut)}>
            <Composant />
          </Sequence>
        );
      })}
      {[SCENES.produit, SCENES.plantes, SCENES.prudence, SCENES.contacts, SCENES.conclusion].map((s) => (
        <Sequence key={s.debut} from={sec(s.debut) - 12} durationInFrames={24}>
          <Transition />
        </Sequence>
      ))}
      {avecSousTitres && <SousTitres />}
      <Audio
        src={staticFile("audio/musique.mp3")}
        volume={(f) => volumeMusique * interpolate(f, [0, 30, DUREE_TOTALE - 60, DUREE_TOTALE], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
      />
      {avecVoix && <Audio src={staticFile("audio/voix.mp3")} />}
    </AbsoluteFill>
  );
};

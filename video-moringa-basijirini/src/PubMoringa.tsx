import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { Fond } from "./components/Fond";
import { SousTitres } from "./components/SousTitres";
import { Transition } from "./components/Transition";
import { SceneAccroche } from "./scenes/SceneAccroche";
import { SceneFinal } from "./scenes/SceneFinal";
import { SceneHerboristerie } from "./scenes/SceneHerboristerie";
import { SceneInvitation } from "./scenes/SceneInvitation";
import { SceneProduit } from "./scenes/SceneProduit";
import { DUREE_TOTALE, SCENES, sec } from "./theme";

export type Proprietes = {
  // Mettre à true après avoir placé votre voix bambara dans public/audio/voix.mp3
  avecVoix: boolean;
  avecSousTitres: boolean;
};

export const proprietesParDefaut: Proprietes = { avecVoix: false, avecSousTitres: true };

const scenes = [
  { cle: "accroche", Composant: SceneAccroche },
  { cle: "produit", Composant: SceneProduit },
  { cle: "herboristerie", Composant: SceneHerboristerie },
  { cle: "invitation", Composant: SceneInvitation },
  { cle: "final", Composant: SceneFinal },
] as const;

export const PubMoringa: React.FC<Proprietes> = ({ avecVoix, avecSousTitres }) => {
  // Musique douce ; encore plus basse quand la voix off est présente.
  const volumeMusique = avecVoix ? 0.12 : 0.32;

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

      {/* Transitions feuillues entre les scènes */}
      {[SCENES.produit, SCENES.herboristerie, SCENES.invitation, SCENES.final].map((s) => (
        <Sequence key={s.debut} from={sec(s.debut) - 10} durationInFrames={20}>
          <Transition />
        </Sequence>
      ))}

      {avecSousTitres && <SousTitres />}

      <Audio
        src={staticFile("audio/musique.mp3")}
        volume={(f) =>
          volumeMusique *
          interpolate(f, [0, 20, DUREE_TOTALE - 45, DUREE_TOTALE], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        }
      />
      {avecVoix && <Audio src={staticFile("audio/voix.mp3")} volume={1} />}
    </AbsoluteFill>
  );
};

import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { BandeauVert, NomProduit } from "../components/Etiquette";
import { Scene, ZoneTitre } from "../components/Scene";
import { COULEURS, POLICE } from "../theme";

// 52 → 60 s : produit en grand, nom, phrase finale, fondu doux.
export const SceneConclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fin = interpolate(frame, [durationInFrames - 36, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Scene sansSortie>
      <div style={{ opacity: fin }}>
        <ZoneTitre haut={170}>
          <Apparition delai={2} depuis="zoom">
            <NomProduit taille={78} />
          </Apparition>
        </ZoneTitre>
        <div style={{ position: "absolute", top: 360, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          <Apparition delai={6} depuis="zoom">
            <Carte src="images/produit-deux-pots.jpg" largeur={760} hauteur={631} zoomDe={1.0} zoomA={1.08} duree={240} rayon={26} />
          </Apparition>
        </div>
        <ZoneTitre haut={1060}>
          <Apparition delai={20}>
            <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 58, color: COULEURS.vertFonce, lineHeight: 1.2 }}>Informez-vous avant utilisation</div>
          </Apparition>
          <div style={{ height: 30 }} />
          <Apparition delai={32}>
            <BandeauVert taille={46}>Contactez Dr Mangané</BandeauVert>
          </Apparition>
        </ZoneTitre>
      </div>
    </Scene>
  );
};

import { useCurrentFrame } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { BandeauVert, NomProduit } from "../components/Etiquette";
import { Foliole } from "../components/Feuille";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { COULEURS } from "../theme";

// 8 → 19 s : les pots en gros plan, nom du produit, petites feuilles autour du cadre
export const SceneProduit: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene>
      <ZoneTitre haut={190}>
        <Apparition delai={10} depuis="zoom">
          <NomProduit taille={82} />
        </Apparition>
        <div style={{ height: 26 }} />
        <Apparition delai={26}>
          <BandeauVert taille={38}>Produit présenté par Dr Mangané</BandeauVert>
        </Apparition>
      </ZoneTitre>
      <ZoneVisuel haut={560} bas={1360}>
        {new Array(10).fill(0).map((_, i) => {
          const a = (i / 10) * Math.PI * 2 + frame / 60;
          return (
            <div key={i} style={{ position: "absolute", transform: `translate(${Math.cos(a) * 470}px, ${Math.sin(a) * 400}px) rotate(${a * 57 + 90}deg)`, opacity: 0.8 }}>
              <Foliole taille={44} couleur={i % 2 ? COULEURS.vert : COULEURS.vertClair} />
            </div>
          );
        })}
        <Apparition delai={2} depuis="bas">
          <Carte src="images/produit-deux-pots.jpg" largeur={860} hauteur={714} zoomDe={1} zoomA={1.08} duree={300} origine="50% 55%" />
        </Apparition>
      </ZoneVisuel>
    </Scene>
  );
};

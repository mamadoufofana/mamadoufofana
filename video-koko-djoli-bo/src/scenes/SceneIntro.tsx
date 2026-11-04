import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, POLICE, POLICE_ELEGANTE } from "../theme";

// 0 → 8 s : feuilles, titre, photo du produit avec zoom lent
export const SceneIntro: React.FC = () => (
  <Scene>
    <ZoneTitre haut={200}>
      <Apparition delai={6}>
        <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 60, color: COULEURS.vertFonce, lineHeight: 1.15 }}>Prenez soin de</div>
      </Apparition>
      <Apparition delai={14} depuis="zoom">
        <div style={{ fontFamily: POLICE_ELEGANTE, fontStyle: "italic", fontWeight: 700, fontSize: 112, lineHeight: 1.15 }}>
          <TexteOr>votre bien-être</TexteOr>
        </div>
      </Apparition>
    </ZoneTitre>
    <ZoneVisuel haut={520} bas={1360}>
      <Apparition delai={26} depuis="zoom">
        <Carte src="images/produit-original.jpg" largeur={640} hauteur={820} zoomDe={1.02} zoomA={1.12} duree={240} position="50% 30%" origine="50% 35%" />
      </Apparition>
    </ZoneVisuel>
  </Scene>
);

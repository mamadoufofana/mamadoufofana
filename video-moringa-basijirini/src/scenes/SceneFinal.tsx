import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Scene, ZoneTitre } from "../components/Scene";
import { TexteOr } from "../components/TexteOr";
import { COULEURS, NUMERO_WHATSAPP, POLICE } from "../theme";

// Icône générique de discussion (pas de logo de marque)
const IconeMessage: React.FC = () => (
  <svg width={64} height={64} viewBox="0 0 24 24">
    <circle cx={12} cy={12} r={12} fill={COULEURS.blanc} />
    <path d="M6 8.5C6 7.1 7.1 6 8.5 6h7C16.9 6 18 7.1 18 8.5v5c0 1.4-1.1 2.5-2.5 2.5H11l-3.5 2.5V16h0C6.6 16 6 15.4 6 14.5z" fill={COULEURS.vert} />
  </svg>
);

// 27 → 30 s : écran final
export const SceneFinal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pill = spring({ frame: frame - 14, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <Scene sansSortie>
      <ZoneTitre haut={180}>
        <Apparition delai={0}>
          <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 42, letterSpacing: 7 }}>
            <TexteOr>HERBORISTERIE</TexteOr>
          </div>
          <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: 64, lineHeight: 1.12, color: COULEURS.vertFonce }}>
            Dr Chouaïbou Mangané
          </div>
        </Apparition>
      </ZoneTitre>
      <div style={{ position: "absolute", top: 400, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Apparition delai={4} depuis="zoom">
          <Carte src="images/emballage-face.png" largeur={460} hauteur={647} zoomA={1.03} duree={90} rayon={22} />
        </Apparition>
      </div>
      <div style={{ position: "absolute", top: 1110, left: 60, right: 60, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            transform: `scale(${pill})`,
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: COULEURS.vert,
            color: COULEURS.blanc,
            fontFamily: POLICE,
            fontWeight: 800,
            fontSize: 44,
            padding: "18px 36px",
            borderRadius: 60,
            border: `4px solid ${COULEURS.orClair}`,
            boxShadow: "0 14px 30px rgba(20,90,36,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          <IconeMessage />
          WhatsApp : {NUMERO_WHATSAPP}
        </div>
      </div>
    </Scene>
  );
};

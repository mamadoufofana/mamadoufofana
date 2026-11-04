import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Scene, ZoneTitre } from "../components/Scene";
import { COULEURS, POLICE } from "../theme";

// 30 → 40 s : message de prudence, fond clair, icône de dialogue discrète, contraste élevé.
const IconeDialogue: React.FC<{ echelle: number }> = ({ echelle }) => (
  <svg width={190} height={190} viewBox="0 0 100 100" style={{ transform: `scale(${echelle})` }}>
    <circle cx={50} cy={50} r={48} fill={COULEURS.vert} />
    <circle cx={50} cy={50} r={48} fill="none" stroke={COULEURS.orClair} strokeWidth={4} />
    <path d="M26 32h48a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H48l-14 11V66h-8a6 6 0 0 1-6-6V38a6 6 0 0 1 6-6z" fill={COULEURS.blancCasse} />
    <circle cx={38} cy={49} r={4} fill={COULEURS.vert} />
    <circle cx={50} cy={49} r={4} fill={COULEURS.vert} />
    <circle cx={62} cy={49} r={4} fill={COULEURS.vert} />
  </svg>
);

export const ScenePrudence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const icone = spring({ frame: frame - 4, fps, config: { damping: 12, stiffness: 120 } });
  return (
    <Scene>
      <div style={{ position: "absolute", top: 300, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <IconeDialogue echelle={icone} />
      </div>
      <ZoneTitre haut={560}>
        <Apparition delai={16}>
          <div
            style={{
              background: COULEURS.blancCasse,
              border: `4px solid ${COULEURS.rouge}`,
              borderRadius: 30,
              padding: "44px 40px",
              boxShadow: "0 16px 40px rgba(27,46,30,0.15)",
            }}
          >
            <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: 60, lineHeight: 1.2, color: COULEURS.rougeFonce }}>En cas de saignement,</div>
            <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 56, lineHeight: 1.25, color: COULEURS.texte, marginTop: 16 }}>
              consultez un professionnel de santé.
            </div>
          </div>
        </Apparition>
        <Apparition delai={40}>
          <div style={{ marginTop: 50, fontFamily: POLICE, fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: COULEURS.vertFonce }}>
            Ce produit ne remplace pas un diagnostic
            <br />
            ni un traitement médical.
          </div>
        </Apparition>
      </ZoneTitre>
    </Scene>
  );
};

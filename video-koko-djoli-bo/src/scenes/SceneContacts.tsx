import { AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame } from "remotion";
import { Apparition } from "../components/Apparition";
import { Carte } from "../components/Carte";
import { Scene } from "../components/Scene";
import { CONTACTS_1, CONTACTS_2, COULEURS, POLICE, sec } from "../theme";

// 40 → 52 s : produit en haut, coordonnées en dessous sur deux écrans successifs.
const Ecran: React.FC<{ contacts: { pays: string; numero: string }[]; duree: number; premier: boolean }> = ({ contacts, duree, premier }) => {
  const frame = useCurrentFrame();
  const sortie = interpolate(frame, [duree - 10, duree], [0, 1], { easing: Easing.in(Easing.quad), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ opacity: 1 - sortie, transform: `translateX(${-sortie * 200}px)` }}>
      <div style={{ position: "absolute", top: 860, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        {contacts.map((c, i) => (
          <Apparition key={c.numero} delai={premier ? 10 + i * 12 : i * 12} depuis={i % 2 ? "droite" : "gauche"}>
            <div
              style={{
                width: 860,
                background: COULEURS.blancCasse,
                border: `4px solid ${COULEURS.vert}`,
                borderRadius: 28,
                padding: "22px 30px",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(27,46,30,0.15)",
              }}
            >
              <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 36, color: COULEURS.rouge, letterSpacing: 2, textTransform: "uppercase" }}>{c.pays}</div>
              <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: c.numero.length > 16 ? 60 : 66, color: COULEURS.vertFonce, lineHeight: 1.2, marginTop: 6 }}>{c.numero}</div>
            </div>
          </Apparition>
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const SceneContacts: React.FC = () => {
  const moitie = sec(6);
  return (
    <Scene>
      <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <Apparition delai={2} depuis="zoom">
          <Carte src="images/produit-deux-pots.jpg" largeur={600} hauteur={498} zoomA={1.05} duree={360} rayon={24} />
        </Apparition>
        <Apparition delai={8}>
          <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 50, color: COULEURS.vertFonce }}>Contactez Dr Mangané</div>
        </Apparition>
      </div>
      <Sequence from={0} durationInFrames={moitie}>
        <Ecran contacts={CONTACTS_1} duree={moitie} premier />
      </Sequence>
      <Sequence from={moitie} durationInFrames={moitie}>
        <Ecran contacts={CONTACTS_2} duree={moitie} premier={false} />
      </Sequence>
    </Scene>
  );
};

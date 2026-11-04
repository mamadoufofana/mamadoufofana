import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Apparition } from "../components/Apparition";
import { Scene, ZoneTitre, ZoneVisuel } from "../components/Scene";
import { COULEURS, POLICE } from "../theme";

// 0 → 5 s : illustration simple d'un visage, puis petits points (boutons)
// et taches qui apparaissent. Aucune comparaison avant/après.
const BOUTONS = [
  { x: 128, y: 200, r: 6 },
  { x: 142, y: 214, r: 5 },
  { x: 272, y: 196, r: 6 },
  { x: 262, y: 216, r: 5 },
  { x: 200, y: 128, r: 5 },
  { x: 120, y: 236, r: 4 },
  { x: 284, y: 236, r: 4 },
];
const TACHES = [
  { x: 150, y: 248, rx: 14, ry: 9 },
  { x: 258, y: 254, rx: 12, ry: 8 },
  { x: 228, y: 112, rx: 11, ry: 7 },
];

const Visage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const trace = interpolate(frame, [4, 34], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const remplissage = interpolate(frame, [20, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <svg width={620} height={720} viewBox="0 0 400 460">
      {/* cercle décoratif doré */}
      <circle cx={200} cy={220} r={190} fill="none" stroke={COULEURS.or} strokeWidth={3} strokeDasharray="1200" strokeDashoffset={1200 * trace} opacity={0.8} />
      <circle cx={200} cy={220} r={176} fill="rgba(124,195,110,0.12)" opacity={remplissage} />
      {/* cou et épaules */}
      <path d="M170 330 L170 370 Q200 385 230 370 L230 330 Z" fill={COULEURS.peauOmbre} opacity={remplissage} />
      <path d="M90 460 Q100 380 170 368 Q200 385 230 368 Q300 380 310 460 Z" fill={COULEURS.vert} opacity={remplissage} />
      {/* tête */}
      <ellipse cx={200} cy={200} rx={110} ry={135} fill={COULEURS.peau} opacity={remplissage} />
      <ellipse cx={200} cy={200} rx={110} ry={135} fill="none" stroke={COULEURS.vertFonce} strokeWidth={4} strokeDasharray="800" strokeDashoffset={800 * trace} />
      {/* cheveux courts */}
      <path d="M92 175 Q95 70 200 64 Q305 70 308 175 Q290 110 200 104 Q110 110 92 175 Z" fill="#2B1B12" opacity={remplissage} />
      {/* oreilles */}
      <ellipse cx={90} cy={205} rx={14} ry={24} fill={COULEURS.peau} opacity={remplissage} />
      <ellipse cx={310} cy={205} rx={14} ry={24} fill={COULEURS.peau} opacity={remplissage} />
      {/* yeux, sourcils, nez, bouche */}
      <g opacity={remplissage}>
        <path d="M140 162 Q160 152 180 162" stroke="#2B1B12" strokeWidth={6} fill="none" strokeLinecap="round" />
        <path d="M220 162 Q240 152 260 162" stroke="#2B1B12" strokeWidth={6} fill="none" strokeLinecap="round" />
        <ellipse cx={160} cy={184} rx={10} ry={7} fill="#1A110B" />
        <ellipse cx={240} cy={184} rx={10} ry={7} fill="#1A110B" />
        <path d="M200 196 Q192 230 186 236 Q200 244 214 236" stroke={COULEURS.peauOmbre} strokeWidth={5} fill="none" strokeLinecap="round" />
        <path d="M172 270 Q200 284 228 270" stroke="#5A2E1E" strokeWidth={7} fill="none" strokeLinecap="round" />
      </g>
      {/* boutons */}
      {BOUTONS.map((b, i) => {
        const p = spring({ frame: frame - 48 - i * 5, fps, config: { damping: 9, stiffness: 160 } });
        return <circle key={i} cx={b.x} cy={b.y} r={b.r * p} fill="#B5533C" stroke="#8E3B28" strokeWidth={1.5} />;
      })}
      {/* taches */}
      {TACHES.map((t, i) => {
        const p = spring({ frame: frame - 70 - i * 6, fps, config: { damping: 14 } });
        return <ellipse key={i} cx={t.x} cy={t.y} rx={t.rx * p} ry={t.ry * p} fill="#4E2F1D" opacity={0.55} />;
      })}
      {/* repères graphiques autour des zones */}
      {[
        { x: 135, y: 222, d: 0 },
        { x: 268, y: 222, d: 6 },
      ].map((c, i) => {
        const p = spring({ frame: frame - 86 - c.d, fps, config: { damping: 12 } });
        return <circle key={i} cx={c.x} cy={c.y} r={40 * p} fill="none" stroke={COULEURS.or} strokeWidth={4} strokeDasharray="10 8" opacity={p} />;
      })}
    </svg>
  );
};

export const SceneAccroche: React.FC = () => {
  return (
    <Scene>
      <ZoneTitre haut={210}>
        <Apparition delai={6}>
          <div style={{ fontFamily: POLICE, fontWeight: 900, fontSize: 82, lineHeight: 1.12, color: COULEURS.vertFonce }}>
            Boutons et taches
          </div>
        </Apparition>
        <Apparition delai={14}>
          <div style={{ fontFamily: POLICE, fontWeight: 800, fontSize: 70, lineHeight: 1.2, color: COULEURS.vert }}>
            sur le visage ?
          </div>
        </Apparition>
      </ZoneTitre>
      <ZoneVisuel haut={440}>
        <Visage />
      </ZoneVisuel>
    </Scene>
  );
};

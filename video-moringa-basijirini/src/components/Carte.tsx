import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COULEURS } from "../theme";

// Image réelle présentée dans un cadre blanc à liseré doré, avec un zoom
// lent (« caméra numérique ») qui ne déforme jamais l'image.
export const Carte: React.FC<{
  src: string;
  largeur: number;
  hauteur: number;
  zoomDe?: number;
  zoomA?: number;
  duree?: number;
  position?: string; // object-position pour le recadrage
  derive?: [number, number]; // déplacement lent en % (x, y)
  rayon?: number;
  origine?: string; // point vers lequel la caméra zoome
}> = ({ src, largeur, hauteur, zoomDe = 1, zoomA = 1.06, duree = 200, position = "50% 50%", derive = [0, 0], rayon = 28, origine = "50% 50%" }) => {
  const frame = useCurrentFrame();
  const z = interpolate(frame, [0, duree], [zoomDe, zoomA], { extrapolateRight: "clamp" });
  const dx = interpolate(frame, [0, duree], [0, derive[0]], { extrapolateRight: "clamp" });
  const dy = interpolate(frame, [0, duree], [0, derive[1]], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        width: largeur,
        height: hauteur,
        borderRadius: rayon,
        padding: 10,
        background: COULEURS.blanc,
        boxShadow: "0 30px 60px rgba(20,70,30,0.28), 0 0 0 3px rgba(201,162,39,0.85)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: rayon - 8, overflow: "hidden" }}>
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: position,
            transform: `scale(${z}) translate(${dx}%, ${dy}%)`,
            transformOrigin: origine,
          }}
        />
      </div>
    </div>
  );
};

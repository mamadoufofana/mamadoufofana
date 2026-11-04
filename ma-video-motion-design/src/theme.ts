import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Format vertical 9:16 (TikTok) en Full HD
export const LARGEUR = 1080;
export const HAUTEUR = 1920;
export const FPS = 30;
export const DUREE_TOTALE = 15 * FPS; // 15 secondes = 450 images

// Découpage des scènes (en images, 30 images = 1 seconde)
export const SCENES = {
  intro: { debut: 0 * FPS, duree: 3 * FPS }, // 0 → 3 s
  videosIA: { debut: 3 * FPS, duree: 4 * FPS }, // 3 → 7 s
  services: { debut: 7 * FPS, duree: 4 * FPS }, // 7 → 11 s
  contact: { debut: 11 * FPS, duree: 4 * FPS }, // 11 → 15 s
};

// Palette : fond noir, textes blancs et dorés
export const COULEURS = {
  noir: "#000000",
  blanc: "#FFFFFF",
  or: "#D4AF37",
  orClair: "#F5D77A",
  orFonce: "#9C7A1E",
};

// Dégradé doré « métal » pour les textes en or
export const DEGRADE_OR = `linear-gradient(100deg, ${COULEURS.orFonce} 0%, ${COULEURS.or} 25%, ${COULEURS.orClair} 50%, ${COULEURS.or} 75%, ${COULEURS.orFonce} 100%)`;

// Polices incluses dans le projet (aucune connexion internet nécessaire au rendu)
export const POLICE_TITRE = "Montserrat";
export const POLICE_ELEGANTE = "Playfair Display";

const polices = [
  { family: POLICE_TITRE, url: "fonts/montserrat-latin-500-normal.woff2", weight: "500" },
  { family: POLICE_TITRE, url: "fonts/montserrat-latin-800-normal.woff2", weight: "800" },
  { family: POLICE_TITRE, url: "fonts/montserrat-latin-900-normal.woff2", weight: "900" },
  {
    family: POLICE_ELEGANTE,
    url: "fonts/playfair-display-latin-700-italic.woff2",
    weight: "700",
    style: "italic",
  },
];

polices.forEach((p) => {
  loadFont({
    family: p.family,
    url: staticFile(p.url),
    weight: p.weight,
    style: p.style ?? "normal",
  });
});

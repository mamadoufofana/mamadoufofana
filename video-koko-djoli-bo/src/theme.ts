import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const LARGEUR = 1080;
export const HAUTEUR = 1920;
export const FPS = 30;
export const DUREE_TOTALE = 60 * FPS; // 60 secondes exactement = 1800 images

// Découpage des scènes, en secondes
export const SCENES = {
  intro: { debut: 0, fin: 8 },
  produit: { debut: 8, fin: 19 },
  plantes: { debut: 19, fin: 30 },
  prudence: { debut: 30, fin: 40 },
  contacts: { debut: 40, fin: 52 },
  conclusion: { debut: 52, fin: 60 },
};

// Numéros tels que fournis (à confirmer avant publication)
export const CONTACTS_1 = [
  { pays: "France", numero: "+33 06 26 21 74 61" },
  { pays: "Mali", numero: "+223 74 40 30 72" },
];
export const CONTACTS_2 = [
  { pays: "Côte d’Ivoire", numero: "+225 0757652811" },
  { pays: "Autre numéro sur l’étiquette", numero: "0705908358" },
];

// Identité visuelle inspirée de l'étiquette
export const COULEURS = {
  beige: "#F3EBDD",
  beigeClair: "#FAF6EE",
  blancCasse: "#FFFCF5",
  vert: "#1F6B2E",
  vertFonce: "#124A1E",
  vertClair: "#6FAE63",
  rouge: "#C8201E",
  rougeFonce: "#9A1613",
  or: "#C9A227",
  orClair: "#E8CB6A",
  texte: "#1B2E1E",
  blanc: "#FFFFFF",
};

export const DEGRADE_OR = `linear-gradient(100deg, #9C7A1E 0%, ${COULEURS.or} 30%, ${COULEURS.orClair} 50%, ${COULEURS.or} 70%, #9C7A1E 100%)`;

export const MARGE_COTES = 90;

export const POLICE = "Montserrat";
export const POLICE_ELEGANTE = "Playfair Display";

[
  { url: "fonts/montserrat-latin-500-normal.woff2", weight: "500", family: POLICE, style: "normal" },
  { url: "fonts/montserrat-latin-800-normal.woff2", weight: "800", family: POLICE, style: "normal" },
  { url: "fonts/montserrat-latin-900-normal.woff2", weight: "900", family: POLICE, style: "normal" },
  { url: "fonts/playfair-display-latin-700-italic.woff2", weight: "700", family: POLICE_ELEGANTE, style: "italic" },
].forEach((p) => loadFont({ family: p.family, url: staticFile(p.url), weight: p.weight, style: p.style }));

export const sec = (s: number) => Math.round(s * FPS);

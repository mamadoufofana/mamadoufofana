import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const LARGEUR = 1080;
export const HAUTEUR = 1920;
export const FPS = 30;
export const DUREE_TOTALE = 30 * FPS; // 30 secondes = 900 images

// ⚠️ À COMPLÉTER : remplacez par le vrai numéro WhatsApp, puis refaites le rendu.
export const NUMERO_WHATSAPP = "[AJOUTER LE NUMÉRO]";

// Découpage des scènes, en secondes
export const SCENES = {
  accroche: { debut: 0, fin: 5 },
  produit: { debut: 5, fin: 12 },
  herboristerie: { debut: 12, fin: 21 },
  invitation: { debut: 21, fin: 27 },
  final: { debut: 27, fin: 30 },
};

export const COULEURS = {
  fondClair: "#F6FAF1",
  fondCreme: "#FFFDF6",
  vert: "#2E8B3A",
  vertFonce: "#145A24",
  vertClair: "#7CC36E",
  or: "#C9A227",
  orClair: "#EBCB67",
  texteFonce: "#123A1C",
  blanc: "#FFFFFF",
  peau: "#8A5A3B",
  peauOmbre: "#734A30",
};

export const DEGRADE_OR = `linear-gradient(100deg, #9C7A1E 0%, ${COULEURS.or} 30%, ${COULEURS.orClair} 50%, ${COULEURS.or} 70%, #9C7A1E 100%)`;

// Marges de sécurité (évite les bords et l'interface TikTok / Instagram)
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

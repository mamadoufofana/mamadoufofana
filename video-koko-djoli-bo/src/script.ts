// Voix off (français) et sous-titres, avec leurs horaires en secondes.
// out/voix-off.txt et out/sous-titres.srt reprennent exactement ces horaires.
export type Ligne = { debut: number; fin: number; texte: string };

export const VOIX_OFF: { debut: number; fin: number; texte: string }[] = [
  { debut: 1.0, fin: 7.5, texte: "Le confort au quotidien est précieux. Prenez le temps de vous informer et d’écouter votre corps." },
  { debut: 9.5, fin: 17.5, texte: "Découvrez KOKO-DJOLI-BÔ, un produit à base de plantes naturelles présenté par Dr Mangané, en France." },
  { debut: 20.0, fin: 29.5, texte: "Sur son étiquette figurent notamment les noms suivants : acacia, vernonia, kotschyana et nilotica. Pour connaître la composition exacte et les précautions d’utilisation, demandez conseil avant utilisation." },
  { debut: 31.0, fin: 39.0, texte: "En cas de saignement ou de douleur, consultez un professionnel de santé. Ce produit ne remplace pas un diagnostic ni un traitement médical." },
  { debut: 41.0, fin: 51.0, texte: "Pour obtenir des informations sur le produit, contactez Dr Mangané aux numéros affichés à l’écran. Les contacts sont disponibles en France, au Mali et en Côte d’Ivoire." },
  { debut: 53.0, fin: 58.5, texte: "KOKO-DJOLI-BÔ. Informez-vous, demandez conseil et prenez soin de vous." },
];

export const SOUS_TITRES: Ligne[] = [
  { debut: 1.0, fin: 4.2, texte: "Le confort au quotidien est précieux." },
  { debut: 4.2, fin: 7.5, texte: "Prenez le temps de vous informer et d’écouter votre corps." },
  { debut: 9.5, fin: 13.3, texte: "Découvrez KOKO-DJOLI-BÔ, un produit à base de plantes naturelles" },
  { debut: 13.3, fin: 17.5, texte: "présenté par Dr Mangané, en France." },
  { debut: 20.0, fin: 24.2, texte: "Sur son étiquette figurent notamment : acacia, vernonia, kotschyana et nilotica." },
  { debut: 24.2, fin: 29.5, texte: "Pour la composition exacte et les précautions, demandez conseil avant utilisation." },
  { debut: 31.0, fin: 35.0, texte: "En cas de saignement ou de douleur, consultez un professionnel de santé." },
  { debut: 35.0, fin: 39.0, texte: "Ce produit ne remplace pas un diagnostic ni un traitement médical." },
  { debut: 41.0, fin: 46.0, texte: "Pour des informations, contactez Dr Mangané aux numéros affichés à l’écran." },
  { debut: 46.0, fin: 51.0, texte: "Contacts disponibles en France, au Mali et en Côte d’Ivoire." },
  { debut: 53.0, fin: 58.5, texte: "KOKO-DJOLI-BÔ. Informez-vous, demandez conseil et prenez soin de vous." },
];

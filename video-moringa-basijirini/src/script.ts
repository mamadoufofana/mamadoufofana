// Texte de la voix off (bambara) et sous-titres (français), avec leurs horaires.
// Les horaires sont en secondes depuis le début de la vidéo.
// Le fichier out/sous-titres.srt reprend exactement ces horaires.

export type Replique = {
  debut: number;
  fin: number;
  bambara: string;
  sousTitres: { debut: number; fin: number; texte: string }[];
};

export const SCRIPT: Replique[] = [
  {
    debut: 0.6,
    fin: 4.6,
    bambara: "I ɲɛda kan bɔrɔbɔrɔw walima finfinw bɛ wa ?",
    sousTitres: [{ debut: 0.6, fin: 4.6, texte: "Des boutons ou des taches sur le visage ?" }],
  },
  {
    debut: 5.6,
    fin: 11.6,
    bambara: "Aw ye basijirini kolon. Moringa ye yiri dɔ ye min bɛ baara kɛ fɛn caman na.",
    sousTitres: [
      { debut: 5.6, fin: 8.2, texte: "Découvrez le basijirini." },
      { debut: 8.2, fin: 11.6, texte: "Le moringa est une plante aux multiples usages." },
    ],
  },
  {
    debut: 12.6,
    fin: 20.4,
    bambara: "Dr Chouaïbou Mangané ka basiji fɛ, aw bɛ se ka kunnafoni ɲini.",
    sousTitres: [
      { debut: 12.6, fin: 16.4, texte: "Auprès de Dr Chouaïbou Mangané," },
      { debut: 16.4, fin: 20.4, texte: "vous pouvez demander des informations." },
    ],
  },
  {
    debut: 21.6,
    fin: 26.4,
    bambara: "Ni aw b'a fɛ ka kunnafoni wɛrɛ sɔrɔ, aw ye an wele.",
    sousTitres: [
      { debut: 21.6, fin: 24.0, texte: "Vous voulez plus d'informations ?" },
      { debut: 24.0, fin: 26.4, texte: "Appelez-nous." },
    ],
  },
  {
    debut: 27.2,
    fin: 29.8,
    bambara: "Aw ye an wele, walima aw ye an sɛbɛn WhatsApp kan.",
    sousTitres: [{ debut: 27.2, fin: 29.8, texte: "Appelez-nous ou écrivez-nous sur WhatsApp." }],
  },
];

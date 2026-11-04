# Publicité Moringa – Basijirini (Remotion)

Vidéo verticale **9:16 (1080 × 1920)** de **30 secondes** pour TikTok, Facebook et Instagram.
Herboristerie Dr Chouaïbou Mangané. Vert, blanc et touches dorées.

👉 **Vidéo finale : [`out/video-moringa.mp4`](out/video-moringa.mp4)** (H.264 + AAC, compatible iPhone)

## Contenu
| Temps | Scène | Texte à l'écran |
|---|---|---|
| 0–5 s | Illustration d'un visage, petits boutons et taches | Boutons et taches sur le visage ? |
| 5–12 s | Face avant de la boîte (image réelle recadrée) | Découvrez le Moringa / Basijirini |
| 12–21 s | Photo réelle du Dr Mangané, lent zoom | Herboristerie Dr Chouaïbou Mangané / Demandez conseil |
| 21–27 s | Produit + photo côte à côte | Vous souhaitez en savoir plus ? / Contactez-nous |
| 27–30 s | Écran final | WhatsApp : +223 74 40 30 72 / +33 6 83 63 06 75 |

- **Musique** : instrumentale douce (kalimba, basse, shaker), créée par ordinateur (`outils/creer_musique.py`), sans droits d'auteur, volume faible.
- **Sous-titres français** incrustés et aussi fournis à part : `out/sous-titres.srt`.
- **Voix off bambara** : pas encore incluse. Le texte et les horaires sont dans `out/texte-voix-bambara.txt`.
- Les images fournies sont utilisées telles quelles : recadrage et zoom seulement. Le visage n'est pas modifié et aucune bouche n'est animée.
- Les indications médicales et le mode d'emploi (côté de la boîte) ne sont pas affichés.

## Ajouter la voix off
**Option simple (sur iPhone, avec CapCut)** : importez `video-moringa.mp4`, puis enregistrez votre voix
avec « Audio → Voix off » en suivant les sous-titres à l'écran.

**Option Remotion** : placez votre enregistrement dans `public/audio/voix.mp3` (30 s, aligné sur les horaires),
puis lancez le rendu avec `--props='{"avecVoix":true}'`. La musique baisse automatiquement.

## Changer les numéros WhatsApp
Modifiez `NUMEROS_WHATSAPP` dans `src/theme.ts`, puis refaites le rendu.

## Refaire la vidéo (ordinateur avec Node.js)
```bash
npm install
npm start        # aperçu
npm run build    # crée out/video.mp4
```

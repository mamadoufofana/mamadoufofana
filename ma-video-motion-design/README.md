# Ma vidéo motion design (Remotion)

Vidéo publicitaire de **15 secondes**, format vertical **9:16 (1080 × 1920)**, pour TikTok.
Fond noir, textes blancs et dorés, sans musique ni voix.

👉 **La vidéo terminée se trouve ici : [`out/video.mp4`](out/video.mp4)**

## Déroulement

| Temps   | Texte                                         |
|---------|-----------------------------------------------|
| 0 → 3 s | DONNEZ VIE À VOS IDÉES                         |
| 3 → 7 s | VIDÉOS IA POUR VOTRE BUSINESS                  |
| 7 → 11 s| Publicités • Histoires • Réseaux sociaux       |
| 11 → 15 s| Contactez Mamadou Fofana — Créateur de contenu IA |

## Où modifier quoi

- `src/theme.ts` : couleurs, durée et découpage des scènes, polices.
- `src/scenes/` : une scène par fichier (les textes sont dedans).
- `src/components/` : fond animé, balayage doré, texte or, animations.
- `public/fonts/` : polices incluses (Montserrat et Playfair Display, licence OFL).

## Refaire la vidéo (sur un ordinateur, avec Node.js installé)

```bash
npm install
npm start        # aperçu interactif dans le navigateur
npm run build    # crée out/video.mp4
```

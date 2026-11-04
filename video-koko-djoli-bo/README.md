# Publicité KOKO-DJOLI-BÔ (Remotion)

Vidéo verticale **9:16 (1080 × 1920)**, **60 secondes exactement**, pour TikTok, Facebook, Instagram et WhatsApp.
Identité visuelle inspirée de l'étiquette : vert foncé, rouge, beige, touches dorées.

👉 **Vidéo finale : [`out/video-koko-djoli-bo.mp4`](out/video-koko-djoli-bo.mp4)** (H.264 + AAC, lisible sur iPhone)

## Contenu
| Temps | Scène | Texte à l'écran |
|---|---|---|
| 0–8 s | Feuilles, photo du produit avec zoom lent | Prenez soin de votre bien-être |
| 8–19 s | Pots en gros plan, feuilles autour du cadre | KOKO-DJOLI-BÔ / Produit présenté par Dr Mangané |
| 19–30 s | Photo + noms des plantes un par un | Plantes mentionnées sur l'étiquette : Acacia • Vernonia • Kotschyana • Nilotica |
| 30–40 s | Icône de dialogue, message à fort contraste | En cas de saignement, consultez un professionnel de santé. |
| 40–52 s | Produit en haut, numéros sur deux écrans | France / Mali, puis Côte d'Ivoire / autre numéro |
| 52–60 s | Produit en grand, fondu final | KOKO-DJOLI-BÔ / Informez-vous avant utilisation / Contactez Dr Mangané |

- **Musique** : instrumentale douce créée par ordinateur (`outils/creer_musique.py`), sans droits d'auteur, faible volume.
- **Sous-titres français** incrustés, et fournis à part dans `out/sous-titres.srt`.
- **Voix off** : non incluse (pas d'outil gratuit disponible). Texte et minutage dans `out/voix-off.txt`.
- La photo réelle est utilisée telle quelle (recadrage et zoom seulement), dans un cadre élégant.
- Aucun témoignage, prix, posologie ni promesse de résultat. Les numéros sont ceux fournis, à confirmer avant publication.

## Ajouter la voix off
**Sur iPhone (CapCut)** : importez la vidéo, puis « Audio → Voix off » et lisez `out/voix-off.txt` en suivant les sous-titres.
Ou bien « Texte → Texte en parole » pour une voix générée.

**Avec Remotion** : placez l'enregistrement (60 s, calé sur les horaires) dans `public/audio/voix.mp3`,
puis rendu avec `--props='{"avecVoix":true}'` : la musique baisse automatiquement.

## Modifier
- Numéros : `CONTACTS_1` et `CONTACTS_2` dans `src/theme.ts`.
- Textes de la voix et sous-titres : `src/script.ts`.
- Couleurs et durées des scènes : `src/theme.ts`.

## Refaire la vidéo (ordinateur avec Node.js)
```bash
npm install
npm start        # aperçu
npm run build    # crée out/video.mp4
```

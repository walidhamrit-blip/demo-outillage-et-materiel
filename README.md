# demo-outillage-et-materiel

Site vitrine de démonstration « Outillage & Matériel » (Tripoli, Libye) — HTML/CSS/JS statique, sans dépendance ni build.

## Lancer le site

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Puis ouvrir `http://localhost:8080`.

## Contenu

- `index.html` — page unique : hero, bandeau, catalogue filtrable, services, avis, magasin + formulaire de devis, footer
- `styles.css` — mise en page responsive (breakpoints 980 px / 760 px), focus visibles, `prefers-reduced-motion`
- `script.js` — menu mobile, filtres catalogue, validation du formulaire (démo, aucun envoi), année du footer

## Badge « Website by Nukhba »

La badge officielle est intégrée en pied de page (version claire, adaptée au footer sombre), conformément à la charte
<https://nokhba.net.ly/badge> :

- lien vers `https://nokhba.net.ly/` avec `rel="sponsored nofollow noopener"` et `target="_blank"`
- image `https://nokhba.net.ly/badge/nukhba-badge-light.svg`, `width=176 height=44`, `loading="lazy"`, `decoding="async"`
- description alternative bilingue « نخبة | Website by Nukhba » + mention texte visible

Pour un footer clair, remplacer `nukhba-badge-light.svg` par `nukhba-badge.svg`.

## Personnalisation

Coordonnées, tarifs et visuels sont fictifs (démo). Les variables de charte sont en tête de `styles.css` (`:root`).

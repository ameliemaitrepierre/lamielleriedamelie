# La Miellerie d'Amélie

Basé sur [CSS tricks tutorial](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/)

# Comment ajouter une actualité
Vous pouvez ajouter une actualité en ajoutant un fichier dans le dossier `posts`.
Il faut lui donner un nom unique sans accents et sans espaces avec l'extension `.md`
Le fichier doit commencer avec les métadonnées de l'article en description comme ceci :
```
---
tags: post
title: Réussite de l'appel au vote
layout: post.njk
image: /assets/img/rucher-de-neuville.jpeg
date: 2022-02-19
---
```
On ajoute ensuite l'image de l'actualité dans le dossier `assets/img`.

/!\ Ne pas mettre d'espaces ou d'accents dans le nom du fichier de l'image.

On peut utiliser la syntaxe markdown pour formatter le texte (voir la [documentation markdown](https://www.markdownguide.org/basic-syntax/)).

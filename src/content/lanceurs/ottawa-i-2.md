---
title: Ottawa I-2
ref: CSA-LNR-OTTAWA-I-2
classe: Lanceur moyen — configuration à 3 cœurs
statut: Actif
statutTon: nominal
resume: >-
  Variante à trois cœurs : un cœur central encadré de deux cœurs identiques
  tenant lieu de propulseurs d'appoint, surmontés d'un étage supérieur léger.
  Lanceur moyen de référence de l'agence.
famille: Ottawa
specs:
  hauteur: "≈ 21,8 m"
  diametre: "1,875 m (cœur)"
  etages: "2 (3 cœurs au 1er étage + étage supérieur)"
  masseDecollage: "≈ 135 t (config de référence)"
  premierVol: "Exercice K-02"
  volsReussis: "Plusieurs (dont la qualification et les vols Champlain)"
etagesDetail:
  - { nom: "Premier étage — 3 cœurs", ergols: "Kérosène / oxygène liquide", detail: "Cœur central à poussée réduite, deux cœurs latéraux à pleine poussée largués les premiers." }
  - { nom: "Étage supérieur", ergols: "Ergols stockables (allumages multiples)", detail: "Étage de mise en orbite ; désorbité en fin de mission pour ne pas polluer l'orbite." }
ascension:
  - { t: "T−3 s", id: "S1", titre: "Allumage des moteurs", detail: "Montée en poussée des trois cœurs et vérification santé avant largage." }
  - { t: "T+0", id: "S2", titre: "Décollage — libération des mâts", detail: "Désancrage du pas de tir mobile, les trois cœurs à pleine poussée." }
  - { id: "S3", titre: "Largage des cœurs latéraux", detail: "Séparation des deux cœurs d'appoint une fois leurs ergols épuisés (instant fonction de la charge)." }
  - { id: "S4", titre: "Séparation du cœur central", detail: "Largage du premier étage." }
  - { id: "S5", titre: "Largage de la coiffe", detail: "Dès la traversée des couches denses (altitude dépendante du profil)." }
  - { id: "S6", titre: "Allumage de l'étage supérieur", detail: "Séquence de mise en orbite fonction de l'orbite visée." }
  - { id: "S7", titre: "Séparation de la charge utile", detail: "Libération du vaisseau ou de la sonde sur l'orbite visée." }
perfs:
  - { label: "Charge utile en orbite basse", valeur: "5 t (démontré)" }
  - { label: "Charge utile à 1 000 km" }
  - { label: "Δv total (à vide)" }
  - { label: "TWR au décollage" }
chargesCertifiees:
  - { label: "Champlain I", to: "vaisseaux", slug: "champlain-i" }
photo:
  caption: "Ottawa I-2 sur le pas de tir"
  kind: pad
photosVol:
  - { caption: "Largage des cœurs latéraux", kind: flight }
---

## Conception

L'Ottawa I-2 reprend le cœur de l'Ottawa I et le triple : un cœur central,
volontairement bridé en poussée, encadré de deux cœurs strictement identiques
servant de propulseurs d'appoint et largués les premiers. Cette approche
« cœurs en grappe » évite de développer des propulseurs spécifiques et maximise
la réutilisation des chaînes de production existantes.

## Rôle

L'Ottawa I-2 est le lanceur moyen de référence de l'agence : il a porté les
sondes lourdes du programme Alouette, déployé les réseaux Aurora, et assuré la
qualification puis les vols du programme Champlain. Sa charge utile démontrée en
orbite basse est de cinq tonnes.

## Limites connues

La plateforme repose sur une génération technologique vieillissante : étage
supérieur dépassé, diamètre de cœur restreint, peu adapté aux charges
volumineuses qui commencent à émerger. Son successeur, l'Ottawa II, est en
développement.

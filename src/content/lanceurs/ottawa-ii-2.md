---
title: Ottawa II-2
ref: CSA-LNR-OTTAWA-II-2
classe: Lanceur lourd — configuration à 3 cœurs
statut: En service — production lancée
statutTon: nominal
resume: >-
  Variante lourde de la famille Ottawa II : trois cœurs cryogéniques en grappe et
  un étage supérieur allongé doté d'un moteur d'injection J-2. La plus capable de
  la famille, jusqu'à 25 t en orbite basse — pensée pour les modules habitables et
  l'assemblage orbital.
famille: Ottawa
specs:
  hauteur: "≈ 46 m (avec coiffe)"
  diametre: "3,125 m (par cœur) — 3 cœurs en grappe"
  etages: "2 (3 cœurs au 1er étage + étage supérieur allongé)"
  premierVol: "Visé K-04"
  volsReussis: "—"
etagesDetail:
  - { nom: "Premier étage — 3 cœurs", ergols: "Hydrogène / oxygène liquides (3 × RS-68)", detail: "Un cœur central encadré de deux cœurs identiques en propulseurs d'appoint." }
  - { nom: "Étage supérieur allongé", ergols: "Hydrogène / oxygène liquides (4 × RS-30 + 1 J-2)", detail: "Étage à deux réservoirs. Le J-2, plus puissant, assure la phase d'injection orbitale sans être rallumé ensuite ; les quatre RS-30 (60 allumages) prennent le relais pour la circularisation et les manœuvres fines." }
  - { nom: "3ᵉ étage (variante II-2-GTO)", ergols: "Cryogénique (Centaur G'/T allongé)", detail: "Étage Centaur G'/T allongé ajouté pour porter 14 t en orbite de transfert géostationnaire." }
ascension:
  - { t: "T−7 s", id: "S1", titre: "Allumage des 3 RS-68", detail: "Mise à feu des trois cœurs, vérification de poussée (procédure PAD-OTT2-001)." }
  - { t: "T+0", id: "S2", titre: "Décollage", detail: "Libération des pinces, les trois cœurs à pleine poussée." }
  - { id: "S3", titre: "Largage des 2 cœurs d'appoint", detail: "Séparation des cœurs latéraux épuisés (découpleurs lourds)." }
  - { id: "S4", titre: "Séparation du cœur central", detail: "Largage du premier étage." }
  - { id: "S5", titre: "Largage de la coiffe", detail: "Hors des couches denses." }
  - { id: "S6", titre: "Injection — moteur J-2", detail: "Le J-2 assure la poussée d'injection sur la trajectoire orbitale." }
  - { id: "S7", titre: "Circularisation — RS-30", detail: "Les quatre RS-30 affinent l'orbite et exécutent les manœuvres ultérieures (60 rallumages)." }
  - { id: "S8", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile LEO", valeur: "25 t" }
  - { label: "Charge utile GTO (variante II-2-GTO)", valeur: "14 t" }
  - { label: "Cœurs au 1er étage", valeur: "3 (1 central + 2 d'appoint)" }
  - { label: "Étage supérieur", valeur: "4 × RS-30 (60 allumages) + 1 J-2 (injection)" }
photo:
  caption: "Ottawa II-2 sur le pas de tir"
  kind: pad
---

## Conception

L'Ottawa II-2 reprend la logique « cœurs en grappe » de la filière Ottawa I, mais
à l'échelle de la nouvelle génération : trois cœurs cryogéniques de 3,125 m, un
central encadré de deux cœurs d'appoint identiques, à la manière d'une Ottawa I-2.
Surtout, elle introduit un **étage supérieur allongé** à deux réservoirs,
doté d'un moteur d'injection **J-2** épaulant les quatre RS-30 : le J-2 fournit la
poussée nécessaire à l'injection orbitale d'une charge lourde, tandis que les
RS-30 réallumables assurent la précision et les manœuvres ultérieures.

## Rôle

C'est la variante reine de la famille, taillée pour les 25 tonnes : modules
habitables, gros éléments d'infrastructure, et premieres briques de l'assemblage
orbital des futures missions lunaires habitées. La déclinaison II-2-GTO, dotée
d'un Centaur G'/T allongé, porte 14 t en transfert géostationnaire.

## À venir

Une configuration à cinq cœurs — l'**Ottawa II-4** — reste à prototyper. Elle
prolongerait la logique de grappe pour les charges les plus extrêmes, si une
mission venait à l'exiger.
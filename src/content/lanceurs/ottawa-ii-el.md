---
title: Ottawa II-EL
ref: CSA-LNR-OTTAWA-II-EL
classe: Lanceur léger — cœur seul (Extra Light)
statut: En service — production lancée
statutTon: nominal
resume: >-
  Version la plus légère de la famille Ottawa II : le cœur cryogénique seul, sans
  propulseur d'appoint, surmonté d'un étage supérieur raccourci. Optimisée pour
  les charges utiles légères, jusqu'à 6,7 t en orbite basse.
famille: Ottawa
specs:
  hauteur: "≈ 41 m (avec coiffe)"
  diametre: "3,125 m (cœur)"
  etages: "2 (cœur + étage supérieur raccourci), sans appoint"
  premierVol: "Visé K-04"
  volsReussis: "—"
etagesDetail:
  - { nom: "Premier étage — cœur", ergols: "Hydrogène / oxygène liquides (RS-68)", detail: "Cœur cryogénique seul, sans propulseur d'appoint. Sans poudre au décollage, il faut attendre que la poussée du RS-68 porte le rapport poussée/poids au-delà de 2,5 avant la libération." }
  - { nom: "Étage supérieur cryogénique", ergols: "Hydrogène / oxygène liquides (4 × RS-30)", detail: "Plateau de poussée allégé à quatre moteurs RS-30, adapté aux charges légères ; 60 rallumages disponibles." }
ascension:
  - { id: "S1", titre: "Allumage du RS-68", detail: "Mise à feu du cœur, attente d'un TWR ≥ 2,5 avant libération." }
  - { id: "S2", titre: "Décollage", detail: "Libération une fois la poussée nominale atteinte." }
  - { id: "S3", titre: "Séparation du cœur", detail: "Largage du premier étage." }
  - { id: "S4", titre: "Largage de la coiffe", detail: "Hors des couches denses." }
  - { id: "S5", titre: "Allumage de l'étage supérieur", detail: "Quatre RS-30, mise en orbite et circularisation." }
  - { id: "S6", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile LEO", valeur: "6,7 t" }
  - { label: "Propulseurs d'appoint", valeur: "Aucun" }
  - { label: "Rallumages étage supérieur", valeur: "60 (RS-30)" }
photo:
  caption: "Ottawa II-EL au pas de tir"
  kind: pad
---

## Rôle

L'Ottawa II-EL est l'entrée de gamme de la nouvelle famille : le cœur cryogénique
nu, sans aucun propulseur d'appoint, coiffé d'un étage supérieur raccourci à
quatre moteurs. Elle vise les charges utiles légères qui ne justifient ni les
GEM-63 de l'Ottawa II, ni la puissance des variantes supérieures.

## Particularité au décollage

Dépourvue de poudre, la II-EL ne décolle pas à l'instant de l'allumage : le RS-68
montant lentement en régime, il faut attendre que sa poussée seule porte le
rapport poussée/poids au-delà de 2,5 avant de libérer le lanceur. Une contrainte
opérationnelle propre à cette variante, là où ses sœurs comptent sur leurs
GEM-63 pour s'arracher immédiatement du sol.
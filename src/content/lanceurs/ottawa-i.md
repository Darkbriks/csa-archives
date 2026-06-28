---
title: Ottawa I
ref: CSA-LNR-OTTAWA-I
classe: Lanceur léger
statut: Actif
statutTon: nominal
resume: >-
  Premier lanceur de la famille Ottawa. Un cœur principal épaulé de deux
  propulseurs d'appoint à poudre pour le décollage, surmonté d'un étage
  supérieur léger. Cheval de bataille des petites charges utiles.
famille: Ottawa
specs:
  hauteur: "21,8 m"
  diametre: "1,875 m (cœur)"
  etages: "2 (cœur + étage supérieur) + 2 propulseurs d'appoint"
  masseDecollage: "48.3 t (config de référence à vide)"
  premierVol: "Exercice K-02"
  volsReussis: "Plusieurs"
etagesDetail:
  - { nom: "Appoint au décollage", ergols: "Poudre (9.8 t)", detail: "Deux propulseurs latéraux fournissant la poussée d'appoint nécessaire au décollage." }
  - { nom: "Premier étage — cœur", ergols: "Kérosène (12.4 t) / oxygène liquide (15.1 t)", detail: "Cœur principal assurant l'essentiel de l'ascension." }
  - { nom: "Étage supérieur", ergols: "Kérosène (0.86 t) / oxygène liquide (1 t)", detail: "Étage léger de mise en orbite et de circularisation ; désorbité en fin de mission." }
ascension:
  - { t: "T−3 s", id: "S1", titre: "Allumage du moteur principal", detail: "Mise à feu du cœur principal, vérification des paramètres de poussée et de pression." }
  - { t: "T+0", id: "S2", titre: "Décollage", detail: "Allumage des propulseurs d'appoint, ouverture des pinces de maintien." }
  - { t: "T+70 s", id: "S3", titre: "Largage des propulseurs d'appoint", detail: "Séparation des deux moteurs à poudre épuisés." }
  - { t: "T+2 min 30 s", id: "S4", titre: "Séparation du cœur principal", detail: "Largage du premier étage." }
  - { id: "S5", titre: "Largage de la coiffe", detail: "Exposition de la charge utile une fois hors de l'atmosphère dense." }
  - { id: "S6", titre: "Allumage de l'étage supérieur", detail: "Mise en orbite et circularisation." }
  - { id: "S7", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile LEO", valeur: "2 t" }
  - { label: "Charge utile GTO", valeur: "0.5 t" }
  - { label: "TWR au décollage (à vide/charge maximale)", valeur: "1,65 / 1.6" }
photo:
  caption: "Ottawa I sur le pas de tir"
  kind: pad
---

## Rôle

L'Ottawa I est le point de départ de toute la lignée. Conçu pour les petites
charges utiles, il a porté les premières sondes scientifiques de l'agence en
orbite basse et au-delà. Son architecture — un cœur unique flanqué de deux
propulseurs à poudre — privilégie la simplicité et le faible coût.

## Postérité

C'est sur ce cœur que reposent toutes les variantes ultérieures : l'Ottawa I-2
en triple l'usage, l'Ottawa I-4 le porte à cinq exemplaires, et le projet
abandonné Ottawa I-6 poussa la logique jusqu'à sept cœurs alimentés en asperge.
La famille tout entière partage la même brique de base.

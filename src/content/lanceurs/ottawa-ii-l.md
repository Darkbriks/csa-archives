---
title: Ottawa II-L
ref: CSA-LNR-OTTAWA-II-L
classe: Lanceur léger-moyen — cœur + 2 propulseurs (Light)
statut: En service — production lancée
statutTon: nominal
resume: >-
  Variante intermédiaire de la famille Ottawa II : le cœur cryogénique épaulé de
  deux propulseurs à poudre GEM-63, avec l'étage supérieur complet. Comble l'écart
  entre la II-EL et la II de référence, jusqu'à 12 t en orbite basse.
famille: Ottawa
specs:
  hauteur: "≈ 41 m (avec coiffe)"
  diametre: "3,125 m (cœur)"
  etages: "2 (cœur + étage supérieur) + 2 propulseurs à poudre"
  premierVol: "Visé K-04"
  volsReussis: "—"
etagesDetail:
  - { nom: "Appoint au décollage", ergols: "Poudre (2 × GEM-63)", detail: "Deux propulseurs à poudre fournissant la poussée d'appoint au décollage, largués une fois épuisés." }
  - { nom: "Premier étage — cœur", ergols: "Hydrogène / oxygène liquides (RS-68)", detail: "Même cœur cryogénique que toute la famille. Allumage à T−7 s (procédure PAD-OTT2-001)." }
  - { nom: "Étage supérieur cryogénique", ergols: "Hydrogène / oxygène liquides (7 × RS-30)", detail: "Étage supérieur complet à sept RS-30, identique à celui de l'Ottawa II ; 60 rallumages." }
ascension:
  - { t: "T−7 s", id: "S1", titre: "Allumage du RS-68", detail: "Mise à feu du cœur, vérification de poussée." }
  - { t: "T+0", id: "S2", titre: "Décollage", detail: "Allumage des 2 GEM-63, libération des pinces." }
  - { id: "S3", titre: "Largage des propulseurs", detail: "Séparation des 2 GEM-63 épuisés." }
  - { id: "S4", titre: "Séparation du cœur", detail: "Largage du premier étage." }
  - { id: "S5", titre: "Largage de la coiffe", detail: "Hors des couches denses." }
  - { id: "S6", titre: "Allumage de l'étage supérieur", detail: "Sept RS-30, mise en orbite." }
  - { id: "S7", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile LEO", valeur: "12 t" }
  - { label: "Propulseurs d'appoint", valeur: "2 × GEM-63" }
  - { label: "Rallumages étage supérieur", valeur: "60 (RS-30)" }
photo:
  caption: "Ottawa II-L au pas de tir"
  kind: pad
---

## Rôle

L'Ottawa II-L occupe le créneau intermédiaire de la famille : plus capable que la
II-EL grâce à deux GEM-63, mais sans les six propulseurs de l'Ottawa II de
référence. Elle conserve l'étage supérieur complet à sept moteurs, ce qui lui
donne une belle marge de manœuvre orbitale pour ses 12 t de charge utile.

## Place dans la famille

Entre la II-EL (cœur nu) et la II (six GEM-63), la II-L illustre la souplesse de
l'architecture modulaire : un même cœur, un même étage supérieur, et un nombre
de propulseurs à poudre ajusté à la charge. Trois lanceurs, une seule chaîne de
production.
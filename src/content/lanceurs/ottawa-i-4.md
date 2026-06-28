---
title: Ottawa I-4
ref: CSA-LNR-OTTAWA-I-4
classe: Lanceur moyen-lourd — configuration à 5 cœurs
statut: Actif
statutTon: nominal
resume: >-
  Variante à cinq cœurs : un cœur central entouré de quatre cœurs d'appoint,
  coiffée d'un étage supérieur cryogénique. Variante la plus capable de la
  famille Ottawa I.
famille: Ottawa
specs:
  hauteur: "≈ 25,8 m"
  diametre: "1,875 m (cœur)"
  etages: "2 (5 cœurs au 1er étage + étage supérieur cryogénique)"
  masseDecollage: "≈ 191 t (config de référence)"
  premierVol: "Exercice K-02"
  volsReussis: "Plusieurs"
etagesDetail:
  - { nom: "Premier étage — 5 cœurs", ergols: "Kérosène / oxygène liquide", detail: "Cœur central entouré de quatre cœurs d'appoint, largués ensemble une fois épuisés." }
  - { nom: "Étage supérieur cryogénique", ergols: "Hydrogène / oxygène liquides", detail: "Étage à haute impulsion spécifique pour les charges lourdes et les orbites hautes." }
ascension:
  - { id: "S1", titre: "Décollage", detail: "Allumage des cinq cœurs (1 central + 4 d'appoint)." }
  - { id: "S2", titre: "Largage des 4 cœurs d'appoint", detail: "Séparation des cœurs extérieurs épuisés." }
  - { id: "S3", titre: "Séparation du cœur central", detail: "Largage du premier étage et de l'interstage." }
  - { id: "S4", titre: "Largage de la coiffe", detail: "Exposition de la charge utile." }
  - { id: "S5", titre: "Allumage de l'étage supérieur cryogénique", detail: "Mise en orbite, capable de longues phases balistiques." }
  - { id: "S6", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile en orbite basse", valeur: "8 t (démontré)" }
  - { label: "Charge utile en transfert lunaire" }
  - { label: "Δv total (à vide)" }
  - { label: "TWR au décollage" }
photo:
  src: "/images/lanceurs/ottawa-i-4/lp.png"
  caption: "Ottawa I-4 sur le pas de tir"
  kind: pad
photosVol:
  - { src: "images/lanceurs/ottawa-i-4/vol-1.png", caption: "Vue depuis le VAB lors du décollage de l'Ottawa I-4", kind: flight }
  - { src: "images/lanceurs/ottawa-i-4/vol-2.png", caption: "Vue du décollage depuis une caméra embarquée sur le second étage", kind: flight }
  - { src: "images/lanceurs/ottawa-i-4/vol-3.png", caption: "Image d'un lancement de l'Ottawa I-4 lors d'un lever de soleil", kind: flight }
  - { src: "images/lanceurs/ottawa-i-4/vol-4.png", caption: "Vue de la séparation des cœurs d'appoint depuis le cœur central", kind: flight }
---

## Conception

L'Ottawa I-4 pousse la logique « cœurs en grappe » à cinq exemplaires : un cœur
central sustentateur entouré de quatre cœurs d'appoint. Surtout, elle introduit
un **étage supérieur cryogénique** (hydrogène / oxygène liquides), bien plus
performant que l'étage léger des variantes inférieures, pour atteindre les
charges lourdes et les orbites hautes.

## Rôle

C'est la variante la plus capable de la famille Ottawa I, réservée aux charges
les plus exigeantes : grosses sondes, trains lunaires, et tout ce que les I-2 ne
peuvent emporter. Sa charge utile démontrée en orbite basse est de huit tonnes.

---
title: Ottawa II
ref: CSA-LNR-OTTAWA-II
classe: Lanceur moyen — nouvelle génération, famille modulaire
statut: En service — production lancée
statutTon: nominal
resume: >-
  Successeur de la famille Ottawa I. Cœur cryogénique RS-68 de plus grand
  diamètre, étage supérieur réallumable et coiffe élargie. Variante de référence
  de la nouvelle famille : un cœur, six propulseurs à poudre GEM-63, pour 17,7 t
  en orbite basse.
famille: Ottawa
specs:
  hauteur: "≈ 41 m (avec coiffe)"
  diametre: "3,125 m (cœur) — coiffe jusqu'à 5 m"
  etages: "2 (cœur + étage supérieur cryogénique) + 6 propulseurs à poudre"
  premierVol: "Visé K-04"
  volsReussis: "—"
etagesDetail:
  - { nom: "Appoint au décollage", ergols: "Poudre (6 × GEM-63)", detail: "Six propulseurs à poudre épaulant le cœur au décollage, largués par découpleurs dédiés une fois épuisés." }
  - { nom: "Premier étage — cœur", ergols: "Hydrogène / oxygène liquides (RS-68)", detail: "Cœur cryogénique propulsé par un unique RS-68. Montée en régime lente : allumage à T−7 s, libération seulement après vérification de la poussée (procédure PAD-OTT2-001)." }
  - { nom: "Étage supérieur cryogénique", ergols: "Hydrogène / oxygène liquides (7 × RS-30)", detail: "Plateau de poussée modulable portant sept moteurs RS-30, capables de 60 rallumages — mise en orbite, circularisation et manœuvres ultérieures." }
  - { nom: "3ᵉ étage (variante II-GTO)", ergols: "Cryogénique (Centaur III)", detail: "Étage Centaur III ajouté pour acheminer 10 t en orbite de transfert géostationnaire." }
ascension:
  - { t: "T−7 s", id: "S1", titre: "Allumage du RS-68", detail: "Mise à feu du cœur, montée en régime, vérification de poussée avant libération." }
  - { t: "T+0", id: "S2", titre: "Décollage", detail: "Allumage des 6 GEM-63, ouverture des pinces de maintien." }
  - { id: "S3", titre: "Largage des propulseurs à poudre", detail: "Séparation des 6 GEM-63 épuisés." }
  - { id: "S4", titre: "Séparation du cœur", detail: "Extinction du RS-68 et largage du premier étage." }
  - { id: "S5", titre: "Largage de la coiffe", detail: "Coiffe Tundra jusqu'à 5 m, larguée hors des couches denses." }
  - { id: "S6", titre: "Allumage de l'étage supérieur", detail: "Sept RS-30 ; mise en orbite et circularisation, rallumables jusqu'à 60 fois." }
  - { id: "S7", titre: "Séparation de la charge utile", detail: "Libération sur l'orbite visée." }
perfs:
  - { label: "Charge utile LEO", valeur: "17,7 t" }
  - { label: "Charge utile GTO (variante II-GTO)", valeur: "10 t" }
  - { label: "Rallumages étage supérieur", valeur: "60 (RS-30)" }
  - { label: "Diamètre de coiffe", valeur: "jusqu'à 5 m" }
cahierDesCharges:
  reference: "CdC CSA-LNR-OTTAWA-II — sessions K-03"
  contexte: >-
    L'épuisement de la logique « cœurs en grappe » (jusqu'à l'Ottawa I-6) et
    l'émergence de charges volumineuses — sondes géantes, modules habitables —
    imposaient un lanceur de nouvelle génération plutôt qu'une énième variante.
  exigences:
    - "Cœur de nouvelle génération, diamètre 3,125 m (prototype validé sur ce diamètre)."
    - "Architecture modulaire : EL, L, II, II-2 partageant le même cœur et le même étage supérieur."
    - "Coiffe jusqu'à 5 m pour sondes géantes et modules habitables."
    - "Étage supérieur cryogénique réallumable (RS-30, 60 allumages)."
    - "Certification habitée intégrée dès la conception (II-2 obligatoirement à cœurs liquides)."
    - "Note : les ingénieurs ont retenu un cœur cryogénique RS-68 (LH2/LOX) plutôt que le kérosène voté en K-03/1, pour l'efficience et l'ergol unique cœur+étage — au prix d'adaptations sol cryogéniques, entérinées a posteriori par le Conseil."
photo:
  caption: "Ottawa II sur le pas de tir"
  kind: pad
---

## Rôle

L'Ottawa II inaugure la deuxième génération de lanceurs de l'agence. Là où la
filière Ottawa I empilait des cœurs de 1,875 m, l'Ottawa II repart d'un cœur
neuf de 3,125 m propulsé par un RS-68 cryogénique, surmonté d'un étage supérieur
réallumable et d'une coiffe pouvant atteindre 5 m. C'est le lanceur des sondes
géantes et des modules habitables que les Ottawa I ne pouvaient emporter.

## Une famille modulaire

Cette fiche décrit la variante de référence — un cœur, six GEM-63, 17,7 t en
orbite basse. Autour d'elle gravite toute une famille partageant le même cœur :
l'**Ottawa II-EL** (cœur seul, 6,7 t), l'**Ottawa II-L** (deux GEM-63, 12 t),
l'**Ottawa II-2** (trois cœurs, 25 t), et leurs déclinaisons GTO obtenues par
ajout d'un troisième étage. Le suffixe `-X` désigne le nombre de cœurs
additionnels (les GEM-63 ne comptent pas) — héritage direct de la nomenclature
Ottawa I.

## Sécurité au pas de tir

Le RS-68 montant lentement en régime, la procédure **PAD-OTT2-001** impose le
maintien des pinces 7 secondes après allumage avant toute libération du lanceur :
un relâchement prématuré ferait retomber la fusée sur le pas de tir. La règle est
affichée en capitales dans chaque salle de contrôle.
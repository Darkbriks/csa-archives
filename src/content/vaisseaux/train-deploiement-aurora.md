---
title: Train de déploiement Aurora
ref: CSA-VHC-AURORA-TRAIN
classe: Étage de déploiement — bus à allumages multiples
statut: Mission accomplie
statutTon: nominal
resume: >-
  Bus de déploiement propulsé portant trois satellites Aurora Block I. Doté de
  nombreux allumages et d'un contrôle d'attitude fin, il assure à lui seul
  l'ensemble des manœuvres de mise à poste du réseau.
programme: { label: "Aurora", to: "programmes", slug: "aurora" }
lanceur:   { label: "Ottawa I-2", to: "lanceurs", slug: "ottawa-i-2" }
transporte:
  - { label: "Aurora Block I", to: "vaisseaux", slug: "aurora-block-i" }
specs:
  masse: "≈ 4,95 t (train complet : bus + 3 satellites + structure)"
  amarrage: "Largage des satellites par découpleurs dédiés"
sousSystemes:
  - role: Propulsion principale
    detail: "Étage propulsé capable de nombreux rallumages — suffisant pour enchaîner plusieurs changements d'orbite." 
  - role: Contrôle d'attitude (RCS)
    detail: "Grappes RCS multiples pour des manœuvres fines et un pointage précis lors de chaque largage."
  - role: Structure porteuse
    detail: "Adaptateurs multi-voies maintenant les trois satellites Block I autour du bus jusqu'à leur libération."
  - role: Avionique
    detail: "Calculateur de bord et antennes assurant le guidage autonome entre les largages."
composition:
  - { qty: 1, nom: "Bus propulsé (allumages multiples)", role: "Manœuvres de mise à poste" }
  - { qty: 1, nom: "Bloc de contrôle d'attitude (RCS)", role: "Pointage fin" }
  - { qty: 3, nom: "Satellites Aurora Block I", role: "Charge utile larguée" }
  - { qty: 1, nom: "Structure multi-voies", role: "Maintien des satellites" }
sequence:
  - { titre: "Séparation du lanceur", detail: "Le train se sépare de l'étage supérieur sur l'orbite de parking." }
  - { titre: "Transfert vers l'orbite réseau", detail: "Série d'allumages pour rejoindre l'orbite circulaire de 3 500 km." }
  - { titre: "Largage du 1er satellite", detail: "Libération sur position, puis ajustement de période orbitale." }
  - { titre: "Largage du 2e satellite", detail: "Après une orbite d'attente, retour sur l'orbite réseau pour la 2e position." }
  - { titre: "Largage du 3e satellite", detail: "Même procédure pour la dernière position du maillage." }
  - { titre: "Désorbitation", detail: "Une fois sa mission accomplie, le bus se désorbite pour ne pas encombrer l'orbite." }
perfs:
  - { label: "Masse train complet", valeur: "≈ 4,95 t" }
  - { label: "Satellites transportés", valeur: "3 × Aurora Block I" }
  - { label: "Rallumages disponibles", valeur: "Nombreux (large marge)" }
  - { label: "Δv disponible" }
photo:
  caption: "Train de déploiement Aurora"
  kind: photo
---

## Concept

Le train de déploiement concentre toute l'intelligence de manœuvre du système
Aurora. Plutôt que de doter chaque satellite d'une propulsion, l'agence a choisi
de confier l'ensemble des changements d'orbite à un bus unique, capable de
nombreux rallumages et d'un pointage fin. Les satellites s'en trouvent allégés,
simplifiés et moins coûteux.

## Manœuvre de mise à poste

Après séparation du lanceur, le train rejoint l'orbite circulaire du réseau, y
largue un premier satellite, puis modifie sa période orbitale pour décaler sa
position le long de l'orbite avant de larguer le suivant. En répétant l'opération
trois fois, il répartit les trois Block I en un maillage régulier — avant de se
désorbiter proprement.

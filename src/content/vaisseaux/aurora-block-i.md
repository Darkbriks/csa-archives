---
title: Aurora Block I
ref: CSA-SAT-AURORA-B1
classe: Satellite de communication — micro-plateforme
statut: Opérationnel — réseau actif
statutTon: nominal
resume: >-
  Petit satellite de communication, élément de base du réseau Aurora. Dépourvu
  de propulsion propre, il est mis à poste par un train de déploiement dédié.
  Trois exemplaires forment le premier réseau de communication de l'agence.
programme:  { label: "Aurora", to: "programmes", slug: "aurora" }
deployePar: { label: "Train de déploiement Aurora", to: "vaisseaux", slug: "train-deploiement-aurora" }
specs:
  masse: "≈ 130 kg"
  autonomie: "Permanente (générateur radio-isotopique)"
sousSystemes:
  - role: Plateforme
    detail: "Bus compact stabilisé par gradient de gravité, dérivé d'une plateforme de navigation éprouvée."
  - role: Communication
    detail: "Antenne grand gain assurant la liaison du réseau ; relais de classe moyenne." 
  - role: Charge scientifique
    detail: "Spectromètre ultraviolet et capteur solaire embarqués en complément du rôle de communication."
  - role: Énergie
    detail: "Générateur radio-isotopique et panneaux solaires, pour une disponibilité permanente."
  - role: Stabilisation
    detail: "Mât de gradient de gravité — orientation passive, sans ergols." 
  - role: Propulsion
    detail: "Aucune. Toute la mise à poste est assurée par le train de déploiement." 
composition:
  - { qty: 1, nom: "Bus de navigation compact", role: "Plateforme" }
  - { qty: 1, nom: "Antenne grand gain", role: "Liaison réseau" }
  - { qty: 1, nom: "Spectromètre ultraviolet", role: "Science" }
  - { qty: 1, nom: "Capteur solaire", role: "Science" }
  - { qty: 1, nom: "Mât de gradient de gravité", role: "Stabilisation passive" }
  - { qty: 1, nom: "Générateur radio-isotopique", role: "Énergie" }
  - { qty: 4, nom: "Panneaux solaires", role: "Énergie d'appoint" }
perfs:
  - { label: "Masse", valeur: "≈ 130 kg" }
  - { label: "Altitude opérationnelle", valeur: "3 500 km (circulaire)" }
  - { label: "Durée de vie nominale" }
photo:
  caption: "Aurora Block I — modèle de vol"
  kind: photo
---

## Rôle

Aurora Block I est la brique élémentaire du premier réseau de communication de
l'agence. Volontairement minimaliste — pas de propulsion, stabilisation passive
par gradient de gravité — il mise sur la simplicité et la fiabilité. Sa mise à
poste est entièrement déléguée au train de déploiement, ce qui allège le
satellite et concentre l'intelligence de manœuvre sur un seul module.

## Déploiement en réseau

Trois Block I, déposés sur une même orbite circulaire à 3 500 km par le train de
déploiement, forment le premier maillage de communication opérationnel de la
CSA. Chaque satellite est libéré sur une position distincte, le train ajustant
sa période entre deux largages pour répartir les satellites le long de l'orbite.

## Block I, et ensuite ?

La désignation « Block I » laisse délibérément la porte ouverte à des
générations ultérieures — Block II, plateforme propulsée, charge utile élargie —
au fur et à mesure que les besoins du réseau grandiront.

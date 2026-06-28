---
title: Sonde Nimbus
ref: CSA-SAT-NIMBUS
classe: Sonde scientifique lourde — plateforme « Nimbus »
statut: Opérationnelle — plateforme active
statutTon: nominal
resume: >-
  Plateforme de sonde lourde et richement instrumentée, conçue pour de longues
  campagnes de mesure depuis l'orbite. Le fer de lance scientifique du programme
  Alouette.
programme: { label: "Alouette", to: "programmes", slug: "alouette" }
specs:
  masse: "≈ 2,3 t (selon configuration)"
  autonomie: "Permanente (énergie solaire + batteries)"
sousSystemes:
  - role: Suite instrumentale
    detail: "Large panoplie d'instruments : radiométrie, spectrométrie, photométrie, magnétométrie, altimétrie radar, analyse de particules chargées."
  - role: Communication
    detail: "Antenne bande S et antenne balise pour la transmission soutenue de gros volumes de données."
  - role: Énergie
    detail: "Grands panneaux solaires déployables complétés de batteries — disponibilité permanente."
  - role: Contrôle d'attitude
    detail: "Cœur de contrôle dédié assurant un pointage stable des instruments." 
composition:
  - { qty: 1, nom: "Tore d'instruments", role: "Charge scientifique principale" }
  - { qty: 1, nom: "Radiomètre / spectromètre / photomètre", role: "Observation" }
  - { qty: 2, nom: "Magnétomètres", role: "Champ magnétique" }
  - { qty: 1, nom: "Altimètre radar", role: "Topographie" }
  - { qty: 1, nom: "Analyseur de particules chargées", role: "Environnement spatial" }
  - { qty: 2, nom: "Grands panneaux solaires", role: "Énergie" }
  - { qty: 2, nom: "Antennes bande S", role: "Transmission" }
perfs:
  - { label: "Masse plateforme", valeur: "≈ 2,3 t" }
  - { label: "Instruments embarqués", valeur: "Plus d'une douzaine" }
  - { label: "Orbites desservies", valeur: "De la géostationnaire à la polaire" }
photo:
  caption: "Sonde de classe Nimbus"
  kind: photo
---

## Rôle

La plateforme Nimbus marque le passage de l'agence à la science orbitale à
grande échelle. Lourde, énergivore, hérissée d'instruments, elle est conçue pour
inonder le contrôle de données pendant de longues campagnes. C'est la première
plateforme de la CSA pensée comme un véritable observatoire.

## Polyvalence orbitale

Sa modularité lui permet de servir des profils très différents : déposée en
orbite géostationnaire au bout d'un étage d'appoint pour une veille permanente,
ou injectée sur une orbite polaire pour balayer l'ensemble du globe. Une même
plateforme, plusieurs missions.

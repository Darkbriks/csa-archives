---
title: Orbiteur Kiviuq (classe OAO)
ref: CSA-SAT-OAO-KIVIUQ
classe: Sonde mère interplanétaire — plateforme « OAO »
statut: Opérationnel — en orbite munaire
statutTon: nominal
resume: >-
  Grande sonde mère propulsée, conçue pour l'exploration de la Mun : un orbiteur
  richement instrumenté transportant deux impacteurs destinés à frapper la
  surface sous l'œil de nos astronomes.
programme: { label: "Kiviuq", to: "programmes", slug: "kiviuq" }
specs:
  masse: "≈ 9,5 t (train complet : orbiteur + impacteurs + propulsion)"
sousSystemes:
  - role: Orbiteur mère
    detail: "Plateforme stabilisée par traqueurs d'étoiles, dotée d'une suite scientifique complète et de grands panneaux solaires."
  - role: Charge scientifique
    detail: "Sondes de plasma, détecteurs de rayons cosmiques et de radiations piégées, photomètre, spectromètre UV, magnétomètres, chambre d'ionisation."
  - role: Impacteurs
    detail: "Deux pénétrateurs largables, destinés à percuter la surface munaire pour observation des impacts depuis le sol."
  - role: Propulsion
    detail: "Bloc propulsif assurant l'injection munaire, la mise en orbite et les changements d'orbite." 
  - role: Communication
    detail: "Antennes longue portée pour la liaison à distance munaire."
composition:
  - { qty: 1, nom: "Orbiteur mère instrumenté", role: "Plateforme scientifique" }
  - { qty: 2, nom: "Impacteurs largables", role: "Étude d'impact de surface" }
  - { qty: 1, nom: "Bloc propulsif", role: "Manœuvres interplanétaires" }
  - { qty: 6, nom: "Traqueurs d'étoiles", role: "Navigation / pointage" }
  - { qty: 1, nom: "Suite de détecteurs de particules", role: "Environnement spatial" }
perfs:
  - { label: "Masse du train", valeur: "≈ 9,5 t" }
  - { label: "Impacteurs", valeur: "2 (largables)" }
  - { label: "Destination", valeur: "Orbite munaire" }
photo:
  caption: "Orbiteur Kiviuq"
  kind: photo
---

## Rôle

L'orbiteur Kiviuq est la première sonde mère interplanétaire de l'agence. Bien
plus qu'un simple satellite, c'est un véritable train d'exploration : un
orbiteur instrumenté capable de manœuvrer autour de la Mun, accompagné de deux
impacteurs destinés à frapper la surface pour être observés depuis Kerbin.

## Architecture à impacteurs

Le concept marie observation à distance et expérimentation directe : pendant que
l'orbiteur cartographie et mesure, les impacteurs sont largués l'un après
l'autre pour percuter des sites choisis, le long du terminateur, où nos
astronomes peuvent guetter le flash de l'impact.

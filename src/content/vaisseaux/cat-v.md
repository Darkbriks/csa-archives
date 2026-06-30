---
title: CAT-V
ref: CSA-VHC-CATV
classe: Véhicule cible — rendez-vous & amarrage (Champlain Agena Target Vehicle)
statut: En orbite — opérationnel, réutilisable
statutTon: nominal
resume: >-
  Véhicule cible dédié au rendez-vous et à l'amarrage, dérivé d'un étage Agena.
  Lancé seul, stabilisé en orbite, il sert de point de ralliement aux capsules
  Champlain. Premier engin de l'histoire à recevoir un amarrage en orbite.
programme: { label: "Champlain", to: "programmes", slug: "champlain" }
lanceur:   { label: "Ottawa I", to: "lanceurs", slug: "ottawa-i" }
specs:
  masse: "≈ 2 t (charge utile Ottawa I)"
  diametre: "≈ 1,33 m"
  longueur: "≈ 6,8 m"
  amarrage: "Port femelle — Standard Champlain v1 (non universel)"
  autonomie: "≥ 30 jours en orbite"
sousSystemes:
  - role: Propulsion
    detail: "Moteur Agena XLR81 capable de 200 allumages — manœuvres orbitales fines et changements d'orbite complexes." 
  - role: Réserve de manœuvre
    detail: "≈ 3 600 m/s de Δv disponibles, intacts après la mise en orbite (le lanceur a tout assuré)." 
  - role: Amarrage
    detail: "Port d'amarrage femelle, dérivé du véhicule cible Gemini-Agena ; standard propre au programme Champlain." 
  - role: Aide au rendez-vous
    detail: "Six feux d'acquisition et antennes dédiées (bande L, VHF, spirale) pour le guidage visuel et radio de la capsule en approche." 
  - role: Avionique & stabilisation
    detail: "Avionique Agena, capteur d'horizon et capteur de mouvement — tenue d'attitude autonome en attente de la capsule." 
  - role: Charge utile secondaire
    detail: "Baie de matériaux et détecteur de micrométéorites — collecte de données pendant les phases d'attente." 
composition:
  - { qty: 1, nom: "Moteur Agena XLR81 (200 allumages)", role: "Propulsion" }
  - { qty: 1, nom: "Réservoir Agena allongé", role: "Ergols" }
  - { qty: 1, nom: "Port d'amarrage femelle", role: "Cible d'amarrage" }
  - { qty: 6, nom: "Feux d'acquisition", role: "Aide au rendez-vous" }
  - { qty: 3, nom: "Antennes (bande L, VHF, spirale)", role: "Communication / guidage" }
  - { qty: 1, nom: "Capteur d'horizon + avionique", role: "Stabilisation autonome" }
  - { qty: 1, nom: "Baie de matériaux + détecteur de micrométéorites", role: "Science secondaire" }
sequence:
  - { titre: "Lancement (Champlain 3-A)", detail: "Mise en orbite par une Ottawa I à 250 km, inclinaison 0°. Réserve d'ergols intacte." }
  - { titre: "Stabilisation & attente", detail: "Tenue d'attitude autonome, diagnostics sol, en attente de la capsule." }
  - { titre: "Cible de rendez-vous", detail: "La Nahanni (Champlain 3-B) réalise rendez-vous, approche et amarrage sur le port femelle." }
  - { titre: "Opérations amarrées", detail: "Deux orbites amarrées : transfert d'électricité, tenue d'attitude de l'ensemble par gyroscopes." }
  - { titre: "Désamarrage", detail: "Séparation propre de la capsule, le CAT-V restant stable et intact." }
  - { titre: "Réutilisation", detail: "Laissé en orbite, en état d'accueillir d'autres capsules — embryon d'infrastructure orbitale." }
perfs:
  - { label: "Δv disponible", valeur: "≈ 3 600 m/s (intact)" }
  - { label: "Allumages moteur", valeur: "200 (XLR81)" }
  - { label: "Amarrages reçus", valeur: "1 (premier de l'histoire)" }
  - { label: "Statut", valeur: "En orbite, réutilisable" }
photo:
  caption: "CAT-V — véhicule cible en orbite"
  kind: flight
---

## Concept

Le CAT-V (Champlain Agena Target Vehicle) est la cible passive autour de laquelle
l'agence a appris le rendez-vous et l'amarrage. Lancé seul par une Ottawa I, il
se stabilise en orbite et attend qu'une capsule Champlain vienne le rejoindre.
Dérivé d'un étage Agena, il en conserve l'atout maître : un moteur **XLR81
capable de 200 allumages**, qui en fait bien plus qu'une simple cible — un engin
de manœuvre à part entière.

## Premier amarrage de l'histoire

Lors de Champlain 3, le CAT-V est devenu le premier engin à recevoir un amarrage
en orbite : la capsule **Nahanni**, pilotée par Neptune Kerman, s'est arrimée à
son port femelle à 4 cm/s. Deux orbites amarrées ont validé le transfert
d'électricité et la tenue d'attitude de l'ensemble, avant un désamarrage propre.

## Une réserve précieuse

N'ayant pas eu à puiser dans ses ergols pour sa mise en orbite, le CAT-V conserve
l'intégralité de ses ≈ 3 600 m/s de Δv. Le Conseil note qu'une telle réserve,
couplée aux 200 allumages de son moteur, lui permettrait de rejoindre une orbite
plus complexe pour servir de cible — ou d'embryon d'infrastructure — lors de
missions futures. Le port d'amarrage est documenté « Standard Champlain v1 », non
universel, réévaluable à la conception de la prochaine plateforme habitée.
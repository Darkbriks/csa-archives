---
title: Champlain I
ref: CSA-HSV-CHAMPLAIN-I
classe: Vaisseau habité — capsule orbitale biplace
statut: Actif — réutilisable
statutTon: nominal
resume: >-
  Premier vaisseau habité opérationnel de l'agence. Capsule biplace dérivée de
  l'expérience du démonstrateur Victoria, dotée d'un module de service propulsé
  et d'un système d'éjection d'équipage.
programme: { label: "Champlain", to: "programmes", slug: "champlain" }
lanceur:   { label: "Ottawa I-2", to: "lanceurs", slug: "ottawa-i-2" }
equipage: 2
specs:
  masse: "5,1 t (capsule + module de service, chargé)"
  masseVide: "1,5 t (à vide)"
  autonomie: "14 jours (3 j capsule + 11 j module de service)"
  amarrage: "Standard Champlain v1 (port propre au programme)"
sousSystemes:
  - role: Module de commande
    detail: "Habitacle pressurisé biplace, contrôle d'attitude intégré, hublots de pilotage."
  - role: Protection thermique
    detail: "Bouclier ablatif de 1,5 m, qualifié en rentrée par les essais Victoria puis Champlain Q1."
  - role: Module de service
    detail: "Module propulsé offrant 11 jours d'autonomie supplémentaires ; moteur de manœuvre pour corrections et désorbitation."
  - role: Support vie
    detail: "Recyclage et réserves dimensionnés pour deux kerbals sur la durée combinée capsule + module."
  - role: Charge scientifique
    detail: "Suite d'instruments embarqués avec dispositif de collecte centralisée des rapports."
  - role: Énergie
    detail: "Deux générateurs radio-isotopiques complétés de deux panneaux solaires déployables."
  - role: Amarrage
    detail: "Port femelle Standard Champlain v1, réservé au programme (pas de standard universel à ce stade)."
  - role: Sauvetage
    detail: "Tour d'éjection qualifiée au pad et à max-Q sur le programme Victoria."
composition:
  - { qty: 1, nom: "Module de commande biplace", role: "Habitacle pressurisé" }
  - { qty: 1, nom: "Bouclier thermique ablatif (1,5 m)", role: "Protection rentrée" }
  - { qty: 1, nom: "Module de service propulsé", role: "Manœuvre & autonomie" }
  - { qty: 1, nom: "Port d'amarrage", role: "Standard Champlain v1" }
  - { qty: 1, nom: "Tour de sauvetage", role: "Éjection d'équipage" }
  - { qty: 6, nom: "Instruments scientifiques", role: "Mesures orbitales" }
  - { qty: 2, nom: "Générateurs radio-isotopiques", role: "Énergie continue" }
  - { qty: 2, nom: "Panneaux solaires déployables", role: "Énergie d'appoint" }
sequence:
  - { id: "P1", titre: "Allumage du module de service", detail: "Corrections de trajectoire puis désorbitation." }
  - { id: "P2", titre: "Séparation du module de service", detail: "Largage avant la rentrée ; le module se désintègre." }
  - { id: "P3", titre: "Parachute pilote", detail: "Drogue de stabilisation après le pic thermique." }
  - { id: "P4", titre: "Parachute principal & antenne", detail: "Descente finale et reprise des communications." }
perfs:
  - { label: "Autonomie support vie", valeur: "14 j (3 + 11)" }
  - { label: "G max rentrée (qualif.)", valeur: "3,1–3,4 G" }
  - { label: "Δv module de service" }
  - { label: "Masse à sec module de service" }
cahierDesCharges:
  reference: "CdC CSA-HSV-CHAMPLAIN — sessions K-01/K-02"
  contexte: >-
    Cahier des charges établi par le Conseil pour le premier vaisseau habité
    opérationnel, sur la base de l'expérience du démonstrateur Victoria.
  exigences:
    - "Capsule pour deux kerbals, conçue d'emblée comme opérationnelle."
    - "Système de sauvetage (LAS) qualifié, dérivé des essais Victoria."
    - "Bouclier thermique dimensionné sur les relevés de rentrée haute énergie."
    - "Autonomie initiale de 3 à 5 jours, extensible par module de service."
    - "Compatible avec le lanceur Ottawa I-2 en configuration standard."
    - "Vol de qualification non habité avant tout vol d'équipage."
  comparaison:
    - { critere: "Équipage", cible: "2 kerbals", livre: "2 kerbals" }
    - { critere: "Système de sauvetage", cible: "Qualifié pad + max-Q", livre: "Qualifié pad + max-Q" }
    - { critere: "Autonomie", cible: "3 à 5 jours", livre: "14 jours (3 + 11)" }
    - { critere: "Lanceur", cible: "Ottawa I-2", livre: "Ottawa I-2" }
    - { critere: "Qualification non habitée", cible: "1 vol", livre: "Champlain Q1 — succès" }
    - { critere: "Réutilisabilité capsule", cible: "Non spécifiée", livre: "Démontrée" }
photo:
  caption: "Champlain I en intégration"
  kind: photo
photosVol:
  - { caption: "Séparation de la coiffe", kind: flight }
  - { caption: "Vue orbitale", kind: flight }
  - { caption: "Séparation de la coiffe", kind: flight }
  - { caption: "Vue orbitale", kind: flight }
---

## Origine

La Champlain I est née de l'expérience accumulée sur le démonstrateur
**Victoria**. Là où Victoria n'était qu'une coque lestée destinée à éprouver le
système de sauvetage, le bouclier et les séquences de parachutes, la Champlain
est un véritable vaisseau : un habitacle pressurisé pour deux kerbals, un module
de service propulsé offrant onze jours d'autonomie supplémentaires, et une coiffe
protégeant l'ensemble jusqu'à l'anneau inférieur de la tour de sauvetage.

## Architecture

Le module principal accueille deux kerbals côte à côte. Le module de service,
greffé sous la capsule, regroupe le support vie longue durée, la charge
scientifique, l'énergie et un moteur de manœuvre assurant aussi bien les
corrections de trajectoire que la désorbitation. À la rentrée, ce module est
largué et se consume dans l'atmosphère ; seule la capsule, protégée par son
bouclier, est récupérée — et réutilisée.

## Standard d'amarrage

Le port d'amarrage est documenté comme **Standard Champlain v1**. Le Conseil a
explicitement choisi de ne pas en faire un standard universel de l'agence : la
décision sera réévaluée lors de la conception de la prochaine plateforme
habitée, lorsque les besoins réels en rendez-vous et assemblage seront mieux
cernés.

## Lanceur

La Champlain I est certifiée au lancement sur l'**Ottawa I-2**, dont la fiche
détaille la séquence d'ascension et les performances. La présente fiche ne
couvre que le vaisseau lui-même.

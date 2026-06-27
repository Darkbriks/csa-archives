---
title: Champlain Q1
ref: CSA-MSN-CHP-Q1
statut: Succès
statutTon: nominal
date: K-02
habite: false
resume: >-
  Vol orbital de qualification non habité du vaisseau Champlain I. Premier vol
  complet de la chaîne opérationnelle — mise en orbite, module de service,
  désorbitation, rentrée et récupération.
programme: { label: "Champlain", to: "programmes", slug: "champlain" }
lanceur:   { label: "Ottawa I-2", to: "lanceurs", slug: "ottawa-i-2" }
charge:    { label: "Champlain I", to: "vaisseaux", slug: "champlain-i" }
objectifs:
  - "Valider la mise en orbite du vaisseau pleinement chargé"
  - "Éprouver le module de service en conditions réelles (propulsion, énergie, thermique)"
  - "Valider la séquence de désorbitation puis la rentrée et la récupération"
metriques:
  - { label: "Orbite initiale", valeur: "250 km" }
  - { label: "Apogée après rehaussement", valeur: "5 000 km" }
  - { label: "G max rentrée", valeur: "3,1 G" }
  - { label: "État capsule", valeur: "Récupérée, réutilisable" }
journal:
  - { t: "T+0", titre: "Décollage nominal", detail: "Insertion sur une première orbite à 250 km, tous systèmes déployés." }
  - { t: "Orbite 2", titre: "Rehaussement d'apogée", detail: "Second allumage de l'étage supérieur (Ap 5 000 km), puis séparation et désorbitation de l'étage." }
  - { t: "Pré-apogée", titre: "Incident de télémétrie", detail: "Câble de liaison débranché au sol — interruption de ~18 min, décalage d'une orbite. Diagnostic ensuite nominal." }
  - { t: "Apogée", titre: "Désorbitation", detail: "Deux allumages d'essai du moteur, puis burn de désorbitation. Périapside abaissé à 40 km." }
  - { t: "T−25 min", titre: "Largage du module de service", detail: "Capsule en mode rétrograde, antenne rétractée." }
  - { t: "45 km", titre: "Désintégration du module de service", detail: "Comportement attendu ; télémétrie jusqu'au bout, confirmée par observation au sol." }
  - { t: "19 km", titre: "Reprise du contact capsule", detail: "Sortie de blackout, aucun système critique affecté." }
  - { t: "Amerrissage", titre: "Récupération", detail: "Capsule posée et récupérée intacte par le navire sur zone." }
anomalies:
  - "Palier de rentrée entre 40 et 45 km : angle d'entrée trop faible, corrigé sur Champlain 1 (Pe abaissé)."
  - "Incident câble (interruption télémétrie) : recrutement d'un personnel d'encadrement décidé par le Conseil."
suivante: { label: "Champlain 1 — Ungava", to: "missions", slug: "champlain-1-ungava" }
photo: { caption: "Champlain Q1 — rentrée", kind: flight }
---

## Bilan

Champlain Q1 est un succès complet. Le bouclier a préservé l'intégrité de la
capsule, le module de service s'est désintégré comme prévu, et la télémétrie n'a
révélé aucune anomalie bloquante. Le programme est autorisé à passer au vol
habité. Le seul point de vigilance — un palier de rentrée dû à un angle trop
faible — a été corrigé dès la mission suivante.

> Le programme de réduction de poussée a été volontairement désactivé pour
> soumettre la capsule à un stress supérieur à celui d'un vol nominal.

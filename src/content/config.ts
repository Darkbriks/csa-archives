import { defineCollection, z } from 'astro:content';

/* ---------- Briques réutilisables ---------- */
const refItem = z.object({
  label: z.string(),
  to: z.string().optional(),
  slug: z.string().optional(),
});
const perfItem = z.object({ label: z.string(), valeur: z.string().optional() });
const image = z.object({
  src: z.string().optional(),
  caption: z.string().optional(),
  ref: z.string().optional(),
  kind: z.enum(['portrait', 'pad', 'flight', 'photo']).default('photo'),
});
const statutTon = z.enum(['nominal', 'lost', 'slate', 'red']).default('red');

/* ---------- VAISSEAUX ---------- */
const vaisseaux = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(), classe: z.string(), statut: z.string(), statutTon,
    resume: z.string(),
    programme: refItem.optional(),
    lanceur: refItem.optional(),
    equipage: z.number().optional(),
    specs: z.object({
      masse: z.string().optional(), masseVide: z.string().optional(), taille: z.string().optional(),
      autonomie: z.string().optional(), amarrage: z.string().optional(),
    }).default({}),
    composition: z.array(z.object({ qty: z.number().optional(), nom: z.string(), role: z.string().optional() })).default([]),
    sousSystemes: z.array(z.object({ role: z.string(), detail: z.string() })).default([]),
    sequence: z.array(z.object({ id: z.string(), titre: z.string(), detail: z.string().optional() })).default([]),
    perfs: z.array(perfItem).default([]),
    photo: image.optional(),
    photosVol: z.array(image).default([]),
  }),
});

/* ---------- LANCEURS ---------- */
const lanceurs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(), classe: z.string(), statut: z.string(), statutTon,
    resume: z.string(), famille: z.string().optional(),
    specs: z.object({
      hauteur: z.string().optional(), masseDecollage: z.string().optional(), etages: z.string().optional(),
      diametre: z.string().optional(), premierVol: z.string().optional(), volsReussis: z.string().optional(),
    }).default({}),
    etagesDetail: z.array(z.object({ nom: z.string(), ergols: z.string().optional(), detail: z.string().optional() })).default([]),
    ascension: z.array(z.object({ id: z.string(), titre: z.string(), detail: z.string().optional() })).default([]),
    perfs: z.array(perfItem).default([]),
    chargesCertifiees: z.array(refItem).default([]),
    photo: image.optional(),
    photosVol: z.array(image).default([]),
  }),
});

/* ---------- ÉQUIPAGE ---------- */
const equipage = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(),
    specialite: z.enum(['Pilote', 'Scientifique', 'Ingénieur']),
    statut: z.string(), statutTon, niveau: z.number().min(0).max(5).default(0),
    resume: z.string(),
    specs: z.object({
      recrutement: z.string().optional(), volsEffectues: z.string().optional(),
      tempsEspace: z.string().optional(), evas: z.string().optional(),
    }).default({}),
    distinctions: z.array(z.string()).default([]),
    missions: z.array(refItem).default([]),
    photo: image.optional(),
  }),
});

/* ---------- PROGRAMMES ---------- */
const programmes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(), statut: z.string(), statutTon,
    devise: z.string().optional(), resume: z.string(),
    objectifs: z.array(z.string()).default([]),
    materiel: z.array(refItem).default([]),
    jalons: z.array(z.object({ date: z.string().optional(), titre: z.string(), detail: z.string().optional(), statut: z.string().optional() })).default([]),
  }),
});

/* ---------- MISSIONS ---------- */
const missions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(), statut: z.string(), statutTon,
    resume: z.string(),
    date: z.string().optional(),          // exercice / repère temporel
    habite: z.boolean().default(false),
    programme: refItem.optional(),
    lanceur: refItem.optional(),
    charge: refItem.optional(),           // vaisseau / sonde utilisé
    equipage: z.array(refItem).default([]),
    objectifs: z.array(z.string()).default([]),
    metriques: z.array(perfItem).default([]),   // orbite, durée, G, science…
    journal: z.array(z.object({ t: z.string().optional(), titre: z.string(), detail: z.string().optional() })).default([]),
    anomalies: z.array(z.string()).default([]),
    photo: image.optional(),
    photosVol: z.array(image).default([]),
    precedente: refItem.optional(),
    suivante: refItem.optional(),
  }),
});

/* ---------- CONSEIL (comptes rendus de séance) ---------- */
const conseil = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), ref: z.string(), statut: z.string().default('Archivée'), statutTon: statutTon.default('slate'),
    date: z.string().optional(),
    resume: z.string(),
    ordreDuJour: z.array(z.string()).default([]),
    decisions: z.array(z.object({ titre: z.string(), detail: z.string().optional(), verdict: z.string().optional() })).default([]),
    budget: z.array(z.object({ poste: z.string(), montant: z.string(), ton: z.enum(['pos','neg','neutre']).default('neutre') })).default([]),
    renseignement: z.array(z.object({ source: z.string(), ton: z.enum(['red','amber','green']).default('amber'), detail: z.string() })).default([]),
    liens: z.array(refItem).default([]),
  }),
});

export const collections = { vaisseaux, lanceurs, equipage, programmes, missions, conseil };

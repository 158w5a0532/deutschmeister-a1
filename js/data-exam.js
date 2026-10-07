/**
 * DeutschMeister A1 — Modul 5: Goethe Start Deutsch 1 Vollprüfung
 * Complete official examination bank:
 * - 20 Leseverstehen & Sprachbausteine questions
 * - Schreiben Teil 1: Formular ausfüllen (Text-Extraction)
 * - Schreiben Teil 2: E-Mail schreiben (3 Leitpunkte mit Kriterien-Evaluation)
 */

window.DM_EXAM = [
  // =========================================================================
  // TEIL 1: LESERVERSTEHEN (E-Mails, Briefe & Einladungen)
  // =========================================================================
  {
    id: 1,
    type: 'Leseverstehen: E-Mail',
    question: `Text lesen:\n"Liebe Kolleginnen und Kollegen, am Freitag ab 16:30 Uhr feiern wir den Geburtstag von Frau Weber in der Cafeteria im 2. Stock. Es gibt Kaffee und Kuchen. Bitte gebt mir bis Donnerstag Bescheid, wer kommen kann. Herzliche Grüße, Markus."\n\nFrage: Wo und wann findet die Feier statt?`,
    options: [
      'Am Freitag um 16:30 Uhr in der Cafeteria.',
      'Am Donnerstag um 16:30 Uhr bei Frau Weber zu Hause.',
      'Am Freitag nach Feierabend im Restaurant.'
    ],
    correct: 0,
    explanation: 'The text clearly states: "am Freitag ab 16:30 Uhr ... in der Cafeteria im 2. Stock".'
  },
  {
    id: 2,
    type: 'Leseverstehen: Mitteilung',
    question: `Text lesen:\n"Sehr geehrte Damen und Herren, wegen Renovierungsarbeiten bleibt unsere Praxis von Montag, 12. Mai, bis einschließlich Mittwoch, 14. Mai, geschlossen. In dringenden Notfällen wenden Sie sich bitte an Dr. Krause, Telefon: 06151-98765."\n\nFrage: Wann ist die Arztpraxis wieder regulär geöffnet?`,
    options: [
      'Am Mittwoch, 14. Mai.',
      'Am Donnerstag, 15. Mai.',
      'Am Montag, 12. Mai.'
    ],
    correct: 1,
    explanation: '"Bis einschließlich Mittwoch geschlossen" means closed through Wednesday. The practice opens again on Thursday, May 15th.'
  },
  {
    id: 3,
    type: 'Leseverstehen: Notiz',
    question: `Text lesen:\n"Hallo Tim, ich bin noch im Supermarkt und kaufe für das Abendessen ein. Kannst du bitte schon den Tisch decken und die Kartoffeln waschen? Ich bin in etwa 20 Minuten zu Hause. Liebe Grüße, Anna."\n\nFrage: Was soll Tim tun?`,
    options: [
      'Im Supermarkt Lebensmittel einkaufen.',
      'Den Tisch decken und die Kartoffeln waschen.',
      'In 20 Minuten zu Anna in den Supermarkt kommen.'
    ],
    correct: 1,
    explanation: 'Anna explicitly asks: "Kannst du bitte schon den Tisch decken und die Kartoffeln waschen?".'
  },

  // =========================================================================
  // TEIL 2: SCHILDER, DURCHSAGEN & ÖFFENTLICHE HINWEISE
  // =========================================================================
  {
    id: 4,
    type: 'Schilder & Aushänge',
    question: `Schild an der Tür einer Stadtbibliothek:\n"Öffnungszeiten: Di–Fr 10:00–18:00 Uhr | Sa 10:00–14:00 Uhr | Montags und sonntags geschlossen."\n\nFrage: Wann kann man Bücher ausleihen?`,
    options: [
      'Am Montagnachmittag um 15:00 Uhr.',
      'Am Samstag um 12:00 Uhr.',
      'Am Sonntag bis 14:00 Uhr.'
    ],
    correct: 1,
    explanation: 'Saturday is open 10:00 to 14:00. Mondays and Sundays are completely closed.'
  },
  {
    id: 5,
    type: 'Schilder & Hinweise',
    question: `Schild im Treppenhaus eines Mehrfamilienhauses:\n"Ruhezeiten beachten: Bitte vermeiden Sie laute Geräusche und Musik zwischen 13:00 und 15:00 Uhr sowie ab 22:00 Uhr."\n\nFrage: Was bedeutet dieser Aushang für die Bewohner?`,
    options: [
      'Man darf ab 22:00 Uhr laute Musik hören.',
      'Zwischen 13:00 und 15:00 Uhr muss es im Haus leise sein.',
      'Musik ist im gesamten Haus grundsätzlich verboten.'
    ],
    correct: 1,
    explanation: '"Ruhezeiten" mandate quiet hours between 13:00–15:00 and after 22:00.'
  },
  {
    id: 6,
    type: 'Hinweise: Bahnhof',
    question: `Anzeige am Hauptbahnhof Gleis 4:\n"Achtung an Gleis 4: ICE 572 nach Frankfurt fährt heute abweichend von Gleis 9 ab. Abfahrt 14:28 Uhr. Grund: Gleisbauarbeiten."\n\nFrage: Wo müssen die Fahrgäste für den Zug nach Frankfurt einsteigen?`,
    options: [
      'An Gleis 4 wie im Fahrplan vorgesehen.',
      'An Gleis 9.',
      'Der Zug fällt heute komplett aus.'
    ],
    correct: 1,
    explanation: '"Fährt abweichend von Gleis 9 ab" means the train departs from Track 9 instead.'
  },
  {
    id: 7,
    type: 'Schilder: Kaufhaus',
    question: `Schild an einer Rolltreppe:\n"Aufzug defekt. Bitte nutzen Sie die Treppe oder wenden Sie sich an die Information im Erdgeschoss für Rollstuhlassistenz."\n\nFrage: Welche Information ist richtig?`,
    options: [
      'Der Aufzug funktioniert einwandfrei.',
      'Der Aufzug ist kaputt (defekt).',
      'Die Treppe darf man nicht benutzen.'
    ],
    correct: 1,
    explanation: '"Defekt" is a common A1 term meaning broken / out of order ("kaputt").'
  },

  // =========================================================================
  // TEIL 3: KLEINANZEIGEN & WOHNUNGSANGEBOTE
  // =========================================================================
  {
    id: 8,
    type: 'Kleinanzeige: Wohnungsmarkt',
    question: `Anzeige in der Lokalzeitung:\n"Helle 3-Zimmer-Wohnung in Darmstadt-Mitte, 75 qm, 2. Stock mit Balkon. Kaltmiete: 720 € zzgl. 180 € Nebenkosten. Kaution: 2 Monatskaltmieten. Nur an Nichtraucher ohne Haustiere. Frei ab 1. Juli."\n\nFrage: Wie hoch ist die monatliche Gesamtmiete (Warmmiete)?`,
    options: [
      '720 Euro im Monat.',
      '900 Euro im Monat (720 € + 180 €).',
      '1.440 Euro im Monat.'
    ],
    correct: 1,
    explanation: 'Total monthly rent (Warmmiete) = Kaltmiete (720 €) + Nebenkosten (180 €) = 900 €.'
  },
  {
    id: 9,
    type: 'Kleinanzeige: Stellenangebot',
    question: `Stellenanzeige im Supermarkt:\n"Wir suchen: Aushilfe (m/w/d) für die Bäckertheke. Arbeitszeit: Samstag und Sonntag, jeweils 7:00–12:00 Uhr. Deutschkenntnisse A1 erforderlich. Bewerbungen bitte direkt an der Kasse abgeben."\n\nFrage: Wer kann sich für diesen Job bewerben?`,
    options: [
      'Personen, die nur montags bis freitags Zeit haben.',
      'Personen, die am Wochenende vormittags arbeiten können.',
      'Nur Personen mit Deutschkenntnissen auf C2-Niveau.'
    ],
    correct: 1,
    explanation: 'The shift is specifically on weekends from 7:00 to 12:00 in the morning ("Samstag und Sonntag vormittags").'
  },

  // =========================================================================
  // TEIL 4: SPRACHBAUSTEINE & GRAMMATIK (Kasus, Verben & Satzbau)
  // =========================================================================
  {
    id: 10,
    type: 'Grammatik: Akkusativ',
    question: `Ergänzen Sie den Satz:\n"Herr Meier hat sich gestern ein___ neu___ Laptop für die Arbeit gekauft."`,
    options: [
      'einen neuen',
      'ein neues',
      'einem neuen'
    ],
    correct: 0,
    explanation: 'Laptop is masculine (der Laptop). In the Accusative case: einen neuen Laptop.'
  },
  {
    id: 11,
    type: 'Grammatik: Negation & Antwort',
    question: `Ergänzen Sie den Dialog:\n"Kommst du heute Abend nicht mit ins Kino?" – "___! Ich habe mir doch extra schon eine Kinokarte gekauft!"`,
    options: [
      'Doch',
      'Ja',
      'Nein'
    ],
    correct: 0,
    explanation: 'A negative question ("nicht mit ins Kino?") contradicted in the affirmative must always take "Doch!".'
  },
  {
    id: 12,
    type: 'Grammatik: Modalverben',
    question: `Welcher Satz ist grammatikalisch VOLLSTÄNDIG und RICHTIG?`,
    options: [
      'Ich muss morgen früh aufstehen.',
      'Ich muss morgen früh aufstehen müssen.',
      'Morgen früh ich muss aufstehen.'
    ],
    correct: 0,
    explanation: 'Modal verb sentence bracket: Modal verb conjugated in Position 2, main infinitive at the end: Ich muss ... aufstehen.'
  },
  {
    id: 13,
    type: 'Grammatik: Dativ-Pronomen',
    question: `Ergänzen Sie den Satz:\n"Entschuldigung, können Sie ___ (ich) bitte sagen, wo der Ausgang zum Bahnhof ist?"`,
    options: [
      'mir',
      'mich',
      'mein'
    ],
    correct: 0,
    explanation: 'The person being told something takes the Dative case: "sagen + Dativ" (Können Sie mir sagen...?).'
  },
  {
    id: 14,
    type: 'Grammatik: Wortstellung (Inversion)',
    question: `Welcher Satz hat die KORREKTE Wortstellung nach der Zeitangabe?`,
    options: [
      'Am Dienstag gehe ich zum Arzt.',
      'Am Dienstag ich gehe zum Arzt.',
      'Gehe am Dienstag ich zum Arzt.'
    ],
    correct: 0,
    explanation: 'V2 rule with inversion: Position 1 (Time phrase: Am Dienstag) + Position 2 (Conjugated verb: gehe) + Position 3 (Subject: ich).'
  },
  {
    id: 15,
    type: 'Grammatik: Perfekt mit sein',
    question: `Ergänzen Sie das Perfekt:\n"Meine Eltern ___ gestern mit dem Flugzeug nach Frankfurt ___." (fliegen)`,
    options: [
      'sind ... geflogen',
      'haben ... geflogen',
      'waren ... gefliegt'
    ],
    correct: 0,
    explanation: '"fliegen" denotes movement from location A to B and requires the auxiliary "sein": Meine Eltern sind ... geflogen.'
  },
  {
    id: 16,
    type: 'Grammatik: Imperativ',
    question: `Die Lehrerin spricht mit einem Schüler (du-Form):\n"Lukas, ___ bitte nicht so laut im Klassenzimmer!" (sprechen)`,
    options: [
      'Sprich',
      'Spreche',
      'Sprichst'
    ],
    correct: 0,
    explanation: 'The informal singular imperative of "sprechen" retains the e → i stem vowel change and drops the -st ending: Sprich!'
  },
  {
    id: 17,
    type: 'Grammatik: Temporale Präpositionen',
    question: `Ergänzen Sie die Präpositionen:\n"Der Intensivkurs Deutsch beginnt ___ ersten Oktober und findet immer ___ 9:00 Uhr statt."`,
    options: [
      'am ... um',
      'im ... am',
      'um ... am'
    ],
    correct: 0,
    explanation: 'Calendar dates take "am" (am ersten Oktober); exact clock times take "um" (um 9:00 Uhr).'
  },
  {
    id: 18,
    type: 'Grammatik: Existenz (es gibt)',
    question: `Ergänzen Sie den Satz:\n"In unserem Stadtteil gibt es ___ (kein) Supermarkt mehr."`,
    options: [
      'keinen',
      'kein',
      'keinem'
    ],
    correct: 0,
    explanation: '"es gibt" always governs the Accusative case. Supermarkt is masculine (der Supermarkt): keinen Supermarkt.'
  },
  {
    id: 19,
    type: 'Grammatik: Trennbare Verben',
    question: `Welcher Satz verwendet das Verb "einkaufen" RICHTIG?`,
    options: [
      'Mein Vater kauft jeden Samstag im Bioladen ein.',
      'Mein Vater einkauft jeden Samstag im Bioladen.',
      'Jeden Samstag mein Vater kauft ein im Bioladen.'
    ],
    correct: 0,
    explanation: 'In the present tense main clause, the separable prefix "ein-" moves to the very end of the sentence: kauft ... ein.'
  },
  {
    id: 20,
    type: 'Grammatik: Unpersönliches "man"',
    question: `Ergänzen Sie das Verb:\n"Hier am Bahnhof ___ man Fahrkarten sowohl am Automaten als auch am Schalter kaufen." (können)`,
    options: [
      'kann',
      'können',
      'kannst'
    ],
    correct: 0,
    explanation: 'The impersonal pronoun "man" conjugates verbs in the 3rd person singular (er/sie/es): man kann.'
  }
];

// =========================================================================
// GOETHE START DEUTSCH 1 — SCHREIBEN TEIL 1 (Formular ausfüllen)
// =========================================================================
window.DM_EXAM_SCHREIBEN_TEIL1 = {
  instruction: 'Ihre Freundin Eva Kadavy macht mit ihrem Mann und ihren zwei Söhnen (6 und 9 Jahre alt) Urlaub am Bodensee. Sie möchte in Lindau eine Ferienwohnung für eine Woche mieten. Da Eva unterwegs ist, bittet sie Sie, das Anmeldeformular auszufüllen. Sie zahlt per Kreditkarte.',
  fields: [
    { id: 'f1', label: '1. Familienname:', expected: ['kadavy'], hint: 'Familienname der Freundin' },
    { id: 'f2', label: '2. Vorname:', expected: ['eva'], hint: 'Vorname der Freundin' },
    { id: 'f3', label: '3. Anzahl der Personen (Gesamt):', expected: ['4', '4 personen', 'vier'], hint: 'Eva + Mann + 2 Kinder = 4 Personen' },
    { id: 'f4', label: '4. Urlaubsort / Reiseziel:', expected: ['lindau', 'bodensee'], hint: 'Wo liegt die Ferienwohnung?' },
    { id: 'f5', label: '5. Zahlungsweise:', expected: ['kreditkarte', 'per kreditkarte', 'mit kreditkarte'], hint: 'Wie bezahlt Eva?' }
  ]
};

// =========================================================================
// GOETHE START DEUTSCH 1 — SCHREIBEN TEIL 2 (E-Mail verfassen)
// =========================================================================
window.DM_EXAM_SCHREIBEN_TEIL2 = {
  prompt: 'Sie möchten am Samstagabend eine Party feiern und Ihre Deutschlehrerin, Frau Berg, dazu einladen. Schreiben Sie eine E-Mail an Frau Berg.',
  leitpunkte: [
    { id: 'lp1', label: 'Grund für Ihr Schreiben: Einladung zur Feier', keywords: ['einladen', 'einladung', 'party', 'feier', 'feiern', 'geburtstag'] },
    { id: 'lp2', label: 'Wann und wo: Zeit und Ort der Feier', keywords: ['samstag', 'uhr', 'bei mir', 'zu hause', 'adresse', 'wohnung'] },
    { id: 'lp3', label: 'Bitte um Rückmeldung oder etwas mitbringen', keywords: ['mitbringen', 'kommen', 'antworten', 'bescheid', 'freuen'] }
  ],
  sampleSolution: 'Liebe Frau Berg,\nich möchte Sie herzlich zu meiner Party am Samstag einladen. Wir feiern ab 19 Uhr bei mir zu Hause. Bitte geben Sie mir kurz Bescheid, ob Sie kommen können.\nHerzliche Grüße,\nBhavani'
};
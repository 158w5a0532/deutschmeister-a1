/**
 * DeutschMeister A1 — Modul 4: Reallife-Simulator (16 Alltags-Quests)
 * Complete interactive roleplay scenarios covering real-life survival and administrative transactions in Germany.
 * Supports Multiple-Choice Dialogue, Open-Text Typing Responses, and Interactive Official Form Submissions.
 */

window.DM_SCENARIOS = [
  // =========================================================================
  // 1. GREETINGS & INTRODUCTIONS (Personal Profile & Spelling)
  // =========================================================================
  {
    id: 'rpg_1',
    icon: '👋',
    title: '1. Begrüßung & Steckbrief',
    npcRole: 'Sprachpartner Lukas',
    steps: [
      {
        npc: 'Hallo! Schön dich kennenzulernen. Wie heißt du und woher kommst du?',
        clue: 'Introduce yourself politely with your name and country of origin using "aus".',
        type: 'choice',
        options: [
          { text: 'Hallo Lukas! Ich heiße Bhavani und ich komme aus Indien.', correct: true, feedback: 'Ausgezeichnet! Natural greeting, correct V2 verb word order, and the correct preposition "aus".' },
          { text: 'Ich aus Indien bin heiße Lukas.', correct: false, feedback: 'Sentence structure error: The finite verb must remain strictly in Position 2.' },
          { text: 'Mein Name Indien.', correct: false, feedback: 'Incomplete sentence: Always use a conjugated verb (Ich heiße / Mein Name ist).' }
        ]
      },
      {
        npc: 'Freut mich sehr! Wo wohnst du denn zurzeit hier in Deutschland?',
        clue: 'State your current city of residence using the preposition "in".',
        type: 'choice',
        options: [
          { text: 'Ich wohne in Weiterstadt in der Nähe von Frankfurt am Main.', correct: true, feedback: 'Perfekt! Correct verb conjugation (ich wohne) and preposition "in" for cities.' },
          { text: 'Ich nach Weiterstadt wohnen.', correct: false, feedback: 'Wrong preposition: "nach" indicates directional movement, not stationary residence. Use "in".' },
          { text: 'Wohnort Weiterstadt mein.', correct: false, feedback: 'Grammatically incomplete.' }
        ]
      },
      {
        npc: 'Kannst du deinen Nachnamen bitte kurz für mich buchstabieren?',
        clue: 'Spell out your surname using the standard German alphabet letters.',
        type: 'choice',
        options: [
          { text: 'Ja, natürlich: N - A - K - K - A.', correct: true, feedback: 'Sehr gut! Clear and accurate German letter spelling.' },
          { text: 'Nein, das mache ich überhaupt nicht.', correct: false, feedback: 'Unfriendly and counterproductive for basic communication.' }
        ]
      },
      {
        npc: 'Welche Sprachen sprichst du eigentlich?',
        clue: 'Answer with the stem-changing verb "sprechen" (ich spreche).',
        type: 'typing',
        keywords: ['ich', 'spreche', 'deutsch', 'englisch'],
        feedback: 'Super! Remember: "ich spreche" does not have an umlaut or stem-vowel change; that only occurs in "du sprichst / er spricht".'
      }
    ]
  },

  // =========================================================================
  // 2. OFFICIAL REGISTRATION (Language Course Enrollment Form)
  // =========================================================================
  {
    id: 'rpg_2',
    icon: '📝',
    title: '2. Sprachkurs-Anmeldung',
    npcRole: 'Sekretärin Frau Winter',
    steps: [
      {
        npc: 'Guten Tag! Möchten Sie sich für den Deutschkurs A1 an unserer Sprachschule anmelden?',
        clue: 'Respond formally with polite address (Sie-form) and confirm your intention.',
        type: 'choice',
        options: [
          { text: 'Guten Tag. Ja, genau, ich möchte mich gerne für den Intensivkurs A1 anmelden.', correct: true, feedback: 'Sehr höflich! Uses the polite modal verb "möchte" and correct terminology.' },
          { text: 'Ja, gib mir Kurs sofort!', correct: false, feedback: 'Too rude and informal for an administrative office setting.' },
          { text: 'Ich lernen Deutsch hier wollen.', correct: false, feedback: 'Word-order error: The conjugated verb must be in Position 2.' }
        ]
      },
      {
        npc: 'Sehr gerne. Bevor wir beginnen, füllen Sie bitte dieses offizielle Anmeldeformular vollständig aus.',
        clue: 'Fill in your personal details (Name, Vorname, Geburtsdatum, Familienstand).',
        type: 'form'
      },
      {
        npc: 'Vielen Dank. Haben Sie auch eine Telefonnummer und eine E-Mail-Adresse für wichtige Kursinformationen?',
        clue: 'Provide your contact information clearly.',
        type: 'choice',
        options: [
          { text: 'Ja, meine Handynummer ist 0176-12345678 und meine E-Mail ist student@beispiel.de.', correct: true, feedback: 'Perfekt! Clear and properly phrased contact details.' },
          { text: 'Nein, ich gebe keine Information.', correct: false, feedback: 'The registration office cannot process your class without contact information.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. TRADITIONAL BAKERY (Bread, Pastries, Quantities & Paying)
  // =========================================================================
  {
    id: 'rpg_3',
    icon: '🥖',
    title: '3. In der Bäckerei',
    npcRole: 'Bäckermeister Heinz',
    steps: [
      {
        npc: 'Guten Morgen! Der Nächste, bitte! Was darf es denn für Sie sein?',
        clue: 'Use "Ich möchte..." or "Ich hätte gern..." followed by plural food items.',
        type: 'choice',
        options: [
          { text: 'Guten Morgen! Ich möchte bitte zwei Brötchen und ein Vollkornbrot.', correct: true, feedback: 'Sehr gut! Polite phrasing with correct plural "zwei Brötchen" and neuter "ein Brot".' },
          { text: 'Gib mir Brot jetzt!', correct: false, feedback: 'Way too abrupt and unidiomatic in Germany.' },
          { text: 'Ich will Brot kaufen da.', correct: false, feedback: '"Ich möchte" or "Ich hätte gern" is much more polite than "Ich will".' }
        ]
      },
      {
        npc: 'Sehr gerne. Das Vollkornbrot: Möchten Sie das Brot geschnitten haben oder am Stück?',
        clue: 'State your preference clearly.',
        type: 'choice',
        options: [
          { text: 'Geschnitten, bitte! Vielen Dank.', correct: true, feedback: 'Klasse! A common daily question in German bakeries.' },
          { text: 'Egal, machen Sie was Sie wollen.', correct: false, feedback: 'Unnecessarily indifferent.' }
        ]
      },
      {
        npc: 'Darf es sonst noch etwas sein? Wir haben heute ganz frische Apfeltaschen im Angebot.',
        clue: 'Decline politely or ask for the total price.',
        type: 'choice',
        options: [
          { text: 'Nein danke, das ist alles. Wie viel macht das zusammen?', correct: true, feedback: 'Perfekt! "Das ist alles. Was macht das zusammen?" is the golden shopping formula.' },
          { text: 'Nein, ich bin fertig mit dir.', correct: false, feedback: 'Inappropriate translation from English.' }
        ]
      },
      {
        npc: 'Das macht zusammen genau 4 Euro und 80 Cent, bitte.',
        clue: 'Hand over 5 Euros and tell him to keep the change using the authentic German phrase.',
        type: 'choice',
        options: [
          { text: 'Hier sind 5 Euro. Stimmt so, vielen Dank!', correct: true, feedback: 'Brillant! "Stimmt so!" is the standard way to leave a small tip and conclude the transaction.' },
          { text: 'Hier ist Geld. Behalten Sie den Rest für immer.', correct: false, feedback: 'Unnatural phrasing.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. CAFÉ & RESTAURANT (Ordering Food, Drinks & Paying the Bill)
  // =========================================================================
  {
    id: 'rpg_4',
    icon: '☕',
    title: '4. Im Café & Restaurant',
    npcRole: 'Kellner Marco',
    steps: [
      {
        npc: 'Hallo! Haben Sie schon einen Platz gefunden? Was möchten Sie trinken?',
        clue: 'Order a masculine beverage (Kaffee/Tee) in the Accusative case: "einen...".',
        type: 'choice',
        options: [
          { text: 'Ich nehme einen großen Kaffee mit Milch und Zucker, bitte.', correct: true, feedback: 'Hervorragend! "nehmen" + Accusative masculine = "einen großen Kaffee".' },
          { text: 'Ich trinke ein Kaffee.', correct: false, feedback: 'Gender error: Kaffee is masculine (der Kaffee). Accusative = einen Kaffee.' },
          { text: 'Kaffee bringen mir.', correct: false, feedback: 'Grammatically broken.' }
        ]
      },
      {
        npc: 'Und möchten Sie auch eine Kleinigkeit essen? Unsere Tagessuppe ist heute Kürbiscreme.',
        clue: 'Order the soup or express that you are only having a drink.',
        type: 'choice',
        options: [
          { text: 'Ja gerne, ich probiere die Tagessuppe.', correct: true, feedback: 'Sehr gut! Feminine Accusative "die Tagessuppe" stays "die".' },
          { text: 'Nein danke, ich möchte im Moment nur den Kaffee trinken.', correct: true, feedback: 'Perfekt! Accurate use of the modal verb with sentence bracket.' },
          { text: 'Essen ist schlecht für mich.', correct: false, feedback: 'Unnatural answer in a restaurant.' }
        ]
      },
      {
        npc: 'Hat alles gut geschmeckt? ... Möchten Sie bezahlen?',
        clue: 'Ask for the bill politely.',
        type: 'choice',
        options: [
          { text: 'Ja, es war sehr lecker! Zahlen, bitte!', correct: true, feedback: 'Exzellent! "Zahlen, bitte!" is the authentic, polite way to ask for the bill.' },
          { text: 'Ich will jetzt mein Geld geben.', correct: false, feedback: 'Unnatural.' }
        ]
      },
      {
        npc: 'Zahlen Sie zusammen oder getrennt?',
        clue: 'Decide whether to pay together or separately.',
        type: 'choice',
        options: [
          { text: 'Zusammen bitte, und ich bezahle mit Karte.', correct: true, feedback: 'Super! "Zusammen" (together) vs. "getrennt" (separately).' },
          { text: 'Getrennt bitte, jeder bezahlt für sich.', correct: true, feedback: 'Klasse! Very common practice in German dining.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. APARTMENT HUNTING (Apartment Viewing, Rent, Utilities & Rooms)
  // =========================================================================
  {
    id: 'rpg_5',
    icon: '🏠',
    title: '5. Wohnungssuche & Besichtigung',
    npcRole: 'Vermieter Herr Schneider',
    steps: [
      {
        npc: 'Guten Tag! Schön, dass Sie zur Wohnungsbesichtigung da sind. Kommen Sie doch bitte herein!',
        clue: 'Greet the landlord and introduce yourself politely.',
        type: 'choice',
        options: [
          { text: 'Guten Tag, Herr Schneider! Vielen Dank für die Einladung zur Besichtigung.', correct: true, feedback: 'Sehr höflich und professionell!' },
          { text: 'Hallo Mann, zeig mir die Wohnung.', correct: false, feedback: 'Way too informal for a landlord meeting in Germany.' }
        ]
      },
      {
        npc: 'Die Wohnung hat 2 Zimmer, eine Einbauküche, ein Badezimmer und einen schönen Balkon im 2. Stock. Wie gefällt sie Ihnen?',
        clue: 'Use the Dative verb "gefallen" with "mir".',
        type: 'choice',
        options: [
          { text: 'Die Wohnung gefällt mir wirklich sehr gut! Sie ist sehr hell und modern.', correct: true, feedback: 'Ausgezeichnet! "Die Wohnung gefällt mir" (gefallen + Dativ).' },
          { text: 'Ich gefalle die Wohnung.', correct: false, feedback: 'Wrong grammatical direction: The apartment pleases you (Sie gefällt mir).' }
        ]
      },
      {
        npc: 'Die Kaltmiete beträgt 650 Euro pro Monat. Haben Sie Fragen zu den weiteren Kosten?',
        clue: 'Ask specifically about the utility costs (Nebenkosten) and warm rent (Warmmiete).',
        type: 'choice',
        options: [
          { text: 'Ja, wie hoch sind die Nebenkosten und wie hoch ist die Kaution?', correct: true, feedback: 'Essenzielle A1-Vokabeln: Nebenkosten and Kaution (security deposit).' },
          { text: 'Was kostet Wasser und Licht bei Ihnen?', correct: false, feedback: 'Use the official term "Nebenkosten".' }
        ]
      },
      {
        npc: 'Die Nebenkosten liegen bei 180 Euro inklusive Heizung. Die Kaution beträgt 3 Kaltmieten. Wären Sie interessiert?',
        clue: 'Confirm your strong interest.',
        type: 'choice',
        options: [
          { text: 'Ja, sehr gerne! Ich habe alle Bewerbungsunterlagen und Gehaltsnachweise dabei.', correct: true, feedback: 'Perfekt! Being prepared with paperwork is crucial in the German rental market.' },
          { text: 'Vielleicht, ich überlege ein Jahr lang.', correct: false, feedback: 'You will lose the apartment.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. DAILY ROUTINE & APPOINTMENTS (Time, Days, Calendar & Scheduling)
  // =========================================================================
  {
    id: 'rpg_6',
    icon: '⏰',
    title: '6. Tagesablauf & Termine',
    npcRole: 'Kollegin Sarah',
    steps: [
      {
        npc: 'Hallo! Wann beginnt eigentlich dein Arbeitstag normalerweise morgens?',
        clue: 'Use a reflexive or regular routine verb with a time preposition: "um... Uhr".',
        type: 'choice',
        options: [
          { text: 'Mein Arbeitstag beginnt um 8:30 Uhr und ich stehe um 6:30 Uhr auf.', correct: true, feedback: 'Perfekt! "um" for clock times and separable verb "aufstehen" (stehe ... auf).' },
          { text: 'Ich beginne in 8:30 Uhr.', correct: false, feedback: 'Preposition error: Clock time strictly uses "um", not "in".' }
        ]
      },
      {
        npc: 'Wollen wir uns heute nach der Arbeit treffen? Wie wäre es mit "halb fünf"?',
        clue: 'Remember the German time system: "halb fünf" means 16:30 (halfway to 5)!',
        type: 'choice',
        options: [
          { text: 'Halb fünf, also 16:30 Uhr? Ja, das passt mir super!', correct: true, feedback: 'Richtig! In German, "halb fünf" is 4:30 / 16:30, NOT 5:30.' },
          { text: 'Halb fünf ist 17:30 Uhr, das ist zu spät.', correct: false, feedback: 'Falsch! "halb fünf" is half an hour before five = 4:30.' }
        ]
      },
      {
        npc: 'Können wir uns stattdessen am Donnerstag treffen? Da habe ich mehr Zeit.',
        clue: 'Respond positively using the day preposition "am".',
        type: 'choice',
        options: [
          { text: 'Ja, am Donnerstag habe ich auch Zeit. Treffen wir uns um 17 Uhr!', correct: true, feedback: 'Klasse! "am" for days of the week, with correct V2 inversion.' },
          { text: 'Im Donnerstag ist gut.', correct: false, feedback: 'Days of the week use "am" (an + dem), never "im".' }
        ]
      }
    ]
  },

  // =========================================================================
  // 7. TRAIN STATION & TICKETS (Deutsche Bahn, Platforms & Timetables)
  // =========================================================================
  {
    id: 'rpg_7',
    icon: '🚆',
    title: '7. Am Hauptbahnhof',
    npcRole: 'Bahn-Schalterbeamter',
    steps: [
      {
        npc: 'Guten Tag! Willkommen am DB Reisezentrum. Wohin möchten Sie reisen?',
        clue: 'State your destination using the preposition "nach" for cities.',
        type: 'choice',
        options: [
          { text: 'Guten Tag! Ich brauche eine Fahrkarte nach München für heute Nachmittag, bitte.', correct: true, feedback: 'Perfekt! Feminine Accusative "eine Fahrkarte" and "nach München".' },
          { text: 'Ich will reisen zu München Bahn.', correct: false, feedback: 'Wrong preposition and syntax.' }
        ]
      },
      {
        npc: 'Möchten Sie eine einfache Fahrt oder Hin- und Rückfahrt?',
        clue: 'Choose a one-way ticket (einfache Fahrt) or round-trip (Hin- und Rückfahrt).',
        type: 'choice',
        options: [
          { text: 'Nur eine einfache Fahrt, bitte.', correct: true, feedback: 'Klar und präzise!' },
          { text: 'Hin- und Rückfahrt, bitte. Ich komme am Sonntag wieder zurück.', correct: true, feedback: 'Sehr gut! Clear scheduling.' }
        ]
      },
      {
        npc: 'Da haben wir einen ICE um 14:15 Uhr. Ihr Zug fährt von Gleis 7 ab. Möchten Sie einen Sitzplatz reservieren?',
        clue: 'Respond with Accusative masculine: "einen Sitzplatz".',
        type: 'choice',
        options: [
          { text: 'Ja bitte, ich möchte einen Sitzplatz im Ruhebereich reservieren.', correct: true, feedback: 'Ausgezeichnet! Accusative masculine "einen Sitzplatz".' },
          { text: 'Nein danke, ich brauche keine Reservierung.', correct: true, feedback: 'Vollkommen korrekt!' }
        ]
      },
      {
        npc: 'Hat der Zug Verspätung? Nein, im Moment ist er pünktlich. Das Ticket kostet 54 Euro.',
        clue: 'Hand over your card or cash politely.',
        type: 'choice',
        options: [
          { text: 'Hier ist meine Kreditkarte. Vielen Dank für Ihre Hilfe!', correct: true, feedback: 'Perfekter Abschluss am Fahrkartenschalter.' },
          { text: 'Hier, nimm.', correct: false, feedback: 'Too rude and informal for a counter interaction.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 8. ASKING FOR & GIVING DIRECTIONS (City Navigation & Orientation)
  // =========================================================================
  {
    id: 'rpg_8',
    icon: '🗺️',
    title: '8. Wegbeschreibung & Orientierung',
    npcRole: 'Passant Herr Frank',
    steps: [
      {
        npc: 'Entschuldigung, darf ich Sie kurz stören? Wissen Sie, wo die nächste Postfiliale ist?',
        clue: 'Give directions using imperative for "Sie": "Gehen Sie...".',
        type: 'choice',
        options: [
          { text: 'Ja, gehen Sie hier geradeaus bis zur Ampel und dann nach rechts.', correct: true, feedback: 'Vorbildlich! Imperative "Gehen Sie", "geradeaus" and "nach rechts".' },
          { text: 'Du gehst irgendwo da hinten.', correct: false, feedback: 'Always use formal "Sie" with strangers on the street.' }
        ]
      },
      {
        npc: 'Vielen Dank! Ist die Post denn weit von hier entfernt?',
        clue: 'Estimate walking distance or time.',
        type: 'choice',
        options: [
          { text: 'Nein, das sind nur ungefähr 5 Minuten zu Fuß.', correct: true, feedback: 'Klassische Formulierung: "zu Fuß" (on foot).' },
          { text: 'Sehr viel Meter weg.', correct: false, feedback: 'Unnatural.' }
        ]
      },
      {
        npc: 'Super! Liegt die Post direkt an der Kreuzung?',
        clue: 'Confirm the exact location.',
        type: 'choice',
        options: [
          { text: 'Ja, genau gegenüber von der großen Apotheke.', correct: true, feedback: 'Exzellente Präpositionsnutzung: "gegenüber von + Dativ".' },
          { text: 'Ich weiß nicht mehr.', correct: false, feedback: 'Unhelpful.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 9. DOCTOR & PHARMACY (Symptoms, Illness, Prescriptions & Instructions)
  // =========================================================================
  {
    id: 'rpg_9',
    icon: '🩺',
    title: '9. Beim Arzt & In der Apotheke',
    npcRole: 'Dr. med. Hoffmann',
    steps: [
      {
        npc: 'Guten Tag! Nehmen Sie bitte Platz. Was fehlt Ihnen denn? Welche Beschwerden haben Sie?',
        clue: 'Describe your symptoms using "Ich habe..." or "Mir tut ... weh".',
        type: 'choice',
        options: [
          { text: 'Guten Tag, Herr Doktor. Ich habe seit zwei Tagen hohes Fieber und mein Kopf tut weh.', correct: true, feedback: 'Sehr gut! "Seit + Dativ" and the authentic pain idiom "tut weh".' },
          { text: 'Ich bin Schmerz im Kopf.', correct: false, feedback: 'Literal translation error: Say "Ich habe Kopfschmerzen" or "Mein Kopf tut weh".' }
        ]
      },
      {
        npc: 'Ich verstehe. Haben Sie auch Halsschmerzen oder Husten?',
        clue: 'Clarify your symptoms.',
        type: 'choice',
        options: [
          { text: 'Ja, mein Hals tut auch weh und ich muss viel husten.', correct: true, feedback: 'Klar und verständlich!' },
          { text: 'Nein, nur Kopf und Fieber.', correct: true, feedback: 'Präzise Antwort.' }
        ]
      },
      {
        npc: 'Sie haben eine starke Erkältung. Sie dürfen drei Tage nicht arbeiten und müssen im Bett bleiben.',
        clue: 'Ask for the official sick certificate for your employer (Arbeitsunfähigkeitsbescheinigung / Attest).',
        type: 'choice',
        options: [
          { text: 'Können Sie mir bitte eine Krankmeldung für meinen Arbeitgeber ausstellen?', correct: true, feedback: 'Essentiell für Arbeitnehmer in Deutschland: Die "Krankmeldung" / das Attest.' },
          { text: 'Ich gehe trotzdem ins Büro.', correct: false, feedback: 'Contradicts doctor\'s orders.' }
        ]
      },
      {
        npc: 'Hier ist Ihr Rezept für die Apotheke. Nehmen Sie die Tabletten dreimal täglich nach dem Essen.',
        clue: 'Inquire about medication intake.',
        type: 'typing',
        keywords: ['wie', 'oft', 'tabletten', 'danke'],
        feedback: 'Super! At the pharmacy you will ask: "Wie oft soll ich die Tabletten nehmen?"'
      }
    ]
  },

  // =========================================================================
  // 10. WORKPLACE & OFFICE (Colleagues, Schedules & Office Supplies)
  // =========================================================================
  {
    id: 'rpg_10',
    icon: '💼',
    title: '10. Am Arbeitsplatz',
    npcRole: 'Teamleiter Thomas',
    steps: [
      {
        npc: 'Guten Morgen! Hast du den Projektbericht für unser Team-Meeting um 10 Uhr schon vorbereitet?',
        clue: 'Confirm completion using the Perfekt past tense (Ich habe vorbereitet).',
        type: 'choice',
        options: [
          { text: 'Guten Morgen Thomas! Ja, ich habe alle Unterlagen ausgedruckt und vorbereitet.', correct: true, feedback: 'Perfekt! Separable participle "ausgedruckt" and regular "vorbereitet".' },
          { text: 'Ich vorbereite gestern das.', correct: false, feedback: 'Tense error: Use Perfekt for completed actions in spoken German.' }
        ]
      },
      {
        npc: 'Klasse, danke dir! Kannst du mir vielleicht kurz deinen Textmarker und einen Stift leihen?',
        clue: 'Hand over supplies with Accusative masculine: "meinen Stift".',
        type: 'choice',
        options: [
          { text: 'Ja natürlich, hier gebe ich dir meinen Textmarker und einen Kugelschreiber.', correct: true, feedback: 'Ausgezeichnet! Both objects are masculine Accusative (meinen / einen).' },
          { text: 'Hier nimm mein Stift.', correct: false, feedback: 'Accusative masculine takes -en: meinen Stift.' }
        ]
      },
      {
        npc: 'Wann hast du heute eigentlich Feierabend? Wollen wir in der Mittagspause zusammen in die Kantine gehen?',
        clue: 'Coordinate lunch plans.',
        type: 'choice',
        options: [
          { text: 'Sehr gerne! Um 12:30 Uhr passt mir gut. Ich habe um 17 Uhr Feierabend.', correct: true, feedback: 'Perfekt formuliert! Klar und kollegial.' },
          { text: 'Nein, ich esse niemals Mittag.', correct: false, feedback: 'A bit too blunt for team building.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 11. FREE TIME & WEATHER (Hobbies, Weekend Plans & Weather Forecast)
  // =========================================================================
  {
    id: 'rpg_11',
    icon: '☀️',
    title: '11. Freizeit & Wetter',
    npcRole: 'Freundin Julia',
    steps: [
      {
        npc: 'Hallo! Das Wetter ist heute so schön sonnig! Wie viele Grad sind es bei dir?',
        clue: 'Report the temperature and describe the sunny weather.',
        type: 'choice',
        options: [
          { text: 'Es sind ungefähr 22 Grad und die Sonne scheint den ganzen Tag!', correct: true, feedback: 'Wunderbar! "Es sind ... Grad" and "die Sonne scheint".' },
          { text: 'Das Wetter macht 22 Grad.', correct: false, feedback: 'Say "Es sind 22 Grad", not "~~macht~~".' }
        ]
      },
      {
        npc: 'Hast du Lust, am Wochenende eine Fahrradtour an den See zu machen?',
        clue: 'Accept the invitation enthusiastically using "gern".',
        type: 'choice',
        options: [
          { text: 'Ja, sehr gerne! Ich fahre am Wochenende sehr gern Fahrrad.', correct: true, feedback: 'Perfekt! Hobbies are expressed with "fahren gern Fahrrad".' },
          { text: 'Ich mag Fahrrad nicht so.', correct: false, feedback: 'Better: "Ich fahre nicht so gern Fahrrad."' }
        ]
      },
      {
        npc: 'Soll ich etwas zu essen für unser Picknick mitbringen?',
        clue: 'Coordinate food for the picnic.',
        type: 'choice',
        options: [
          { text: 'Ja, bring bitte ein paar Snacks mit und ich backe einen Kuchen!', correct: true, feedback: 'Klasse Aufgabenteilung!' },
          { text: 'Bring alles allein mit.', correct: false, feedback: 'Unfair.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 12. WRITING FORMAL & INFORMAL EMAILS (Excuses & Course Notices)
  // =========================================================================
  {
    id: 'rpg_12',
    icon: '✉️',
    title: '12. E-Mails & Mitteilungen',
    npcRole: 'Sprachkursleiter Herr Berg',
    steps: [
      {
        npc: 'Du bist krank und kannst heute nicht zum Deutschkurs kommen. Wie lautet die formelle Anrede in deiner E-Mail?',
        clue: 'Select the official standard formal greeting for a male teacher.',
        type: 'choice',
        options: [
          { text: 'Sehr geehrter Herr Berg,', correct: true, feedback: 'Exakt! Standard formal opening for a named gentleman.' },
          { text: 'Lieber Herr Berg,', correct: false, feedback: 'Too informal for an official administrative notification.' },
          { text: 'Hallo Mann,', correct: false, feedback: 'Unacceptable in German correspondence.' }
        ]
      },
      {
        npc: 'Wie erklärst du höflich den Grund für dein Fehlen im Unterricht?',
        clue: 'State your illness and absence politely with modal verbs.',
        type: 'choice',
        options: [
          { text: 'Leider bin ich heute krank und kann nicht am Unterricht teilnehmen.', correct: true, feedback: 'Vorbildlich! Clear explanation with correct modal verb.' },
          { text: 'Ich habe keine Lust auf Grammatik heute.', correct: false, feedback: 'Not a legitimate excused absence.' }
        ]
      },
      {
        npc: 'Wie bittest du um die Hausaufgaben für die nächste Stunde?',
        clue: 'Polite request with "Könnten Sie...?" or "Bitte senden Sie...".',
        type: 'choice',
        options: [
          { text: 'Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken?', correct: true, feedback: 'Hervorragender höflicher Konjunktiv II / Höflichkeitsbitte!' },
          { text: 'Gib mir Aufgaben sofort.', correct: false, feedback: 'Command imperative is too impolite here.' }
        ]
      },
      {
        npc: 'Wie beendest du die formelle E-Mail ordnungsgemäß?',
        clue: 'Choose the standard formal closing formula.',
        type: 'choice',
        options: [
          { text: 'Mit freundlichen Grüßen, Bhavani Nakka', correct: true, feedback: 'Die unangefochtene deutsche Standard-Grußformel!' },
          { text: 'Tschüssikowski und bis bald!', correct: false, feedback: 'Only acceptable among close friends.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 13. CINEMA & TICKET COUNTER (Movies, Seats, Showtimes & Payments)
  // =========================================================================
  {
    id: 'rpg_13',
    icon: '🎬',
    title: '13. Kino & Ticketkauf',
    npcRole: 'Kinokassiererin Lena',
    steps: [
      {
        npc: 'Guten Abend! Willkommen im Cineplex. Für welche Vorstellung möchten Sie Tickets?',
        clue: 'Name the movie showtime and number of tickets with Accusative.',
        type: 'choice',
        options: [
          { text: 'Guten Abend! Wir möchten zwei Karten für den neuen Actionfilm um 20:15 Uhr, bitte.', correct: true, feedback: 'Perfekt! Feminine Accusative "zwei Karten" and correct time specification.' },
          { text: 'Gib mir Filmkarte sofort.', correct: false, feedback: 'Too rude at the ticket counter.' }
        ]
      },
      {
        npc: 'Möchten Sie lieber Parkett (vorne) oder Loge (hinten) sitzen?',
        clue: 'Pick your seating category.',
        type: 'choice',
        options: [
          { text: 'Lieber Loge in der Mitte, wenn noch Plätze frei sind.', correct: true, feedback: 'Sehr gut! "in der Mitte" (in the middle).' },
          { text: 'Egal wo, irgendwo halt.', correct: false, feedback: 'A bit too colloquial.' }
        ]
      },
      {
        npc: 'Das macht zusammen 22 Euro. Möchten Sie auch noch Popcorn oder Getränke?',
        clue: 'Respond politely with your snack preference.',
        type: 'choice',
        options: [
          { text: 'Ja gern, eine mittlere Portion Popcorn und eine Cola, bitte.', correct: true, feedback: 'Klasse Bestellung!' },
          { text: 'Nein danke, nur die Kinokarten.', correct: true, feedback: 'Vollkommen in Ordnung.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 14. STATIONERY & OFFICE SUPPLIES (Pens, Notebooks & Materials)
  // =========================================================================
  {
    id: 'rpg_14',
    icon: '✏️',
    title: '14. Schreibwarengeschäft',
    npcRole: 'Verkäufer Herr Weber',
    steps: [
      {
        npc: 'Guten Tag! Kann ich Ihnen helfen? Suchen Sie etwas Bestimmtes für den Deutschkurs?',
        clue: 'Ask for stationery using the Accusative case (einen Kugelschreiber, ein Notizheft).',
        type: 'choice',
        options: [
          { text: 'Guten Tag! Ja, ich suche einen schwarzen Kugelschreiber und ein kariertes Notizheft.', correct: true, feedback: 'Sehr gut! Masculine Accusative "einen Kugelschreiber", neuter "ein Heft".' },
          { text: 'Ich brauche der Stift da drüben.', correct: false, feedback: 'Grammar error: brauchen requires Accusative (den Stift).' }
        ]
      },
      {
        npc: 'Hier drüben haben wir hochwertige Füller und Kugelschreiber. Welche Farbe bevorzugen Sie?',
        clue: 'State your preferred ink color.',
        type: 'choice',
        options: [
          { text: 'Ich nehme blau oder schwarz, das ist am besten für Notizen.', correct: true, feedback: 'Perfekt!' },
          { text: 'Farbe ist mir komplett egal.', correct: false, feedback: 'Too dismissive.' }
        ]
      },
      {
        npc: 'Brauchen Sie sonst noch Textmarker oder ein deutsches Wörterbuch?',
        clue: 'Confirm or decline the additional items.',
        type: 'choice',
        options: [
          { text: 'Einen gelben Textmarker nehme ich auch noch dazu, bitte.', correct: true, feedback: 'Klasse! Masculine Accusative "einen gelben Textmarker".' },
          { text: 'Nein danke, das ist alles für heute. Wo kann ich bezahlen?', correct: true, feedback: 'Sehr gut nachgefragt!' }
        ]
      }
    ]
  },

  // =========================================================================
  // 15. DELAY SMS & SHORT MESSAGING (Transit Delays & Quick Notices)
  // =========================================================================
  {
    id: 'rpg_15',
    icon: '📱',
    title: '15. Verspätungs-Nachricht (SMS / Notiz)',
    npcRole: 'Kollege Markus',
    steps: [
      {
        npc: 'Situation: Deine S-Bahn hat 15 Minuten Verspätung. Du musst deinem Kollegen Markus eine schnelle Nachricht schicken.',
        clue: 'Type a message explaining your delay. Include key words like "Verspätung", "später" or "Zug".',
        type: 'typing',
        keywords: ['verspätung', 'später', 'bahn', 'zug', 'minuten', 'komme'],
        feedback: 'Perfekt! Eine typische SMS lautet: "Hallo Markus, meine S-Bahn hat leider 15 Minuten Verspätung. Ich komme etwas später zum Meeting!"'
      },
      {
        npc: 'Markus antwortet per SMS: "Kein Problem, danke für die Info! Sollen wir mit der Besprechung auf dich warten?"',
        clue: 'Answer with instructions on whether to start without you.',
        type: 'choice',
        options: [
          { text: 'Fangt bitte schon ohne mich an, ich stoße gleich dazu!', correct: true, feedback: 'Sehr professionell! Kollegial und lösungsorientiert.' },
          { text: 'Wartet gefälligst bis ich komme.', correct: false, feedback: 'Unnecessarily aggressive.' }
        ]
      }
    ]
  },

  // =========================================================================
  // 16. REGISTRATION AT CITIZENS’ OFFICE (Bürgeramt & Meldebehörde)
  // =========================================================================
  {
    id: 'rpg_16',
    icon: '🏛️',
    title: '16. Bürgeramt / Meldebehörde',
    npcRole: 'Sachbearbeiter Herr Vogel',
    steps: [
      {
        npc: 'Guten Tag! Nummer 142? Bitte nehmen Sie Platz. Sie möchten Ihren Wohnsitz in der Stadt anmelden?',
        clue: 'State your official purpose politely.',
        type: 'choice',
        options: [
          { text: 'Guten Tag, Herr Vogel. Ja genau, ich möchte mich und meine Wohnung hier anmelden.', correct: true, feedback: 'Sehr gut! Official administrative registration in Germany is called "Wohnsitz anmelden".' },
          { text: 'Ich wohne hier jetzt einfach.', correct: false, feedback: 'Too colloquial for the registration authorities.' }
        ]
      },
      {
        npc: 'Haben Sie Ihren gültigen Reisepass und die Wohnungsgeberbestätigung vom Vermieter dabei?',
        clue: 'Hand over the required legal documents.',
        type: 'choice',
        options: [
          { text: 'Ja, hier sind mein Reisepass und das unterschriebene Formular vom Vermieter.', correct: true, feedback: 'Perfekt! Both documents are strictly required by German law (Bundesmeldegesetz).' },
          { text: 'Nein, mein Vermieter hat mir nichts gegeben.', correct: false, feedback: 'Without the Wohnungsgeberbestätigung, registration is not possible.' }
        ]
      },
      {
        npc: 'Sehr gut, die Unterlagen sind vollständig geprüft. Bitte kontrollieren Sie die Meldebestätigung und unterschreiben Sie hier.',
        clue: 'Confirm and express gratitude.',
        type: 'choice',
        options: [
          { text: 'Alles stimmt. Vielen Dank für Ihre Unterstützung und einen schönen Tag noch!', correct: true, feedback: 'Exzellent! Polished, polite, and completes your official registration.' },
          { text: 'Ich unterschreibe hier gar nichts.', correct: false, feedback: 'Prevents the administrative registration from taking effect.' }
        ]
      }
    ]
  }
];
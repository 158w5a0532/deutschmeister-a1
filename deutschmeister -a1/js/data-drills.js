/**
 * DeutschMeister A1 — Modul 2: Erweiterte Grammatik-Arena & Satzbau-Architekt
 * 250+ distinct drill questions (25 per category) + 16 sentence builder puzzles.
 * Fully compatible with Multiple-Choice mode and Open-Text Typing mode.
 */

// Helper to convert concise raw tuples into the engine's standard question objects
function buildQuestions(raw) {
  return raw.map(([prompt, subprompt, options, answer, explanation]) => ({
    prompt,
    subprompt,
    options,
    answer,
    explanation
  }));
}

window.DM_DRILLS = {
  // =========================================================================
  // 1. VERB CONJUGATION & STEM CHANGES (25 QUESTIONS)
  // =========================================================================
  konjugation: {
    name: 'Verb-Konjugation & Vokalwechsel',
    description: 'Master regular verbs, stem shifts (-t/-d/-s/-ß), vowel changes (e→i/ie, a→ä), and auxiliary verbs.',
    questions: buildQuestions([
      ['Du ___ (arbeiten) heute im Homeoffice, oder?', 'Stems ending in -t/-d insert an connecting "-e-".', ['arbeitest', 'arbeitet', 'arbeite'], 'arbeitest', 'Stems ending in -t or -d add "-est" for "du": du arbeitest.'],
      ['Er ___ (arbeiten) bei einer Bank in Frankfurt.', '3rd person singular with connecting "-e-".', ['arbeitet', 'arbeitest', 'arbeiten'], 'arbeitet', 'For er/sie/es, verbs with stems in -t/-d add "-et": er arbeitet.'],
      ['Wie ___ (heißen) du mit Vornamen?', 'Stems ending in -s, -ß, or -z drop the "s" in the "du" ending.', ['heißt', 'heißest', 'heißen'], 'heißt', 'Since the stem already ends in "ß", the "du" ending only takes "-t": du heißt.'],
      ['Lukas ___ (sprechen) fließend Deutsch und Englisch.', 'Irregular stem-vowel change e → i for 3rd person singular.', ['spricht', 'sprecht', 'spreche'], 'spricht', '"sprechen" undergoes an e → i change in 2nd/3rd person singular: du sprichst, er spricht.'],
      ['Was ___ (essen) du morgens zum Frühstück?', 'Stem-vowel change e → i for 2nd person singular.', ['isst', 'esst', 'essen'], 'isst', '"essen" changes e → i: du isst, er isst.'],
      ['Frau Schneider ___ (sehen) heute den neuen Direktor.', 'Stem-vowel change e → ie for 3rd person singular.', ['sieht', 'seht', 'sehen'], 'sieht', '"sehen" changes e → ie: du siehst, er/sie sieht.'],
      ['___ (fahren) du morgen mit dem Zug nach Berlin?', 'Stem-vowel change a → ä for 2nd person singular.', ['Fährst', 'Fahrst', 'Fahrt'], 'Fährst', '"fahren" takes an umlaut in 2nd/3rd person singular: du fährst, er fährt.'],
      ['Das Kind ___ (schlafen) schon seit zwei Stunden.', 'Stem-vowel change a → ä for 3rd person singular.', ['schläft', 'schlaft', 'schläf'], 'schläft', '"schlafen" changes a → ä: du schläfst, es schläft.'],
      ['Was ___ (nehmen) Sie als Vorspeise, Herr Meyer?', 'Formal "Sie" address keeps the infinitive form.', ['nehmen', 'nimmt', 'nehmt'], 'nehmen', 'The polite form "Sie" always takes the standard "-en" infinitive ending: Sie nehmen.'],
      ['Du ___ (nehmen) heute den Schlüssel, richtig?', 'Special mutation for "nehmen": e → imm.', ['nimmst', 'nehmst', 'nehmt'], 'nimmst', '"nehmen" has an irregular stem change: du nimmst, er nimmt.'],
      ['Wir ___ (sein) seit zwei Wochen in Weiterstadt.', 'Present tense of auxiliary "sein" for 1st person plural.', ['sind', 'seid', 'waren'], 'sind', 'Conjugation of "sein": wir sind.'],
      ['Gestern ___ (haben) ich leider keine Zeit für Sport.', 'Past tense (Präteritum) of "haben" for A1.', ['hatte', 'habe', 'hattest'], 'hatte', 'In A1, the simple past of "haben" is standard: ich hatte, du hattest, er hatte.'],
      ['Wo ___ (sein) du gestern Abend um 20 Uhr?', 'Past tense (Präteritum) of "sein" for 2nd person singular.', ['warst', 'bist', 'waren'], 'warst', 'Simple past of "sein": ich war, du warst, er war.'],
      ['Ihr ___ (wohnen) in einem sehr schönen Haus.', '2nd person plural (ihr) takes the ending "-t".', ['wohnt', 'wohnen', 'wohnst'], 'wohnt', 'The regular ending for "ihr" is "-t": ihr wohnt, ihr macht.'],
      ['Was ___ (lesen) du gerade für ein Buch?', 'Stem-vowel change e → ie for "lesen".', ['liest', 'lesest', 'lest'], 'liest', '"lesen" changes e → ie: du liest, er liest.'],
      ['Der Kellner ___ (geben) dem Gast die Speisekarte.', 'Stem-vowel change e → i for "geben".', ['gibt', 'gebt', 'gebet'], 'gibt', '"geben" changes e → i: du gibst, er gibt.'],
      ['___ (treffen) du heute Abend deine Freunde?', 'Stem-vowel change e → i with double consonant: treffen.', ['Triffst', 'Treffst', 'Trifft'], 'Triffst', '"treffen" shifts e → i: du triffst, er trifft.'],
      ['Meine Mutter ___ (waschen) am Samstag die Wäsche.', 'Stem-vowel change a → ä: waschen.', ['wäscht', 'wascht', 'wäschet'], 'wäscht', '"waschen" adds an umlaut: du wäschst, er/sie wäscht.'],
      ['Der Chef ___ (finden) den Projektbericht sehr gut.', 'Stems ending in -d insert an -e-: finden.', ['findet', 'findst', 'findt'], 'findet', 'Verbs ending in -d add "-et" for 3rd person singular: er findet.'],
      ['Woher ___ (kommen) Sie, Herr Rossi?', 'Formal polite address "Sie".', ['kommen', 'kommt', 'kommst'], 'kommen', 'Formal "Sie" always takes the "-en" ending: Sie kommen.'],
      ['Ich ___ (trinken) jeden Tag zwei Liter Wasser.', '1st person singular takes "-e".', ['trinke', 'trinkst', 'trinkt'], 'trinke', 'Regular 1st person singular ending is "-e": ich trinke, ich lerne.'],
      ['Ihr ___ (haben) heute viel Glück gehabt.', '2nd person plural of auxiliary "haben".', ['habt', 'haben', 'hast'], 'habt', 'Conjugation of haben for ihr: ihr habt.'],
      ['___ (helfen) du mir bitte bei den Hausaufgaben?', 'Stem-vowel change e → i: helfen.', ['Hilfst', 'Helfst', 'Hilft'], 'Hilfst', '"helfen" changes e → i: du hilfst, er hilft.'],
      ['Er ___ (reisen) beruflich sehr oft nach Berlin.', 'Stem ending in -s takes only "-t" for 3rd person.', ['reist', 'reisst', 'reisen'], 'reist', 'Conjugation of reisen: er reist.'],
      ['Das Essen ___ (kosten) genau 12 Euro 50.', 'Stem in -t inserts -e- for 3rd person.', ['kostet', 'kost', 'kosten'], 'kostet', '"kosten" adds an "-et" ending: es kostet.']
    ])
  },

  // =========================================================================
  // 2. ARTICLES & ACCUSATIVE CASE (25 QUESTIONS)
  // =========================================================================
  artikelKasus: {
    name: 'Artikel & Akkusativ (der → den)',
    description: 'Master the masculine shift in direct objects (den/einen/keinen/meinen) and object pronouns.',
    questions: buildQuestions([
      ['Ich kaufe ___ (der) neuen Laptop heute Nachmittag.', 'Direct object: Masculine noun in Accusative.', ['den', 'der', 'dem'], 'den', 'In the Accusative case, only masculine articles change: der → den.'],
      ['Haben Sie ___ (ein) Kugelschreiber für mich?', 'Indefinite article with masculine noun in Accusative.', ['einen', 'ein', 'einem'], 'einen', 'Masculine indefinite article in the Accusative: ein → einen.'],
      ['Ich trinke jeden Morgen ___ (eine) Tasse Tee.', 'Feminine direct object in Accusative.', ['eine', 'einen', 'einer'], 'eine', 'Feminine articles stay identical in Nominative and Accusative: eine Tasse.'],
      ['Lukas sucht ___ (sein) Autoschlüssel überall.', 'Possessive determiner with masculine noun in Accusative.', ['seinen', 'sein', 'seinem'], 'seinen', 'Masculine possessive in Accusative takes "-en": seinen Schlüssel.'],
      ['Wir brauchen ___ (kein) Drucker für das Büro.', 'Negative article with masculine noun in Accusative.', ['keinen', 'kein', 'keine'], 'keinen', 'Negative article masculine Accusative: keinen Drucker.'],
      ['Wo ist mein Kuli? – Ich habe ___ (er) in die Tasche gesteckt.', 'Accusative personal pronoun for masculine noun.', ['ihn', 'er', 'ihm'], 'ihn', 'The pronoun for a masculine object in Accusative is "ihn" (er → ihn).'],
      ['Liebst du ___ (ich)? – Ja, ich liebe dich von ganzem Herzen.', 'Accusative pronoun for 1st person singular.', ['mich', 'mir', 'ich'], 'mich', 'Direct object pronoun for "ich" is "mich".'],
      ['Herr Wagner ruft ___ (Sie) morgen früh um 9 Uhr an.', 'Accusative pronoun for polite formal address.', ['Sie', 'Ihnen', 'Ihr'], 'Sie', 'The formal pronoun "Sie" stays "Sie" in the Accusative case.'],
      ['Ich möchte ___ (ein) Apfel und ___ (eine) Banane essen.', 'Mixed genders in direct object position.', ['einen ... eine', 'ein ... einen', 'einen ... ein'], 'einen ... eine', 'der Apfel → einen Apfel (mask.), die Banane → eine Banane (fem.).'],
      ['Besuchst du heute Abend ___ (dein) Großvater?', 'Possessive determiner with masculine noun.', ['deinen', 'dein', 'deinem'], 'deinen', 'der Großvater is masculine: Besuchen + Accusative = deinen Großvater.'],
      ['Er nimmt ___ (das) Brötchen mit Käse.', 'Neuter direct object in Accusative.', ['das', 'den', 'dem'], 'das', 'Neuter articles do not change in Accusative: das Brötchen.'],
      ['Hast du ___ (mein) Mantel gesehen? Er ist blau.', 'Masculine possessive in Accusative.', ['meinen', 'mein', 'meinem'], 'meinen', 'der Mantel → Hast du meinen Mantel gesehen?'],
      ['Wir haben gestern ___ (ein) neuen Fernseher gekauft.', 'Masculine direct object (der Fernseher).', ['einen', 'ein', 'einem'], 'einen', 'kaufen + Accusative masculine = einen neuen Fernseher.'],
      ['Ich verstehe ___ (du) leider überhaupt nicht.', 'Accusative personal pronoun for 2nd person singular.', ['dich', 'dir', 'du'], 'dich', 'verstehen requires Accusative: Ich verstehe dich.'],
      ['Kennst du ___ (die) neue Lehrerin schon?', 'Feminine definite direct object.', ['die', 'den', 'der'], 'die', 'Feminine Accusative definite article remains "die": die Lehrerin.'],
      ['Er trinkt morgens immer ___ (ein) heißen Kaffee.', 'Masculine direct object.', ['einen', 'ein', 'einem'], 'einen', 'der Kaffee is masculine: trinken + Accusative = einen heißen Kaffee.'],
      ['Wir laden ___ (ihr) herzlich zu unserer Party ein.', 'Accusative pronoun for 2nd person plural (ihr).', ['euch', 'ihr', 'uns'], 'euch', 'Accusative of ihr is euch: Wir laden euch ein.'],
      ['Siehst du ___ (der) Hund da drüben im Park?', 'Masculine definite direct object (der Hund).', ['den', 'der', 'dem'], 'den', 'sehen + Accusative masculine = den Hund.'],
      ['Ich habe ___ (keine) Zeit für eine Pause.', 'Feminine negative article (die Zeit).', ['keine', 'keinen', 'kein'], 'keine', 'die Zeit stays "keine" in Accusative: keine Zeit.'],
      ['Wo sind meine Brillen? – Ich habe ___ (sie, Pl.) auf den Tisch gelegt.', 'Plural pronoun in Accusative.', ['sie', 'ihnen', 'ihr'], 'sie', 'Plural 3rd person pronoun in Accusative remains "sie".'],
      ['Er schreibt ___ (ein) Brief an seine Eltern.', 'Masculine direct object (der Brief).', ['einen', 'ein', 'einem'], 'einen', 'der Brief → schreiben + Accusative = einen Brief.'],
      ['Braucht ihr ___ (unser) Hilfe beim Umzug?', 'Feminine possessive determiner (die Hilfe).', ['unsere', 'unseren', 'unser'], 'unsere', 'die Hilfe stays "unsere" in Accusative.'],
      ['Hast du ___ (der) Schlüssel für das Büro dabei?', 'Masculine definite direct object (der Schlüssel).', ['den', 'der', 'dem'], 'den', 'der Schlüssel → Hast du den Schlüssel dabei?'],
      ['Wir suchen ___ (ein) gemütliches Café in der Altstadt.', 'Neuter direct object (das Café).', ['ein', 'einen', 'einem'], 'ein', 'das Café remains "ein" in Accusative: ein Café.'],
      ['Ich rufe ___ (er) gleich auf dem Handy an.', 'Masculine personal pronoun in Accusative.', ['ihn', 'er', 'ihm'], 'ihn', 'anrufen + Accusative: er becomes ihn.']
    ])
  },

  // =========================================================================
  // 3. MODAL VERBS & SENTENCE BRACKETS (25 QUESTIONS)
  // =========================================================================
  modalverben: {
    name: 'Modalverben & Satzklammer',
    description: 'Master meanings, conjugations, and the bracket syntax of können, müssen, dürfen, wollen, sollen, möchten.',
    questions: buildQuestions([
      ['In diesem Raum ___ man nicht rauchen. Es ist verboten!', 'Expressing prohibition (dürfen + nicht).', ['darf', 'kann', 'muss'], 'darf', '"dürfen" negated expresses strict prohibition: Hier darf man nicht rauchen.'],
      ['Ich ___ heute lange arbeiten, weil das Projekt fertig sein muss.', 'Expressing mandatory obligation or necessity.', ['muss', 'kann', 'will'], 'muss', '"müssen" expresses unavoidable duty/necessity: Ich muss arbeiten.'],
      ['___ du gut schwimmen? – Ja, ich habe es als Kind gelernt.', 'Expressing learned ability or possibility.', ['Kannst', 'Musst', 'Darfst'], 'Kannst', '"können" denotes physical or acquired ability: Kannst du schwimmen?'],
      ['Der Arzt sagt, ich ___ viel Wasser trinken und mich ausruhen.', 'Expressing outside advice, instruction, or doctor’s orders.', ['soll', 'will', 'darf'], 'soll', '"sollen" is used for outside duties, moral expectations, or doctors\' instructions.'],
      ['Wir ___ im Sommer nach Italien fahren. Die Tickets sind schon gebucht.', 'Expressing a firm plan or strong desire.', ['wollen', 'sollen', 'dürfen'], 'wollen', '"wollen" expresses strong intention, plans, or determination.'],
      ['Guten Tag, ich ___ gerne eine Tasse Kaffee mit Milch bestellen.', 'Polite request / ordering in a restaurant or café.', ['möchte', 'will', 'kann'], 'möchte', '"möchte" (polite subjunctive of mögen) is the standard polite form for ordering.'],
      ['Markus ___ morgen früh um 6 Uhr aufstehen.', 'Conjugation of müssen: 1st and 3rd person singular have no ending.', ['muss', 'müsst', 'musst'], 'muss', 'Remember: 1st and 3rd person singular have no personal ending: ich muss, er muss.'],
      ['Kinder, ihr ___ jetzt eure Zähne putzen! (Pflicht)', '2nd person plural conjugation of müssen.', ['müsst', 'musst', 'müssen'], 'müsst', 'Conjugation of müssen for ihr: ihr müsst.'],
      ['Hier ___ man leider nicht parken. Sehen Sie das Schild?', 'Prohibition with dürfen in 3rd person singular (man).', ['darf', 'kann', 'soll'], 'darf', 'man darf nicht = one is not permitted to.'],
      ['___ Sie mir bitte helfen? (Höflichkeitsform)', 'Polite inquiry of ability with können.', ['Können', 'Kann', 'Könnt'], 'Können', 'Polite formal address: Können Sie mir helfen?'],
      ['Ich ___ kein Fleisch, weil ich Vegetarier bin.', 'Expressing preference/liking with mögen.', ['mag', 'möchte', 'muss'], 'mag', '"mögen" expresses general liking of food/nouns: Ich mag kein Fleisch.'],
      ['Was ___ du am Wochenende machen? Hast du schon Pläne?', 'Inquiring about plans with wollen (2nd person singular).', ['willst', 'wollst', 'wollt'], 'willst', 'Conjugation of wollen for du: du willst.'],
      ['Wir ___ heute leider nicht zur Party kommen, wir sind krank.', 'Inability with können (1st person plural).', ['können', 'kann', 'könnt'], 'können', 'wir können nicht kommen.'],
      ['Du ___ die Medizin dreimal täglich einnehmen, hat die Ärztin gesagt.', 'Doctor\'s recommendation with sollen (du-form).', ['sollst', 'sollt', 'sollest'], 'sollst', 'du sollst einnehmen.'],
      ['___ ich kurz Ihr Telefon benutzen? Es ist ein Notfall.', 'Asking permission politely with dürfen.', ['Darf', 'Muss', 'Soll'], 'Darf', 'Darf ich...? = May I...?'],
      ['Ihr ___ im Museum nicht fotografieren! (Verbot)', 'Prohibition for ihr-form.', ['dürft', 'darft', 'dürfen'], 'dürft', 'ihr dürft nicht = you all are not permitted to.'],
      ['Er ___ sehr gut Deutsch sprechen, weil er fleißig lernt.', 'Ability in 3rd person singular (können).', ['kann', 'kannst', 'könnt'], 'kann', 'er kann sprechen.'],
      ['Wir ___ heute Abend eine Pizza bestellen. Wer möchte mitessen?', 'Intention/plan in 1st person plural (wollen).', ['wollen', 'wollt', 'will'], 'wollen', 'wir wollen bestellen.'],
      ['___ du noch ein Stück Kuchen haben?', 'Polite offer with möchten (du-form).', ['Möchtest', 'Magst', 'Willst'], 'Möchtest', 'Möchtest du...? = Would you like...?'],
      ['Alle Mitarbeiter ___ am Montag um 9 Uhr anwesend sein.', 'Duty/necessity in plural (müssen).', ['müssen', 'müsst', 'muss'], 'müssen', 'Plural 3rd person: sie müssen sein.'],
      ['Satzklammer: Ich kann morgen leider nicht zum Unterricht ___ (kommen).', 'Full verb placement at the end of the clause in infinitive.', ['kommen', 'komme', 'gekommen'], 'kommen', 'Modal sentence bracket sends the plain infinitive to the very end.'],
      ['Satzklammer: Man darf hier im Krankenhaus nicht ___ (rauchen).', 'Full verb placement in infinitive at the end.', ['rauchen', 'raucht', 'geraucht'], 'rauchen', 'Modal bracket: darf ... rauchen.'],
      ['Satzklammer: Wir müssen heute den neuen Vertrag ___ (unterschreiben).', 'Full verb placement in infinitive at the end.', ['unterschreiben', 'unterschreibt', 'unterschrieben'], 'unterschreiben', 'Modal bracket: müssen ... unterschreiben.'],
      ['Satzklammer: Markus will am Wochenende ein neues Auto ___ (kaufen).', 'Full verb placement in infinitive at the end.', ['kaufen', 'kauft', 'gekauft'], 'kaufen', 'Modal bracket: will ... kaufen.'],
      ['Satzklammer: Soll ich dir ein Glas Wasser ___ (bringen)?', 'Full verb placement in infinitive at the end.', ['bringen', 'bringe', 'gebracht'], 'bringen', 'Modal bracket: Soll ich ... bringen?']
    ])
  },

  // =========================================================================
  // 4. SEPARABLE & INSEPARABLE VERBS (25 QUESTIONS)
  // =========================================================================
  trennbareVerben: {
    name: 'Trennbare Verben & Vorsilben',
    description: 'Learn prefix splitting mechanics (ab-, an-, auf-, ein-, aus-...) and contrast with inseparable verbs (be-, ver-...).',
    questions: buildQuestions([
      ['Markus steht jeden Wochentag um 6:30 Uhr ___. (aufstehen)', 'Separable prefix splits to the absolute end of the main clause.', ['auf', 'an', 'ein'], 'auf', 'In the present tense main clause, the prefix "auf-" moves to the very end: Er steht ... auf.'],
      ['Ich kaufe am Samstag immer im Supermarkt ___. (einkaufen)', 'Separable prefix for grocery shopping.', ['ein', 'aus', 'mit'], 'ein', '"einkaufen" splits in main clauses: Ich kaufe ... ein.'],
      ['Der Zug nach München fährt um 14:15 Uhr von Gleis 7 ___. (abfahren)', 'Prefix for train departures.', ['ab', 'an', 'vor'], 'ab', '"abfahren" (to depart): Der Zug fährt ... ab.'],
      ['Ruf mich bitte heute Abend nach 18 Uhr ___! (anrufen)', 'Imperative sentence with separable verb.', ['an', 'auf', 'mit'], 'an', 'In imperative sentences, the prefix also kicks to the end: Ruf mich ... an!'],
      ['Ich ___ die Rechnung sofort per Online-Banking. (bezahlen)', 'Attention: "be-" is an inseparable prefix!', ['bezahle', 'zahle be', 'bezahle ab'], 'bezahle', 'Prefixes like be-, ent-, er-, ver-, zer- NEVER separate: Ich bezahle die Rechnung.'],
      ['Wann fängt der Deutschkurs heute Nachmittag ___? (anfangen)', 'Separable verb with stem-vowel change a → ä in question form.', ['an', 'auf', 'aus'], 'an', '"anfangen" splits: Wann fängt der Kurs an?'],
      ['Der Zug kommt um 17:45 Uhr in Frankfurt ___. (ankommen)', 'Prefix for train arrivals.', ['an', 'ab', 'auf'], 'an', 'ankommen splits: Der Zug kommt ... an.'],
      ['Bitte füllen Sie das Anmeldeformular vollständig ___! (ausfüllen)', 'Prefix for filling out forms.', ['aus', 'auf', 'ab'], 'aus', 'ausfüllen splits: Füllen Sie ... aus!'],
      ['Wir laden alle Freunde zu unserer Geburtstagsparty ___. (einladen)', 'Prefix for invitations.', ['ein', 'an', 'auf'], 'ein', 'einladen splits: Wir laden ... ein.'],
      ['Er sieht jeden Abend zwei Stunden im Wohnzimmer ___. (fernsehen)', 'Prefix for watching TV.', ['fern', 'vor', 'ab'], 'fern', 'fernsehen splits: Er sieht ... fern.'],
      ['Am Wochenende schlafe ich gerne bis 10 Uhr ___. (ausschlafen)', 'Prefix for sleeping in.', ['aus', 'ein', 'auf'], 'aus', 'ausschlafen splits: Ich schlafe ... aus.'],
      ['Der Bus hält direkt vor der Sprachschule ___. (anhalten)', 'Prefix for stopping (vehicles).', ['an', 'auf', 'ab'], 'an', 'anhalten splits: Der Bus hält ... an.'],
      ['Ich bringe zum Picknick einen leckeren Kuchen ___. (mitbringen)', 'Prefix for bringing along.', ['mit', 'nach', 'bei'], 'mit', 'mitbringen splits: Ich bringe ... mit.'],
      ['Wann holst du mich am Bahnhof ___? (abholen)', 'Prefix for picking someone up.', ['ab', 'an', 'auf'], 'ab', 'abholen splits: Wann holst du mich ... ab?'],
      ['Die Fahrgäste steigen an der nächsten Station ___. (aussteigen)', 'Prefix for getting off / disembarking.', ['aus', 'ein', 'um'], 'aus', 'aussteigen splits: Sie steigen ... aus.'],
      ['Hier müssen alle Passagiere in den anderen Zug ___. (umsteigen)', 'Modal verb + separable verb: stays in plain infinitive!', ['umsteigen', 'steigen um', 'umgestiegen'], 'umsteigen', 'With modal verbs, separable verbs DO NOT split; they stay together in the infinitive.'],
      ['Ich ___ meine Hausaufgaben leider nicht. (verstehen)', 'Inseparable prefix "ver-".', ['verstehe', 'stehe ver', 'verstehe auf'], 'verstehe', '"verstehen" is inseparable: Ich verstehe.'],
      ['Mein Vater ___ sein altes Auto im Internet. (verkaufen)', 'Inseparable prefix "ver-".', ['verkauft', 'kauft ver', 'verkaufe'], 'verkauft', '"verkaufen" is inseparable: Er verkauft.'],
      ['Sie ___ jeden Tag neue deutsche Wörter. (wiederholen)', 'Inseparable prefix "wieder-".', ['wiederholt', 'holt wieder', 'wiederholen'], 'wiederholt', 'wiederholen (to review/repeat) does not separate in A1: Sie wiederholt.'],
      ['Mach bitte das Fenster ___! Es ist sehr kalt draußen. (zumachen)', 'Prefix for closing.', ['zu', 'auf', 'an'], 'zu', 'zumachen splits: Mach das Fenster zu!'],
      ['Kannst du bitte das Licht ___? Es ist zu dunkel. (anmachen)', 'Modal verb + separable verb: stays in infinitive.', ['anmachen', 'machen an', 'angemacht'], 'anmachen', 'With modal verb: Licht anmachen.'],
      ['Er macht den Computer nach der Arbeit sofort ___. (ausmachen)', 'Prefix for switching off devices.', ['aus', 'ab', 'auf'], 'aus', 'ausmachen splits: Er macht ... aus.'],
      ['Der Flugzeug fliegt pünktlich um 11 Uhr ___. (abfliegen)', 'Prefix for flight departures.', ['ab', 'an', 'aus'], 'ab', 'abfliegen splits: fliegt ... ab.'],
      ['Ich ziehe mich schnell für die Arbeit ___. (anziehen)', 'Prefix for putting on clothes.', ['an', 'aus', 'um'], 'an', 'anziehen splits: Ich ziehe mich ... an.'],
      ['Wann zieht ihr in die neue Wohnung ___? (einziehen)', 'Prefix for moving into a home.', ['ein', 'aus', 'um'], 'ein', 'einziehen splits: Zieht ihr ... ein?']
    ])
  },

  // =========================================================================
  // 5. DAS PERFEKT (PAST TENSE: haben vs. sein) (25 QUESTIONS)
  // =========================================================================
  perfekt: {
    name: 'Das Perfekt (haben / sein + Partizip II)',
    description: 'Master auxiliary selection (haben vs. sein) and all regular, irregular, and prefix participle patterns.',
    questions: buildQuestions([
      ['Gestern ___ ich den ganzen Tag für die Prüfung gelernt.', 'Auxiliary for regular transitive verbs without movement.', ['habe', 'bin', 'hatte'], 'habe', 'Non-movement verbs take "haben": Ich habe gelernt.'],
      ['Wir ___ am Wochenende mit dem Zug nach Hamburg gefahren.', 'Auxiliary for change of location / motion verbs.', ['sind', 'haben', 'waren'], 'sind', 'Verbs indicating movement from A to B take "sein": Wir sind gefahren.'],
      ['Er ist gestern erst um 23:30 Uhr ___. (einschlafen)', 'Change of state verb takes "sein" + separable participle.', ['eingeschlafen', 'geschlafen ein', 'eingeschlaft'], 'eingeschlafen', '"einschlafen" denotes a change of state and forms: ist eingeschlafen.'],
      ['Was hast du heute Mittag im Restaurant ___? (essen)', 'Irregular participle with ge- and -en ending.', ['gegessen', 'geesst', 'gegesset'], 'gegessen', 'Partizip II of "essen" is irregular: gegessen (hat gegessen).'],
      ['Ich habe gestern meine Freunde im Café ___. (treffen)', 'Irregular participle of stem-changing verb "treffen".', ['getroffen', 'getrefft', 'getreffen'], 'getroffen', 'Partizip II of "treffen": getroffen (hat getroffen).'],
      ['Wir haben am Samstag im Einkaufszentrum ___. (einkaufen)', 'Separable regular verb inserts "-ge-" between prefix and stem.', ['eingekauft', 'gekauft ein', 'eingekaufen'], 'eingekauft', 'Separable verbs insert "-ge-": ein-ge-kauf-t.'],
      ['Herr Schneider hat die Hotelrechnung schon ___. (bezahlen)', 'Inseparable verb with prefix "be-" does NOT take "ge-".', ['bezahlt', 'gebezahlt', 'bezahlen'], 'bezahlt', 'Inseparable verbs (be-, ver-, etc.) form the participle without "ge-": bezahlt.'],
      ['Ich ___ heute Morgen um 6:30 Uhr aufgestanden.', 'Change of state/motion verb (aufstehen) takes "sein".', ['bin', 'habe', 'war'], 'bin', 'aufstehen takes "sein": Ich bin aufgestanden.'],
      ['Was habt ihr am Wochenende schönes ___? (machen)', 'Regular participle of machen.', ['gemacht', 'gemachen', 'macht'], 'gemacht', 'Regular Partizip II formula: ge- + mach + -t = gemacht.'],
      ['Er ___ gestern zwei Tassen Kaffee getrunken.', 'Auxiliary for non-movement verb trinken.', ['hat', 'ist', 'hatte'], 'hat', 'trinken takes "haben": Er hat getrunken.'],
      ['Die Touristen ___ mit dem Flugzeug nach Frankfurt geflogen.', 'Motion verb fliegen takes "sein".', ['sind', 'haben', 'waren'], 'sind', 'fliegen takes "sein": Sie sind geflogen.'],
      ['Hast du den Brief an deine Eltern schon ___? (schreiben)', 'Irregular participle of schreiben.', ['geschrieben', 'geschreibt', 'geschreibet'], 'geschrieben', 'Partizip II of schreiben: geschrieben.'],
      ['Ich habe heute eine interessante Zeitung ___ (lesen).', 'Irregular participle of lesen.', ['gelesen', 'geliest', 'geleset'], 'gelesen', 'Partizip II of lesen: gelesen.'],
      ['Wir ___ am Sonntag den ganzen Tag zu Hause geblieben.', 'Special verb: bleiben indicates remaining in state and takes "sein"!', ['sind', 'haben', 'waren'], 'sind', 'Key rule: "bleiben" takes "sein": Wir sind geblieben.'],
      ['Wo ___ du gestern Abend gewesen?', 'Auxiliary for sein in Perfekt: sein takes "sein"!', ['bist', 'hast', 'warst'], 'bist', 'Key rule: "sein" takes "sein": Du bist gewesen.'],
      ['Er hat mir eine sehr freundliche E-Mail ___ (schicken).', 'Regular participle of schicken.', ['geschickt', 'geschicken', 'schickt'], 'geschickt', 'Partizip II of schicken: geschickt.'],
      ['Haben Sie die neue Vokabel gut ___? (verstehen)', 'Inseparable verb verstehen does not take "ge-".', ['verstanden', 'geverstanden', 'versteht'], 'verstanden', 'Inseparable verbs form participle without ge-: verstanden.'],
      ['Der Deutschkurs hat gestern um 9:00 Uhr ___ (anfangen).', 'Separable irregular participle of anfangen.', ['angefangen', 'gefangen an', 'angefangt'], 'angefangen', 'Separable participle: an-ge-fang-en.'],
      ['Wir haben am Abend zusammen lecker ___ (kochen).', 'Regular participle of kochen.', ['gekocht', 'gekochen', 'kocht'], 'gekocht', 'Partizip II of kochen: gekocht.'],
      ['Wer ___ gestern mein Handy genommen?', 'Auxiliary for nehmen.', ['hat', 'ist', 'war'], 'hat', 'nehmen takes "haben": Wer hat genommen?'],
      ['Ich ___ gestern 10 Kilometer im Park gelaufen.', 'Motion verb laufen takes "sein".', ['bin', 'habe', 'hatte'], 'bin', 'laufen takes "sein": Ich bin gelaufen.'],
      ['Hast du deine Schlüssel im Büro ___? (vergessen)', 'Inseparable verb vergessen does not take "ge-".', ['vergessen', 'gevergessen', 'vergesst'], 'vergessen', 'vergessen stays vergessen in Partizip II: hat vergessen.'],
      ['Sie ___ gestern pünktlich am Flughafen angekommen.', 'Motion verb ankommen takes "sein".', ['ist', 'hat', 'war'], 'ist', 'ankommen takes "sein": Sie ist angekommen.'],
      ['Ich habe heute Morgen ausgiebig ___ (duschen).', 'Regular verb duschen.', ['geduscht', 'geduschen', 'duscht'], 'geduscht', 'Partizip II of duschen: geduscht.'],
      ['Herr Wagner hat sein altes Fahrrad für 50 Euro ___ (verkaufen).', 'Inseparable verb verkaufen.', ['verkauft', 'gekauft ver', 'geverkaufen'], 'verkauft', 'Inseparable verb without ge-: verkauft.']
    ])
  },

  // =========================================================================
  // 6. PREPOSITIONS (TIME & LOCATION) (25 QUESTIONS)
  // =========================================================================
  praepositionen: {
    name: 'Präpositionen (Zeit & Ort)',
    description: 'Master temporal (um, am, im, ab, von...bis, seit, vor) and local/directional (nach, zu, bei, mit, für) prepositions.',
    questions: buildQuestions([
      ['Der Sprachkurs beginnt pünktlich ___ 9:00 Uhr.', 'Preposition for exact clock time.', ['um', 'am', 'im'], 'um', 'Clock times always use "um": um 9:00 Uhr.'],
      ['___ Montag habe ich einen Termin beim Zahnarzt.', 'Preposition for days of the week.', ['Am', 'Im', 'Um'], 'Am', 'Days of the week and parts of the day use "am" (an + dem): am Montag.'],
      ['___ August machen viele Familien in Deutschland Urlaub.', 'Preposition for months and seasons.', ['Im', 'Am', 'Um'], 'Im', 'Months and seasons take "im" (in + dem): im August, im Sommer.'],
      ['Ich fahre jeden Tag ___ dem Fahrrad zur Arbeit.', 'Means of transportation require "mit" + Dative.', ['mit', 'bei', 'nach'], 'mit', 'Transportation is expressed with "mit + Dativ": mit dem Fahrrad.'],
      ['Wir fliegen nächste Woche ___ Spanien.', 'Direction to countries and cities without articles.', ['nach', 'zu', 'in'], 'nach', 'Cities and countries without definite articles take "nach": nach Spanien, nach Berlin.'],
      ['Ich gehe heute Nachmittag ___ Arzt. (der Arzt)', 'Going to a person/professional: zu + dem = zum.', ['zum', 'nach', 'bei'], 'zum', 'Going to an appointment with a person takes "zu" + Dativ: zu + dem Arzt = zum Arzt.'],
      ['Das Geschenk ist ___ meine kleine Schwester. (die Schwester)', 'Preposition "für" governs the Accusative case.', ['für', 'mit', 'zu'], 'für', '"für" always demands the Accusative: für meine kleine Schwester.'],
      ['Ich wohne ___ drei Monaten in Weiterstadt.', 'Action began in past and is still ongoing (+ Dative).', ['seit', 'vor', 'ab'], 'seit', '"seit" indicates an ongoing situation starting in the past: seit drei Monaten.'],
      ['Wir haben uns ___ einem Jahr in Frankfurt kennengelernt.', 'Event was completed in the past (+ Dative).', ['vor', 'seit', 'ab'], 'vor', '"vor" indicates a completed past event: vor einem Jahr.'],
      ['Die Geschäfte haben von Montag ___ Samstag geöffnet.', 'Time span: von ... bis.', ['bis', 'ab', 'nach'], 'bis', 'Time spans use "von ... bis": von Montag bis Samstag.'],
      ['___ morgen gelten die neuen Preise im Restaurant.', 'Starting point in present/future.', ['Ab', 'Vor', 'Seit'], 'Ab', '"ab" indicates a starting point in time: ab morgen, ab 8 Uhr.'],
      ['Ich gehe heute zu Fuß ___ Schule. (die Schule)', 'Going to an institution: zu + der = zur.', ['zur', 'zum', 'nach'], 'zur', 'zu + der Schule = zur Schule.'],
      ['Er wohnt noch ___ seinen Eltern. (die Eltern, Pl.)', 'Staying/living with someone: bei + Dativ.', ['bei', 'zu', 'nach'], 'bei', 'Residing with someone takes "bei": bei seinen Eltern.'],
      ['Wir treffen uns ___ Nachmittag um 15 Uhr.', 'Part of the day takes "am".', ['am', 'im', 'um'], 'am', 'Parts of day (der Morgen, der Nachmittag) take "am": am Nachmittag.'],
      ['In der Nacht schlafen die Menschen. "___ der Nacht" ist die Ausnahme!', 'Feminine exception: die Nacht takes "in der".', ['in', 'an', 'zu'], 'in', 'Exception rule: "in der Nacht" (fem. Dative), not ~~am Nacht~~.'],
      ['Ich trinke meinen Kaffee immer ___ Zucker. (ohne + Akk.)', 'Preposition "ohne" strictly takes Accusative.', ['ohne', 'mit', 'bei'], 'ohne', '"ohne" always governs Accusative: ohne Zucker.'],
      ['Fahren wir heute Abend ___ Frankfurt?', 'Direction towards cities takes "nach".', ['nach', 'zu', 'in'], 'nach', 'Cities take "nach": nach Frankfurt.'],
      ['Der Zug fährt ___ dem Bahnhof ab. (von + Dativ)', 'Origin point of departure: von + dem = vom.', ['vom', 'zum', 'beim'], 'vom', 'von + dem = vom Bahnhof.'],
      ['Ich arbeite bei ___ großen Softwarefirma. (eine Firma, fem.)', '"bei" governs Dative: eine → einer.', ['einer', 'eine', 'einem'], 'einer', 'bei + Dative feminine: bei einer großen Firma.'],
      ['Kommst du heute Abend mit ___ ins Kino? (wir → Dativ)', '"mit" governs Dative pronoun: wir becomes uns.', ['uns', 'wir', 'unser'], 'uns', 'mit + uns: Kommst du mit uns?'],
      ['Der Kurs dauert ___ 9:00 bis 12:30 Uhr.', 'Starting point of span with bis: von ... bis.', ['von', 'ab', 'seit'], 'von', 'Span pairing: von 9:00 bis 12:30 Uhr.'],
      ['Er kommt gerade ___ der Türkei. (Land mit Artikel!)', 'Countries with definite articles use "aus der / aus dem" for origin.', ['aus', 'nach', 'in'], 'aus', 'Origin: aus der Türkei, aus Deutschland.'],
      ['Ich bin heute ___ 18 Uhr im Büro erreichbar.', 'Endpoint in time with "bis".', ['bis', 'ab', 'seit'], 'bis', 'bis 18 Uhr = until 6 PM.'],
      ['Wir gehen heute Abend ___ Restaurant. (in + das = ins)', 'Direction/entering a building: in + Accusative.', ['ins', 'im', 'zum'], 'ins', 'in + das Restaurant = ins Restaurant.'],
      ['Was machst du ___ Wochenende?', 'Fixed phrase for the weekend: am Wochenende.', ['am', 'im', 'um'], 'am', 'an + dem Wochenende = am Wochenende.']
    ])
  },

  // =========================================================================
  // 7. NEGATION & THE "DOCH!" AFFIRMATION (25 QUESTIONS)
  // =========================================================================
  negationDoch: {
    name: 'Negation (nicht / kein) & "doch!"',
    description: 'Learn when to use kein vs. nicht, how to position nicht, and how to affirm negative questions with doch.',
    questions: buildQuestions([
      ['Ich habe heute ___ Bargeld im Portemonnaie dabei.', 'Negating a noun with no article (das Bargeld).', ['kein', 'nicht', 'keine'], 'kein', 'Nouns without articles or with indefinite articles are negated with "kein": kein Bargeld.'],
      ['Das Restaurant ist heute leider ___ geöffnet.', 'Negating an adjective or state.', ['nicht', 'kein', 'keine'], 'nicht', 'Adjectives, adverbs, and verbs are negated with "nicht": nicht geöffnet.'],
      ['Hast du kein Ticket für die U-Bahn? – ___! Hier ist mein Fahrschein.', 'Answering a negative question in the affirmative.', ['Doch', 'Ja', 'Nein'], 'Doch', 'Contradicting a negative question affirmatively must be done with "Doch!": Hast du kein...? – Doch!'],
      ['Wir trinken am Abend ___ Alkohol.', 'Negating a masculine noun without an article (der Alkohol).', ['keinen', 'nicht', 'kein'], 'keinen', 'Alcohol is masculine (der Alkohol), in Accusative negated: keinen Alkohol.'],
      ['Sprichst du nicht gern Deutsch? – ___! Ich liebe Deutsch!', 'Contradicting a negative question.', ['Doch', 'Ja', 'Nein'], 'Doch', 'Always use "Doch" to refute a negated question.'],
      ['Ich wohne ___ in München, sondern in Frankfurt.', 'Negating a prepositional phrase with "nicht".', ['nicht', 'kein', 'keine'], 'nicht', 'Prepositional phrases are negated with "nicht": nicht in München.'],
      ['Er hat ___ Geschwister. Er ist Einzelkind.', 'Negating a plural noun without an article.', ['keine', 'nicht', 'keinen'], 'keine', 'Plural nouns are negated with "keine": keine Geschwister.'],
      ['Das Auto ist ___ billig, es kostet 40.000 Euro.', 'Negating an adjective (billig).', ['nicht', 'kein', 'keine'], 'nicht', 'Adjectives are negated with "nicht": nicht billig.'],
      ['Ich verstehe diesen Satz leider ___.', 'Negating a verb (at the end of the sentence).', ['nicht', 'kein', 'keinen'], 'nicht', 'Verbal action is negated with "nicht" at sentence end: verstehe ... nicht.'],
      ['Haben Sie heute ___ Zeit für ein kurzes Gespräch?', 'Negating a feminine noun (die Zeit).', ['keine', 'nicht', 'kein'], 'keine', 'die Zeit negated in Accusative: keine Zeit.'],
      ['Trinkst du keinen Kaffee? – ___, ich trinke nur Tee.', 'Agreeing with a negative question (confirming the negative).', ['Nein', 'Doch', 'Ja'], 'Nein', 'If you agree with the negative premise, answer with "Nein": Trinkst du keinen? – Nein, nur Tee.'],
      ['Hast du kein Auto? – ___, ich habe einen roten VW.', 'Affirming that you DO have a car against the negative question.', ['Doch', 'Ja', 'Nein'], 'Doch', 'Negated question refuted: Doch, ich habe eins!'],
      ['Wir arbeiten heute ___. Es ist Sonntag!', 'Negating a verb.', ['nicht', 'kein', 'keine'], 'nicht', 'Actions are negated with "nicht": Wir arbeiten heute nicht.'],
      ['Ich brauche ___ Hilfe, ich schaffe das allein.', 'Negating a feminine noun (die Hilfe).', ['keine', 'nicht', 'keinen'], 'keine', 'die Hilfe → keine Hilfe.'],
      ['Herr Müller ist ___ Arzt, sondern Ingenieur.', 'Negating a profession noun with "nicht" in "nicht ... sondern" contrast.', ['nicht', 'kein', 'keine'], 'nicht', 'In contrastive structures "nicht A, sondern B", use "nicht": nicht Arzt, sondern Ingenieur.'],
      ['Das ist ___ Problem! Das machen wir sofort.', 'Negating a neuter noun (das Problem).', ['kein', 'nicht', 'keine'], 'kein', 'das Problem → kein Problem.'],
      ['Kommst du morgen nicht zum Unterricht? – ___, leider bin ich krank.', 'Confirming the negative premise.', ['Nein', 'Doch', 'Ja'], 'Nein', 'Confirming absence: Nein, leider bin ich krank.'],
      ['Ich kenne diesen Mann ___.', 'Negating familiarity with a specific person.', ['nicht', 'kein', 'keinen'], 'nicht', 'Known nouns with definite articles/pronouns use "nicht": kenne ... nicht.'],
      ['Hier gibt es ___ Supermarkt in der Nähe.', 'Negating masculine noun with "es gibt" (der Supermarkt).', ['keinen', 'nicht', 'kein'], 'keinen', 'es gibt + Accusative masculine = keinen Supermarkt.'],
      ['Sind Sie nicht Herr Wagner? – ___! Der bin ich!', 'Contradicting a negative identity question.', ['Doch', 'Ja', 'Nein'], 'Doch', 'Doch! Ich bin Herr Wagner.'],
      ['Ich esse heute Abend ___ Fleisch.', 'Negating a neuter noun without an article (das Fleisch).', ['kein', 'nicht', 'keine'], 'kein', 'das Fleisch → kein Fleisch.'],
      ['Die Suppe schmeckt mir ___ gut.', 'Negating an adverb/adjective (gut).', ['nicht', 'kein', 'keine'], 'nicht', 'nicht gut = not good.'],
      ['Wir haben ___ Kinder.', 'Negating a plural noun (die Kinder).', ['keine', 'nicht', 'kein'], 'keine', 'die Kinder → keine Kinder.'],
      ['Er spricht noch ___ sehr gut Deutsch.', 'Negating an adverb phrase.', ['nicht', 'kein', 'keinen'], 'nicht', 'nicht sehr gut = not very well.'],
      ['Wohnen Sie nicht in Weiterstadt? – ___, ich wohne in Darmstadt.', 'Confirming that you do NOT live in Weiterstadt.', ['Nein', 'Doch', 'Ja'], 'Nein', 'Confirming the negative: Nein, ich wohne in Darmstadt.']
    ])
  },

  // =========================================================================
  // 8. DATIVE CASE BASICS (25 QUESTIONS)
  // =========================================================================
  dativGrundlagen: {
    name: 'Dativ-Grundlagen (mir, dir, Verben & Plural -n)',
    description: 'Master Dative personal pronouns (mir, dir, ihm...), fixed Dative verbs (helfen, gefallen...), and Dative plural with extra -n.',
    questions: buildQuestions([
      ['Wie geht es ___? – Mir geht es sehr gut, danke!', 'Greeting formula with informal singular Dative pronoun.', ['dir', 'dich', 'du'], 'dir', 'Fixed idiom: "Wie geht es dir?" requires the Dative pronoun "dir".'],
      ['Kannst du ___ bitte helfen? Ich verstehe die Übung nicht.', '"helfen" strictly governs the Dative case.', ['mir', 'mich', 'ich'], 'mir', 'The verb "helfen" always requires Dative: Hilf mir!'],
      ['Wie schmeckt ___ das Essen im Restaurant?', '"schmecken" governs the Dative case.', ['Ihnen', 'Sie', 'Ihr'], 'Ihnen', '"schmecken" requires Dative: Schmeckt es Ihnen? (polite formal).'],
      ['Der blaue Pullover gefällt ___ überhaupt nicht. (er)', '3rd person masculine pronoun in Dative (er → ihm).', ['ihm', 'ihn', 'er'], 'ihm', '"gefallen" takes Dative: Der Pullover gefällt ihm.'],
      ['Das Buch gehört ___ Schwester. (die Schwester)', 'Dative feminine article: die → der.', ['meiner', 'meine', 'meinen'], 'meiner', '"gehören" requires Dative: die Schwester → meiner Schwester.'],
      ['Ich danke ___ herzlich für Ihre Hilfe! (Sie, formell)', '"danken" requires Dative.', ['Ihnen', 'Sie', 'Ihr'], 'Ihnen', 'danken + Dative formal: Ich danke Ihnen.'],
      ['Das Kleid passt ___ leider nicht mehr. (sie, feminin)', '"passen" requires Dative (sie → ihr).', ['ihr', 'sie', 'ihnen'], 'ihr', 'passen + Dative: Es passt ihr nicht.'],
      ['Wir helfen ___ alten Nachbarn beim Tragen. (der Nachbar)', 'Dative masculine article: der → dem.', ['dem', 'den', 'der'], 'dem', 'helfen + Dative masculine: dem Nachbarn.'],
      ['Wie geht es ___ Eltern? – Ihnen geht es gut. (die Eltern, Pl.)', 'Dative plural article: die → den.', ['deinen', 'deine', 'deiner'], 'deinen', 'Dative plural possessive: deinen Eltern.'],
      ['Dativ-Plural-Regel: Er spielt oft mit den ___ (das Kind, Pl.).', 'In Dative plural, nouns add an extra "-n" if not ending in -n/-s!', ['Kindern', 'Kinder', 'Kindes'], 'Kindern', 'Crucial A1 rule: Plural nouns in Dative add "-n": den Kindern.'],
      ['Er fährt jeden Tag mit dem ___ zur Arbeit. (der Bus)', 'mit + Dative masculine: der → dem.', ['Bus', 'Busses', 'Busen'], 'Bus', 'mit dem Bus.'],
      ['Kommen Sie heute zu ___ nach Hause? (wir → Dativ)', 'zu + Dative pronoun: wir becomes uns.', ['uns', 'wir', 'unser'], 'uns', 'zu + uns.'],
      ['Was fehlt ___ denn, Frau Müller? (Sie → Dativ)', 'fehlen requires Dative (Was fehlt Ihnen?).', ['Ihnen', 'Sie', 'Ihr'], 'Ihnen', 'fehlen + Dativ: Was fehlt Ihnen?'],
      ['Die Suppe schmeckt ___ Kindern ausgezeichnet. (die Kinder)', 'Dative plural definite article: die → den + n.', ['den', 'die', 'der'], 'den', 'schmecken + Dative plural: den Kindern.'],
      ['Ich antworte ___ Lehrer auf seine Frage. (der Lehrer)', 'antworten requires Dative: der → dem.', ['dem', 'den', 'des'], 'dem', 'antworten + Dative masculine: dem Lehrer.'],
      ['Das Auto gehört ___ Vater. (mein Vater)', 'Dative masculine possessive: mein → meinem.', ['meinem', 'meinen', 'mein'], 'meinem', 'gehören + Dative masculine: meinem Vater.'],
      ['Der Chef gibt ___ Sekretärin den Brief. (die Sekretärin)', 'Dative feminine definite article: die → der.', ['der', 'die', 'dem'], 'der', 'geben + Dative person: der Sekretärin.'],
      ['Wir gratulieren ___ zum Geburtstag! (du → Dativ)', 'gratulieren strictly requires Dative: du → dir.', ['dir', 'dich', 'du'], 'dir', 'gratulieren + Dative: Wir gratulieren dir!'],
      ['Schmeckt ___ der Kuchen, Kinder? (ihr → Dativ)', 'Dative pronoun of ihr: euch.', ['euch', 'ihr', 'uns'], 'euch', 'schmecken + euch: Schmeckt euch der Kuchen?'],
      ['Er wohnt seit zwei ___ in Weiterstadt. (das Jahr, Pl. Jahre)', 'Dative plural adds an extra "-n" to the noun!', ['Jahren', 'Jahre', 'Jahres'], 'Jahren', 'seit + Dative plural: zwei Jahren (Jahre + n).'],
      ['Ich gehe mit meinen ___ am Wochenende wandern. (die Freunde, Pl.)', 'Dative plural noun ending in -n.', ['Freunden', 'Freunde', 'Freunder'], 'Freunden', 'mit meinen Freunden (Freunde + n).'],
      ['Kann ich ___ helfen, mein Herr? (Sie → Dativ)', 'Formal polite Dative pronoun.', ['Ihnen', 'Sie', 'Ihr'], 'Ihnen', 'Kann ich Ihnen helfen?'],
      ['Das Haus gefällt ___ Familie sehr. (unsere Familie, fem.)', 'Dative feminine possessive: unsere → unserer.', ['unserer', 'unsere', 'unserem'], 'unserer', 'gefallen + Dative feminine: unserer Familie.'],
      ['Wie geht es ___ Mann? (dein Mann, mask.)', 'Dative masculine possessive: dein → deinem.', ['deinem', 'deinen', 'dein'], 'deinem', 'Wie geht es deinem Mann?'],
      ['Sag ___ bitte Bescheid, wenn du ankommst! (ich → Dativ)', 'sagen + Dative: sagen mir.', ['mir', 'mich', 'ich'], 'mir', 'Sag mir Bescheid!']
    ])
  },

  // =========================================================================
  // 9. THE IMPERATIVE (25 QUESTIONS)
  // =========================================================================
  imperativ: {
    name: 'Der Imperativ (Befehlsform: Sie, du, ihr)',
    description: 'Give polite requests (Sie), informal singular commands (du, vowel drops/shifts), and group instructions (ihr).',
    questions: buildQuestions([
      ['___ Sie bitte das Anmeldeformular vollständig aus! (ausfüllen)', 'Formal imperative with "Sie".', ['Füllen', 'Füllt', 'Füll'], 'Füllen', 'Formal imperative: Infinitive + Sie: Füllen Sie bitte aus!'],
      ['___ bitte nicht so schnell! Die Straße ist nass. (fahren, du-Form)', 'Informal singular: stem drops -st; notice umlaut drops in imperative!', ['Fahr', 'Fährst', 'Fahre du'], 'Fahr', 'Verbs with a → ä drop the umlaut in the imperative: Fahr! (never ~~Fähr!~~).'],
      ['___ bitte die Wörterbuch-App auf dein Handy! (laden, du-Form)', 'Informal singular imperative for du.', ['Lade', 'Lade du', 'Lädst'], 'Lade', 'Stem form without "du" and without "-st": Lade!'],
      ['Kinder, ___ bitte eure Hausaufgaben! (machen, ihr-Form)', 'Informal plural imperative for a group of children/friends.', ['macht', 'machen', 'mache'], 'macht', 'The "ihr"-imperative is the regular present "ihr"-conjugation without the pronoun: Macht!'],
      ['___ Sie bitte einen Moment geduldig! (sein, Höflichkeitsform)', 'Irregular imperative of "sein" for the formal "Sie" address.', ['Seien', 'Sind', 'Sein'], 'Seien', 'The formal imperative of "sein" is irregular: Seien Sie bitte...!'],
      ['___ bitte den Text auf Seite 14! (lesen, du-Form)', 'Stem-vowel change e → ie remains in the imperative!', ['Lies', 'Lese', 'Liest'], 'Lies', 'Verbs with e → ie keep the change in du-imperative: Lies!'],
      ['___ bitte eine Tablette gegen die Schmerzen! (nehmen, du-Form)', 'Stem-vowel change e → i remains in the imperative!', ['Nimm', 'Nehme', 'Nimmt'], 'Nimm', 'du-imperative of nehmen: Nimm!'],
      ['___ Sie bitte hier unten rechts! (unterschreiben, formell)', 'Formal polite imperative.', ['Unterschreiben', 'Unterschreibt', 'Unterschreibe'], 'Unterschreiben', 'Formal: Unterschreiben Sie bitte!'],
      ['Markus, ___ bitte die Tür zu! Es zieht. (zumachen, du-Form)', 'Separable verb in du-imperative: prefix moves to the end.', ['Mach', 'Mache zu', 'Machst'], 'Mach', 'Mach die Tür zu!'],
      ['Kinder, ___ bitte leise! Der Vater schläft. (sein, ihr-Form)', 'Imperative of sein for ihr.', ['Seid', 'Sind', 'Seien'], 'Seid', 'sein for ihr: Seid leise!'],
      ['___ nicht so traurig! Alles wird gut. (sein, du-Form)', 'Imperative of sein for du.', ['Sei', 'Bist', 'Seie'], 'Sei', 'sein for du: Sei nicht so traurig!'],
      ['___ bitte pünktlich um 8:00 Uhr am Bahnhof! (sein, du-Form)', 'Imperative of sein for du.', ['Sei', 'Bist', 'Sind'], 'Sei', 'Sei pünktlich!'],
      ['___ bitte etwas lauter, ich verstehe dich nicht! (sprechen, du-Form)', 'Stem-vowel change e → i stays in imperative.', ['Sprich', 'Spreche', 'Sprichst'], 'Sprich', 'du-imperative of sprechen: Sprich!'],
      ['___ bitte deine Jacke an, es ist kalt! (anziehen, du-Form)', 'Separable verb in du-imperative.', ['Zieh', 'Ziehe an', 'Ziehst'], 'Zieh', 'Zieh deine Jacke an!'],
      ['Kollegen, ___ bitte eure Computer aus! (ausmachen, ihr-Form)', 'Separable verb in ihr-imperative.', ['macht', 'machen', 'mache'], 'macht', 'Macht eure Computer aus!'],
      ['___ Sie Platz, Frau Berg! (nehmen, formell)', 'Formal polite imperative with nehmen.', ['Nehmen', 'Nimmt', 'Nehmt'], 'Nehmen', 'Nehmen Sie Platz!'],
      ['___ mir bitte dein Wörterbuch für fünf Minuten! (geben, du-Form)', 'Stem change e → i stays in imperative.', ['Gib', 'Gebe', 'Gibt'], 'Gib', 'du-imperative of geben: Gib mir!'],
      ['___ heute Nacht gut und träum was Schönes! (schlafen, du-Form)', 'Stem vowel change a → ä drops umlaut in imperative!', ['Schlaf', 'Schläf', 'Schlafe du'], 'Schlaf', 'No umlaut in imperative: Schlaf gut!'],
      ['___ Sie bitte langsamer, mein Deutsch ist noch nicht perfekt.', 'Formal imperative with sprechen.', ['Sprechen', 'Sprich', 'Sprecht'], 'Sprechen', 'Sprechen Sie bitte langsamer!'],
      ['___ bitte den Müll nach draußen! (bringen, du-Form)', 'du-imperative of bringen.', ['Bring', 'Bringe du', 'Bringst'], 'Bring', 'Bring den Müll nach draußen!'],
      ['Kinder, ___ nicht über die Straße! Es ist gefährlich. (laufen, ihr-Form)', 'ihr-imperative of laufen.', ['lauft', 'läuft', 'laufen'], 'lauft', 'ihr-imperative keeps regular ihr-form: Lauft nicht!'],
      ['___ mir bitte eine E-Mail mit den Terminen! (schreiben, du-Form)', 'du-imperative of schreiben.', ['Schreib', 'Schreibe du', 'Schreibst'], 'Schreib', 'Schreib mir eine E-Mail!'],
      ['___ Sie bitte kurz im Wartezimmer! (warten, formell)', 'Formal imperative with warten.', ['Warten', 'Wartet', 'Wartest'], 'Warten', 'Warten Sie bitte!'],
      ['Lukas, ___ nicht so viel Schokolade vor dem Essen! (essen, du-Form)', 'du-imperative of essen retains e → i.', ['Iss', 'Esse', 'Isst'], 'Iss', 'du-imperative of essen: Iss!'],
      ['___ die Rechnung bitte heute noch! (bezahlen, du-Form)', 'Inseparable verb in du-imperative.', ['Bezahl', 'Bezahle du', 'Bezahlst'], 'Bezahl', 'Bezahl die Rechnung!']
    ])
  },

  // =========================================================================
  // 10. SPECIAL FORMS & MODIFIERS (25 QUESTIONS)
  // =========================================================================
  spezialFormen: {
    name: 'man, es gibt, sehr/zu & Ordinalzahlen',
    description: 'Master impersonal "man", existential "es gibt + Akk", modifiers (sehr vs. zu), preference (gern), and calendar dates.',
    questions: buildQuestions([
      ['In Deutschland ___ man sonntags in den meisten Städten nicht einkaufen.', '"man" always conjugates verbs in 3rd person singular.', ['kann', 'können', 'kannst'], 'kann', '"man" is treated like er/sie/es: man kann, man darf, man muss.'],
      ['In Frankfurt ___ es viele moderne Hochhäuser und Banken.', 'Existential phrase "there is / there are".', ['gibt', 'haben', 'sind'], 'gibt', 'The fixed expression is "es gibt" (never ~~es haben~~).'],
      ['In der Altstadt gibt es ___ (der) schönen Markt.', '"es gibt" always demands the Accusative case!', ['einen', 'ein', 'einem'], 'einen', '"es gibt" governs the Accusative: der Markt → einen Markt.'],
      ['Die Wohnung gefällt mir, aber 1.500 Euro Miete ist einfach ___ teuer für mein Budget.', 'Distinction between "sehr" (very) and "zu" (excessive/too much).', ['zu', 'sehr', 'viel'], 'zu', '"zu teuer" means too expensive (a prohibitive limit), whereas "sehr teuer" just means very expensive.'],
      ['Ich koche am Wochenende sehr ___ mit Freunden zusammen.', 'Expressing preference/liking with an adverb.', ['gern', 'gut', 'liebe'], 'gern', 'In German, hobbies and preferences are expressed using the adverb "gern": Ich koche gern.'],
      ['Wann hast du Geburtstag? – Ich habe am ___ (1.) Mai Geburtstag.', 'Ordinal number in Dative date format (an + dem = am ...-ten).', ['ersten', 'einsten', 'eins'], 'ersten', 'The ordinal number for 1 in Dative dates is irregular: am ersten Mai.'],
      ['Das Seminar endet am ___ (20.) Oktober.', 'Ordinal numbers 20 and above take the suffix "-sten".', ['zwanzigsten', 'zwanzigten', 'zwanzig'], 'zwanzigsten', 'From 20 onwards, ordinal numbers take "-sten" after "am": am zwanzigsten Oktober.'],
      ['Wie schreibt ___ dieses Wort auf Deutsch?', 'Impersonal pronoun "man".', ['man', 'er', 'wir'], 'man', '"Wie schreibt man das?" = How does one write that?'],
      ['In diesem Park ___ man keine Hunde mitbringen.', 'Impersonal prohibition with dürfen.', ['darf', 'dürfen', 'darfst'], 'darf', 'man darf nicht = one is not permitted to.'],
      ['Gibt es hier in der Nähe ___ Apotheke? (die Apotheke)', '"es gibt" + Accusative feminine.', ['eine', 'einen', 'einer'], 'eine', 'die Apotheke stays "eine" in Accusative: Gibt es eine Apotheke?'],
      ['Gibt es hier ___ Geldautomaten? (der Geldautomat)', '"es gibt" + Accusative masculine.', ['einen', 'ein', 'einem'], 'einen', 'der Geldautomat → Gibt es einen Geldautomaten?'],
      ['Das Zimmer ist ___ klein. Ich habe keinen Platz für mein Bett.', 'Negative excess modifier "zu".', ['zu', 'sehr', 'ziemlich'], 'zu', '"zu klein" = too small (causes a problem).'],
      ['Dieses Buch ist ___ interessant, ich lese es jeden Tag.', 'Positive intensifier "sehr".', ['sehr', 'zu', 'viel'], 'sehr', '"sehr interessant" = very interesting.'],
      ['Trinkst du gern Kaffee? – Ja, aber ich trinke ___ Tee. (Komparativ von gern)', 'Comparative preference: lieber.', ['lieber', 'besser', 'mehr'], 'lieber', 'Preference degrees: gern → lieber → am liebsten.'],
      ['Am ___ esse ich italienische Pizza! (Superlativ von gern)', 'Superlative preference: am liebsten.', ['liebsten', 'besten', 'meisten'], 'liebsten', 'am liebsten = most of all / favourite.'],
      ['Heute ist der ___ (3.) Oktober. Der Tag der Deutschen Einheit.', 'Nominative ordinal number 1–19 takes "-te" (der dritte).', ['dritte', 'dritten', 'drei'], 'dritte', 'Nominative date with "der": der dritte Oktober.'],
      ['Der Kurs beginnt am ___ (15.) September.', 'Ordinal number 1–19 in Dative date takes "-ten".', ['fünfzehnten', 'fünfzehnte', 'fünfzehn'], 'fünfzehnten', 'am + fünfzehnten September.'],
      ['Mein Sohn hat am ___ (7.) Juli Geburtstag.', 'Ordinal number for 7 is shortened: der siebte / am siebten.', ['siebten', 'siebenten', 'sieben'], 'siebten', 'Irregular shortening: am siebten (not ~~siebenten~~).'],
      ['Silvester feiert man am ___ (31.) Dezember.', 'Ordinal number above 20 in Dative date takes "-sten".', ['einunddreißigsten', 'einunddreißigten', 'einunddreißig'], 'einunddreißigsten', 'am einunddreißigsten Dezember.'],
      ['Hier spricht ___ leider nur Deutsch, kein Englisch.', '"man" conjugates in 3rd person singular.', ['man', 'wir', 'sie'], 'man', 'man spricht = people speak.'],
      ['In unserem Dorf gibt es ___ Krankenhaus.', '"es gibt" with neuter noun (das Krankenhaus).', ['kein', 'keinen', 'keine'], 'kein', 'das Krankenhaus → kein Krankenhaus.'],
      ['Die Suppe ist viel ___ heiß! Ich kann sie noch nicht essen.', 'Excessive modifier "zu".', ['zu', 'sehr', 'ziemlich'], 'zu', 'zu heiß = too hot (cannot eat).'],
      ['Er fährt ___ mit dem Fahrrad zur Arbeit als mit dem Auto.', 'Comparative preference with "als".', ['lieber', 'gern', 'am liebsten'], 'lieber', 'lieber ... als = prefers ... to.'],
      ['Wie spricht ___ diesen Namen aus?', 'Impersonal inquiry.', ['man', 'sie', 'er'], 'man', 'Wie spricht man das aus?'],
      ['Wir treffen uns am ___ (2.) Februar um 10 Uhr.', 'Dative date for 2: der zweite → am zweiten.', ['zweiten', 'zweite', 'zwei'], 'zweiten', 'am zweiten Februar.']
    ])
  },

  // =========================================================================
  // 11. EXPANDED SATZBAU-ARCHITEKT (16 SYNTAX PUZZLES)
  // =========================================================================
  sentenceBuilder: [
    {
      id: 1,
      rule: 'V2-Regel im einfachen Aussagesatz (Verb fest auf Position 2)',
      meaning: 'I drink a cup of coffee every morning.',
      tokens: ['Ich', 'trinke', 'jeden Morgen', 'eine Tasse', 'Kaffee.'],
      solution: ['Ich', 'trinke', 'jeden Morgen', 'eine Tasse', 'Kaffee.']
    },
    {
      id: 2,
      rule: 'Inversion: Zeitangabe auf Position 1 schiebt Subjekt hinter das Verb',
      meaning: 'On Tuesday I am going to the doctor.',
      tokens: ['Am Dienstag', 'gehe', 'ich', 'zum Arzt.'],
      solution: ['Am Dienstag', 'gehe', 'ich', 'zum Arzt.']
    },
    {
      id: 3,
      rule: 'Sequenz-Adverbien (zuerst, danach) mit V2-Inversion',
      meaning: 'First I eat breakfast, after that I drive to work.',
      tokens: ['Zuerst', 'frühstücke', 'ich,', 'danach', 'fahre', 'ich', 'zur Arbeit.'],
      solution: ['Zuerst', 'frühstücke', 'ich,', 'danach', 'fahre', 'ich', 'zur Arbeit.']
    },
    {
      id: 4,
      rule: 'Satzklammer bei Modalverben: Infinitiv wandert an das Satzende',
      meaning: 'I have to do my German homework today.',
      tokens: ['Ich', 'muss', 'heute', 'meine Hausaufgaben', 'machen.'],
      solution: ['Ich', 'muss', 'heute', 'meine Hausaufgaben', 'machen.']
    },
    {
      id: 5,
      rule: 'Satzklammer bei trennbaren Verben: Vorsilbe ganz ans Satzende',
      meaning: 'Markus shops at the supermarket on Saturday afternoon.',
      tokens: ['Markus', 'kauft', 'am Samstagnachmittag', 'im Supermarkt', 'ein.'],
      solution: ['Markus', 'kauft', 'am Samstagnachmittag', 'im Supermarkt', 'ein.']
    },
    {
      id: 6,
      rule: 'W-Frage: W-Wort (Pos 1) + Verb (Pos 2) + Subjekt (Pos 3)',
      meaning: 'Where in Spain do you come from?',
      tokens: ['Woher', 'kommen', 'Sie', 'in Spanien?'],
      solution: ['Woher', 'kommen', 'Sie', 'in Spanien?']
    },
    {
      id: 7,
      rule: 'Ja/Nein-Entscheidungsfrage: Verb wandert auf Position 1!',
      meaning: 'Do you already have time for a coffee on the weekend?',
      tokens: ['Hast', 'du', 'am Wochenende', 'Zeit für einen Kaffee?'],
      solution: ['Hast', 'du', 'am Wochenende', 'Zeit für einen Kaffee?']
    },
    {
      id: 8,
      rule: 'Höflicher Imperativ (Sie-Form): Infinitiv + Sie + bitte',
      meaning: 'Please come on time to class tomorrow!',
      tokens: ['Kommen', 'Sie', 'morgen', 'bitte pünktlich', 'zum Unterricht!'],
      solution: ['Kommen', 'Sie', 'morgen', 'bitte pünktlich', 'zum Unterricht!']
    },
    {
      id: 9,
      rule: 'Perfekt mit Bewegung (sein + Partizip II am Satzende)',
      meaning: 'Last week we drove to Munich by train.',
      tokens: ['Letzte Woche', 'sind', 'wir', 'mit dem Zug nach München', 'gefahren.'],
      solution: ['Letzte Woche', 'sind', 'wir', 'mit dem Zug nach München', 'gefahren.']
    },
    {
      id: 10,
      rule: 'Perfekt mit haben (haben + Partizip II am Satzende)',
      meaning: 'Yesterday he cooked a delicious meal for his friends.',
      tokens: ['Gestern', 'hat', 'er', 'ein leckeres Essen für Freunde', 'gekocht.'],
      solution: ['Gestern', 'hat', 'er', 'ein leckeres Essen für Freunde', 'gekocht.']
    },
    {
      id: 11,
      rule: 'Konnektor "denn" besetzt Position 0 (keine Inversion!)',
      meaning: 'I am learning German because I live in Germany.',
      tokens: ['Ich lerne Deutsch,', 'denn', 'ich', 'lebe', 'in Deutschland.'],
      solution: ['Ich lerne Deutsch,', 'denn', 'ich', 'lebe', 'in Deutschland.']
    },
    {
      id: 12,
      rule: 'Existenz mit "es gibt" + Akkusativ-Objekt',
      meaning: 'In our city there is a large central station.',
      tokens: ['In unserer Stadt', 'gibt', 'es', 'einen großen', 'Hauptbahnhof.'],
      solution: ['In unserer Stadt', 'gibt', 'es', 'einen großen', 'Hauptbahnhof.']
    },
    {
      id: 13,
      rule: 'Datumsangabe mit Ordinalzahl im Dativ (am ...-ten)',
      meaning: 'My birthday is on the fifth of October.',
      tokens: ['Ich', 'habe', 'am fünften Oktober', 'meinen Geburtstag.'],
      solution: ['Ich', 'habe', 'am fünften Oktober', 'meinen Geburtstag.']
    },
    {
      id: 14,
      rule: 'Dativ-Verb mit Pronomen: helfen + Dativ',
      meaning: 'Can you please help me with the luggage?',
      tokens: ['Kannst', 'du', 'mir', 'bitte beim Gepäck', 'helfen?'],
      solution: ['Kannst', 'du', 'mir', 'bitte beim Gepäck', 'helfen?']
    },
    {
      id: 15,
      rule: 'Verneinter Hauptsatz mit "nicht" am Satzende',
      meaning: 'Unfortunately I do not understand this word.',
      tokens: ['Ich', 'verstehe', 'dieses deutsche Wort', 'leider', 'nicht.'],
      solution: ['Ich', 'verstehe', 'dieses deutsche Wort', 'leider', 'nicht.']
    },
    {
      id: 16,
      rule: 'Informeller Imperativ (du-Form mit Vokalwechsel e → i)',
      meaning: 'Please take this pill before breakfast!',
      tokens: ['Nimm', 'diese Tablette', 'bitte', 'vor dem Frühstück!'],
      solution: ['Nimm', 'diese Tablette', 'bitte', 'vor dem Frühstück!']
    }
  ]
};
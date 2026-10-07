/**
 * DeutschMeister A1 — Modul 1: Interaktiver Grammatik-Atlas & Gamified Fundament-Tabellen
 * Vollstaendiges Regelwerk nach Klett Linie 1 (K1–K16) & Goethe Start Deutsch 1
 * Enthaelt: 18 Modul-Lektionen, Live-Tabellen-Inspektor, Plural-Labor & Tabellen-Blitz Spiel
 */

window.DM_ATLAS = {
  modules: [
    {
      id: 1,
      category: 'Verben & Konjugation',
      title: '1. Verben & Personalpronomen (Präsens regelmäßig)',
      rule: 'Im Deutschen werden regelmäßige Verben konjugiert, indem an den Verbstamm feste Personalendungen angehängt werden: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Das Pronomen "Sie" (großgeschrieben) ist die universelle Höflichkeitsform für Fremde, Vorgesetzte und offizielle Situationen im Singular und Plural.',
      example: 'machen: ich mache, du machst, er macht, wir machen, ihr macht, Sie machen | lernen: ich lerne Deutsch | wohnen: Wir wohnen in Frankfurt.',
      notes: 'Wichtige regelmäßige A1-Verben: machen, lernen, wohnen, kommen, hören, trinken, spielen, fragen, kaufen, leben, kochen, suchen.'
    },
    {
      id: 2,
      category: 'Verben & Konjugation',
      title: '2. Stämme auf -t, -d, -s, -ß, -z (Phonetische Einschübe)',
      rule: 'Endet der Verbstamm auf -t, -d, -fn oder -tm, wird bei "du", "er/sie/es" und "ihr" ein verbindendes "-e-" eingeschoben, um die Aussprache zu ermöglichen (-est, -et). Endet der Stamm auf einen Zischlaut (-s, -ß, -z), entfällt bei "du" das "-s" und es wird nur "-t" angehängt.',
      example: 'arbeiten: du arbeitest, er arbeitet, ihr arbeitet | finden: du findest, er findet | heißen: du heißt (nicht heißst!) | reisen: du reist.',
      notes: 'Häufiger A1-Prüfungsfehler: "du arbeitst" ist falsch. Es heißt ausnahmslos "du arbeitest".'
    },
    {
      id: 3,
      category: 'Verben & Konjugation',
      title: '3. Verben mit Vokalwechsel (e → i/ie, a → ä, nehmen)',
      rule: 'Zahlreiche starke Verben ändern ihren Stammvokal ausschließlich in der 2. und 3. Person Singular (du & er/sie/es). Die 1. Person Sg. (ich) und alle Pluralformen (wir, ihr, sie) behalten den regulären Stammvokal. Typen: e → i, e → ie, a → ä sowie der Sonderwechsel bei nehmen (e → imm).',
      example: 'sprechen: du sprichst, er spricht | sehen: du siehst, er sieht | lesen: du liest, er liest | fahren: du fährst, er fährt | schlafen: du schläfst | nehmen: du nimmst, er nimmt.',
      notes: 'Achtung beim Imperativ: Der Wechsel e → i bleibt im Imperativ erhalten (Lies! Nimm! Sprich!), der Wechsel a → ä jedoch NIE (Fahr!, Schlaf!).'
    },
    {
      id: 4,
      category: 'Hilfsverben & Zeitformen',
      title: '4. Hilfsverben: sein & haben (Präsens & Präteritum)',
      rule: 'Die Hilfsverben "sein" und "haben" sind im Präsens unregelmäßig. Für die Niveaustufe A1 müssen neben dem Präsens auch deren Präteritum-Formen (einfache Vergangenheit) beherrscht werden: "war" (ich/er war, du warst) und "hatte" (ich/er hatte, du hattest).',
      example: 'sein (Präsens): ich bin, du bist, er ist, wir sind, ihr seid, sie/Sie sind | sein (Präteritum): Gestern war ich krank. | haben (Präsens): ich habe, du hast, er hat, wir haben, ihr habt, sie/Sie haben | haben (Präteritum): Ich hatte gestern keine Zeit.',
      notes: 'Im gesprochenen Deutsch nutzt man für "sein" und "haben" fast immer das Präteritum (war/hatte) statt das Perfekt (ist gewesen / hat gehabt).'
    },
    {
      id: 5,
      category: 'Morphologie & Genus',
      title: '5. Nomen, Artikel & Genuszuweisung (der, die, das / ein, eine)',
      rule: 'Jedes deutsche Substantiv hat ein grammatikalisches Genus: Maskulinum (der), Femininum (die) oder Neutrum (das). Der unbestimmte Artikel lautet "ein" (maskulin/neutrum) und "eine" (feminin). Der unbestimmte Artikel existiert nicht im Plural (Nullartikel: "Ich kaufe Äpfel").',
      example: 'Maskulin: der Tisch, ein Tisch | Feminin: die Lampe, eine Lampe | Neutrum: das Buch, ein Buch | Plural: die Tische / Bücher / Lampen.',
      notes: 'Typische Endungen für das Femininum: -ung (Zeitung), -heit (Freiheit), -keit (Möglichkeit), -schaft (Freundschaft), -tät (Universität). Diminutive auf -chen sind immer Neutrum (das Brötchen, das Mädchen).'
    },
    {
      id: 6,
      category: 'Wortbildung & Berufe',
      title: '6. Komposita & Weibliche Berufsbezeichnungen (-in)',
      rule: 'Zusammengesetzte Nomen (Komposita) bestehen aus mindestens zwei Wörtern. Das letzte Glied ist das Grundwort und bestimmt allein das grammatikalische Geschlecht und den Plural. Weibliche Personen und Berufsbezeichnungen erhalten im Deutschen die Endung "-in" (Plural: "-innen").',
      example: 'die Milch + der Kaffee = der Milchkaffee | das Haus + die Nummer = die Hausnummer | der Lehrer → die Lehrerin (Plural: Lehrerinnen) | der Arzt → die Ärztin.',
      notes: 'Bei Berufsangaben mit "sein" oder "werden" steht im Deutschen kein Artikel: "Ich bin Arzt von Beruf" (nicht: "Ich bin ein Arzt").'
    },
    {
      id: 7,
      category: 'Syntax & Kasus',
      title: '7. Der Akkusativ & Akkusativ-Personalpronomen',
      rule: 'Der Akkusativ kennzeichnet das direkte Objekt einer Handlung und antwortet auf die Frage "Wen oder was?". Im Akkusativ verändert sich AUSSCHLIESSLICH der maskuline Artikel: der → den, ein → einen, kein → keinen, mein → meinen. Feminine, neutrale und Plural-Artikel bleiben unverändert wie im Nominativ.',
      example: 'Nominativ: Der Apfel ist rot. → Akkusativ: Ich esse den Apfel. | Ich habe einen Bruder und eine Schwester. | Akkusativ-Pronomen: Liebst du mich? – Ja, ich liebe dich. Ich sehe ihn (den Mann).',
      notes: 'A1-Verben mit zwingendem Akkusativ: haben, brauchen, suchen, finden, kaufen, möchten, nehmen, essen, trinken, anrufen, besuchen, kennen, sehen, lesen.'
    },
    {
      id: 8,
      category: 'Negation & Antwortpartikeln',
      title: '8. Negation: nicht vs. kein & Die Antwortpartikel "doch!"',
      rule: '"kein/keine/keinen" verneint Nomen mit unbestimmtem Artikel oder ohne Artikel. "nicht" verneint Verben, Adjektive, Adverbien, Eigennamen und Nomen mit bestimmtem Artikel. Wird eine verneinte Frage gestellt, bejaht man die Korrektur immer mit der Partikel "doch!" (niemals mit "ja!").',
      example: 'Ich habe kein Auto. (Nomen unbestimmt) | Ich arbeite heute nicht. (Verb) | Die Suppe ist nicht heiß. (Adjektiv) | Hast du kein Ticket? – Doch, ich habe ein Ticket!',
      notes: 'Goethe A1 Prüfungsfalle: Bei "Kommst du nicht mit?" führt die Antwort "Ja" zu Missverständnissen. Nur "Doch!" bedeutet: "Ich komme trotzdem mit!".'
    },
    {
      id: 9,
      category: 'Modalverben & Satzklammer',
      title: '9. Die 6 Modalverben + möchten & Die Satzklammer I',
      rule: 'Modalverben modifizieren die Bedeutung einer Handlung: können (Fähigkeit/Möglichkeit), müssen (Pflicht/Zwang), wollen (feste Absicht), dürfen (Erlaubnis; negiert = Verbot), sollen (Auftrag/Ratschlag), mögen/möchten (Vorliebe/höflicher Wunsch). Das Modalverb steht konjugiert auf Position 2, das Vollverb im reinen Infinitiv am Satzende (Satzklammer).',
      example: 'Ich kann sehr gut schwimmen. | Hier darf man nicht rauchen. | Sie müssen die Tabletten nehmen. | 1. & 3. Person Sg. sind endungslos: ich kann, er kann | ich will, er will | ich muss, er muss.',
      notes: 'Merke: "möchten" ist konjugationstechnisch der Konjunktiv II von mögen, wird im A1 aber wie ein eigenständiges Modalverb für Bestellungen verwendet: "Ich möchte einen Kaffee, bitte."'
    },
    {
      id: 10,
      category: 'Verben & Satzklammer',
      title: '10. Trennbare Verben & Die Satzklammer II',
      rule: 'Zusammengesetzte Verben mit betonten Vorsilben (ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-) trennen sich im Hauptsatz: Der Verbstamm wird konjugiert und steht auf Position 2; die Vorsilbe wandert an die allerletzte Position des Satzes. Untrennbare Verben (be-, emp-, ent-, er-, ge-, ver-, zer-) bleiben fest zusammen.',
      example: 'einkaufen: Markus kauft jeden Samstag im Supermarkt ein. | aufstehen: Ich stehe um 6:30 Uhr auf. | anrufen: Ruf mich bitte heute Abend an! | Untrennbar: Ich bezahle die Rechnung.',
      notes: 'Tritt ein Modalverb hinzu, bleibt das trennbare Verb ungetrennt als Infinitiv am Satzende: "Ich muss morgen früh aufstehen."'
    },
    {
      id: 11,
      category: 'Syntax & Wortstellung',
      title: '11. Wortstellung: V2-Regel, W-Fragen & Ja/Nein-Fragen',
      rule: 'Im deutschen Aussagesatz gilt das eiserne V2-Gesetz: Das konjugierte finite Verb steht ausnahmslos an Position 2. In W-Fragen besetzt das Fragewort Position 1 und das Verb Position 2. In Ja/Nein-Entscheidungsfragen rückt das Verb an Position 1, gefolgt vom Subjekt an Position 2.',
      example: 'Aussagesatz: Ich lerne heute Deutsch. | W-Frage: Woher kommen Sie? | Ja/Nein-Frage: Lernst du heute Deutsch? → Ja, ich lerne Deutsch.',
      notes: 'W-Fragewörter im A1: Wer (Subjekt), Wen (Akkusativ), Was (Sache), Wo (Ort), Woher (Herkunft), Wohin (Richtung), Wann (Zeit), Wie (Art/Weise), Wie viel (Menge/Preis).'
    },
    {
      id: 12,
      category: 'Syntax & Wortstellung',
      title: '12. Inversion durch Zeitangaben & Sequenz-Adverbien',
      rule: 'Wird ein Satz mit einer Zeitangabe, Ortsangabe oder einem Sequenz-Adverb (zuerst, dann, danach, später, zum Schluss) auf Position 1 begonnen, bleibt das Verb zwingend auf Position 2. Das Subjekt muss hinter das Verb auf Position 3 wandern (Inversion).',
      example: 'Regulär: Ich gehe am Montag zum Arzt. → Inversion: Am Montag gehe ich zum Arzt. | Zuerst frühstücke ich, danach fahre ich mit der Bahn zur Arbeit.',
      notes: 'Häufigster Fehler von Englisch-Muttersprachlern: "Am Montag ich gehe..." ist grammatikalisch falsch! Das Verb MUSS an Position 2 bleiben.'
    },
    {
      id: 13,
      category: 'Syntax & Kasus',
      title: '13. Der Dativ (A1-Umfang): Personalpronomen & Feste Verben',
      rule: 'Im A1 wird der Dativ primär für Personalpronomen (mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen) sowie bei festen Dativ-Verben gelernt. Er antwortet auf die Frage "Wem?". Dativ-Verben im A1: helfen, gefallen, schmecken, danken, gehören.',
      example: 'Wie geht es dir? – Es geht mir sehr gut, danke. | Kannst du mir bitte helfen? | Das Essen schmeckt den Gästen ausgezeichnet. | Der Mantel gehört meiner Mutter.',
      notes: 'Merke: Bei "Wie geht\'s?" steht die Person IMMER im Dativ ("Mir geht es gut", niemals: "~~Ich bin gut~~").'
    },
    {
      id: 14,
      category: 'Modus & Aufforderung',
      title: '14. Der Imperativ (Befehlsform: Sie, du, ihr)',
      rule: 'Der Imperativ drückt Bitten, Befehle, Hinweise und Ratschläge aus. Höflichkeitsform (Sie): Infinitiv + Sie + bitte (Kommen Sie!). Du-Form: Präsensstamm ohne Endung -st und ohne das Personalpronomen "du" (Komm!, Geh!). Ihr-Form: Gegenwartsform der 2. Person Plural ohne das Pronomen "ihr" (Kommt!, Macht!).',
      example: 'Höflich: Öffnen Sie das Fenster, bitte! | Du-Form: Lies den Text! Fahr vorsichtig! | Du-Form mit Vokalwechsel e → i: Nimm die Tablette! (Umlaut a → ä entfällt: Fahr!) | Ihr-Form: Hört gut zu!',
      notes: 'Sonderformen von "sein": Seien Sie bitte leise! (Sie) | Sei pünktlich! (du) | Seid brav! (ihr).'
    },
    {
      id: 15,
      category: 'Hilfsverben & Zeitformen',
      title: '15. Das Perfekt (Gesprochene Vergangenheit)',
      rule: 'Das Perfekt ist die Hauptvergangenheitsform der gesprochenen deutschen Sprache. Bildung: Hilfsverb "haben" oder "sein" auf Position 2 + Partizip II am Satzende. "sein" wird verwendet bei Verben der Ortsveränderung (gehen, fahren, fliegen, kommen), der Zustandsveränderung (aufstehen, einschlafen, sterben) und bei sein/bleiben. Alle anderen Verben bilden das Perfekt mit "haben".',
      example: 'Regelmäßig mit haben: Ich habe Deutsch gelernt. | Unregelmäßig mit haben: Markus hat Pizza gegessen. | Bewegung mit sein: Wir sind nach München gefahren. | Trennbar: Er ist um 7 Uhr aufgestanden.',
      notes: 'Partizip II Formeln: Regelmäßig = ge- + Stamm + -t (gekauft). Unregelmäßig = ge- + Stamm + -en (geschrieben). Trennbar = Präfix + -ge- + Stamm + -t/-en (eingekauft). Untrennbar = KEIN ge- (bezahlt, repariert).'
    },
    {
      id: 16,
      category: 'Präpositionen & Raum/Zeit',
      title: '16. Präpositionen (Zeit & Ort im A1)',
      rule: 'Präpositionen weisen Nomen feste Fälle zu. Temporale Präpositionen: um (Uhrzeit: um 14 Uhr), am (Tage/Tageszeiten/Daten: am Montag, am Morgen, am ersten Mai), im (Monate/Jahreszeiten: im Juli, im Sommer), ab (Startpunkt), von... bis (Zeitspanne), seit (+ Dativ: andauernd), vor (+ Dativ: abgeschlossen). Lokale Präpositionen: nach (Städte/Länder ohne Artikel), zu/zum/zur (+ Dativ: Personen/Ziele), bei (+ Dativ: Aufenthalt), mit (+ Dativ: Verkehrsmittel), für (+ Akkusativ: Zweck/Empfänger).',
      example: 'Der Zug fährt um 08:30 Uhr ab. | Ich lebe seit drei Monaten in Weiterstadt. | Ich fahre mit dem Bus zum Bahnhof. | Das Geschenk ist für meinen Bruder.',
      notes: 'Verschmelzungen beachten: zu + dem = zum, zu + der = zur, an + dem = am, in + dem = im, bei + dem = beim.'
    },
    {
      id: 17,
      category: 'Konnektoren & Pronomen',
      title: '17. Konnektoren auf Position 0 & Fragewort welch-',
      rule: 'Die koordinierenden Konjunktionen "und, aber, oder, denn" besetzen im Hauptsatz die "Position 0". Sie verbinden zwei Sätze, ohne die Wortstellung des nachfolgenden Satzes zu verändern (Subjekt Pos 1, Verb Pos 2). Das Fragewort "welch-" fragt nach einer bestimmten Auswahl und wird wie der bestimmte Artikel dekliniert; geantwortet wird oft mit "der da / die da / das da".',
      example: 'Ich mag meine Arbeit, denn sie ist sehr interessant. (Position 0: denn, Pos 1: sie, Pos 2: ist) | Ich lerne Deutsch, aber ich spreche noch langsam. | Welcher Mantel gefällt dir? – Der da gefällt mir gut.',
      notes: 'Prüfungsunterschied: "denn" verbindet zwei Hauptsätze (Pos 0). Das synonyme Wort "weil" (Niveau A2) schickt das Verb dagegen ans Satzende!'
    },
    {
      id: 18,
      category: 'Unpersönliche Formen & Nuancen',
      title: '18. Unpersönliche Formen & Modifikatoren (man, es gibt, sehr/zu, gern)',
      rule: 'Das Indefinitpronomen "man" bezeichnet Personen allgemein ("people/one") und verlangt immer die 3. Person Singular (man kann, man darf). Die Wendung "es gibt" drückt Existenz aus ("there is/are") und regiert zwingend den Akkusativ. Graduierung: "sehr" verstärkt positiv/neutral, "zu" drückt ein negatives Übermaß aus. Vorlieben drückt man im Deutschen durch das Adverb "gern / nicht gern / lieber / am liebsten" beim konjugierten Verb aus.',
      example: 'Hier darf man nicht laut telefonieren. | In Frankfurt gibt es einen großen Flughafen. (Akkusativ maskulin: einen Flughafen) | Die Wohnung ist sehr schön, aber sie ist zu teuer. | Ich trinke gern Tee, aber ich trinke lieber Kaffee.',
      notes: 'Typischer Fehler: Niemals sagen "~~Ich mag kochen~~" für Hobbys. Auf Deutsch sagt man authentisch: "Ich koche gern."'
    }
  ],

  tables: true,

  tablesHtml: `
    <div class="space-y-6" id="interactive-tables-suite">
      <div class="glass-panel p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-indigo-500/30">
        <div>
          <span class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 block">Interaktives Tabellen-Zentrum</span>
          <h3 class="text-xl font-bold text-white">4 Fundament-Tabellen: Gaming- & Inspektionsmodus</h3>
          <p class="text-slate-400 text-xs mt-1">Klicke auf beliebige Zellen für Audio, Kasus-Transformationen und Beispielsätze oder starte die Blitz-Challenge.</p>
        </div>
        <div class="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <button onclick="window.setTableStudioMode('inspect')" id="tbl-mode-inspect-btn" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-brand-600 text-white transition flex items-center gap-1.5">
            <i data-lucide="search" class="w-3.5 h-3.5"></i> Inspektor & Audio
          </button>
          <button onclick="window.setTableStudioMode('game')" id="tbl-mode-game-btn" class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5">
            <i data-lucide="gamepad-2" class="w-3.5 h-3.5"></i> Tabellen-Blitz (Spiel)
          </button>
        </div>
      </div>

      <div id="table-inspector-banner" class="glass-card p-4 rounded-2xl border border-brand-500/40 bg-brand-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span id="insp-badge" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">Auswahl</span>
            <h4 id="insp-title" class="font-bold text-white text-base sm:text-lg">Klicke auf eine Tabellenzelle...</h4>
          </div>
          <p id="insp-desc" class="text-xs text-slate-300">Wähle ein Pronomen oder einen Artikel in den Tabellen unten, um dessen Kasus-Verwandlung und Audio zu laden.</p>
          <p id="insp-example" class="text-xs font-mono text-amber-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800 inline-block mt-1">Beispielsatz erscheint hier</p>
        </div>
        <button id="insp-audio-btn" onclick="window.playInspectorAudio()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 flex-shrink-0 transition">
          <i data-lucide="volume-2" class="w-4 h-4 text-cyan-400"></i> Anhören
        </button>
      </div>

      <div id="table-game-banner" class="hidden glass-card p-5 rounded-2xl border border-amber-500/40 bg-amber-950/20 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">Mini-Game</span>
            <h4 class="font-bold text-white text-base">Tabellen-Blitz: Fülle die Lücken!</h4>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono">
            <span class="text-amber-300">Score: <strong id="tbl-game-score" class="text-white text-sm">0</strong></span>
            <span class="text-emerald-400">+15 XP / Treffer</span>
          </div>
        </div>
        <p class="text-xs text-slate-300">In der Tabelle wurden Felder mit <span class="text-amber-400 font-bold font-mono">???</span> maskiert. Klicke unten auf das passende Wort, um die Lücke zu schließen!</p>
        <div id="tbl-game-pool" class="flex flex-wrap gap-2 pt-1"></div>
        <div id="tbl-game-feedback" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
      </div>

      <div class="glass-panel p-5 rounded-2xl space-y-3" id="wrapper-table-1">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300 text-xs font-mono border border-brand-500/30">Tabelle 1</span>
            Personalpronomen im Nominativ, Akkusativ und Dativ
          </h3>
          <span class="text-xs text-slate-400 font-mono">Klicke eine Zelle zum Transformieren</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse" id="tbl-pronouns">
            <thead>
              <tr class="border-b border-slate-700 text-slate-400 bg-slate-900/60 font-mono">
                <th class="py-2.5 px-3">Person</th>
                <th class="py-2.5 px-3 text-emerald-400">Nominativ (Subjekt)</th>
                <th class="py-2.5 px-3 text-cyan-400">Akkusativ (Direktobjekt)</th>
                <th class="py-2.5 px-3 text-violet-400">Dativ (Person/Indirekt)</th>
                <th class="py-2.5 px-3 text-slate-400">Ableitung Nomen-Genus</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-200 font-mono" id="tbody-pronouns"></tbody>
          </table>
        </div>
      </div>

      <div class="glass-panel p-5 rounded-2xl space-y-3" id="wrapper-table-2">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300 text-xs font-mono border border-brand-500/30">Tabelle 2</span>
            Artikel & Determinatoren: Nominativ vs. Akkusativ (Der Maskulin-Shift)
          </h3>
          <span class="text-xs text-cyan-400 font-mono">Klicke eine Zelle</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse" id="tbl-articles">
            <thead>
              <tr class="border-b border-slate-700 text-slate-400 bg-slate-900/60 font-mono">
                <th class="py-2.5 px-3">Kasus & Genus</th>
                <th class="py-2.5 px-3">Bestimmt</th>
                <th class="py-2.5 px-3">Unbestimmt</th>
                <th class="py-2.5 px-3">Negativ (kein)</th>
                <th class="py-2.5 px-3">Possessiv (mein)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-200 font-mono" id="tbody-articles"></tbody>
          </table>
        </div>
      </div>

      <div class="glass-panel p-5 rounded-2xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300 text-xs font-mono border border-brand-500/30">Tabelle 3</span>
            Interaktives Plural-Labor: Die 5 Pluralmuster
          </h3>
          <span class="text-xs text-amber-400 font-mono">Klicke Wörter zum Transformieren</span>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs text-slate-400 block mb-1">Klicke auf ein Nomen, um die Pluralbildung live zu testen:</span>
            <div class="flex flex-wrap gap-2" id="plural-tester-pills"></div>
          </div>
          <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center min-w-[200px]" id="plural-transformer-result">
            <span class="text-[10px] text-slate-500 uppercase block font-mono">Morphologisches Ergebnis</span>
            <span id="plural-res-text" class="text-lg font-bold text-emerald-400 font-mono">Wähle ein Wort</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs" id="plural-patterns-cards"></div>
      </div>

      <div class="glass-panel p-5 rounded-2xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300 text-xs font-mono border border-brand-500/30">Tabelle 4</span>
            Interaktiver Datums- & Ordinalzahlen-Synthesizer
          </h3>
          <span class="text-xs text-emerald-400 font-mono">"am ...-ten" Generator</span>
        </div>

        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-2">Tag auswählen (1 bis 31):</label>
              <input type="range" min="1" max="31" value="1" id="date-slider-day" oninput="window.updateDateSynthesizer()" class="w-full accent-brand-500">
              <div class="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>1. Tag</span>
                <span id="date-slider-val" class="text-brand-300 font-bold">1. (erste)</span>
                <span>31. Tag</span>
              </div>
            </div>
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-2">Monat auswählen:</label>
              <select id="date-select-month" onchange="window.updateDateSynthesizer()" class="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-2.5 text-xs">
                <option value="Januar">Januar</option>
                <option value="Februar">Februar</option>
                <option value="März">März</option>
                <option value="April">April</option>
                <option value="Mai" selected>Mai</option>
                <option value="Juni">Juni</option>
                <option value="Juli">Juli</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="Oktober">Oktober</option>
                <option value="November">November</option>
                <option value="Dezember">Dezember</option>
              </select>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span class="text-[10px] text-slate-500 uppercase font-mono block">Generierter deutscher Dativ-Satz:</span>
              <p id="date-generated-sentence" class="text-base sm:text-lg font-bold text-amber-300 font-mono">Ich habe am ersten Mai Geburtstag.</p>
            </div>
            <button onclick="speakGerman(document.getElementById('date-generated-sentence').innerText)" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 flex-shrink-0 transition">
              <i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i> Satz anhören
            </button>
          </div>
        </div>
      </div>
    </div>
  `
};

const pronounTableData = [
  { p: '1. Sg.', nom: 'ich', akk: 'mich', dat: 'mir', ref: 'Sprecher selbst', ex: 'Ich sehe mich im Spiegel und helfe mir.' },
  { p: '2. Sg.', nom: 'du', akk: 'dich', dat: 'dir', ref: 'Gesprächspartner', ex: 'Du liebst dich und ich helfe dir.' },
  { p: '3. Sg. mask.', nom: 'er', akk: 'ihn', dat: 'ihm', ref: 'der Tisch / Mann → er/ihn', ex: 'Er sieht ihn (den Mann) und dankt ihm.' },
  { p: '3. Sg. fem.', nom: 'sie', akk: 'sie', dat: 'ihr', ref: 'die Lampe / Frau → sie/sie', ex: 'Sie kauft sie (die Lampe) und hilft ihr.' },
  { p: '3. Sg. neutr.', nom: 'es', akk: 'es', dat: 'ihm', ref: 'das Buch / Kind → es/es', ex: 'Es liest es (das Buch) und gefällt ihm.' },
  { p: '1. Pl.', nom: 'wir', akk: 'uns', dat: 'uns', ref: 'Gruppe mit Sprecher', ex: 'Wir lieben uns und das gehört uns.' },
  { p: '2. Pl.', nom: 'ihr', akk: 'euch', dat: 'euch', ref: 'Gruppe Freunde', ex: 'Ihr seht euch und das schmeckt euch.' },
  { p: '3. Pl.', nom: 'sie', akk: 'sie', dat: 'ihnen', ref: 'die Bücher / Leute → sie', ex: 'Sie kennen sie (die Leute) und danken ihnen.' },
  { p: 'Höflich', nom: 'Sie', akk: 'Sie', dat: 'Ihnen', ref: 'Immer großgeschrieben', ex: 'Kommen Sie bitte! Ich danke Ihnen sehr.' }
];

const articleTableData = [
  { kas: 'Nom. Maskulin', def: 'der Tisch', indef: 'ein Tisch', neg: 'kein Tisch', poss: 'mein Tisch', ex: 'Der Tisch ist sehr groß.' },
  { kas: 'Nom. Feminin', def: 'die Lampe', indef: 'eine Lampe', neg: 'keine Lampe', poss: 'meine Lampe', ex: 'Die Lampe steht im Wohnzimmer.' },
  { kas: 'Nom. Neutrum', def: 'das Buch', indef: 'ein Buch', neg: 'kein Buch', poss: 'mein Buch', ex: 'Das Buch ist interessant.' },
  { kas: 'Nom. Plural', def: 'die Bücher', indef: '— Bücher', neg: 'keine Bücher', poss: 'meine Bücher', ex: 'Die Bücher liegen auf dem Tisch.' },
  { kas: 'Akk. Maskulin (SHIFT!)', def: 'den Tisch', indef: 'einen Tisch', neg: 'keinen Tisch', poss: 'meinen Tisch', ex: 'Ich kaufe den / einen / keinen Tisch.' },
  { kas: 'Akk. Feminin', def: 'die Lampe', indef: 'eine Lampe', neg: 'keine Lampe', poss: 'meine Lampe', ex: 'Ich suche die / eine / meine Lampe.' },
  { kas: 'Akk. Neutrum', def: 'das Buch', indef: 'ein Buch', neg: 'kein Buch', poss: 'mein Buch', ex: 'Ich lese das / ein / mein Buch.' },
  { kas: 'Akk. Plural', def: 'die Bücher', indef: '— Bücher', neg: 'keine Bücher', poss: 'meine Bücher', ex: 'Ich nehme die / keine Bücher mit.' }
];

const pluralLabWords = [
  { sing: 'die Lampe', plur: 'die Lampen', pattern: '-(e)n', rule: 'Feminina fast immer auf -(e)n' },
  { sing: 'der Tisch', plur: 'die Tische', pattern: '-e', rule: 'Maskulina oft auf -e' },
  { sing: 'der Stuhl', plur: 'die Stühle', pattern: '-e (Umlaut)', rule: 'Umlaut u → ü + Endung -e' },
  { sing: 'das Kind', plur: 'die Kinder', pattern: '-er', rule: 'Neutra typischerweise auf -er' },
  { sing: 'das Buch', plur: 'die Bücher', pattern: '-er (Umlaut)', rule: 'Umlaut u → ü + Endung -er' },
  { sing: 'das Auto', plur: 'die Autos', pattern: '-s', rule: 'Wörter auf Vokalendung nehmen -s' },
  { sing: 'der Apfel', plur: 'die Äpfel', pattern: 'Umlaut allein', rule: 'Wörter auf -el/-er wechseln nur Vokal' }
];

let tableStudioMode = 'inspect';
let currentInspAudioText = 'Guten Tag';
let tblGameScore = 0;

window.setTableStudioMode = function(mode) {
  tableStudioMode = mode;
  const inspBtn = document.getElementById('tbl-mode-inspect-btn');
  const gameBtn = document.getElementById('tbl-mode-game-btn');
  const inspBanner = document.getElementById('table-inspector-banner');
  const gameBanner = document.getElementById('table-game-banner');

  if (mode === 'inspect') {
    if (inspBtn) inspBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-brand-600 text-white transition flex items-center gap-1.5';
    if (gameBtn) gameBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5';
    if (inspBanner) inspBanner.classList.remove('hidden');
    if (gameBanner) gameBanner.classList.add('hidden');
    renderInteractiveTables();
  } else {
    if (gameBtn) gameBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 text-white transition flex items-center gap-1.5';
    if (inspBtn) inspBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5';
    if (inspBanner) inspBanner.classList.add('hidden');
    if (gameBanner) gameBanner.classList.remove('hidden');
    startTableBlitzGame();
  }
  if (window.lucide) window.lucide.createIcons();
};

window.playInspectorAudio = function() {
  if (typeof speakGerman === 'function') {
    speakGerman(currentInspAudioText);
  }
};

window.inspectCell = function(title, desc, example, audio) {
  if (tableStudioMode !== 'inspect') return;
  const tEl = document.getElementById('insp-title');
  const dEl = document.getElementById('insp-desc');
  const eEl = document.getElementById('insp-example');
  if (tEl) tEl.innerText = title;
  if (dEl) dEl.innerText = desc;
  if (eEl) eEl.innerText = `Beispiel: "${example}"`;
  currentInspAudioText = audio || title;
  if (typeof speakGerman === 'function') speakGerman(audio || title);
  if (typeof playTone === 'function') playTone(520, 'sine', 0.06);
};

function renderInteractiveTables() {
  const tbodyP = document.getElementById('tbody-pronouns');
  if (tbodyP) {
    tbodyP.innerHTML = '';
    pronounTableData.forEach(row => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-800/60 cursor-pointer transition';
      tr.innerHTML = `
        <td class="py-2.5 px-3 text-slate-400 font-sans">${row.p}</td>
        <td class="py-2.5 px-3 text-emerald-400 font-bold hover:underline" onclick="window.inspectCell('Nominativ: ${row.nom}', 'Subjekt des Satzes (Wer oder was?).', '${row.ex}', '${row.nom}')">${row.nom}</td>
        <td class="py-2.5 px-3 text-cyan-300 font-bold hover:underline" onclick="window.inspectCell('Akkusativ: ${row.akk}', 'Direktes Objekt (Wen oder was?).', '${row.ex}', '${row.akk}')">${row.akk}</td>
        <td class="py-2.5 px-3 text-violet-300 font-bold hover:underline" onclick="window.inspectCell('Dativ: ${row.dat}', 'Indirektes Objekt / Person (Wem?).', '${row.ex}', '${row.dat}')">${row.dat}</td>
        <td class="py-2.5 px-3 text-slate-300 font-sans text-xs" onclick="window.inspectCell('${row.ref}', 'Referenz zum Nomen.', '${row.ex}', '${row.nom}, ${row.akk}, ${row.dat}')">${row.ref}</td>
      `;
      tbodyP.appendChild(tr);
    });
  }

  const tbodyA = document.getElementById('tbody-articles');
  if (tbodyA) {
    tbodyA.innerHTML = '';
    articleTableData.forEach(row => {
      const isShift = row.kas.includes('SHIFT');
      const tr = document.createElement('tr');
      tr.className = isShift ? 'bg-cyan-950/40 border-y-2 border-cyan-500/40 cursor-pointer' : 'hover:bg-slate-800/60 cursor-pointer transition';
      tr.innerHTML = `
        <td class="py-2.5 px-3 ${isShift ? 'text-cyan-300 font-bold' : 'text-slate-300 font-bold'}">${row.kas}</td>
        <td class="py-2.5 px-3 text-brand-300 hover:underline" onclick="window.inspectCell('Bestimmt: ${row.def}', 'Definiter Artikel.', '${row.ex}', '${row.def}')">${row.def}</td>
        <td class="py-2.5 px-3 text-emerald-300 hover:underline" onclick="window.inspectCell('Unbestimmt: ${row.indef}', 'Indefiniter Artikel.', '${row.ex}', '${row.indef}')">${row.indef}</td>
        <td class="py-2.5 px-3 text-rose-300 hover:underline" onclick="window.inspectCell('Negativ: ${row.neg}', 'Negativartikel kein/keine.', '${row.ex}', '${row.neg}')">${row.neg}</td>
        <td class="py-2.5 px-3 text-amber-300 hover:underline" onclick="window.inspectCell('Possessiv: ${row.poss}', 'Besitzanzeigender Artikel.', '${row.ex}', '${row.poss}')">${row.poss}</td>
      `;
      tbodyA.appendChild(tr);
    });
  }

  const pillBox = document.getElementById('plural-tester-pills');
  if (pillBox) {
    pillBox.innerHTML = '';
    pluralLabWords.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 border border-slate-700 text-xs font-semibold text-white transition';
      btn.innerText = w.sing;
      btn.onclick = () => window.transformPluralWord(w);
      pillBox.appendChild(btn);
    });
  }

  const patCards = document.getElementById('plural-patterns-cards');
  if (patCards) {
    patCards.innerHTML = `
      <div class="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <span class="text-brand-300 font-bold block text-sm border-b border-slate-800 pb-1">Muster 1: -(e)n</span>
        <p class="text-slate-200 font-mono">die Lampe → <strong>Lampen</strong><br>die Frau → <strong>Frauen</strong></p>
        <span class="text-[11px] text-slate-400 block pt-1">95% aller Feminina.</span>
      </div>
      <div class="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <span class="text-brand-300 font-bold block text-sm border-b border-slate-800 pb-1">Muster 2: -e (± ¨)</span>
        <p class="text-slate-200 font-mono">der Tisch → <strong>Tische</strong><br>der Stuhl → <strong>Stühle</strong></p>
        <span class="text-[11px] text-slate-400 block pt-1">Sehr häufig bei Maskulina.</span>
      </div>
      <div class="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <span class="text-brand-300 font-bold block text-sm border-b border-slate-800 pb-1">Muster 3: -er (+ ¨)</span>
        <p class="text-slate-200 font-mono">das Kind → <strong>Kinder</strong><br>das Buch → <strong>Bücher</strong></p>
        <span class="text-[11px] text-slate-400 block pt-1">Sehr typisch für Neutra.</span>
      </div>
      <div class="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <span class="text-brand-300 font-bold block text-sm border-b border-slate-800 pb-1">Muster 4: -s</span>
        <p class="text-slate-200 font-mono">das Auto → <strong>Autos</strong><br>das Handy → <strong>Handys</strong></p>
        <span class="text-[11px] text-slate-400 block pt-1">Fremdwörter & Abkürzungen.</span>
      </div>
      <div class="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <span class="text-brand-300 font-bold block text-sm border-b border-slate-800 pb-1">Muster 5: Keine Endung</span>
        <p class="text-slate-200 font-mono">der Lehrer → <strong>Lehrer</strong><br>der Apfel → <strong>Äpfel</strong></p>
        <span class="text-[11px] text-slate-400 block pt-1">Nomen auf -el, -en, -er.</span>
      </div>
    `;
  }
}

window.transformPluralWord = function(item) {
  const resEl = document.getElementById('plural-res-text');
  if (resEl) {
    resEl.innerHTML = `<span class="text-slate-400 text-xs">${item.sing}</span> → <span class="text-emerald-400 font-bold">${item.plur}</span> <span class="text-[10px] text-brand-300 font-mono block">(${item.rule})</span>`;
  }
  if (typeof speakGerman === 'function') {
    speakGerman(`${item.sing}. Im Plural: ${item.plur}`);
  }
  if (typeof playTone === 'function') {
    playTone(580, 'sine', 0.08);
  }
};

function startTableBlitzGame() {
  const tbodyP = document.getElementById('tbody-pronouns');
  if (tbodyP) {
    tbodyP.innerHTML = '';
    pronounTableData.forEach((row, i) => {
      const isAkkBlank = (i === 0 || i === 2 || i === 5);
      const isDatBlank = (i === 2 || i === 3);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2.5 px-3 text-slate-400 font-sans">${row.p}</td>
        <td class="py-2.5 px-3 text-emerald-400 font-bold">${row.nom}</td>
        <td class="py-2.5 px-3 font-bold ${isAkkBlank ? 'text-amber-400 bg-amber-950/40 border border-amber-500/50 rounded animate-pulse' : 'text-cyan-300'}" id="cell-p-akk-${i}">${isAkkBlank ? '???' : row.akk}</td>
        <td class="py-2.5 px-3 font-bold ${isDatBlank ? 'text-amber-400 bg-amber-950/40 border border-amber-500/50 rounded animate-pulse' : 'text-violet-300'}" id="cell-p-dat-${i}">${isDatBlank ? '???' : row.dat}</td>
        <td class="py-2.5 px-3 text-slate-300 font-sans text-xs">${row.ref}</td>
      `;
      tbodyP.appendChild(tr);
    });
  }

  const tbodyA = document.getElementById('tbody-articles');
  if (tbodyA) {
    tbodyA.innerHTML = '';
    articleTableData.forEach((row, i) => {
      const isShiftRow = i === 4;
      const tr = document.createElement('tr');
      tr.className = isShiftRow ? 'bg-cyan-950/40 border-y-2 border-cyan-500/40' : '';
      tr.innerHTML = `
        <td class="py-2.5 px-3 ${isShiftRow ? 'text-cyan-300 font-bold' : 'text-slate-300 font-bold'}">${row.kas}</td>
        <td class="py-2.5 px-3 font-bold ${isShiftRow ? 'text-amber-400 bg-amber-950/40 border border-amber-500/50 rounded animate-pulse' : 'text-brand-300'}" id="cell-a-def-${i}">${isShiftRow ? '???' : row.def}</td>
        <td class="py-2.5 px-3 font-bold ${isShiftRow ? 'text-amber-400 bg-amber-950/40 border border-amber-500/50 rounded animate-pulse' : 'text-emerald-300'}" id="cell-a-indef-${i}">${isShiftRow ? '???' : row.indef}</td>
        <td class="py-2.5 px-3 text-rose-300">${row.neg}</td>
        <td class="py-2.5 px-3 text-amber-300">${row.poss}</td>
      `;
      tbodyA.appendChild(tr);
    });
  }

  const pool = document.getElementById('tbl-game-pool');
  if (pool) {
    pool.innerHTML = '';
    const options = ['mich', 'ihn', 'ihm', 'ihr', 'uns', 'den Tisch', 'einen Tisch', 'dich', 'dir', 'das Buch'];
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-600 border border-slate-700 text-white font-mono font-bold text-xs sm:text-sm transition shadow-md';
      btn.innerText = opt;
      btn.onclick = () => window.handleTableBlitzChoice(opt, btn);
      pool.appendChild(btn);
    });
  }
}

window.handleTableBlitzChoice = function(chosen, btnEl) {
  const fb = document.getElementById('tbl-game-feedback');
  if (fb) fb.classList.remove('hidden');

  if (chosen === 'mich') {
    const el = document.getElementById('cell-p-akk-0');
    if (el) { el.innerText = 'mich'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'ihn') {
    const el = document.getElementById('cell-p-akk-2');
    if (el) { el.innerText = 'ihn'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'ihm') {
    const el = document.getElementById('cell-p-dat-2');
    if (el) { el.innerText = 'ihm'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'ihr') {
    const el = document.getElementById('cell-p-dat-3');
    if (el) { el.innerText = 'ihr'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'uns') {
    const el = document.getElementById('cell-p-akk-5');
    if (el) { el.innerText = 'uns'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'den Tisch') {
    const el = document.getElementById('cell-a-def-4');
    if (el) { el.innerText = 'den Tisch'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else if (chosen === 'einen Tisch') {
    const el = document.getElementById('cell-a-indef-4');
    if (el) { el.innerText = 'einen Tisch'; el.className = 'py-2.5 px-3 text-emerald-400 font-bold bg-emerald-950/40'; }
  } else {
    if (typeof soundError === 'function') soundError();
    if (fb) {
      fb.className = 'p-3 rounded-xl text-xs font-semibold bg-rose-950/60 border border-rose-500/50 text-rose-200';
      fb.innerHTML = `<strong>Leider falsch:</strong> "${chosen}" passt nicht in die offenen Lücken!`;
    }
    return;
  }

  if (typeof soundSuccess === 'function') soundSuccess();
  if (typeof addXP === 'function') addXP(15);
  tblGameScore += 15;
  const sEl = document.getElementById('tbl-game-score');
  if (sEl) sEl.innerText = tblGameScore;

  btnEl.disabled = true;
  btnEl.className = 'px-4 py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-500 text-emerald-300 font-mono font-bold text-xs opacity-50 cursor-not-allowed';
  if (fb) {
    fb.className = 'p-3 rounded-xl text-xs font-semibold bg-emerald-950/60 border border-emerald-500/50 text-emerald-200';
    fb.innerHTML = `<strong>Richtig eingesetzt! (+15 XP)</strong> "${chosen}" schließt eine Tabellenlücke.`;
  }

  if (tblGameScore >= 105) {
    if (typeof soundFanfare === 'function') soundFanfare();
    if (typeof addXP === 'function') addXP(50);
    alert('HERZLICHEN GLÜCKWUNSCH! Du hast den gesamten Tabellen-Blitz gemeistert! (+50 Bonus-XP)');
  }
};

const ordinalGermanWords = {
  1: 'ersten', 2: 'zweiten', 3: 'dritten', 4: 'vierten', 5: 'fünften',
  6: 'sechsten', 7: 'siebten', 8: 'achten', 9: 'neunten', 10: 'zehnten',
  11: 'elften', 12: 'zwölften', 13: 'dreizehnten', 14: 'vierzehnten', 15: 'fünfzehnten',
  16: 'sechzehnten', 17: 'siebzehnten', 18: 'achtzehnten', 19: 'neunzehnten', 20: 'zwanzigsten',
  21: 'einundzwanzigsten', 22: 'zweiundzwanzigsten', 23: 'dreiundzwanzigsten', 24: 'vierundzwanzigsten',
  25: 'fünfundzwanzigsten', 26: 'sechsundzwanzigsten', 27: 'siebenundzwanzigsten', 28: 'achtundzwanzigsten',
  29: 'neunundzwanzigsten', 30: 'dreißigsten', 31: 'einunddreißigsten'
};

window.updateDateSynthesizer = function() {
  const day = parseInt(document.getElementById('date-slider-day')?.value || '1');
  const month = document.getElementById('date-select-month')?.value || 'Mai';
  const word = ordinalGermanWords[day] || `${day}ten`;

  const sliderValEl = document.getElementById('date-slider-val');
  if (sliderValEl) sliderValEl.innerText = `${day}. (${word})`;

  const sentenceEl = document.getElementById('date-generated-sentence');
  if (sentenceEl) {
    sentenceEl.innerText = `Ich habe am ${word} ${month} Geburtstag.`;
  }
};

setTimeout(() => {
  renderInteractiveTables();
  window.updateDateSynthesizer();
  if (window.lucide) window.lucide.createIcons();
}, 200);
import orchideaImg from "../assets/projects/orchidea.png";
import gestionaleImg from "../assets/projects/gestionale.png";
import commesseImg from "../assets/projects/commesse.png";

export const projectCategories = ["Tutti", "Software", "Web", "AR & 3D", "Operations"];

export const projects = [
  {
    id: "industrial-ar",
    title: "Industrial AR Viewer",
    subtitle: "Macchinari 3D nella realtà, in scala reale",
    description:
      "Esperienza web per visualizzare modelli industriali 3D e posizionarli nell'ambiente reale tramite fotocamera, mantenendo dimensioni e proporzioni fisiche.",
    category: "AR & 3D",
    tags: ["WebAR", "3D", "Industria"],
    stack: ["React", "GLB / 3D", "WebAR", "Mobile UX"],
    status: "private",
    visual: "ar",
    featured: true,
    challenge:
      "Rendere comprensibili ingombri e proporzioni di macchinari complessi prima dell'installazione fisica.",
    solution:
      "Viewer 3D responsive con modalità AR da smartphone, gestione dei modelli e logica di scala reale.",
    impact:
      "Uno strumento commerciale e tecnico che porta il prodotto dal catalogo direttamente nello spazio del cliente.",
  },
  {
    id: "nova",
    title: "NOVA",
    subtitle: "Gestionale completo per ASD e club",
    description:
      "Piattaforma modulare per anagrafiche, corsi, pagamenti, insegnanti, volontari, contabilità, eventi e documentazione amministrativa.",
    category: "Software",
    tags: ["Gestionale", "Workflow", "Dashboard"],
    stack: ["React", "Supabase", "Auth", "PDF", "Dashboard"],
    status: "private",
    image: gestionaleImg,
    featured: true,
    challenge:
      "Centralizzare attività operative e amministrative che prima richiedevano strumenti e procedure separate.",
    solution:
      "Un unico gestionale con ruoli, flussi guidati, pagamenti, documenti, KPI e moduli specializzati.",
    impact:
      "Più controllo operativo, meno passaggi manuali e una base unica su cui far crescere nuovi moduli.",
  },
  {
    id: "timesheet",
    title: "Timesheet Aziendale",
    subtitle: "Ore, dipendenti, commesse e report",
    description:
      "Applicazione interna per registrare ore e attività, collegarle alle commesse e dare all'amministrazione una vista ordinata dello storico.",
    category: "Operations",
    tags: ["Timesheet", "Report", "Ruoli"],
    stack: ["React", "Supabase", "Filtri", "Report", "Ruoli"],
    status: "private",
    image: "/images/works/timesheet.png",
    featured: true,
    challenge:
      "Ridurre la frammentazione nella raccolta delle ore e velocizzare il controllo delle attività per commessa.",
    solution:
      "Inserimento rapido, ruoli differenziati, filtri, dashboard e storico consultabile in pochi passaggi.",
    impact:
      "Un flusso più leggibile per dipendenti e amministrazione, con dati centralizzati e verificabili.",
  },
  {
    id: "commesse",
    title: "Gestione Commesse",
    subtitle: "Stati, scadenze, documenti e completezza",
    description:
      "Web app per monitorare commesse, avanzamento, scadenze e documenti presenti nelle cartelle aziendali con indicatori immediati di completezza.",
    category: "Operations",
    tags: ["Commesse", "File check", "Produzione"],
    stack: ["React", "Node.js", "File system", "Admin UX"],
    status: "private",
    image: commesseImg,
    featured: true,
    challenge:
      "Capire a colpo d'occhio se una commessa è completa senza dover aprire cartelle e sottocartelle manualmente.",
    solution:
      "Controlli automatici sui file attesi, stati visivi e schede commessa progettate per l'uso quotidiano.",
    impact:
      "Meno controlli ripetitivi e più visibilità sullo stato reale del lavoro.",
  },
  {
    id: "beehour",
    title: "BeeHour",
    subtitle: "Tempo e attività in una sola esperienza",
    description:
      "Applicazione dedicata alla gestione delle ore e delle attività operative, progettata per rendere la registrazione semplice e la consultazione immediata.",
    category: "Software",
    tags: ["Time tracking", "Web app", "UX"],
    stack: ["React", "Database", "Dashboard", "Responsive"],
    status: "private",
    visual: "beehour",
    featured: true,
    challenge:
      "Trasformare un'attività ripetitiva come il tracciamento del tempo in un flusso veloce e chiaro.",
    solution:
      "Interfaccia essenziale, riepiloghi leggibili e struttura pensata per l'utilizzo frequente da desktop e mobile.",
    impact:
      "Più ordine nella registrazione del lavoro e meno attrito per chi deve usare lo strumento ogni giorno.",
  },
  {
    id: "idealtech",
    title: "Idealtech Digital Platform",
    subtitle: "Sito, catalogo e presenza digitale industriale",
    description:
      "Riprogettazione della presenza web di un'azienda industriale con catalogo prodotti, servizi, portfolio, contenuti tecnici e strumenti digitali evoluti.",
    category: "Web",
    tags: ["Corporate", "Industria", "Catalogo"],
    stack: ["React", "Supabase", "UI/UX", "Responsive"],
    link: "https://www.idealtech.it",
    status: "public",
    image: "/images/works/idealtech.png",
    featured: false,
    challenge:
      "Presentare competenze e prodotti tecnici con un linguaggio moderno senza perdere chiarezza per clienti e partner.",
    solution:
      "Architettura dei contenuti, schede prodotto, interfaccia responsive e base tecnica pronta per nuove funzioni.",
    impact:
      "Un ecosistema digitale più coerente con il livello tecnico dell'azienda e più facile da ampliare.",
  },
  {
    id: "orchidea-membership",
    title: "Membership & Digital Wallet",
    subtitle: "Tesseramento online, QR e card digitali",
    description:
      "Flusso completo di tesseramento con area personale, firma, verifica dati, QR di accesso e tessera digitale integrabile nel wallet.",
    category: "Software",
    tags: ["Membership", "QR", "Wallet"],
    stack: ["React", "Supabase", "QR", "Google Wallet", "Auth"],
    status: "private",
    visual: "wallet",
    featured: false,
    challenge:
      "Gestire grandi volumi di iscrizioni riducendo code, errori e passaggi manuali in segreteria.",
    solution:
      "Registrazione online, area tesserato, tessera digitale e strumenti amministrativi per controllo e invio.",
    impact:
      "Un'esperienza più autonoma per l'utente e un processo più ordinato per lo staff.",
  },
  {
    id: "orchidea",
    title: "Orchidea Club",
    subtitle: "Sito ed ecosistema digitale per eventi e corsi",
    description:
      "Sito pubblico per serate, corsi e attività del club con una comunicazione visuale forte, percorsi chiari e collegamento ai servizi digitali interni.",
    category: "Web",
    tags: ["Eventi", "Corsi", "Brand experience"],
    stack: ["React", "UI/UX", "Responsive", "Analytics"],
    link: "https://www.orchideaclub.it",
    status: "public",
    image: orchideaImg,
    featured: false,
    challenge:
      "Tenere insieme eventi, scuola, tesseramento e comunicazione senza creare confusione per il pubblico.",
    solution:
      "Navigazione per obiettivi, pagine visuali e call to action collegate ai principali flussi del club.",
    impact:
      "Una presenza digitale unificata che supporta comunicazione, acquisizione e gestione dell'utenza.",
  },
  {
    id: "orders",
    title: "Gestione Ordini Personalizzati",
    subtitle: "Clienti, prodotti, taglie e avanzamento",
    description:
      "Gestionale per coordinare richieste personalizzate, varianti prodotto, clienti e stato degli ordini in un flusso unico.",
    category: "Software",
    tags: ["Ordini", "Stock", "Clienti"],
    stack: ["React", "Supabase", "Stock", "Workflow"],
    status: "private",
    image: "/images/works/gestione-ordini-magliette.png",
    featured: false,
    challenge:
      "Evitare errori tra richieste, taglie, colori, disponibilità e stato delle consegne.",
    solution:
      "Schede ordine strutturate, anagrafiche clienti e stati di avanzamento consultabili rapidamente.",
    impact:
      "Più precisione nella gestione delle richieste e meno informazioni disperse tra messaggi e fogli.",
  },
];

export const graphicWorks = [
  {
    title: "Locandine & campagne evento",
    text: "Concept, gerarchie, tipografia e adattamenti per feed, stories, stampa e circuiti digitali.",
    image: "/images/services/locandine.png",
  },
  {
    title: "Brochure, menu & listini",
    text: "Impaginati leggibili e coerenti con il brand, pronti per stampa e utilizzo digitale.",
    image: "/images/services/menu.png",
  },
  {
    title: "Social & advertising",
    text: "Sistemi grafici riconoscibili per comunicazioni ricorrenti, promo e campagne sponsorizzate.",
    image: "/images/services/social.png",
  },
  {
    title: "Brand assets & promo",
    text: "Card, voucher, materiali commerciali e toolkit visuali costruiti intorno all'identità dell'azienda.",
    image: "/images/services/promo.png",
  },
  {
    title: "Identità visiva",
    text: "Logo, palette, tipografia e regole visuali per dare coerenza a ogni punto di contatto.",
    image: "/images/services/logo.png",
  },
  {
    title: "Rendering & visual presentation",
    text: "Rendering, mockup e presentazioni curati da grafici specializzati con controllo umano sul risultato finale.",
    image: "/images/graphic-design.png",
  },
];

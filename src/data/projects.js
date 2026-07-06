import orchideaImg from "../assets/projects/orchidea.png";
import gestionaleImg from "../assets/projects/gestionale.png";
import commesseImg from "../assets/projects/commesse.png";

export const projects = [
  {
    id: "orchidea",
    title: "Orchidea Club",
    subtitle: "Sito web discoteca / eventi",
    description:
      "Sito pubblico per discoteca con navigazione completa, sezioni corsi/serate/eventi, CTA e design d’impatto.",
    stack: ["HTML/CSS", "JS", "UI/UX"],
    tags: ["Sito pubblico"],
    link: "https://www.orchideaclub.it",
    status: "public",
    image: orchideaImg,
  },
  {
    id: "gestionale-asd",
    title: "Gestionale ASD",
    subtitle: "Dashboard, contabilità e gestione interna",
    description:
      "Gestionale interno con KPI, dashboard, gestione utenti/ruoli e moduli amministrativi. Accesso riservato.",
    stack: ["React", "Node.js", "Dashboard", "Auth"],
    tags: ["Accesso riservato"],
    link: null,
    status: "private",
    image: gestionaleImg,
  },
  {
    id: "commesse",
    title: "App Gestione Commesse",
    subtitle: "Produzione: commesse, scadenze e stati",
    description:
      "Web app per monitorare commesse, scadenze, stati e avanzamento. Pensata per utilizzo rapido in azienda.",
    stack: ["React", "Node.js", "UX", "Admin"],
    tags: ["Accesso riservato"],
    link: null,
    status: "private",
    image: commesseImg,
  },
  {
    id: "timesheet",
    title: "Gestionale Timesheet",
    subtitle: "Ore lavoro, dipendenti, commesse e report",
    description:
      "Un gestionale interno pensato per semplificare la compilazione delle ore lavorate, la gestione dei dipendenti, delle commesse e dello storico attività. Dashboard, filtri, ruoli utente e report rendono il controllo più veloce e ordinato.",
    image: "/images/works/timesheet.png",
    tags: ["Gestionale", "Dashboard", "Azienda"],
    stack: ["React", "Supabase", "Dashboard", "Report", "Ruoli utente"],
    status: "private",
    link: null,
  },
    {
    id: "idealtech",
    title: "Sito web Idealtech",
    subtitle: "Nuovo sito web per azienda di automazione industriale",
    description:
      "Sito web per azienda di automazione industriale, con sezioni prodotti, servizi, contatti, portfolio e store integrato. Design moderno e responsive.",
    image: "/images/works/idealtech.png",
    tags: ["Sito web", "Azienda", "Responsive"],
    stack: ["React", "Supabase", "UI/UX", "Design"],
    link: "https://www.idealtech.it",
    status: "public",
  },
  {
    id: "gestione-ordini-magliette",
    title: "Gestione ordini magliette",
    subtitle: "Ordini, clienti, prodotti e disponibilità taglie",
    description:
      "Un’applicazione gestionale per controllare ordini personalizzati, clienti, prodotti, taglie, colori e stato di avanzamento. Ideale per attività che vogliono gestire richieste, produzione e consegne in modo più preciso.",
    image: "/images/works/gestione-ordini-magliette.png",
    tags: ["Ordini", "Magliette", "Gestionale"],
    stack: ["React", "Supabase", "Stock", "Clienti", "Ordini"],
    status: "private",
    link: null,
  },
];

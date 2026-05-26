const translations = {
  en: {
    eyebrow: "SSC 2026 AI and Education Workshop",
    title: "AI in Teaching Gallery",
    lead: "A voluntary collection of prompts, draft activities, AI-use rules, synthetic datasets, code excerpts, and next steps from the workshop.",
    sharingTitle: "Sharing rules",
    sharing1: "Sharing is voluntary.",
    sharing2: "Drafts and unfinished ideas are welcome.",
    sharing3: "Do not include identifiable student data, confidential data, or sensitive material.",
    sharing4: "Public sharing beyond the workshop requires explicit consent.",
    filtersLabel: "Gallery filters",
    galleryLabel: "Gallery examples",
    contributionTitle: "Contribution format",
    contributionText: "A short contribution can name the course context, the teaching need, the object produced, the prompt or approach, one important correction, and the next step.",
    contributionIssueLink: "Propose a contribution on GitHub",
    contributionTemplateLink: "Open the contribution template",
    footer: "Facilitator seed examples are drafts until replaced with final workshop examples.",
    fields: {
      context: "Context",
      need: "Need",
      tool: "Tool",
      approach: "Prompt or approach",
      artifact: "Artifact",
      review: "Review",
      reuse: "Reuse",
      next: "Next step",
      link: "Resource"
    },
    filters: {
      all: "All",
      activity: "Activities",
      assessment: "Assessment",
      assistant: "Personalized AI",
      dataset: "Synthetic data"
    },
    labels: {
      activity: "Activity",
      assessment: "Assessment",
      assistant: "Personalized AI",
      dataset: "Synthetic data"
    }
  },
  fr: {
    eyebrow: "Atelier SSC 2026 IA et enseignement",
    title: "Galerie IA et enseignement",
    lead: "Une collection volontaire de consignes, brouillons d'activités, règles d'usage de l'IA, jeux de données synthétiques, extraits de code et prochaines étapes issus de l'atelier.",
    sharingTitle: "Règles de partage",
    sharing1: "Le partage est volontaire.",
    sharing2: "Les brouillons et idées inachevées sont bienvenus.",
    sharing3: "Ne pas inclure de données étudiantes identifiables, de données confidentielles ou de matériel sensible.",
    sharing4: "Tout partage public après l'atelier demande un consentement explicite.",
    filtersLabel: "Filtres de la galerie",
    galleryLabel: "Exemples de la galerie",
    contributionTitle: "Format de contribution",
    contributionText: "Une courte contribution peut nommer le contexte de cours, le besoin pédagogique, l'objet produit, la consigne ou l'approche, une correction importante et la prochaine étape.",
    contributionIssueLink: "Proposer une contribution sur GitHub",
    contributionTemplateLink: "Ouvrir le modèle de contribution",
    footer: "Les exemples facilitateurs sont des brouillons jusqu'à leur remplacement par les exemples finaux de l'atelier.",
    fields: {
      context: "Contexte",
      need: "Besoin",
      tool: "Outil",
      approach: "Consigne ou approche",
      artifact: "Objet",
      review: "Vérification",
      reuse: "Réutilisation",
      next: "Prochaine étape",
      link: "Ressource"
    },
    filters: {
      all: "Tout",
      activity: "Activités",
      assessment: "Évaluation",
      assistant: "IA personnalisée",
      dataset: "Données synthétiques"
    },
    labels: {
      activity: "Activité",
      assessment: "Évaluation",
      assistant: "IA personnalisée",
      dataset: "Données synthétiques"
    }
  }
};

const examples = [
  {
    category: "assistant",
    author: {
      en: "Aurélien seed example",
      fr: "Exemple de départ d'Aurélien"
    },
    title: {
      en: "Bilingual workshop GPT",
      fr: "GPT bilingue pour l'atelier"
    },
    context: {
      en: "SSC 2026 AI and Education Workshop, with participants working in English or French.",
      fr: "Atelier SSC 2026 IA et enseignement, avec des personnes participantes qui travaillent en français ou en anglais."
    },
    need: {
      en: "Give participants a shared assistant that understands the workshop goals, privacy reminders, gallery format, and review expectations.",
      fr: "Donner aux participants un assistant commun qui comprend les objectifs de l'atelier, les rappels de confidentialité, le format de la galerie et les attentes de vérification."
    },
    tool: {
      en: "Custom GPT in ChatGPT, using public-safe instructions and a small knowledge base.",
      fr: "GPT personnalisé dans ChatGPT, avec des instructions compatibles avec un partage public et une petite base de connaissances."
    },
    approach: {
      en: "Define the assistant's role, bilingual behavior, allowed support, privacy limits, verification routine, and links to workshop resources.",
      fr: "Définir le rôle de l'assistant, son comportement bilingue, l'aide permise, les limites de confidentialité, la routine de vérification et les liens vers les ressources de l'atelier."
    },
    artifact: {
      en: "A public link to the AI Education Workshop Assistant, plus reusable instruction and knowledge files in the facilitator package.",
      fr: "Un lien public vers AI Education Workshop Assistant, avec des fichiers d'instructions et de connaissances réutilisables dans le dossier facilitateur."
    },
    review: {
      en: "Test in both languages, check that it does not invent missing workshop links or policy details, and confirm that it keeps privacy and expert review visible.",
      fr: "Tester dans les deux langues, vérifier qu'il n'invente pas les liens ou détails de politique manquants, et confirmer qu'il garde la confidentialité et la révision experte visibles."
    },
    reuse: {
      en: "Adapt the same structure to a course-specific assistant by changing the course context, allowed support, assessment rules, and verification criteria.",
      fr: "Adapter la même structure à une IA personnalisée de cours en modifiant le contexte, l'aide permise, les règles d'évaluation et les critères de vérification."
    },
    next: {
      en: "Use it during the comparison activity and update the participant repository link when the final GitHub URL is available.",
      fr: "L'utiliser pendant l'activité de comparaison et ajouter le lien final vers le dépôt participant lorsque l'URL GitHub sera disponible."
    },
    link: {
      href: "https://chatgpt.com/g/g-6a15b5fba1288191a1247c3174ee0edd-ai-education-workshop-assistant",
      label: {
        en: "Open the workshop GPT",
        fr: "Ouvrir le GPT du workshop"
      }
    }
  },
  {
    category: "assistant",
    author: {
      en: "Aurélien seed example",
      fr: "Exemple de départ d'Aurélien"
    },
    title: {
      en: "Course-specific AI starter instructions",
      fr: "Directive de départ pour une IA de cours"
    },
    context: {
      en: "Introductory probability or statistics course",
      fr: "Cours d'introduction à la probabilité ou à la statistique"
    },
    need: {
      en: "Give students consistent guidance without turning the tool into an answer key.",
      fr: "Donner aux étudiants un encadrement cohérent sans transformer l'outil en corrigé."
    },
    tool: {
      en: "A course-specific AI assistant or a reusable instruction block for a general AI tool.",
      fr: "Une IA personnalisée de cours ou une directive réutilisable dans un outil d'IA général."
    },
    approach: {
      en: "Specify the course, audience, allowed help, prohibited help, expected format, and checks students should perform.",
      fr: "Préciser le cours, le public, l'aide permise, l'aide interdite, le format attendu et les vérifications à demander aux étudiants."
    },
    artifact: {
      en: "Draft instruction set for a course-specific AI assistant.",
      fr: "Brouillon de directive pour une IA personnalisée de cours."
    },
    review: {
      en: "Check that the assistant asks guiding questions, avoids giving full solutions too early, and reminds students to disclose use when required.",
      fr: "Vérifier que l'assistant pose des questions-guides, évite de donner trop vite des solutions complètes et rappelle la déclaration d'usage lorsque requise."
    },
    reuse: {
      en: "Reusable across courses after changing the disciplinary context and the assessment rules.",
      fr: "Réutilisable dans plusieurs cours après adaptation du contexte disciplinaire et des règles d'évaluation."
    },
    next: {
      en: "Replace this seed with Aurélien's final example before the workshop.",
      fr: "Remplacer cet exemple par l'exemple final d'Aurélien avant l'atelier."
    }
  },
  {
    category: "assessment",
    author: {
      en: "Aurélien seed example",
      fr: "Exemple de départ d'Aurélien"
    },
    title: {
      en: "AI-use rule for a take-home assignment",
      fr: "Règle d'usage de l'IA pour un devoir maison"
    },
    context: {
      en: "Undergraduate data analysis assignment",
      fr: "Devoir d'analyse de données au premier cycle"
    },
    need: {
      en: "Make expectations visible when students can use AI for planning or code support.",
      fr: "Rendre les attentes explicites lorsque les étudiants peuvent utiliser l'IA pour planifier ou soutenir le code."
    },
    tool: {
      en: "General AI tool, institutional AI tool, or instructor-provided assistant.",
      fr: "Outil d'IA général, outil institutionnel ou assistant fourni par la personne enseignante."
    },
    approach: {
      en: "Name the permitted level of AI use, require disclosure, and link the rule to what remains observable in the assignment.",
      fr: "Nommer le niveau d'usage permis, demander une déclaration et relier la règle à ce qui reste observable dans le devoir."
    },
    artifact: {
      en: "Short policy statement plus a disclosure prompt students can complete.",
      fr: "Court énoncé de règle accompagné d'une déclaration d'usage que les étudiants peuvent remplir."
    },
    review: {
      en: "Check alignment with the learning objective, class size, grading workload, and institutional expectations.",
      fr: "Vérifier l'alignement avec l'objectif d'apprentissage, la taille du groupe, la charge de correction et les attentes institutionnelles."
    },
    reuse: {
      en: "Reusable as a template for assignments, with different monitoring choices for small, medium, and large groups.",
      fr: "Réutilisable comme gabarit de devoir, avec des choix de suivi différents selon les petits, moyens et grands groupes."
    },
    next: {
      en: "Adapt to the final assessment example used in the slide deck.",
      fr: "Adapter à l'exemple d'évaluation final utilisé dans le diaporama."
    }
  },
  {
    category: "activity",
    author: {
      en: "Facilitator seed example",
      fr: "Exemple de départ facilitateur"
    },
    title: {
      en: "Prompt-to-verification classroom activity",
      fr: "Activité consigne-vérification"
    },
    context: {
      en: "Shared morning activity adaptable to teaching or research",
      fr: "Activité du matin commun adaptable à l'enseignement ou à la recherche"
    },
    need: {
      en: "Help participants separate useful AI output from unchecked output.",
      fr: "Aider les participants à distinguer une sortie utile d'une sortie non vérifiée."
    },
    tool: {
      en: "Participant's usual AI tool and the workshop GPT.",
      fr: "Outil d'IA habituel de la personne participante et GPT du workshop."
    },
    approach: {
      en: "Ask the same request twice, then identify one useful element, one correction, and one verification step.",
      fr: "Poser deux fois la même demande, puis relever un élément utile, une correction et une vérification à faire."
    },
    artifact: {
      en: "Activity where participants identify one useful element, one correction, and one verification step.",
      fr: "Activité où les participants identifient un élément utile, une correction et une vérification à faire."
    },
    review: {
      en: "Check timing, clarity for both streams, and whether participants can complete it with their own tools.",
      fr: "Vérifier le minutage, la clarté pour les deux volets et la faisabilité avec les outils personnels des participants."
    },
    reuse: {
      en: "Reusable as a quick classroom routine before accepting AI-generated explanations, code, or examples.",
      fr: "Réutilisable comme routine courte en classe avant d'accepter des explications, du code ou des exemples générés par IA."
    },
    next: {
      en: "Use participant feedback to refine the activity after the workshop.",
      fr: "Utiliser les retours des participants pour raffiner l'activité après l'atelier."
    }
  }
];

const initials = {
  activity: "ACT",
  assessment: "A+I",
  assistant: "GPT",
  dataset: "DATA"
};

const gallery = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-button");
const languageButtons = document.querySelectorAll(".language-button");

let currentLanguage = "en";
let currentFilter = "all";

function text(value) {
  return typeof value === "string" ? value : value[currentLanguage];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fieldTemplate(label, value) {
  return `
    <div class="card-section">
      <span>${escapeHTML(label)}</span>
      <p>${escapeHTML(text(value))}</p>
    </div>
  `;
}

function linkTemplate(example) {
  if (!example.link) {
    return "";
  }

  const dict = translations[currentLanguage];
  return `
    <div class="card-section">
      <span>${escapeHTML(dict.fields.link)}</span>
      <p><a class="resource-link" href="${escapeHTML(example.link.href)}">${escapeHTML(text(example.link.label))}</a></p>
    </div>
  `;
}

function applyStaticTranslations() {
  const dict = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "AI in Teaching Gallery"
    : "Galerie IA et enseignement";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = dict[node.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      node.setAttribute(attr, dict[key]);
    });
  });

  filterButtons.forEach((button) => {
    button.textContent = dict.filters[button.dataset.filterLabel];
  });
}

function syncAvailableFilters() {
  const availableCategories = new Set(examples.map((example) => example.category));

  if (currentFilter !== "all" && !availableCategories.has(currentFilter)) {
    currentFilter = "all";
  }

  filterButtons.forEach((button) => {
    const filter = button.dataset.filter;
    const available = filter === "all" || availableCategories.has(filter);
    button.hidden = !available;
    button.classList.toggle("active", filter === currentFilter);
  });
}

function cardTemplate(example) {
  const dict = translations[currentLanguage];

  return `
    <article class="gallery-card" data-category="${example.category}">
      <div class="card-visual ${example.category}" aria-hidden="true">${escapeHTML(initials[example.category])}</div>
      <div class="card-body">
        <div>
          <h3>${escapeHTML(text(example.title))}</h3>
          <div class="card-meta">
            <span class="tag">${escapeHTML(dict.labels[example.category])}</span>
            <span class="tag">${escapeHTML(text(example.author))}</span>
          </div>
        </div>
        ${fieldTemplate(dict.fields.context, example.context)}
        ${fieldTemplate(dict.fields.need, example.need)}
        ${fieldTemplate(dict.fields.tool, example.tool)}
        ${fieldTemplate(dict.fields.approach, example.approach)}
        ${fieldTemplate(dict.fields.artifact, example.artifact)}
        ${fieldTemplate(dict.fields.review, example.review)}
        ${fieldTemplate(dict.fields.reuse, example.reuse)}
        ${fieldTemplate(dict.fields.next, example.next)}
        ${linkTemplate(example)}
      </div>
    </article>
  `;
}

function render() {
  syncAvailableFilters();
  applyStaticTranslations();

  const visible = currentFilter === "all"
    ? examples
    : examples.filter((example) => example.category === currentFilter);

  gallery.innerHTML = visible.map(cardTemplate).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    render();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentLanguage = button.dataset.lang;
    render();
  });
});

render();

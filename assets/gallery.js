const translations = {
  en: {
    eyebrow: "SSC 2026 AI and Education Workshop",
    title: "AI in Teaching Gallery",
    lead: "A gallery of reusable teaching ideas, prompts, AI-use rules, activities, and workshop artifacts.",
    sharingTitle: "Sharing rules",
    sharing1: "Sharing is voluntary.",
    sharing2: "Drafts and unfinished ideas are welcome.",
    sharing3: "Do not include identifiable student data, confidential data, or sensitive material.",
    sharing4: "Public sharing beyond the workshop requires explicit consent.",
    filtersLabel: "Gallery filters",
    galleryLabel: "Gallery examples",
    contributionTitle: "Contribution format",
    contributionText: "Propose an example by naming the idea, why it helps, what others can reuse, and what should be adapted.",
    contributionIssueLink: "Propose a contribution on GitHub",
    contributionTemplateLink: "Open the contribution template",
    footer: "Each card is an invitation to reuse, adapt, and improve a concrete teaching artifact.",
    fields: {
      idea: "The idea",
      value: "Why it helps",
      adapt: "Adapt it",
      resource: "Material"
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
    lead: "Une galerie d'idées pédagogiques, consignes, règles d'usage de l'IA, activités et artéfacts réutilisables.",
    sharingTitle: "Règles de partage",
    sharing1: "Le partage est volontaire.",
    sharing2: "Les brouillons et idées inachevées sont bienvenus.",
    sharing3: "Ne pas inclure de données étudiantes identifiables, de données confidentielles ou de matériel sensible.",
    sharing4: "Tout partage public après l'atelier demande un consentement explicite.",
    filtersLabel: "Filtres de la galerie",
    galleryLabel: "Exemples de la galerie",
    contributionTitle: "Format de contribution",
    contributionText: "Proposez un exemple en nommant l'idée, ce que ça apporte, ce que d'autres peuvent reprendre et ce qui doit être adapté.",
    contributionIssueLink: "Proposer une contribution sur GitHub",
    contributionTemplateLink: "Ouvrir le modèle de contribution",
    footer: "Chaque carte invite à reprendre, adapter et améliorer un artéfact pédagogique concret.",
    fields: {
      idea: "L'idée",
      value: "Ce que ça apporte",
      adapt: "À réutiliser",
      resource: "Matériel"
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
      en: "Aurélien Nicosia",
      fr: "Aurélien Nicosia"
    },
    title: {
      en: "Bilingual workshop GPT",
      fr: "GPT bilingue pour l'atelier"
    },
    idea: {
      en: "A bilingual workshop GPT that helps participants draft prompts, teaching resources, AI-use rules, and gallery contributions.",
      fr: "Un GPT bilingue qui aide les personnes participantes à créer des consignes, ressources pédagogiques, règles d'usage de l'IA et contributions à la galerie."
    },
    value: {
      en: "It gives everyone a shared starting point while keeping bilingual support, privacy, and expert review visible.",
      fr: "Il donne un point de départ commun tout en gardant visibles le bilinguisme, la confidentialité et la révision experte."
    },
    adapt: {
      en: "Reuse the setup notes to create a course or workshop assistant with your own context, rules, and resources.",
      fr: "Reprendre les notes de configuration pour créer une IA de cours ou d'atelier avec votre propre contexte, vos règles et vos ressources."
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/workshop-gpt.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
        }
      },
      {
        href: "https://chatgpt.com/g/g-6a15b5fba1288191a1247c3174ee0edd-ai-education-workshop-assistant",
        label: {
          en: "Open example",
          fr: "Ouvrir l'exemple"
        }
      }
    ]
  },
  {
    category: "assistant",
    author: {
      en: "Aurélien Nicosia",
      fr: "Aurélien Nicosia"
    },
    title: {
      en: "Course assistant for STT-4230",
      fr: "Assistant de cours pour STT-4230"
    },
    idea: {
      en: "A concrete course assistant for STT-4230, R pour scientifiques, designed around active learning rather than direct answers.",
      fr: "Un assistant concret pour le cours STT-4230, R pour scientifiques, conçu autour de l'apprentissage actif plutôt que des réponses directes."
    },
    value: {
      en: "It shows how to encode a tutoring stance: guiding questions, mini-challenges, hints before code, explanations, and self-checks.",
      fr: "Il montre comment encoder une posture pédagogique: questions-guides, mini-défis, indices avant le code, explications et auto-vérification."
    },
    adapt: {
      en: "Adapt the role, course content, allowed help, knowledge base, and assessment boundaries to your own course.",
      fr: "Adapter le rôle, le contenu du cours, l'aide permise, la base de connaissance et les limites d'évaluation à votre propre cours."
    },
    links: [
      {
        href: "talks/context_management_custom_ai.html",
        label: {
          en: "Open slide deck",
          fr: "Ouvrir le diaporama"
        }
      },
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/course-ai-instructions.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
        }
      },
      {
        href: "https://chatgpt.com/g/g-689dc0b2bb348191b77cd4609dfce184-r-pour-scientifiques?ref=mini",
        label: {
          en: "Open example",
          fr: "Ouvrir l'exemple"
        }
      },
      {
        href: "https://stt4230.rbind.io/",
        label: {
          en: "Course material",
          fr: "Matériel de cours"
        }
      }
    ]
  },
  {
    category: "assessment",
    author: {
      en: "Aurélien Nicosia",
      fr: "Aurélien Nicosia"
    },
    title: {
      en: "Mandatory AI use in a statistics assignment",
      fr: "Usage obligatoire de l'IA dans un devoir de statistique"
    },
    idea: {
      en: "A statistics and R assignment where LLM use is required, structured, and assessed as part of the work.",
      fr: "Un devoir de statistique et de R où l'usage des LLM est obligatoire, structuré et évalué comme partie du travail."
    },
    value: {
      en: "It shifts the focus from detection to design: AI use becomes visible through code, prompts, metadata, reproducible examples, fallbacks, and a rubric.",
      fr: "On passe de la détection au design pédagogique: l'usage de l'IA devient visible par le code, les consignes, les métadonnées, les exemples reproductibles, les modes de secours et la grille d'évaluation."
    },
    adapt: {
      en: "Reuse the pattern at smaller scale: require AI for one bounded interpretive step, separate computation from AI-generated text, and assess verification, disclosure, and privacy.",
      fr: "Reprendre le patron à plus petite échelle: rendre l'IA obligatoire pour une étape interprétative bornée, séparer le calcul du texte généré, puis évaluer la vérification, la déclaration et la confidentialité."
    },
    links: [
      {
        href: "talks/mandatory_ai_assessment_contextR.html",
        label: {
          en: "Open slide deck",
          fr: "Ouvrir le diaporama"
        }
      },
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/mandatory-ai-assignment-contextual-statistics.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
        }
      },
      {
        href: "https://github.com/AurelienNicosiaULaval/contextual-statistics-with-llm",
        label: {
          en: "View repository",
          fr: "Voir le dépôt"
        }
      },
      {
        href: "https://jds-online.org/journal/JDS/article/1474/info",
        label: {
          en: "View article",
          fr: "Voir l'article"
        }
      }
    ]
  },
  {
    category: "assessment",
    author: {
      en: "Workshop resource",
      fr: "Ressource d'atelier"
    },
    title: {
      en: "AI-use rules for assignments",
      fr: "Règles d'usage de l'IA pour les devoirs"
    },
    idea: {
      en: "A detailed bilingual guide for deciding, writing, and checking AI-use rules in assignments, projects, quizzes, and data analysis work.",
      fr: "Un guide bilingue détaillé pour décider, rédiger et vérifier les règles d'usage de l'IA dans les devoirs, projets, quiz et travaux d'analyse."
    },
    value: {
      en: "It helps instructors move from vague permission or prohibition to an observable rule: what is allowed, what must be disclosed, what remains student work, and what will be assessed.",
      fr: "Il aide à passer d'une permission ou interdiction vague à une règle observable: ce qui est permis, ce qui doit être déclaré, ce qui reste le travail étudiant et ce qui sera évalué."
    },
    adapt: {
      en: "Start from the continuum and templates, then adapt the wording to the learning objective, class size, institutional rules, and available grading time.",
      fr: "Partir du continuum et des modèles, puis adapter la formulation à l'objectif d'apprentissage, la taille du groupe, les règles institutionnelles et le temps de correction disponible."
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/ai-use-rule-assignment.md",
        label: {
          en: "View detailed guide",
          fr: "Voir le guide détaillé"
        }
      }
    ]
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

function linksTemplate(example) {
  const links = example.links || (example.link ? [example.link] : []);

  if (links.length === 0) {
    return "";
  }

  const dict = translations[currentLanguage];
  return `
    <div class="card-section">
      <span>${escapeHTML(dict.fields.resource)}</span>
      <div class="resource-list">
        ${links.map((link) => `<a class="resource-link" href="${escapeHTML(link.href)}">${escapeHTML(text(link.label))}</a>`).join("")}
      </div>
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
      <div class="card-body">
        <div class="card-top">
          <div class="card-visual ${example.category}" aria-hidden="true">${escapeHTML(initials[example.category])}</div>
          <div>
            <h3>${escapeHTML(text(example.title))}</h3>
          </div>
        </div>
        ${fieldTemplate(dict.fields.idea, example.idea)}
        ${fieldTemplate(dict.fields.value, example.value)}
        ${fieldTemplate(dict.fields.adapt, example.adapt)}
        ${linksTemplate(example)}
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

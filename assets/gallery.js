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
      en: "Aurélien seed example",
      fr: "Exemple de départ d'Aurélien"
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
      en: "Aurélien seed example",
      fr: "Exemple de départ d'Aurélien"
    },
    title: {
      en: "Course-specific AI starter instructions",
      fr: "Directive de départ pour une IA de cours"
    },
    idea: {
      en: "A reusable instruction block for a course assistant that supports students without becoming an answer key.",
      fr: "Un bloc de directive réutilisable pour une IA de cours qui soutient les étudiants sans devenir un corrigé."
    },
    value: {
      en: "It clarifies what help is allowed, what is off-limits, and how students should verify their work.",
      fr: "Il clarifie l'aide permise, les limites à respecter et la façon dont les étudiants doivent vérifier leur travail."
    },
    adapt: {
      en: "Change the course context, level, software, assessment rules, and disclosure expectations.",
      fr: "Adapter le contexte du cours, le niveau, le logiciel, les règles d'évaluation et les attentes de déclaration."
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/course-ai-instructions.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
        }
      }
    ]
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
    idea: {
      en: "A plain-language AI-use rule for a take-home data analysis assignment.",
      fr: "Une règle d'usage de l'IA, en langage clair, pour un devoir maison d'analyse de données."
    },
    value: {
      en: "It helps students know what support is allowed and gives instructors a disclosure structure.",
      fr: "Elle aide les étudiants à comprendre l'aide permise et donne à la personne enseignante une structure de déclaration."
    },
    adapt: {
      en: "Adjust the permitted uses and monitoring strategy to match the learning objective and class size.",
      fr: "Adapter les usages permis et la stratégie de suivi à l'objectif d'apprentissage et à la taille du groupe."
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/ai-use-rule-assignment.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
        }
      }
    ]
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
    idea: {
      en: "A short routine where participants ask AI for a draft, then separate useful output from unchecked output.",
      fr: "Une courte routine où les personnes participantes demandent un brouillon à l'IA, puis distinguent ce qui est utile de ce qui reste non vérifié."
    },
    value: {
      en: "It makes expert review concrete and works as a classroom routine or workshop warm-up.",
      fr: "Elle rend la révision experte concrète et fonctionne comme routine de classe ou activité de démarrage en atelier."
    },
    adapt: {
      en: "Reuse the activity sheet as a 10 to 20 minute exercise with any topic participants know well.",
      fr: "Reprendre la fiche comme activité de 10 à 20 minutes avec n'importe quel sujet bien connu des personnes participantes."
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/prompt-to-verification-activity.md",
        label: {
          en: "View material",
          fr: "Voir le matériel"
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
            <div class="card-meta">
              <span class="tag">${escapeHTML(dict.labels[example.category])}</span>
              <span class="tag">${escapeHTML(text(example.author))}</span>
            </div>
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

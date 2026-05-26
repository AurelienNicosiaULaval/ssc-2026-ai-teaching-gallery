const translations = {
  en: {
    eyebrow: "SSC 2026 AI and Education Workshop",
    title: "AI in Teaching Gallery",
    lead: "A voluntary collection of reusable prompts, teaching drafts, AI-use rules, activities, and verification routines from the workshop.",
    sharingTitle: "Sharing rules",
    sharing1: "Sharing is voluntary.",
    sharing2: "Drafts and unfinished ideas are welcome.",
    sharing3: "Do not include identifiable student data, confidential data, or sensitive material.",
    sharing4: "Public sharing beyond the workshop requires explicit consent.",
    filtersLabel: "Gallery filters",
    galleryLabel: "Gallery examples",
    contributionTitle: "Contribution format",
    contributionText: "A short contribution can name the course context, the reusable material, the check that still matters, and the next step.",
    contributionIssueLink: "Propose a contribution on GitHub",
    contributionTemplateLink: "Open the contribution template",
    footer: "Facilitator seed examples are drafts. Each card links to reusable material that can be adapted.",
    fields: {
      context: "Context",
      reuse: "Reusable material",
      check: "Important check",
      resource: "Open material"
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
    lead: "Une collection volontaire de consignes réutilisables, brouillons pédagogiques, règles d'usage de l'IA, activités et routines de vérification issus de l'atelier.",
    sharingTitle: "Règles de partage",
    sharing1: "Le partage est volontaire.",
    sharing2: "Les brouillons et idées inachevées sont bienvenus.",
    sharing3: "Ne pas inclure de données étudiantes identifiables, de données confidentielles ou de matériel sensible.",
    sharing4: "Tout partage public après l'atelier demande un consentement explicite.",
    filtersLabel: "Filtres de la galerie",
    galleryLabel: "Exemples de la galerie",
    contributionTitle: "Format de contribution",
    contributionText: "Une courte contribution peut nommer le contexte de cours, le matériel réutilisable, la vérification importante et la prochaine étape.",
    contributionIssueLink: "Proposer une contribution sur GitHub",
    contributionTemplateLink: "Ouvrir le modèle de contribution",
    footer: "Les exemples facilitateurs sont des brouillons. Chaque carte donne accès à du matériel réutilisable et adaptable.",
    fields: {
      context: "Contexte",
      reuse: "Matériel réutilisable",
      check: "Vérification importante",
      resource: "Ouvrir le matériel"
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
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/workshop-gpt.md",
        label: {
          en: "Reusable setup notes",
          fr: "Notes de configuration réutilisables"
        }
      },
      {
        href: "https://chatgpt.com/g/g-6a15b5fba1288191a1247c3174ee0edd-ai-education-workshop-assistant",
        label: {
          en: "Open the workshop GPT",
          fr: "Ouvrir le GPT du workshop"
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
    context: {
      en: "Introductory probability or statistics course",
      fr: "Cours d'introduction à la probabilité ou à la statistique"
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
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/course-ai-instructions.md",
        label: {
          en: "Open instruction template",
          fr: "Ouvrir le modèle de directive"
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
    context: {
      en: "Undergraduate data analysis assignment",
      fr: "Devoir d'analyse de données au premier cycle"
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
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/ai-use-rule-assignment.md",
        label: {
          en: "Open AI-use rule template",
          fr: "Ouvrir le modèle de règle"
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
    context: {
      en: "Shared morning activity adaptable to teaching or research",
      fr: "Activité du matin commun adaptable à l'enseignement ou à la recherche"
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
    },
    links: [
      {
        href: "https://github.com/AurelienNicosiaULaval/ssc-2026-ai-teaching-gallery/blob/main/resources/prompt-to-verification-activity.md",
        label: {
          en: "Open activity sheet",
          fr: "Ouvrir la fiche d'activité"
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
        ${fieldTemplate(dict.fields.context, example.context)}
        ${fieldTemplate(dict.fields.reuse, example.reuse)}
        ${fieldTemplate(dict.fields.check, example.review)}
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

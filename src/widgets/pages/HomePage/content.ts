import type { Locale } from "@/shared/lib/i18n/routing";

const ru = {
  name: "Кирилл Сухоруков",
  role: "Fullstack-разработчик",
  nav: ["Проекты", "Что я делаю", "Опыт", "Контакты"],
  menu: "Меню",
  closeMenu: "Закрыть меню",
  skip: "К содержимому",
  hero: {
    first: "Создаю и запускаю",
    last: "цифровые продукты.",
    description:
      "CRM и веб-приложения, Mini Apps и PWA, боты Telegram / MAX, сайты и интернет-магазины. От проектирования до запуска и развития.",
    work: "Смотреть проекты",
    contact: "Обсудить задачу",
    scroll: "Листайте — дальше интереснее",
    note: "Интерфейс. Логика. Данные. Всё связано.",
    scene: ["Интерфейс", "Backend", "Интеграции"],
  },
  projectsTitle: "Работа, которую можно увидеть.",
  projectsIntro:
    "Три проекта. Разные задачи, полный цикл разработки: дизайн, frontend, backend, интеграции и запуск.",
  visit: "Открыть сайт",
  roleLabel: "Моя роль",
  roleValue: "Дизайн → разработка → запуск",
  details: "О проекте и решениях",
  task: "Задача",
  solution: "Что реализовал",
  projects: [
    {
      name: "Она хочет",
      category: "E-commerce · доставка цветов",
      image: "/images/ona-hochet-preview.webp",
      url: "https://onahochet.ru",
      color: "rose",
      description:
        "Интернет-магазин, который связывает витрину, оформление доставки и обработку заказов.",
      task: "Объединить продажу цветов в разных городах с удобным оформлением доставки и передачей заказов в CRM.",
      features: [
        "Региональные витрины и каталог товаров",
        "Корзина, получатель и оформление доставки",
        "Интеграция заказов с amoCRM и уведомлениями",
      ],
      solution:
        "Спроектировал интерфейс и backend магазина. Реализовал определение города, каталог, корзину и сценарии заказа. Связал оформление покупки с операционной обработкой и уведомлениями.",
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "amoCRM",
      ],
    },
    {
      name: "Система запуска",
      category: "Образовательная платформа",
      image: "/images/bussines-club.webp",
      url: "https://phenomenclub.ru",
      color: "violet",
      description:
        "От знакомства с программой до оплаты, личного кабинета и прохождения обучения.",
      task: "Создать единый путь от публичной страницы курса до доступа к учебным материалам и работы с домашними заданиями.",
      features: [
        "Вход через Telegram и личный кабинет",
        "Оплата и управление доступом к обучению",
        "Уроки, прогресс, домашние задания и админка",
      ],
      solution:
        "Разработал публичную часть и кабинет ученика, backend оплаты и доступа, работу с учебными материалами и административные инструменты. Предусмотрел повторные события оплаты и разные сроки доступа.",
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Telegram API",
        "YooKassa",
      ],
    },
    {
      name: "Видеохранитель",
      category: "Сайт услуг · CMS",
      image: "/images/vidsave.webp",
      url: "https://vidsave.karatell.ru",
      color: "blue",
      description:
        "Сайт компании систем безопасности с управлением контентом и обработкой заявок.",
      task: "Представить услуги компании и дать команде инструменты для обновления каталога, публикаций и обработки обращений.",
      features: [
        "Страницы услуг и адаптивная витрина",
        "CMS, каталог, публикации и админка",
        "Приём заявок и техническое SEO",
      ],
      solution:
        "Создал дизайн и адаптивные страницы, CMS и backend. Реализовал управление публикациями, каталогом и медиа, обработку заявок, метаданные и структурированные данные публичных страниц.",
      stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Mantine", "S3"],
    },
  ],
  capabilitiesTitle: "От интерфейса до работающей системы.",
  capabilitiesIntro:
    "Подключаюсь к отдельной задаче или веду продукт целиком. Продумываю, как им будут пользоваться и как он будет развиваться.",
  capabilities: [
    {
      title: "CRM и внутренние системы",
      text: "Админки, кабинеты, роли и доступы, заказы, аналитика и рабочие процессы команды.",
      tags: "Процессы / данные / управление",
    },
    {
      title: "Mini Apps, PWA и боты",
      text: "Приложения и боты для Telegram и MAX: диалоги, уведомления, подписки и связь с внешними сервисами.",
      tags: "Telegram / MAX / mobile web",
    },
    {
      title: "Сайты и интернет-магазины",
      text: "Корпоративные сайты, каталоги, оформление заказов, управление контентом и техническое SEO.",
      tags: "Дизайн / e-commerce / CMS",
    },
    {
      title: "Backend и автоматизация",
      text: "API, интеграции с CRM и оплатой, фоновые задачи, AI-функции и автоматизация ручной работы.",
      tags: "API / интеграции / AI",
    },
  ],
  aboutTitle: "Понимаю продукт целиком.",
  about:
    "Самостоятельно веду проекты от проектирования интерфейса до backend, интеграций и развёртывания. Развиваю существующие системы и помогаю доводить новые идеи до работающего продукта.",
  own: "Параллельно запускаю собственные продукты. Есть опыт разработки сервисов с подписками, AI-функциями и автоматизацией, а также создания и запуска VPN-сервиса.",
  stackLabel: "Основные инструменты",
  experienceTitle: "Опыт, на котором строю дальше.",
  resume: "Скачать резюме",
  resumePath: "/Fullstack-Разработчик_Сухоруков-Кирилл-Сергеевич.pdf",
  experience: [
    {
      date: "2025 — сейчас",
      role: "Fullstack / Product Developer",
      company: "Она хочет",
      text: "Развитие e-commerce, интеграции, поддержка продакшна и запуск новых направлений.",
    },
    {
      date: "2024 — 2025",
      role: "Frontend Developer / Mentor",
      company: "Davtian · Kaskad",
      text: "Разработка интерфейсов, ревью кода и помощь менее опытным разработчикам.",
    },
    {
      date: "2022 — 2024",
      role: "Независимый разработчик",
      company: "Клиентские проекты",
      text: "Сайты, админки и веб-приложения: от требований и дизайна до запуска.",
    },
  ],
  contactTitle: "Есть задача? Давайте обсудим.",
  contactText:
    "Новый продукт, развитие существующего сервиса или предложение о работе — напишите, с чем нужна помощь.",
  formTitle: "Или оставьте сообщение",
  nameLabel: "Как вас зовут",
  namePlaceholder: "Ваше имя",
  methodLabel: "Где ответить",
  contactLabel: "Ваш контакт",
  messageLabel: "О задаче",
  messagePlaceholder: "Что хотите сделать и на каком этапе проект?",
  consent: "Согласен на обработку указанных данных для ответа на обращение.",
  send: "Отправить сообщение",
  sending: "Отправляю…",
  success: "Сообщение отправлено. Я свяжусь с вами по указанному контакту.",
  error:
    "Не удалось отправить сообщение. Попробуйте ещё раз или напишите мне в Telegram.",
  rateError:
    "Слишком много попыток. Подождите немного или напишите мне напрямую.",
  configError:
    "Форма временно недоступна. Напишите мне в Telegram или на почту.",
  footer: "Дизайн, код и всё между ними.",
  top: "Наверх",
};
type Content = typeof ru;
const en: Content = {
  name: "Kirill Sukhorukov",
  role: "Fullstack developer",
  nav: ["Projects", "What I do", "Experience", "Contact"],
  menu: "Menu",
  closeMenu: "Close menu",
  skip: "Skip to content",
  hero: {
    first: "I build and launch",
    last: "digital products.",
    description:
      "CRM systems and web applications, Mini Apps and PWAs, Telegram / MAX bots, websites and online stores. From design to launch and beyond.",
    work: "Explore my work",
    contact: "Discuss a project",
    scroll: "Scroll to explore",
    note: "Interface. Logic. Data. All connected.",
    scene: ["Interface", "Backend", "Integrations"],
  },
  projectsTitle: "Work you can explore.",
  projectsIntro:
    "Three projects. Different challenges. Full-cycle delivery: design, frontend, backend, integrations and launch.",
  visit: "Visit website",
  roleLabel: "My role",
  roleValue: "Design → development → launch",
  details: "Project and decisions",
  task: "The challenge",
  solution: "What I built",
  projects: [
    {
      name: "Ona Hochet",
      category: "E-commerce · flower delivery",
      image: "/images/ona-hochet-preview.webp",
      url: "https://onahochet.ru",
      color: "rose",
      description:
        "An online store connecting the storefront, delivery checkout and order processing.",
      task: "Connect flower sales across multiple cities with a clear delivery checkout and CRM order processing.",
      features: [
        "Regional storefronts and product catalog",
        "Cart, recipient and delivery checkout",
        "amoCRM integration and notifications",
      ],
      solution:
        "Designed and built the storefront and backend, including city selection, catalog, cart and checkout. Connected purchase flows with operational processing and notifications.",
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "amoCRM",
      ],
    },
    {
      name: "Launch System",
      category: "Learning platform",
      image: "/images/bussines-club.webp",
      url: "https://phenomenclub.ru",
      color: "violet",
      description:
        "From discovering a course to payment, a student account and learning.",
      task: "Create a single journey from the public course page to learning materials and homework.",
      features: [
        "Telegram sign-in and student account",
        "Payments and course access management",
        "Lessons, progress, homework and admin tools",
      ],
      solution:
        "Built the public website, student account, payments and access backend, learning material delivery and admin tools. Handled repeated payment events and different access periods.",
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Telegram API",
        "YooKassa",
      ],
    },
    {
      name: "VidSave",
      category: "Service website · CMS",
      image: "/images/vidsave.webp",
      url: "https://vidsave.karatell.ru",
      color: "blue",
      description:
        "A security services website with content management and lead processing.",
      task: "Present the company’s services and let the team manage its catalog, publications and inquiries.",
      features: [
        "Responsive service pages",
        "CMS, catalog, publications and admin tools",
        "Lead intake and technical SEO",
      ],
      solution:
        "Designed and built the responsive website, CMS and backend. Implemented publishing, catalog and media management, lead intake, metadata and structured data.",
      stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Mantine", "S3"],
    },
  ],
  capabilitiesTitle: "From interface to working system.",
  capabilitiesIntro:
    "I can tackle a specific challenge or build the whole product, considering how people will use it and how it will evolve.",
  capabilities: [
    {
      title: "CRM and internal systems",
      text: "Admin panels, accounts, permissions, orders, analytics and team workflows.",
      tags: "Workflows / data / operations",
    },
    {
      title: "Mini Apps, PWAs and bots",
      text: "Telegram and MAX applications and bots: conversations, notifications, subscriptions and service integrations.",
      tags: "Telegram / MAX / mobile web",
    },
    {
      title: "Websites and e-commerce",
      text: "Business websites, catalogs, checkout, content management and technical SEO.",
      tags: "Design / e-commerce / CMS",
    },
    {
      title: "Backend and automation",
      text: "APIs, CRM and payment integrations, background jobs, AI features and workflow automation.",
      tags: "API / integrations / AI",
    },
  ],
  aboutTitle: "I see the whole product.",
  about:
    "I take projects from interface design to backend development, integrations and deployment. I maintain existing systems and help turn new ideas into working products.",
  own: "Alongside client work, I’m launching my own products. My experience includes subscription services, AI features, automation and building and launching a VPN service.",
  stackLabel: "Core tools",
  experienceTitle: "Experience I build on.",
  resume: "Download résumé",
  resumePath: "/Fullstack-Developer_Sukhorukov-Kirill-Sergeevich.pdf",
  experience: [
    {
      date: "2025 — present",
      role: "Fullstack / Product Developer",
      company: "Ona Hochet",
      text: "E-commerce development, integrations, production support and new product initiatives.",
    },
    {
      date: "2024 — 2025",
      role: "Frontend Developer / Mentor",
      company: "Davtian · Kaskad",
      text: "Interface development, code reviews and mentoring less experienced developers.",
    },
    {
      date: "2022 — 2024",
      role: "Independent developer",
      company: "Client projects",
      text: "Websites, admin panels and applications, from requirements and design to launch.",
    },
  ],
  contactTitle: "Have a project in mind?",
  contactText:
    "A new product, an existing service or a job opportunity — tell me what you’re working on.",
  formTitle: "Or leave a message",
  nameLabel: "Your name",
  namePlaceholder: "Name",
  methodLabel: "Reply via",
  contactLabel: "Your contact",
  messageLabel: "About your project",
  messagePlaceholder: "What would you like to build? Where is the project now?",
  consent: "I agree to the processing of these details to receive a reply.",
  send: "Send message",
  sending: "Sending…",
  success: "Message sent. I’ll reply using your contact details.",
  error: "Could not send your message. Try again or contact me on Telegram.",
  rateError: "Too many attempts. Please wait a little or contact me directly.",
  configError:
    "The form is temporarily unavailable. Please use Telegram or email.",
  footer: "Design, code and everything in between.",
  top: "Back to top",
};
export function getPortfolioContent(locale: Locale) {
  return locale === "ru" ? ru : en;
}


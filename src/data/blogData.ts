export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  date: string;
  readingTime: string;
  category: string | { id: number | string; name: string; slug: string };
  tags: string[];
  coverImage?: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "LOG_001",
    slug: "future-of-highload",
    title: "Архитектура Highload систем в 2025 году",
    excerpt: "Анализ трендов в разработке высоконагруженных систем. Переход от микросервисов к модульным монолитам и обратно.",
    coverImage: "https://placehold.co/1200x600/1a1a1a/FFF?text=Highload+Architecture",
    content: `
      <h2>Введение</h2>
      <p>В мире разработки высоконагруженных систем наблюдается цикличность. Если 5 лет назад все стремились распилить монолит на микросервисы, то сегодня мы видим тренд на "прагматичную архитектуру".</p>
      
      <figure>
        <img src="https://placehold.co/800x400/222/555?text=Modular+Monolith+Diagram" alt="Диаграмма модульного монолита" />
        <figcaption>Рис 1. Сравнение архитектурных подходов</figcaption>
      </figure>

      <h3>Модульный монолит</h3>
      <p>Сложность поддержки распределенных систем часто превышает выгоды от их внедрения. Модульный монолит (Modular Monolith) становится золотой серединой для многих проектов.</p>
      
      <blockquote>
        "Лучшая распределенная система — это та, которая помещается на одном сервере, пока вы не доказали обратное."
      </blockquote>

      <h3>Видео: Разбор кейса</h3>
      <div class="video-placeholder">
        <div class="video-overlay">
           <span>PLAY_LOG [04:20]</span>
        </div>
      </div>

      <h3>Rust и Go</h3>
      <p>Эти языки продолжают доминировать в нише производительных backend-компонентов.</p>
    `,
    date: "2024-12-15",
    readingTime: "5 МИН",
    category: "Architecture",
    tags: ["Highload", "Backend", "Trends"]
  },
  {
    id: "LOG_002",
    slug: "ui-performance",
    title: "Оптимизация рендеринга в Next.js 15+",
    excerpt: "Как React Server Components меняют подход к производительности фронтенда. Практические кейсы.",
    content: `
      <h2>RSC: Новая эра</h2>
      <p>React Server Components позволяют нам перенести тяжелую логику на сервер, оставляя клиенту только интерактивность.</p>
      
      <h3>Streaming SSR</h3>
      <p>Потоковая передача HTML позволяет пользователю видеть контент быстрее, даже если backend еще думает.</p>
    `,
    date: "2024-12-10",
    readingTime: "8 МИН",
    category: "Development",
    tags: ["Next.js", "React", "Optimization"]
  },
  {
    id: "LOG_003",
    slug: "design-systems-industrial",
    title: "Эстетика Industrial Brutalism в вебе",
    excerpt: "Почему грубые формы и техническая типографика возвращаются в тренды. Разбор кейсов.",
    content: `
      <h2>Функция над формой?</h2>
      <p>Индастриал стиль — это не просто "некрасиво". Это честность материалов. В вебе это выражается в видимых сетках, стандартных шрифтах и отсутствии лишнего декора.</p>
    `,
    date: "2024-11-28",
    readingTime: "4 МИН",
    category: "Design",
    tags: ["Brutalism", "UI/UX", "Trends"]
  },
  {
    id: "LOG_004",
    slug: "ai-integration-pipelines",
    title: "Построение AI-пайплайнов для E-commerce",
    excerpt: "Автоматизация контента и персонализация с помощью LLM. Наш опыт внедрения.",
    content: `
      <h2>Автоматизация</h2>
      <p>Использование LLM для генерации описаний товаров — это уже стандарт. Следующий шаг — полная персонализация выдачи.</p>
    `,
    date: "2024-11-15",
    readingTime: "12 МИН",
    category: "AI",
    tags: ["LLM", "E-commerce", "Automation"]
  }
];

export const allCategories = ["All", "Architecture", "Development", "Design", "AI"];

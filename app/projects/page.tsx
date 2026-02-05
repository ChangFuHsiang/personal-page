import Link from "next/link";

export const metadata = {
  title: "Projects | FU HSIANG, CHANG",
  description: "Selected projects and experiments.",
};

type Project = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  thumb?: string; // 放在 public/ 下的相對路徑
};

const projects: Project[] = [
  {
  slug: "polis",
  title: "Polis 模組 — 公共議題互動討論",
  desc: "整合 Polis.is 的公共議題互動模組：匿名/註冊參與、教學導覽、意見可視化與行為分析報告。",
  tags: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Polis API"],
  thumb: "/projects/polis.jpg",
  },
  {
    slug: "recipe",
    title: "Recipe Website",
    desc: "註冊/登入、食譜搜尋與動態食材換算，附留言/按讚互動。",
    tags: ["React", "Express", " Node.js ", "Sequelize", "MySQL"],
    thumb: "/projects/recipe.png",
  },
  {
    slug: "myrpg",
    title: "MyRPG — 文字輸入 RPG",
    desc: "把打字速度與準確度變成戰鬥傷害的網頁 RPG：倒數內輸入咒語施放技能。",
    tags: ["React", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    thumb: "/projects/myrpg/cover.jpg", 
  },
  {
    slug: "badminton-tracker",
    title: "Badminton Tracker",
    desc: "A computer-vision assisted tool for doubles footwork & shot analysis.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    thumb: "/projects/badminton.jpg",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    desc: "Next.js + Tailwind personal site with blog & CMS-ready structure.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    thumb: "/projects/portfolio.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-xl bg-white shadow-sm border hover:shadow-md transition overflow-hidden"
          >
            {p.thumb && (
              <img
                src={p.thumb}
                alt={p.title}
                className="h-40 w-full object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {p.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

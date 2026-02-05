// src/app/blog/page.tsx
import Link from "next/link";

const posts = [
  {
    slug: "kinmen-trip",
    title: "金門提案換宿",
    excerpt: "「提案換宿是什麼？感覺很酷！？」-北山古洋樓",
    date: "2025-08-03",
    cover: "/blog/kinmen/cover.jpeg",
    tags: ["Travel", "Kinmen", "Running", "Work Exchange"],
  },
];

export const metadata = {
  title: "Blog | FU HSIANG, CHANG",
  description: "Travel & tech notes.",
};

export default function BlogListPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Blog</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-xl bg-white shadow-sm border hover:shadow-md transition overflow-hidden"
          >
            {p.cover && (
              <img src={p.cover} alt={p.title} className="h-40 w-full object-cover" />
            )}
            <div className="p-5">
              <div className="text-xs text-gray-500">
                {new Date(p.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-1 group-hover:text-blue-600 transition">
                {p.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">{p.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
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

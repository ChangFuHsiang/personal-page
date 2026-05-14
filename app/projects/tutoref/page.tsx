import Post from "./post.mdx";

export const metadata = {
  title: "Tutoref | FU HSIANG, CHANG",
  description: "教案資料庫與搜尋平台，結合 AI 與語義搜尋，服務台灣山地原住民教師社群。",
};

export default function Page() {
  return (
    <main className="px-6 py-16">
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Tutoref — 教案資料庫與搜尋平台
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          教育科技 · AI 自動化 · 語義搜尋 · 原住民教育社群
        </p>
      </header>

      <article
        className="
          prose prose-slate max-w-3xl mx-auto prose-lg
          prose-h2:mt-12 prose-h2:scroll-mt-28
          prose-img:rounded-xl prose-img:shadow
          prose-blockquote:border-l-4 prose-blockquote:border-blue-300
        "
      >
        <Post />
      </article>
    </main>
  );
}

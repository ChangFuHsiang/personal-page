import Post from "./post.mdx";

export default function Page() {
  return (
    <main className="px-6 py-16">
      {/* Hero */}
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Polis 模組 — 公共議題互動討論
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          公民參與 · 意見可視化 · 第三方平台深度整合
        </p>
      </header>

      {/* 內容（MDX） */}
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

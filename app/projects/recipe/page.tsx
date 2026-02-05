import Post from "./post.mdx";

export default function Page() {
  return (
    <main className="px-6 py-16">
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Recipe Website
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          前後端分離 · JWT 安全認證 · 動態食材換算
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

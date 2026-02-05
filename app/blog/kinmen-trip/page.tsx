import Post from './post.mdx'

export default function Page() {
  return (
    <main className="px-6 py-16">
      {/* 封面區（可選） */}
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          金門提案換宿
        </h1>
        <p className="mt-2 text-sm text-gray-500">2025-08-03 · Travel / Kinmen</p>
      </header>

      {/* 文章本體 */}
      <article className="
        prose prose-slate max-w-3xl mx-auto prose-lg 
        prose-h2:mt-12 prose-h2:scroll-mt-28
        prose-img:rounded-xl prose-img:shadow
        prose-blockquote:border-l-4 prose-blockquote:border-blue-300
      ">
        <Post />
      </article>
    </main>
  )
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="prose prose-slate lg:prose-lg">{children}</div>
    </article>
  );
}

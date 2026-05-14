import Link from "next/link";

export const metadata = {
  title: "Projects | FU HSIANG, CHANG",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 標題 */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900">My Selected Works</h1>
      </div>

      {/* Tutoref */}
      <section>
        {/* 上方：大圖 + 文字 */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-8">

          {/* 左：主截圖 */}
          <div className="lg:w-[60%]">
            <img
              src="/projects/tutoref/tutoref-1.webp"
              alt="Tutoref main screenshot"
              className="w-full rounded-2xl shadow-md"
            />
          </div>

          {/* 右：文字 */}
          <div className="lg:w-[40%] pt-6 flex flex-col gap-5">
            <p className="text-sm tracking-wide text-blue-900 font-medium">
              Education · AI · Full-Stack
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Tutoref — 教案資料庫與搜尋平台
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              結合 Elasticsearch 全文搜尋、語義向量搜尋與 LLM 自動標籤，
              服務台灣山地原住民教師社群的教案管理平台。
            </p>
            <Link
              href="/projects/tutoref"
              className="inline-block w-fit border border-gray-900 text-gray-900 px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* 下方：三張細節截圖 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src="/projects/tutoref/tutoref-2.webp"
            alt="Tutoref screenshot 2"
            className="w-full rounded-xl shadow-sm object-cover"
          />
          <img
            src="/projects/tutoref/tutoref-3.webp"
            alt="Tutoref screenshot 3"
            className="w-full rounded-xl shadow-sm object-cover"
          />
          <img
            src="/projects/tutoref/tutoref-4.webp"
            alt="Tutoref screenshot 4"
            className="w-full rounded-xl shadow-sm object-cover"
          />
        </div>
      </section>

    </main>
  );
}

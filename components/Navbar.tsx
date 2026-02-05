import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm px-8 py-4 flex justify-between items-center z-50">
      {/* 品牌：點擊回到首頁 / */}
      <Link href="/" className="text-xl font-bold text-gray-800 tracking-wide">
        FU HSIANG, CHANG
      </Link>

      <ul className="flex gap-8 text-gray-600 font-medium">
        {/* 同頁錨點可用 <a href="#...">；跨頁用 <Link> */}
        <li>
          <Link href="/projects" className="hover:text-blue-500 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-500 transition-colors">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
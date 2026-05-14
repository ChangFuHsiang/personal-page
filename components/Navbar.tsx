'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const RESUME_URL = "https://www.dropbox.com/scl/fi/m5jxreag84wm54uscufmw/CV-E-202511.pdf?rlkey=bai2ng972owsupvvgzqkztof2&st=6ju77cv4&dl=0";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/blog",     label: "Blog"     },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center z-50 px-4">
      <nav className="flex items-center justify-between bg-gray-900 text-white rounded-full px-10 py-5 shadow-xl w-[780px] transition-transform duration-300 hover:scale-[1.02]">

        {/* 名字 */}
        <Link href="/" className="flex flex-col leading-snug group">
          <span className="text-sm text-gray-400 font-mono transition-colors group-hover:text-gray-200">
            /Chang
          </span>
          <span className="text-sm text-gray-200 font-mono transition-colors group-hover:text-white">
            &gt; Fu Hsiang
          </span>
        </Link>

        {/* 連結 + Resume */}
        <div className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium inline-block transition-all duration-200
                hover:scale-110 hover:-translate-y-0.5
                ${pathname === href ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 text-base font-semibold px-6 py-2 rounded-full
              transition-all duration-200 hover:bg-gray-700 hover:text-white hover:scale-105"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

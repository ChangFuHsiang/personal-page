import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaGraduationCap } from 'react-icons/fa';
import Image from "next/image";

function Badge({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={56}
      height={56}
      className="mt-1 shrink-0 w-14 h-14 object-contain"
    />
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Hero 區塊 */}
      <header className="pt-32 pb-20 px-6 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight whitespace-nowrap">Hi, I am Shine</h1>
          <p className="text-lg text-gray-600 mb-8 whitespace-nowrap">Welcome to my site. Hope you enjoy it!</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png"
            alt="個人照片"
            className="w-60 h-60 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </header>

      {/* 教育經歷（英文） */}
      <section id="education" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Taichung First Senior High School */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <Badge src="/tcfsh.png" alt="Taichung First Senior High School emblem" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Taichung First Senior High School
              </h3>
              <p className="text-gray-600">Senior High School Diploma</p>
              <p className="text-sm text-gray-500">Sep 2018 – Jun 2021</p>
            </div>
          </div>

          {/* NTU */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <Badge src="/ntu.png" alt="National Taiwan University emblem" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                National Taiwan University (NTU)
              </h3>
              <p className="text-gray-600">
                B.S., Computer Science and Information Engineering (CSIE)
              </p>
              {/* 如需年份可取消註解並填上時間 */}
              <p className="text-sm text-gray-500">Sep 2022 – Jun 2026 (expected)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
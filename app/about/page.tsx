import Image from "next/image";

export const metadata = {
  title: "About | FU HSIANG, CHANG",
  description: "Education and background of Fu Hsiang, Chang.",
};

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

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h1>

      <div className="max-w-3xl mx-auto space-y-6">
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

        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
          <Badge src="/ntu.png" alt="National Taiwan University emblem" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              National Taiwan University (NTU)
            </h3>
            <p className="text-gray-600">
              B.S., Computer Science and Information Engineering (CSIE)
            </p>
            <p className="text-sm text-gray-500">Sep 2022 – Jun 2026 (expected)</p>
          </div>
        </div>
      </div>
    </main>
  );
}

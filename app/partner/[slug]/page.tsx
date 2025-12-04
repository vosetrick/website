import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PartnerData {
  name: string;
  position: string;
  image: string;
  description: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
  expertise: string[];
}

const partnersData: Record<string, PartnerData> = {
  nadia: {
    name: "Nadia Khairina, S.Akun., S.H., BKP.",
    position: "Managing Partner",
    image: "/Nadia.png",
    description:
      "merupakan profesional berpengalaman di Khalisa Consulting dengan keahlian di bidang perpajakan, akuntansi, dan aspek hukum bisnis. Beliau memiliki kompetensi yang solid dalam memberikan solusi perpajakan yang komprehensif, menggabungkan pemahaman mendalam terkait regulasi fiskal dengan perspektif hukum yang relevan dalam praktik bisnis.",
    education: [
      {
        degree: "Sarjana Akuntansi (S.Akun.)",
        institution: "",
        year: "",
      },
      {
        degree: "Sarjana Hukum",
        institution: "",
        year: "",
      },
    ],
    certifications: [
      {
        title: "Bersertifikat Konsultan Pajak (BKP)",
        issuer: "",
        year: "",
      },
    ],
    expertise: [
        "Tax Compliance & Advisory",
        "Tax Planning & Strategy",
        "Tax Dispute Resolution",
        "Legal Aspects of Taxation",
        "Corporate Tax Consultation",
        "Transfer Pricing",
        "Tax Risk Management",
    ],
  },
  filosofi: {
    name: "Filosofi Putri Aulia, S.Ak., M.Ak., RSA.",
    position: "Partner",
    image: "/Filosofi.png",
    description:"merupakan profesional bersertifikat di Khalisa Consulting dengan spesialisasi di bidang akuntansi, audit, dan sistem pengendalian internal. Beliau memiliki keahlian yang komprehensif dalam melaksanakan audit keuangan, evaluasi sistem akuntansi, serta penyusunan strategi pengendalian risiko yang selaras dengan standar profesional dan regulasi yang berlaku.",
    education: [
      {
        degree: "Sarjana Akuntansi (S.Ak.)",
        institution: "",
        year: "",
      },
      {
        degree: "Magister Akuntansi (M.Ak.)",
        institution: "",
        year: "",
      },
    ],
    certifications: [
      {
        title: "Regular Securities Analyst (RSA)",
        issuer: "",
        year: "",
      }
    ],
    expertise: [
      "Financial Audit & Assurance",
        "Internal Control Evaluation",
        "Risk-based Audit",
        "System & Information Audit",
        "Compliance Audit",
        "Operational Audit",
        "Quality Assurance & Control",
    ],
  },
  saskia: {
    name: "Saskia Salmana, S.Ak., M.Sc.",
    position: "Senior Partner",
    image: "/Saskia.png",
    description:"merupakan profesional di bidang akuntansi dan perpajakan di Khalisa Consulting dengan keahlian yang mendalam dalam pelaporan keuangan, analisis perpajakan, dan konsultasi manajemen. Beliau memiliki kompetensi yang komprehensif dalam menyusun strategi akuntansi dan perpajakan yang efektif bagi berbagai jenis entitas bisnis.",
    education: [
      {
        degree: "Sarjana Akuntansi (S.Ak.)",
        institution: "",
        year: "",
      },
      {
        degree: "Master of Science (M.Sc.)",
        institution: "",
        year: "",
      },
    ],
    certifications: [
      
    ],
    expertise: [
       "Financial Reporting & Analysis",
        "Tax Accounting & Reconciliation",
        "Management Accounting",
        "Tax Compliance Services",
        "Financial Statement Preparation",
        "Fiscal Correction & Analysis",
        "Business Advisory Services",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(partnersData).map((slug) => ({
    slug: slug,
  }));
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = partnersData[slug];

  if (!partner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-700/60"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-slate-200 hover:text-white mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Beranda
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {partner.name}
              </h1>
              <p className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-6 drop-shadow-md">
                {partner.position}
              </p>
              <p className="text-xl text-slate-200 leading-relaxed drop-shadow-md">
                {partner.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Area Keahlian
          </h2>
          <div className="flex flex-wrap gap-3">
            {partner.expertise.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-slate-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Riwayat Pendidikan
          </h2>
          <div className="space-y-6">
            {partner.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-slate-600 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-lg">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Sertifikasi Profesional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partner.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    📜
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="/Khalisa Consulting Logo Horizontal White.png"
                alt="Khalisa Logo"
                width={200}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-2">Kantor Kami</h3>
              <p className="text-gray-300 leading-relaxed">
                Jl. Cimanuk No.6, Citarum
                <br />
                Kec. Bandung Wetan, Kota Bandung
                <br />
                Jawa Barat 40115
              </p>
              <p className="text-gray-300 mt-4">
                Email: info@khalisa.co.id
                <br />
                Tel: +62 21 1234 5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Khalisa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

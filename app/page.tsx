import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Tax Compliance & Review",
      description: "Memastikan kepatuhan pajak perusahaan Anda dengan regulasi terkini serta melakukan review menyeluruh untuk optimalisasi pajak.",
      icon: "📋"
    },
    {
      title: "Tax Litigation",
      description: "Mendampingi dan mewakili klien dalam sengketa pajak dengan strategi litigasi yang efektif dan profesional.",
      icon: "⚖️"
    },
    {
      title: "Business Research & Study Service",
      description: "Menyediakan riset dan studi bisnis mendalam untuk mendukung pengambilan keputusan strategis perusahaan Anda.",
      icon: "📊"
    }
  ];

  const leadership = [
    {
      name: "Nadia Khairina, S.Akun., S.H., BKP.",
      position: "Managing Partner",
      description: "Memimpin strategi dan arah perusahaan dengan pengalaman lebih dari 15 tahun di bidang konsultasi bisnis.",
      image: "/Nadia.png",
      slug: "nadia",
      flip: false
    },
    {
      name: "Saskia Salmana, S.Ak., M.Ak.",
      position: "Senior Partner",
      description: "Ahli dalam manajemen proyek dan pengembangan organisasi dengan pendekatan yang terstruktur dan efektif.",
      image: "/Saskia.png",
      slug: "saskia",
      flip: true
    },
    {
      name: "Filosofi Putri Aulia, S.Ak., M.Ak., RSA.",
      position: "Partner",
      description: "Spesialis dalam transformasi digital dan inovasi bisnis dengan track record sukses di berbagai industri.",
      image: "/Filosofi.png",
      slug: "filosofi",
      flip: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-700/50"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Solusi Konsultan Terpercaya untuk Bisnis Anda
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200 drop-shadow-md">
                Membantu perusahaan mencapai kesuksesan melalui strategi yang tepat dan implementasi yang efektif
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              >
                Hubungi Kami
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <Image
                  src="/khalisa_vertical.png"
                  alt="Khalisa Logo"
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi komprehensif untuk mengakselerasi pertumbuhan bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-400 mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-100 group-hover:bg-slate-700 rounded-bl-full transition-colors duration-300 -mr-10 -mt-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tim Pimpinan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Dipimpin oleh para profesional berpengalaman di bidangnya
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-16">
            {leadership.map((leader, index) => (
              <Link
                key={index}
                href={`/partner/${leader.slug}`}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer`}
              >
                {/* Photo Section */}
                <div className="flex-shrink-0">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className={`object-cover ${leader.flip ? '-scale-x-100' : ''}`}
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-slate-600 font-semibold text-xl md:text-2xl mb-6">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                    {leader.description}
                  </p>
                  <span className="inline-flex items-center text-slate-700 font-semibold group-hover:text-yellow-500 transition-colors">
                    Lihat Profil Lengkap
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kami siap membantu kebutuhan bisnis Anda
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5549205530197!2d107.6204880149059!3d-6.905102441873443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64adbd1bb75%3A0x5135d02890608a34!2sJl.%20Cimanuk%20No.6%2C%20Citarum%2C%20Kec.%20Bandung%20Wetan%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040115!5e0!3m2!1sen!2sid!4v1764142620290!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
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
                Jl. Cimanuk No.6, Citarum<br />
                Kec. Bandung Wetan, Kota Bandung<br />
                Jawa Barat 40115
              </p>
              <p className="text-gray-300 mt-4">
                Email: info@khalisa.co.id<br />
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

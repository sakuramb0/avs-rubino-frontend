import React from 'react';

const Home = ({ generalInfo, loading }) => {
  const services = [
    {
      title: 'Cura animali esotici',
      description: 'Assistenza specializzata per rettili, uccelli e piccoli mammiferi.',
      icon: '🦜'
    },
    {
      title: 'Chirurgia specialistica',
      description: 'Interventi chirurgici avanzati eseguiti con le migliori tecnologie.',
      icon: '🏥'
    },
    {
      title: 'TAC',
      description: 'Diagnostica per immagini ad alta precisione per diagnosi accurate.',
      icon: '🔬'
    },
    {
      title: 'Endoscopia',
      description: 'Procedure mini-invasive per la diagnosi e il trattamento.',
      icon: '🩺'
    }
  ];

  const notices = generalInfo?.filter(item => item.content?.toLowerCase().includes('avviso') || item.title?.toLowerCase().includes('avviso')) || [];
  const hours = generalInfo?.filter(item => item.content?.toLowerCase().includes('orar') || item.title?.toLowerCase().includes('orar')) || [];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-teal-700 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              La salute dei tuoi <br />
              <span className="text-teal-300">amici a quattro zampe</span>
            </h1>
            <p className="text-xl text-teal-50/90 mb-10 leading-relaxed max-w-2xl">
              Professionalità, tecnologia e amore si incontrano nella Clinica Veterinaria Rubino. 
              Siamo pronti a prenderci cura di ogni membro della tua famiglia.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold shadow-lg transition-all">
                Prenota una Visita
              </button>
              <button className="border-2 border-teal-300/50 text-white hover:bg-teal-600 px-8 py-4 rounded-xl font-bold transition-all">
                I Nostri Servizi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Eccellenza Veterinaria</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi diagnostici e terapeutici per garantire la migliore cura possibile.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Content Section (Hours & Notices) */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Notices */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-teal-500">
              <h2 className="text-2xl mb-6 flex items-center gap-3">
                <span className="text-teal-500">🔔</span> Avvisi Importanti
              </h2>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              ) : notices.length > 0 ? (
                <ul className="space-y-4">
                  {notices.map((item, idx) => (
                    <li key={idx} className="p-4 bg-teal-50 rounded-lg text-teal-800 text-sm">
                      <strong>{item.title}</strong>: {item.content}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 italic">Nessun avviso al momento.</p>
              )}
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
              <h2 className="text-2xl mb-6 flex items-center gap-3">
                <span className="text-blue-500">🕒</span> Orari di Apertura
              </h2>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              ) : hours.length > 0 ? (
                <div className="space-y-4">
                  {hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                      <span className="font-medium text-slate-700">{item.title || 'Orario'}</span>
                      <span className="text-slate-600">{item.content}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 text-slate-600">
                  <p className="flex justify-between"><span>Lunedì - Venerdì</span> <span>09:00 - 19:30</span></p>
                  <p className="flex justify-between"><span>Sabato</span> <span>09:00 - 13:00</span></p>
                  <p className="flex justify-between font-bold text-red-500"><span>Domenica</span> <span>Chiuso</span></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="container mx-auto px-4">
        <div className="bg-slate-200 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-teal-900/5 backdrop-blur-[2px]"></div>
          <div className="relative z-10 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm">
              <h3 className="text-lg mb-2">Vieni a Trovarci</h3>
              <p className="text-slate-600 text-sm mb-4 italic">via dell'Olmo 3, Formia (LT)</p>
              <button className="btn-primary w-full">Apri in Maps</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

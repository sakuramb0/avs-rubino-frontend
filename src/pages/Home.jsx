import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleDisplay from '../components/ScheduleDisplay';
import BookingModal from '../components/BookingModal';

const Home = ({ siteInfo, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Legge i campi direttamente dall'oggetto siteInfo salvato dall'admin
  const avvisiText = siteInfo?.avvisi || '';
  const orariFormia = siteInfo?.orariFormia;
  const orariSecondoStudio = siteInfo?.orariSecondoStudio;

  // Avvisi rimane stringa
  const avvisiLines = typeof avvisiText === 'string'
    ? avvisiText.split('\n').filter(line => line.trim())
    : [];

  const hasScheduleFormia = orariFormia && (typeof orariFormia === 'string' ? orariFormia.trim() : (orariFormia.defaults?.length > 0 || orariFormia.overrides?.length > 0));
  const hasScheduleSecondo = orariSecondoStudio && (typeof orariSecondoStudio === 'string' ? orariSecondoStudio.trim() : (orariSecondoStudio.defaults?.length > 0 || orariSecondoStudio.overrides?.length > 0));
  const hasHours = hasScheduleFormia || hasScheduleSecondo;

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
              Professionalità, tecnologia e amore si incontrano nell'AVS Rubino (Ambulatorio Veterinario Specialistico). 
              Siamo pronti a prenderci cura di ogni membro della tua famiglia.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                disabled
                className="bg-slate-100 text-slate-400 font-bold py-4 px-6 rounded-xl cursor-not-allowed text-center border border-slate-200"
              >
                Prenota online
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-4 rounded-xl font-bold shadow-lg transition-all"
              >
                Prenota via contatti
              </button>
              <Link 
                to="/services" 
                className="border-2 border-teal-300/50 text-white hover:bg-teal-600 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
              >
                I Nostri Servizi
              </Link>
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
            {/* Notices / Avvisi */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-teal-500">
              <h2 className="text-2xl mb-6 flex items-center gap-3">
                <span className="text-teal-500">🔔</span> Avvisi Importanti
              </h2>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              ) : avvisiLines.length > 0 ? (
                <ul className="space-y-3">
                  {avvisiLines.map((line, idx) => (
                    <li key={idx} className="p-4 bg-teal-50 rounded-lg text-teal-800 text-sm leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 italic">Nessun avviso al momento.</p>
              )}
            </div>

            {/* Hours / Orari */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
              <h2 className="text-2xl mb-6 flex items-center gap-3">
                <span className="text-blue-500">🕒</span> Orari di Apertura
              </h2>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              ) : hasHours ? (
                <div className="space-y-6">
                  <ScheduleDisplay schedule={orariFormia} studioLabel="Studio Formia" />
                  <ScheduleDisplay schedule={orariSecondoStudio} studioLabel="Secondo Studio" />
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

      {/* Map Section */}
      <section className="container mx-auto px-4">
        <div className="bg-slate-200 rounded-3xl h-96 relative overflow-hidden">
          <iframe 
            src="https://maps.google.com/maps?q=Via%20dell'Olmo%203,%20Formia&t=h&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Mappa AVS Rubino"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none"></div>
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-center w-[calc(100%-2rem)] md:w-auto md:min-w-[300px]">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg mb-2 font-bold text-slate-800">Vieni a Trovarci</h3>
              <p className="text-slate-600 text-sm mb-4 italic">via dell'Olmo 3, Formia (LT)</p>
              <a href="https://maps.google.com/maps?q=Via%20dell'Olmo%203,%20Formia" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow">
                Apri in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        siteInfo={siteInfo} 
      />
    </div>
  );
};

export default Home;

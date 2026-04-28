import React, { useState } from 'react';
import ScheduleDisplay from '../components/ScheduleDisplay';

const Services = ({ siteInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { 
      title: 'Cura animali esotici', 
      description: 'Dalla medicina preventiva alla chirurgia per rettili, uccelli e piccoli mammiferi.',
      details: 'Disponiamo di competenze specifiche e attrezzature dedicate per il trattamento di specie non convenzionali.'
    },
    { 
      title: 'Chirurgia specialistica', 
      description: 'Chirurgia dei tessuti molli, ortopedia e neurochirurgia con monitoraggio anestesiologico avanzato.',
      details: 'La nostra sala operatoria è equipaggiata con sistemi di ventilazione meccanica e monitoraggio multiparametrico.'
    },
    { 
      title: 'TAC (Tomografia Assiale Computerizzata)', 
      description: 'Esami diagnostici tridimensionali ad altissima risoluzione per una diagnosi certa.',
      details: 'Ideale per lo studio di patologie oncologiche, neurologiche e ortopediche complesse.'
    },
    { 
      title: 'Endoscopia', 
      description: 'Procedure diagnostiche e terapeutiche mini-invasive per apparato gastroenterico e respiratorio.',
      details: 'Permette di visualizzare direttamente gli organi interni e prelevare campioni bioptici senza chirurgia invasiva.'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">I Nostri Servizi Specialistici</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            L'AVS Rubino offre cure mediche di eccellenza supportate dalle più moderne tecnologie diagnostiche.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center text-2xl mb-6">
                {index === 0 ? '🦜' : index === 1 ? '🏥' : index === 2 ? '🔬' : '🩺'}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-teal-700 font-medium mb-4">{service.description}</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.details}</p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button 
                  disabled 
                  className="bg-slate-100 text-slate-400 font-bold py-2 px-4 rounded-xl cursor-not-allowed w-full sm:w-auto text-sm text-center flex-1 border border-slate-200"
                >
                  Prenota online
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-teal-600 text-white hover:bg-teal-700 font-bold py-2 px-4 rounded-xl transition-colors w-full sm:w-auto text-sm text-center shadow-md hover:shadow-lg flex-1"
                >
                  Prenota via contatti
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-teal-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Hai bisogno di una consulenza?</h2>
            <p className="text-teal-100">
              Il nostro team di esperti è a tua disposizione per valutare il caso del tuo animale e consigliarti il percorso diagnostico più adatto.
            </p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-white text-teal-700 hover:bg-teal-50 px-10 py-4 rounded-2xl font-bold shadow-lg transition-all whitespace-nowrap">
            Contattaci Ora
          </button>
        </div>
      </div>

      {/* Modal Contatti e Orari */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 shrink-0">
              <span className="text-teal-500">📞</span> Contattaci
            </h2>
            
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <div className="space-y-6">
                {/* Dati Contatto */}
                <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100">
                  <p className="flex items-center gap-3 text-slate-800 font-bold mb-4 text-lg">
                    <svg className="w-6 h-6 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    328 173 1924
                  </p>
                  <p className="flex items-center gap-3 text-slate-800 font-bold text-sm sm:text-base break-all">
                    <svg className="w-6 h-6 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    pasquale-orlando@libero.it
                  </p>
                </div>

                {/* Orari */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Orari di Apertura</h3>
                  {siteInfo && (siteInfo.orariFormia || siteInfo.orariSecondoStudio) ? (
                    <div className="space-y-6">
                      <ScheduleDisplay schedule={siteInfo.orariFormia} studioLabel="Studio Formia" />
                      <ScheduleDisplay schedule={siteInfo.orariSecondoStudio} studioLabel="Secondo Studio" />
                    </div>
                  ) : (
                    <div className="space-y-2 text-slate-600 text-sm">
                      <p className="flex justify-between"><span>Lunedì - Venerdì</span> <span>09:00 - 19:30</span></p>
                      <p className="flex justify-between"><span>Sabato</span> <span>09:00 - 13:00</span></p>
                      <p className="flex justify-between font-bold text-red-500"><span>Domenica</span> <span>Chiuso</span></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

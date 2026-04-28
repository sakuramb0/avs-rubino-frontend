import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

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

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        siteInfo={siteInfo} 
      />
    </div>
  );
};

export default Services;

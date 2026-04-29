import React from 'react';
import ScheduleDisplay from './ScheduleDisplay';

const BookingModal = ({ isOpen, onClose, siteInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
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
                avsrubino@gmail.it
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
  );
};

export default BookingModal;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-800 pb-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Clinica Rubino</h3>
            <p className="text-sm leading-relaxed">
              Il benessere dei vostri animali è la nostra priorità. Offriamo servizi veterinari all'avanguardia con passione e dedizione.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Dove Siamo</h3>
            <p className="text-sm flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              via dell'Olmo 3, Formia (LT)
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contatti</h3>
            <p className="text-sm mb-2">Tel: +39 0123 456789</p>
            <p className="text-sm">Email: info@clinicarubino.it</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Clinica Veterinaria Rubino. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

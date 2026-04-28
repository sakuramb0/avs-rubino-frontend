import React from 'react';

export default function Gallery({ galleryItems, loading }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">La Nostra Struttura</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Sfoglia le foto del nostro ambulatorio e dei nostri pazienti. Utilizziamo tecnologie all'avanguardia in un ambiente accogliente.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-slate-200 rounded-2xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : galleryItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.url} 
                  alt={item.title || 'Foto dell\'ambulatorio'} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.title || 'AVS Rubino'}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">📸</div>
            <p className="text-slate-500 italic">La galleria è in fase di aggiornamento. Torna a trovarci presto!</p>
          </div>
        )}
      </div>
    </div>
  );
}

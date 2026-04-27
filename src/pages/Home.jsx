import React from 'react';

const GIORNI_FULL = {
  lunedi: 'Lunedì',
  martedi: 'Martedì',
  mercoledi: 'Mercoledì',
  giovedi: 'Giovedì',
  venerdi: 'Venerdì',
  sabato: 'Sabato',
  domenica: 'Domenica',
};

/**
 * Interpreta il campo orari che può essere:
 * - una stringa (vecchio formato) → splitta per \n
 * - un oggetto { defaults: [...], overrides: [...] } (nuovo formato) → renderizza strutturato
 * - undefined/null → ritorna null
 */
const ScheduleDisplay = ({ schedule, studioLabel }) => {
  if (!schedule) return null;

  // ── Retrocompatibilità: vecchio formato stringa ──
  if (typeof schedule === 'string') {
    const lines = schedule.split('\n').filter(l => l.trim());
    if (lines.length === 0) return null;
    return (
      <div>
        {studioLabel && (
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">📍 {studioLabel}</h3>
        )}
        <div className="space-y-2">
          {lines.map((line, idx) => (
            <div key={idx} className="py-2 px-3 bg-blue-50/50 rounded-lg text-slate-700 text-sm border-b border-blue-100/50 last:border-0">
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Nuovo formato strutturato ──
  const defaults = schedule.defaults || [];
  const overrides = schedule.overrides || [];
  const hasData = defaults.length > 0 || overrides.length > 0;
  if (!hasData) return null;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('it-IT', { timeZone: 'Europe/Rome', day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Filtra eccezioni attive (oggi cade nel range)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const activeOverrides = overrides.filter(o => {
    const from = new Date(o.dateFrom + 'T00:00:00');
    const to = new Date((o.dateTo || o.dateFrom) + 'T23:59:59');
    return today >= from && today <= to;
  });

  return (
    <div>
      {studioLabel && (
        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">📍 {studioLabel}</h3>
      )}

      {/* Orari predefiniti */}
      {defaults.length > 0 && (
        <div className="space-y-2">
          {defaults.map((entry) => (
            <div key={entry.id} className="flex justify-between items-center py-2 px-3 bg-blue-50/50 rounded-lg border-b border-blue-100/50 last:border-0">
              <span className="font-medium text-slate-700 text-sm">
                {entry.days.map(d => GIORNI_FULL[d] || d).join(', ')}
              </span>
              {entry.closed ? (
                <span className="font-bold text-red-500 text-sm">Chiuso</span>
              ) : (
                <span className="text-slate-600 text-sm">
                  {entry.startTime}{entry.endTime ? ` – ${entry.endTime}` : ''}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Eccezioni attive oggi */}
      {activeOverrides.length > 0 && (
        <div className="mt-3 space-y-2">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">⚠️ Orario speciale oggi</p>
          {activeOverrides.map((entry) => (
            <div key={entry.id} className="flex justify-between items-center py-2 px-3 bg-amber-50 rounded-lg border border-amber-200">
              <span className="font-medium text-amber-800 text-sm">
                {formatDate(entry.dateFrom)}
                {entry.dateTo && entry.dateTo !== entry.dateFrom ? ` → ${formatDate(entry.dateTo)}` : ''}
              </span>
              {entry.closed ? (
                <span className="font-bold text-red-500 text-sm">Chiuso</span>
              ) : (
                <span className="text-slate-600 text-sm">
                  {entry.startTime}{entry.endTime ? ` – ${entry.endTime}` : ''}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Home = ({ siteInfo, loading }) => {
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

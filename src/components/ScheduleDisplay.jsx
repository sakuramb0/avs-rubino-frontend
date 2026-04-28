import React from 'react';

export const GIORNI_FULL = {
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

export default ScheduleDisplay;

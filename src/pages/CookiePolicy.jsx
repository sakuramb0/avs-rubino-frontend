import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Informativa sui Cookie</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>
        
        <p>
          Questa Cookie Policy spiega come l'<strong>AVS Rubino</strong> (Ambulatorio Veterinario Specialistico) utilizza i cookie e tecnologie simili 
          per riconoscerti quando visiti il nostro sito web e utilizzi le funzionalità di prenotazione.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Cosa sono i cookie?</h2>
        <p>
          I cookie sono piccoli file di testo che vengono salvati sul tuo computer o dispositivo mobile quando visiti un sito web. 
          Sono ampiamente utilizzati per far funzionare i siti web, o per farli funzionare in modo più efficiente, 
          nonché per fornire informazioni ai proprietari del sito.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Quali cookie utilizziamo?</h2>
        
        <h3 className="font-bold text-slate-700 mt-4">1. Cookie Strettamente Necessari (Essenziali)</h3>
        <p>
          Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono essere disattivati.
          Includono in particolare i cookie di sessione necessari per l'autenticazione tramite <strong>Google Login</strong>. 
          Quando accedi al nostro sito per prenotare una visita, noi e i nostri fornitori di servizi di autenticazione (es. Firebase/Google) 
          utilizziamo questi cookie per mantenere attiva la tua sessione in modo sicuro.
        </p>

        <h3 className="font-bold text-slate-700 mt-4">2. Cookie di Terze Parti (Google Maps)</h3>
        <p>
          Nelle nostre pagine (ad es. la Home) integriamo mappe interattive fornite da Google Maps.
          Google potrebbe impostare dei propri cookie per memorizzare le tue preferenze o fini di sicurezza. 
          L'utilizzo di tali cookie è regolato dalla privacy policy di Google.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Come gestire i cookie?</h2>
        <p>
          Puoi impostare il tuo browser per rifiutare tutti o alcuni cookie del browser, o per avvisarti quando i siti 
          web impostano o accedono ai cookie. Tuttavia, tieni presente che disabilitando i cookie strettamente necessari, 
          le funzionalità di accesso al tuo account e di prenotazione delle visite non saranno funzionanti.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Contatti</h2>
        <p>
          Per qualsiasi domanda relativa alla nostra politica sui cookie, puoi contattarci all'indirizzo email: <strong>avsrubino@gmail.it</strong>.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;

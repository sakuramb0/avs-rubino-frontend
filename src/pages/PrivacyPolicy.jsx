import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Informativa sulla Privacy</h1>
      
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>
        
        <p>
          La presente Informativa sulla Privacy descrive le modalità di raccolta, utilizzo e protezione
          dei dati personali degli utenti da parte dell'<strong>AVS Rubino</strong> (Ambulatorio Veterinario Specialistico).
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Dati Raccolti</h2>
        <p>
          Raccogliamo i seguenti dati personali, specialmente quando decidi di utilizzare la nostra piattaforma
          per prenotare visite tramite autenticazione (es. Google Login):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Dati di Profilo:</strong> Nome, cognome, indirizzo email e foto profilo (forniti dal provider di accesso, come Google).</li>
          <li><strong>Dati di Prenotazione:</strong> Informazioni sulle tue visite, storico degli appuntamenti e dati relativi ai tuoi animali.</li>
          <li><strong>Dati Tecnici:</strong> Indirizzo IP, tipo di browser e dati di navigazione standard.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Finalità del Trattamento</h2>
        <p>I tuoi dati vengono utilizzati per:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fornirti il servizio di prenotazione visite e consultazione delle disponibilità.</li>
          <li>Gestire la tua utenza e garantirti un accesso sicuro tramite autenticazione terza (OAuth Google).</li>
          <li>Inviarti comunicazioni relative ai tuoi appuntamenti (conferme, promemoria).</li>
          <li>Migliorare la qualità dei nostri servizi offerti.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Condivisione dei Dati</h2>
        <p>
          I tuoi dati non vengono venduti o ceduti a terzi per scopi di marketing. 
          Potremmo condividere i dati con fornitori di servizi tecnici essenziali (come servizi di hosting cloud e autenticazione, ad esempio Google/Firebase) 
          esclusivamente per le finalità legate all'erogazione del servizio.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Sicurezza e Conservazione</h2>
        <p>
          Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati personali. 
          I dati vengono conservati per il tempo strettamente necessario a fornirti i servizi richiesti 
          o per adempiere a obblighi di legge.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. I Tuoi Diritti</h2>
        <p>
          In conformità con il GDPR, hai il diritto di:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accedere ai tuoi dati personali.</li>
          <li>Richiedere la rettifica o la cancellazione dei tuoi dati.</li>
          <li>Revocare in qualsiasi momento il consenso all'autenticazione tramite Google (direttamente dalle impostazioni del tuo account Google).</li>
          <li>Opporti al trattamento dei dati.</li>
        </ul>
        <p className="mt-4">
          Per esercitare questi diritti, puoi contattarci all'indirizzo email: <strong>avsrubino@gmail.it</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

# Simple Login and Signup App

Questo progetto è una semplice applicazione web di login e registrazione, realizzata con HTML, CSS e JavaScript. Il progetto include un foglio di login e uno di registrazione. Due script, uno per "login" e l altro per "sign up" ed un foglio per il CSS.


# Guida all'uso dell'applicazione di Registrazione e Login

Questo progetto consente agli utenti di registrarsi e accedere utilizzando un'email e una password. I dati degli utenti vengono memorizzati localmente nel browser utilizzando `localStorage`. Questa scelta è stata fatta perchè la configurazione `localStorage` è una soluzione semplice e integrata nei browser moderni. Non richiede configurazioni aggiuntive o installazione di server backend.


Sicurezza:
Ho unsato una semplice crittografia SHA-256 per la password, ma non è sicura per un uso in produzione.

LocalStorage: I dati sono memorizzati nel localStorage del browser e non sono criptati. Questo è adatto solo per scopi dimostrativi e non per applicazioni reali.

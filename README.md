# js-array-carousel

**Consegna:**

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

# Passaggi:

1. Creo in HTML un main wrapper che prende tutta la viewport, dentro c'è un container che a sua volta ha dentro lo slider con l'items-wrapper avente le immagini
2. Dopo aver creato gli elementi in HTML, creo i bottoni che andranno in position absolute rispetto al contenitore delle immagini
3. Passo a creare lo slider
4. Elementi che mi interessano: l'items wrapper e le sue immagini, i bottoni
5. Stampo tutte le immagini dentro il wrapper con un ciclo 
6. Devo prendere la prima img e togliergli la classe hide, quindi prendo tutti gli elementi stampati e li metto in un array 
6. Devo creare un contatore
7. Al click del bottone che va all'immagine successiva aggiungo la classe hide all'elemento corrente, incremento il contatore, rimuovo la classe hide all'elemento nuovo
8. Al click dell'altro bottone faccio come il punto sopra, ma inverso
9. Non deve capitare che arriviamo alla slide senza immagine, quindi devo nascondere il bottone che mi riporta nell'immagine precedente di default e farlo comparire al primo click
10. Per lo stesso ragionamento, quando sono sull'ultimo elemento nascondo il tasto che mi dovrebbe portare all'immagine successiva


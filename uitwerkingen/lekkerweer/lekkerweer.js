// Gebruik Vue 
import {
    createApp,
    reactive
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Hier komt de weerinformatie vandaan
var url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
var parameters = '?lang=nl&unitGroup=metric&include=current&key=NRK8YGC3ULMDTBFSTPM249YS7&contentType=json';

// Voor de plaatjes gebruiken we dit adres
var plaatjes = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/';

// Wat we binnen krijgen komt in een Weer object te staan
class Weer {
    adres;
    temperatuur;
    tekst;
    plaats;
    icoon;
    beschrijving;
}

// Dit is het weer object dat we gebruiken in onze pagina
let hetweer = reactive(new Weer());
hetweer.plaats = "Den Haag";

// We moeten het weer ophalen
function haalHetWeerOp() {
    var ophaaladres = url + hetweer.plaats + parameters;

    fetch(ophaaladres).then(antwoord => {
        if (!antwoord.ok) {
            alert("Hé, dat ging fout! Dit is de foutcode: " + antwoord.status);
        }
        return antwoord.json();
    }).then(weerdata => vulWeer(weerdata));
}

// Als het weer opgehaald is kunnen we het tonen
function vulWeer(weerdata) {
    hetweer.adres = weerdata.resolvedAddress;
    hetweer.temperatuur = weerdata.currentConditions.temp;
    hetweer.beschrijving = weerdata.currentConditions.conditions;
    hetweer.icoon = plaatjes + weerdata.currentConditions.icon + ".png";

    if (hetweer.temperatuur < -10) hetweer.tekst = "Het is veel te koud buiten!";
    if (hetweer.temperatuur < 0) hetweer.tekst = "Misschien kan je wel schaatsen!";
    if (hetweer.temperatuur >= 0) hetweer.tekst = "Tijd voor een wandeling! Doe wel handschoenen aan.";
    if (hetweer.temperatuur > 10) hetweer.tekst = "Prima weer voor een fietstochtje!";
    if (hetweer.temperatuur > 20) hetweer.tekst = "Zoek alvast een plekje op het strand!";
    if (hetweer.temperatuur > 30) hetweer.tekst = "Oef, het is warm! Ga zwemmen om af te koelen.";
    if (hetweer.temperatuur > 40) hetweer.tekst = "Veel te heet buiten. Heb je een ventilator?";
}

// Vue maakt van de pagina een soort App met gegevens en functies
let app = createApp({
    data() {
        return hetweer;
    },
    methods: {
        ophalen() {
            haalHetWeerOp();
        },
        getal(waarde) {
            if (waarde == null) return "";
            return waarde.toLocaleString()
        },
        kleineLetters(tekst) {
            if (tekst == null) return "";
            return tekst.toLowerCase();
        }
    }
}).mount('#weerapp');

haalHetWeerOp();
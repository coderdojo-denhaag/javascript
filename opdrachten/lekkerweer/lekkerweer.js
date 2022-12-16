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
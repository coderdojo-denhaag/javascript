function VerbindKlik(elementId, functie)
{
    document.getElementById(elementId).onclick = functie;
}

function LeesWaarde(elementId)
{
    return document.getElementById(elementId).value;
}

function SchrijfWaarde(elementId, value)
{
    document.getElementById(elementId).value = value;
}
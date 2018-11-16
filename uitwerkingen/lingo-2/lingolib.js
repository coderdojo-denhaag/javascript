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

function SchrijfResultaat(elementId, result)
{
    var html = "<tr>";
    for(var i=0; i < result.length; i++)
    {
        var letter = result[i];
        if(letter.Correct == true) html += "<td class='goed'>" + letter.Waarde + "</td>";
        if(letter.BijnaCorrect == true) html += "<td class='bijnagoed'>" + letter.Waarde + "</td>";
        if(letter.Fout == true) html += "<td class='fout'>" + letter.Waarde + "</td>";
    }
    html += "</tr>";
    var result = document.createElement("table");
    result.innerHTML = html;
    document.getElementById(elementId).appendChild(result);
}
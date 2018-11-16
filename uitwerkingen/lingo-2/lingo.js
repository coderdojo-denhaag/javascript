//var woorden = ["fiets","meten","patat","friet"];
var woord = kiesWoord();

function kiesWoord()
{
    var random = Math.random() * woorden.length;
    var woord = woorden[Math.floor(random)];
    return woord;
}

function controleerWoord()
{
    var invoer = LeesWaarde("invoer");
    var resultaat = [];
    for(var i=0; i<5; i++)
    {        
        if(invoer[i] == woord[i])
        {            
            resultaat[i] = {Waarde: woord[i], Correct:true};
        }        
        else if(woord.indexOf(invoer[i]) > -1)
        {
            resultaat[i] = {Waarde: invoer[i], BijnaCorrect:true};
        }
        else
        {
            resultaat[i] = {Waarde: "", Fout:true};            
        }
    }
    SchrijfResultaat("uitvoer", resultaat);    
}

VerbindKlik("controleer", controleerWoord);

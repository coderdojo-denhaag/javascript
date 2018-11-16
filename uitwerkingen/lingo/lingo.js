var poging = 0;
var woorden = ["fiets","meten","patat","friet"];
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
    var resultaat = "";
    for(var i=0; i<5; i++)
    {        
        if(invoer[i] == woord[i])
        {            
            resultaat += woord[i];            
        }        
        else
        {
            resultaat += "*";
        }
    }
    SchrijfWaarde("uitvoer", resultaat);    
    poging++;
}

VerbindKlik("controleer", controleerWoord);

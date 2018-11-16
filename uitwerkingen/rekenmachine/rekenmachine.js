// rekenmachine.js
var somtekst = "";
var resultaat = 0;
var nieuweSom = true;

function VoegGetalToe(e)
{
	if (e.target.tagName == 'TD')
	{
		somtekst = somtekst + e.target.innerText;
		document.getElementById("som").innerText = somtekst;
	}
	nieuweSom = false;
}

function VoegRekenFunctieToe(e)
{
	if (e.target.tagName == 'TD')
	{
		if(e.target.innerText != '=' && e.target.innerText != "Opnieuw")
		{
			somtekst = somtekst + ' ' + e.target.innerText + ' ';
		}

		document.getElementById("som").innerText = somtekst;

		if(e.target.innerText == "Opnieuw" || nieuweSom )
		{
			somtekst = "";
		}
	}
}

function ToonUitkomst()
{
	resultaat = eval(somtekst);
	if(somtekst == "") resultaat = "";
	document.getElementById("uitkomst").innerText = resultaat;
	nieuweSom = true;
}

document.getElementById("getallen").onclick = VoegGetalToe;
document.getElementById("functies").onclick = VoegRekenFunctieToe;
document.getElementById("bereken").onclick = ToonUitkomst;

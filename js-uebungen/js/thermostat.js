/*


Die Funktion ermittelt mit sen Eigabenwerten,
ob die Temperatur innerhalb der Vorgaben liegt

currTemp:  aktuelle temperatur
minTemp:  Mindesttemperatur
maxTemp: Maximaltemperatur

Rückgabewert (string): Text mit der Meldung innerhalb der Vorgagen 





*/


function termo(currTemp, minTemp, maxTemp)  {
    if (currTemp >= minTemp && currTemp <= maxTemp)  {
        // temperatur OK
        //schlteDieHeizungAus();
        return 'OK'
    } else if (currTemp > maxTemp )  {
        // temperatur zu hoch
        // schalteHeizungAus();
        // schalteKlimaEin () ;
        return'HOT'


    } else if ( currTemp < minTemp) {
        // temperatur zu niedrig
        // schalteKlimaAus();
        // schalteHeizungEin();
        return 'COLD'
    }
}


var ganzZahl ;
//console.log(ganzZahl);

ganzZahl = 5;
//console.log(ganzZahl);

ganzZahl= 5 + 4;
//console.log(ganzZahl);



ganzZahl= 4 + ganzZahl * 2.5;
//console.log(ganzZahl);

var aufsteigendeZahl = 1;
//console.log(aufsteigendeZahl);
aufsteigendeZahl++;
//console.log(aufsteigendeZahl);


var absteigendeZahl = 0 ;
absteigendeZahl--;
//console.log(absteigendeZahl);

var zahlAlsText = "3";
//console.log(zahlAlsText);
//console.log(typeof zahlAlsText);

zahlAlsText = parseInt(zahlAlsText);
//console.log(zahlAlsText);
//console.log(typeof zahlAlsText);

//console.log(zahlAlsText * 3);

var nuber1 = "2";
var nuber2 = "7";

//console.log(nuber1 * nuber2);

var spruch = 'Hallo,';
//console.log(spruch);

spruch = spruch + 'Welt';
//console.log(spruch);

spruch = '-='+ spruch +'-=' ;
//console.log(spruch)

var inputFeld1 = '<input type="text" value="test" />' ;
var inputFeld2 ="<input type=\"text\" value=\"test\">" ;
//console.log(inputFeld1, inputFeld2);

//document.write('hallo');
//document.write('<br> ich bin eine neue Codee-Zeile');

var farben = [
    'rot' ,
    'gelb' ,
    'grün'
];
//console.log(farben[2]);

var farbenAlsText = farben.join(' / ');
//console.log(farbenAlsText);



var katalog =[
    'Inhaltsverzeichnis' ,
    [ 'Absatz 1' , 'Absatz 2'] ,
    'Kapitel 2'
];

//console.log(katalog );
katalog.pop(); // letzte stelle wird gelöscht
katalog.push('Kapitel 5'); // an die letzte Stelle wird der neue Eintrag hinzugefügt
//console.log(katalog);

var neuesArray = [];
//console.log(neuesArray[0]);

katalog[0] = katalog[0] + 'NEU' ;
//console.log[katalog];

var speicherplatzzugriffsname = 'groesse' ;

var ich = {
     vorname: 'Manuel' ,
    nachname: 'obermoser' ,
    groesse: '180cm' ,
    alter: 33,

    kopf:{
        augen: 'braun-grün' ,
        haare: 'dunkelbraun'
    }
    
};

//console.log('Hallo, ich bin ' + ich.vorname + '!');
//console.log('Aktuell bin ich ' + ich.alter + ' Jahre alt');
//console.log('Meine Augen haben die Farbe ' + ich.kopf.augen + '');
//console.log(ich[speicherplatzzugriffsname]);

const USER_NAME = 'manuel'
console.log(USER_NAME);

let example1 ='hui!';

{
    let example1 = 'jump!';


}
console.log(example1);







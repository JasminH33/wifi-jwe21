let userNameFromDataBase ='Roland' ;


function sayMyName(name) {

    if(checkMyInput(name) == true) {
    console.log('your name is ' + name);
    }

}


sayMyName ('Jasmin');
sayMyName('Thomas');
sayMyName(userNameFromDataBase);

function checkMyInput(input) {
    if( typeof input == 'string' ) {
        //console.log('yes it is a string') ;
        return true;
    }  else {
       // console.log('Your input is not a Name (or a String)')
       return false;
    }
}

let ergebnisMeinerFunktion = checkMyInput ('Markus');
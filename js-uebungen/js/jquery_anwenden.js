//$('body').html('<div id="neues-js-element"></div>');

 //document.getElementsByTagName('body').innerHTML = 'div id="neues-js-element"></div>';
console.log('die seite ist geladen')


$('#calc').click(
    function()  {
      console.log('button clicked');

      


      let eingabe = $('#input').val();
      let result = eval(eingabe);

      

      $('#result').val(result);


    }
    );
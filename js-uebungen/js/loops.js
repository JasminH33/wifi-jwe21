

let namen = [
    'Robert',
    'Jasmin',
    'Ulvi',
    'Florian'
    
];





for (let i = 0; i < 3; i++) {
   // console.log('hey: ' + i);

   let html ='<img src="https://placehold.it/300x200?text='  + namen[i] + '" class="bild- '+i+ '">';
   //console.log(html);

  // document.getElementById('gallery').innerHTML += html;
    
}

namen.forEach(elm => {
   console.log(elm);

   let html = '<img src="https://placehold.it/300x200?text=' + elm + '">';

   document.getElementById('gallery').innerHTML += html;


});
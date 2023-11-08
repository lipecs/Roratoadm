$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});


// Não colocar dentro da outra função, o encapsulamento irá impedir funcionamento!!
function topFunction(){
    
    document.body.scrollTop = 0; // Chrome, Safari, Opera.
    document.documentElement.scrollTop = 0; // IE e Firefox.
      
  }
/* add data-state class to parent element when a fragment is visible */
Reveal.on( 'fragmentshown', function( event ) { 
    var newClass = event.fragment.getAttribute( 'data-state' );
    if(newClass) { 
        event.fragment.parentNode.classList.add(newClass);
    }
    
    /* specifics for this presentation */
    if (newClass == 'dark') { 
      //var target_frame = document.getElementById('dark_mode');
      //target_frame.contentWindow.document.body.classList.add('dark');
    }  

} );
Reveal.on( 'fragmenthidden', function( event ) {
    var newClass = event.fragment.getAttribute( 'data-state' );
    if(newClass) { 
        event.fragment.parentNode.classList.remove(newClass);
    }
    /* specifics for this presentation */
    if (newClass == 'dark') { 
      var target_frame = document.getElementById('dark_mode');
      target_frame.contentWindow.document.body.classList.remove('dark');
    } 

} );


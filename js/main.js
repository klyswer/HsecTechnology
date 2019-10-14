(function($) {

// Dropdown in hover jquery
    // $('body').on('mouseover mouseout', '.dropdown', function(e) {
    //     $(e.target).dropdown('toggle');
    // });
    $(document).on('ready', function() { 
        $("btn_1").hover(
            function() {
                alert("llegue")
                $("img_btn_1").addClass("d-block");}
            // }, function() {
            //     $( this ).find( "span" ).last().remove();
            //   }
        );
        // $( "btn_1.fade" ).hover(function() {
        //     $( this ).fadeOut( 100 );
        //     $( this ).fadeIn( 500 );
        //   });
            
    });      
        
})(jQuery);
/* add swipe to product image in product page*/
    if( $(".product-cover").length > 0  ) {
	    var zoom_element =  document.getElementById('zoom_product');
	    var old_touches = [];

	    $(zoom_element).attr('img_index', 0);

	    zoom_element.addEventListener("touchstart",  function(evt){
			$('.product-cover').addClass('swipestart');
	    }, false);


	   	zoom_element.addEventListener('touchmove', function(evt){
	        evt.preventDefault() // prevent scrolling when inside DIV
	        var touches = evt.changedTouches;

			if( old_touches.length < 2 ) {
				old_touches.push( touches[0].screenX );
			}

	    }, false);

	    zoom_element.addEventListener("touchend", function(evt){
	    	var index_img = $(this).attr('img_index');
	    	var nr_elements = $("#thumb-gallery .thumb-container").length;
    		if ( old_touches[0] > old_touches[1] ) {
    			console.log("click stanga");
    			$('.slick-next').trigger('click');

    			if(index_img >= 0 && index_img < nr_elements-1 ) {
					index_img++;
					$('#thumb-gallery .thumb-container[data-slick-index="'+index_img+'"] img').trigger('click');
					$('#zoom_product').attr('img_index', index_img);

    			}
    		} else if ( old_touches[0] < old_touches[1] ) {
    			console.log("click dreapta");
    			$('.slick-prev').trigger('click');
    			if(index_img >= 1) {
					index_img--;
					$('#thumb-gallery .thumb-container[data-slick-index="'+index_img+'"] img').trigger('click');
					$('#zoom_product').attr('img_index', index_img);

    			}
    		}
    		old_touches.length = 0;

    		$('.product-cover').removeClass('swipestart');

	    }, false);


    }

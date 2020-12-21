


$('#cursorNext').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller');
       		    const itemWidth = document.getElementById('block').clientWidth;

            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
            	
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });

$('#cursorPrev').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller');
       		    const itemWidth = document.getElementById('block').clientWidth;
            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });

$('#cursorNext2').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller2');
       		    const itemWidth = document.getElementById('block2').clientWidth;

            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
            	
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });

$('#cursorPrev2').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller2');
       		    const itemWidth = document.getElementById('block2').clientWidth;
            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });

$('#cursorNext3').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller3');
       		    const itemWidth = document.getElementById('block3').clientWidth;

            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
            	
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });

$('#cursorPrev3').click(function scrollToNextItem() {
				const scroller = document.getElementById('scroller3');
       		    const itemWidth = document.getElementById('block3').clientWidth;
            if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
        });


      




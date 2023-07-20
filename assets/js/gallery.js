(function($) {


// Gallery.
$('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-popup',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [1,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Tori Rodrigues</small>';
        }
    },
    zoom: {
        enabled: true,
        duration:600,
        easing:'ease'
    }
});

})(jQuery);
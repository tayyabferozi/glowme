(function ($) {
    'use strict';

    $(function () {

        $(window).on('resize', function(){
            $('.glowme_m3_services .lakit-bannerlist__link .lakit-bannerlist__desc, .glowme_m3_services .lakit-bannerlist__link .lakit-bannerlist__btn_wrap').removeAttr('style')
        });

        $('.glowme_m3_services .lakit-bannerlist__link')
            .mouseenter( function( evt ){
                $('.lakit-bannerlist__desc', $(this)).stop().slideDown(300);
                $('.lakit-bannerlist__btn_wrap', $(this)).stop().slideDown(300);
            })
            .mouseleave( function( evt ){
                $('.lakit-bannerlist__desc', $(this)).stop().slideUp(200);
                $('.lakit-bannerlist__btn_wrap', $(this)).stop().slideUp(200);
            });
    });
})(jQuery);
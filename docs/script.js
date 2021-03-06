jQuery(function () {
    const datepicker = $('.datepicker');
    if (datepicker && typeof daterangepicker === 'function') {
        datepicker.daterangepicker();
    }
    $('.btn-plus, .btn-minus').on('click', function (e) {
        const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
        const input = $(e.target).parent().find('input');
        if (input.is('input')) {
            input[0][isNegative ? 'stepDown' : 'stepUp']();
        }
    });
});

jQuery(function () {
    if (typeof $.prototype.slick !== 'function') { return }
    const related = $('.product-related .product-list');
    if (related) {
        const relatedOptions = {
            slidesToShow: 5,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 4 } },
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } }
            ]
        };
        related.on('init', function (event, slick) {
            var height = slick.$slider.find('.product-thumbnail').outerHeight();
            slick.$prevArrow.css({ top: height / 2 - slick.$prevArrow.outerHeight() / 2});
            slick.$nextArrow.css({ top: height / 2 - slick.$nextArrow.outerHeight() / 2});
            console.log(height, slick.$prevArrow.outerHeight());
        });
        related.slick(relatedOptions);
    }
    const thumnails = $('.product-detail .thumbnail-list');
    if (thumnails) {
        const mainThumbnail = $('.main-thumbnail');
        const thumnailOptions = {
            vertical: true,
            slidesToShow: 5,
            responsive: [
                { breakpoint: 768, settings: { vertical: false } }
            ]
        }
        thumnails.on('init beforeChange', function (event, slick, currentSlide, nextSlide) {
            var src = slick.$slides[nextSlide ?? 0].src;
            var dataSrc = slick.$slides[nextSlide ?? 0].dataset.src;
            mainThumbnail.attr({ src: src, 'data-src': dataSrc });
        });
        thumnails.on('init', function (event, slick) {
            var height = slick.$slider.height();
            mainThumbnail.height(height);
            $(this).find('.img-thumbnail').each(function () {
                $(this).on('click', function () {
                    slick.slickGoTo(this.dataset.slickIndex);
                });
            });
        });
        thumnails.slick(thumnailOptions);
    }
});

jQuery(function () {
    const toggleSearch = $('.toggle-search');
    const headerSearchForm = $('.header-search');
    toggleSearch.on('click', function (e) {
        e.preventDefault();
        headerSearchForm.toggleClass('toggled');
    });
    $(window).on('resize', function () {
        headerSearchForm.removeClass('toggled');
    })
})

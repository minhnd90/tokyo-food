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
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        related.slick(relatedOptions);
    }
});

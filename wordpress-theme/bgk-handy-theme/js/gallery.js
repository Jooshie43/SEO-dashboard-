/**
 * BGK Handy Services Theme - Gallery JavaScript
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Gallery lightbox
        $('.gallery-item').on('click', function() {
            const image = $(this).find('.gallery-image').html();
            const title = $(this).find('h3').text();
            const description = $(this).find('p').text();
            
            openLightbox(image, title, description);
        });
        
        function openLightbox(image, title, description) {
            const lightbox = $('<div class="lightbox">');
            lightbox.html(`
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <div class="lightbox-image">${image}</div>
                    <div class="lightbox-info">
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </div>
                </div>
            `);
            
            $('body').append(lightbox);
            lightbox.addClass('active');
            
            lightbox.find('.lightbox-close').on('click', function() {
                lightbox.removeClass('active');
                setTimeout(function() {
                    lightbox.remove();
                }, 300);
            });
            
            lightbox.on('click', function(e) {
                if (e.target === this) {
                    lightbox.removeClass('active');
                    setTimeout(function() {
                        lightbox.remove();
                    }, 300);
                }
            });
        }
        
        // Image filtering
        $('.filter-btn').on('click', function() {
            const filter = $(this).data('filter');
            
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
            
            if (filter === 'all') {
                $('.gallery-item').fadeIn();
            } else {
                $('.gallery-item').fadeOut();
                $('.gallery-item[data-category="' + filter + '"]').fadeIn();
            }
        });
    });
})(jQuery);
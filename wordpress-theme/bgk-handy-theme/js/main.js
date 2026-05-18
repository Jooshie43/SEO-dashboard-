/**
 * BGK Handy Services Theme - Main JavaScript
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Smooth scroll to sections
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            if(target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
        });
        
        // Mobile menu toggle
        const menuToggle = $('.menu-toggle');
        const navMenu = $('.nav-menu');
        
        menuToggle.on('click', function() {
            navMenu.toggleClass('active');
            $(this).toggleClass('active');
        });
        
        // Close mobile menu on link click
        navMenu.find('a').on('click', function() {
            navMenu.removeClass('active');
            menuToggle.removeClass('active');
        });
        
        // Add scroll effect to header
        $(window).on('scroll', function() {
            const header = $('.site-header');
            if ($(window).scrollTop() > 100) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        });
        
        // Lazy loading images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
        
        // Form submission
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();
            const form = $(this);
            const submitBtn = form.find('button[type="submit"]');
            
            $.ajax({
                type: 'POST',
                url: bgkTheme.ajaxUrl,
                data: form.serialize(),
                beforeSend: function() {
                    submitBtn.prop('disabled', true).text('Sending...');
                },
                success: function(response) {
                    if (response.success) {
                        form.html('<div class="success-message">Thank you! We\'ll contact you shortly.</div>');
                    } else {
                        alert('An error occurred. Please try again.');
                        submitBtn.prop('disabled', false).text('Send');
                    }
                },
                error: function() {
                    alert('An error occurred. Please try again.');
                    submitBtn.prop('disabled', false).text('Send');
                }
            });
        });
    });
})(jQuery);
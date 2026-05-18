<?php
/**
 * Header Template
 * BGK Handy Services Theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional roofing, handyman, and maintenance services in Lima, Ohio. 24/7 emergency repairs. Licensed & insured.">
    <meta name="keywords" content="roofing, handyman, plumbing, repairs, Lima Ohio, emergency services">
    <link rel="canonical" href="<?php echo esc_url(home_url()); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div class="emergency-banner">
    📞 24/7 Emergency Roof Repairs Available - Call Now! (567) 284-8733
</div>

<header class="site-header">
    <div class="header-container">
        <div class="logo-area">
            <?php if (has_custom_logo()) : ?>
                <div class="site-logo">
                    <?php the_custom_logo(); ?>
                </div>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url()); ?>" class="logo">
                    BGK <span>Handy Services</span>
                </a>
            <?php endif; ?>
        </div>
        
        <nav class="site-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'fallback_cb' => 'wp_page_menu',
                'menu_class' => 'nav-menu',
                'depth' => 3,
            ));
            ?>
        </nav>
        
        <div class="contact-info">
            <a href="tel:+1567284873" class="phone-link">📞 (567) 284-8733</a>
            <a href="https://wa.me/1567284873" class="whatsapp-link">💬 WhatsApp</a>
        </div>
    </div>
</header>
<?php
/**
 * Homepage Template
 * BGK Handy Services Theme
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1><?php esc_html_e('Trusted Home Repairs', 'bgk-handy-theme'); ?></h1>
        <p class="tagline"><?php esc_html_e('Roofing • Handyman • Plumbing • Maintenance', 'bgk-handy-theme'); ?></p>
        <div class="hero-buttons">
            <a href="tel:+1567284873" class="cta-button"><?php esc_html_e('Call Now: (567) 284-8733', 'bgk-handy-theme'); ?></a>
            <a href="#services" class="cta-button" style="border-color: var(--primary-color); background-color: transparent;"><?php esc_html_e('Learn More', 'bgk-handy-theme'); ?></a>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="services-section">
    <div class="container">
        <h2 class="section-title"><?php esc_html_e('Our Services', 'bgk-handy-theme'); ?></h2>
        <p class="section-subtitle"><?php esc_html_e('Professional home repair and maintenance services available 24/7', 'bgk-handy-theme'); ?></p>
        
        <div class="services-grid">
            <?php
            $services = array(
                array(
                    'icon' => '🏠',
                    'title' => __('Roofing', 'bgk-handy-theme'),
                    'description' => __('Roof repair, replacement, and inspection services. Emergency repairs available 24/7.', 'bgk-handy-theme'),
                    'link' => home_url('/services/roofing'),
                ),
                array(
                    'icon' => '🔨',
                    'title' => __('Handyman Services', 'bgk-handy-theme'),
                    'description' => __('General repairs, drywall, painting, flooring, and more. Professional and reliable.', 'bgk-handy-theme'),
                    'link' => home_url('/services/handyman'),
                ),
                array(
                    'icon' => '🚰',
                    'title' => __('Plumbing Repairs', 'bgk-handy-theme'),
                    'description' => __('Professional plumbing repairs, replacements, and installations. Emergency service available.', 'bgk-handy-theme'),
                    'link' => home_url('/services/plumbing'),
                ),
            );
            
            foreach ($services as $service) {
                ?>
                <div class="service-card">
                    <div class="service-image"><?php echo $service['icon']; ?></div>
                    <div class="service-content">
                        <h3><?php echo $service['title']; ?></h3>
                        <p><?php echo $service['description']; ?></p>
                        <a href="<?php echo esc_url($service['link']); ?>" class="service-link"><?php esc_html_e('Learn More →', 'bgk-handy-theme'); ?></a>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="gallery-section">
    <div class="container">
        <h2 class="section-title"><?php esc_html_e('Our Work', 'bgk-handy-theme'); ?></h2>
        <p class="section-subtitle"><?php esc_html_e('Before and after photos of our completed projects', 'bgk-handy-theme'); ?></p>
        
        <div class="gallery-grid">
            <?php
            // Get portfolio items
            $portfolio = new WP_Query(array(
                'post_type' => 'portfolio',
                'posts_per_page' => 6,
            ));
            
            if ($portfolio->have_posts()) {
                while ($portfolio->have_posts()) {
                    $portfolio->the_post();
                    ?>
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <?php
                            if (has_post_thumbnail()) {
                                the_post_thumbnail('medium');
                            } else {
                                echo '📷';
                            }
                            ?>
                        </div>
                        <div class="gallery-overlay">
                            <div>
                                <h3><?php the_title(); ?></h3>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 10); ?></p>
                            </div>
                        </div>
                    </div>
                    <?php
                }
            }
            wp_reset_postdata();
            ?>
        </div>
        
        <div class="text-center mt-3">
            <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="cta-button"><?php esc_html_e('View All Projects', 'bgk-handy-theme'); ?></a>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-us-section" style="padding: 4rem 2rem; background-color: white;">
    <div class="container">
        <h2 class="section-title"><?php esc_html_e('Why Choose BGK Handy Services?', 'bgk-handy-theme'); ?></h2>
        
        <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⭐</div>
                <h3><?php esc_html_e('24/7 Emergency Service', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('Available anytime you need help with roof emergencies and urgent repairs.', 'bgk-handy-theme'); ?></p>
            </div>
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                <h3><?php esc_html_e('BBB Certified', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('Licensed, insured, and certified by the Better Business Bureau.', 'bgk-handy-theme'); ?></p>
            </div>
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
                <h3><?php esc_html_e('Free Estimates', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('Get a detailed quote before work begins, no hidden charges.', 'bgk-handy-theme'); ?></p>
            </div>
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🛡️</div>
                <h3><?php esc_html_e('Warranty Guarantee', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('All work backed by our satisfaction guarantee.', 'bgk-handy-theme'); ?></p>
            </div>
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
                <h3><?php esc_html_e('Trusted Since 2008', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('Over 15 years of experience serving Lima, Ohio.', 'bgk-handy-theme'); ?></p>
            </div>
            <div class="feature">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
                <h3><?php esc_html_e('Quick Response', 'bgk-handy-theme'); ?></h3>
                <p><?php esc_html_e('Fast, professional service with attention to detail.', 'bgk-handy-theme'); ?></p>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>
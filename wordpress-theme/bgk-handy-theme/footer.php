<?php
/**
 * Footer Template
 * BGK Handy Services Theme
 */
?>

<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h4><?php esc_html_e('About BGK Handy', 'bgk-handy-theme'); ?></h4>
                <p>Professional home repair and maintenance services serving Lima, Ohio and surrounding areas since 2008. We're BBB Certified and available 24/7 for emergencies.</p>
                <div class="social-links">
                    <a href="https://facebook.com/bgkhandyservices" target="_blank" rel="noopener">Facebook</a>
                    <a href="https://instagram.com/bgkhandyservices" target="_blank" rel="noopener">Instagram</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4><?php esc_html_e('Services', 'bgk-handy-theme'); ?></h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/services/roofing')); ?>"><?php esc_html_e('Roofing', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/services/handyman')); ?>"><?php esc_html_e('Handyman', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/services/plumbing')); ?>"><?php esc_html_e('Plumbing', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/services/maintenance')); ?>"><?php esc_html_e('Maintenance', 'bgk-handy-theme'); ?></a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4><?php esc_html_e('Service Areas', 'bgk-handy-theme'); ?></h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/service-areas/lima')); ?>"><?php esc_html_e('Lima, OH', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/service-areas/north-lima')); ?>"><?php esc_html_e('North Lima, OH', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/service-areas/shawnee')); ?>"><?php esc_html_e('Shawnee, OH', 'bgk-handy-theme'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/service-areas/elida')); ?>"><?php esc_html_e('Elida, OH', 'bgk-handy-theme'); ?></a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4><?php esc_html_e('Contact', 'bgk-handy-theme'); ?></h4>
                <ul>
                    <li><a href="tel:+1567284873">📞 (567) 284-8733</a></li>
                    <li><a href="mailto:info@bgkhandyservices.com">✉️ info@bgkhandyservices.com</a></li>
                    <li><?php esc_html_e('Lima, Ohio', 'bgk-handy-theme'); ?></li>
                    <li><strong><?php esc_html_e('Trusted Since 2008', 'bgk-handy-theme'); ?></strong></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> BGK Handy Services. All rights reserved. | <a href="<?php echo esc_url(home_url('/privacy')); ?>"><?php esc_html_e('Privacy Policy', 'bgk-handy-theme'); ?></a></p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
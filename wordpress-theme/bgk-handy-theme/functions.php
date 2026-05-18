<?php
/**
 * BGK Handy Services Theme Functions
 * AI-Enhanced WordPress Theme with Contextual Backlinks
 */

define('BGK_THEME_VERSION', '1.0.0');

// Theme Setup
function bgk_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('responsive-embeds');
    
    // Register menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bgk-handy-theme'),
        'footer' => __('Footer Menu', 'bgk-handy-theme'),
    ));
}
add_action('after_setup_theme', 'bgk_theme_setup');

// Enqueue styles and scripts
function bgk_enqueue_assets() {
    wp_enqueue_style('bgk-style', get_stylesheet_uri(), array(), BGK_THEME_VERSION);
    wp_enqueue_style('bgk-responsive', get_template_directory_uri() . '/css/responsive.css', array(), BGK_THEME_VERSION);
    wp_enqueue_style('bgk-ai-compat', get_template_directory_uri() . '/css/ai-compatibility.css', array(), BGK_THEME_VERSION);
    
    wp_enqueue_script('bgk-main', get_template_directory_uri() . '/js/main.js', array('jquery'), BGK_THEME_VERSION, true);
    wp_enqueue_script('bgk-gallery', get_template_directory_uri() . '/js/gallery.js', array('jquery'), BGK_THEME_VERSION, true);
}
add_action('wp_enqueue_scripts', 'bgk_enqueue_assets');

// Register Custom Post Types
function bgk_register_post_types() {
    // Portfolio/Projects
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('Portfolio', 'bgk-handy-theme'),
            'singular_name' => __('Project', 'bgk-handy-theme'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-gallery',
    ));
    
    // Services
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'bgk-handy-theme'),
            'singular_name' => __('Service', 'bgk-handy-theme'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-wrench',
    ));
    
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'bgk-handy-theme'),
            'singular_name' => __('Testimonial', 'bgk-handy-theme'),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));
}
add_action('init', 'bgk_register_post_types');

// Register Custom Taxonomies
function bgk_register_taxonomies() {
    // Service Categories
    register_taxonomy('service_category', 'service', array(
        'labels' => array(
            'name' => __('Service Categories', 'bgk-handy-theme'),
            'singular_name' => __('Category', 'bgk-handy-theme'),
        ),
        'hierarchical' => true,
        'show_ui' => true,
    ));
    
    // Project Categories
    register_taxonomy('project_category', 'portfolio', array(
        'labels' => array(
            'name' => __('Project Categories', 'bgk-handy-theme'),
            'singular_name' => __('Category', 'bgk-handy-theme'),
        ),
        'hierarchical' => true,
        'show_ui' => true,
    ));
}
add_action('init', 'bgk_register_taxonomies');

// Add Schema Markup for LocalBusiness
function bgk_add_schema_markup() {
    if (!is_front_page()) return;
    
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'LocalBusiness',
        'name' => 'BGK Handy Services',
        'url' => home_url(),
        'telephone' => '(567) 284-8733',
        'address' => array(
            '@type' => 'PostalAddress',
            'streetAddress' => 'Lima, Ohio',
            'addressLocality' => 'Lima',
            'addressRegion' => 'OH',
            'postalCode' => '45801',
        ),
        'image' => get_template_directory_uri() . '/images/logo.png',
        'sameAs' => array(
            'https://www.facebook.com/bgkhandyservices',
            'https://www.instagram.com/bgkhandyservices',
        ),
        'priceRange' => '$$',
        'description' => 'Professional roofing, handyman, and maintenance services in Lima, Ohio. 24/7 emergency repairs available. Licensed & insured.',
    );
    
    echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
}
add_action('wp_head', 'bgk_add_schema_markup');

// Add Image SEO Optimization
function bgk_optimize_image_seo($attachment_id) {
    $image = get_post($attachment_id);
    $alt_text = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
    
    if (empty($alt_text)) {
        $title = get_the_title($attachment_id);
        update_post_meta($attachment_id, '_wp_attachment_image_alt', $title);
    }
}
add_action('add_attachment', 'bgk_optimize_image_seo');

// Backlink Management
function bgk_manage_backlinks($link_output, $link) {
    // Define allowed external domains (authority sites)
    $authority_domains = array(
        'bbb.org',
        'yelp.com',
        'google.com',
        'facebook.com',
    );
    
    // Check if link is external
    if (strpos($link['url'], home_url()) === false) {
        $is_authority = false;
        foreach ($authority_domains as $domain) {
            if (strpos($link['url'], $domain) !== false) {
                $is_authority = true;
                break;
            }
        }
        
        // Add nofollow to non-authority external links
        if (!$is_authority) {
            $link_output = str_replace('href=', 'rel="nofollow" href=', $link_output);
        }
    }
    
    return $link_output;
}
add_filter('wp_list_bookmarks', 'bgk_manage_backlinks');

// Add Open Graph Tags for Social Sharing
function bgk_add_og_tags() {
    if (is_singular()) {
        echo '<meta property="og:title" content="' . get_the_title() . '" />';
        echo '<meta property="og:description" content="' . get_the_excerpt() . '" />';
        echo '<meta property="og:url" content="' . get_permalink() . '" />';
        
        if (has_post_thumbnail()) {
            $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
            echo '<meta property="og:image" content="' . $image[0] . '" />';
        }
    }
}
add_action('wp_head', 'bgk_add_og_tags');

// Add Twitter Card Tags
function bgk_add_twitter_tags() {
    if (is_singular()) {
        echo '<meta name="twitter:card" content="summary_large_image" />';
        echo '<meta name="twitter:title" content="' . get_the_title() . '" />';
        echo '<meta name="twitter:description" content="' . get_the_excerpt() . '" />';
        
        if (has_post_thumbnail()) {
            $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
            echo '<meta name="twitter:image" content="' . $image[0] . '" />';
        }
    }
}
add_action('wp_head', 'bgk_add_twitter_tags');

// Add Related Posts for Contextual Links
function bgk_get_related_posts($post_id, $limit = 3) {
    $categories = get_the_category($post_id);
    $category_ids = array();
    
    foreach ($categories as $cat) {
        $category_ids[] = $cat->term_id;
    }
    
    $args = array(
        'category__in' => $category_ids,
        'post__not_in' => array($post_id),
        'posts_per_page' => $limit,
        'orderby' => 'date',
        'order' => 'DESC',
    );
    
    return new WP_Query($args);
}

// Custom excerpt length
function bgk_custom_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'bgk_custom_excerpt_length');

// Custom excerpt more
function bgk_custom_excerpt_more($more) {
    return ' ... <a href="' . get_permalink() . '" class="service-link">Read More →</a>';
}
add_filter('excerpt_more', 'bgk_custom_excerpt_more');

// Remove WordPress version info for security
remove_action('wp_head', 'wp_generator');

// Add custom CSS class to body
function bgk_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'bgk_body_classes');

// Disable comments for services and portfolio
function bgk_disable_post_type_comments() {
    $post_types = array('service', 'portfolio');
    foreach ($post_types as $post_type) {
        remove_post_type_support($post_type, 'comments');
    }
}
add_action('init', 'bgk_disable_post_type_comments');

?>
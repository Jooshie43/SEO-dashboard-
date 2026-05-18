<?php
/**
 * Main Template
 * BGK Handy Services Theme
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <?php
        if (have_posts()) {
            if (is_home() || is_archive()) {
                echo '<h1 class="section-title">' . get_the_archive_title() . '</h1>';
            }
            ?>
            <div class="posts-grid">
                <?php
                while (have_posts()) {
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <?php the_post_thumbnail('medium'); ?>
                            </div>
                        <?php endif; ?>
                        <div class="post-content">
                            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            <div class="post-meta">
                                <span class="post-date"><?php echo get_the_date(); ?></span>
                                <span class="post-author">By <?php the_author(); ?></span>
                            </div>
                            <div class="post-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="service-link">Read More →</a>
                        </div>
                    </article>
                    <?php
                }
                ?>
            </div>
            <?php
            // Pagination
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('← Previous', 'bgk-handy-theme'),
                'next_text' => __('Next →', 'bgk-handy-theme'),
            ));
        } else {
            ?>
            <div class="no-posts">
                <h2><?php esc_html_e('No posts found', 'bgk-handy-theme'); ?></h2>
                <p><?php esc_html_e('Sorry, no posts match your criteria.', 'bgk-handy-theme'); ?></p>
            </div>
            <?php
        }
        ?>
    </div>
</main>

<?php
get_footer();
?>
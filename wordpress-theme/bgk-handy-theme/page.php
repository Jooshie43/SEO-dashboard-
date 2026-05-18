<?php
/**
 * Page Template
 * BGK Handy Services Theme
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <?php
        while (have_posts()) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('page-content'); ?>>
                <h1><?php the_title(); ?></h1>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="page-thumbnail">
                        <?php the_post_thumbnail('full'); ?>
                    </div>
                <?php endif; ?>
                
                <div class="page-body">
                    <?php the_content(); ?>
                </div>
                
                <?php
                // Related posts for contextual links
                if (is_singular('post')) {
                    $related = bgk_get_related_posts(get_the_ID());
                    if ($related->have_posts()) {
                        echo '<div class="related-posts">';
                        echo '<h3>Related Articles</h3>';
                        echo '<div class="related-grid">';
                        while ($related->have_posts()) {
                            $related->the_post();
                            echo '<div class="related-item">';
                            echo '<h4><a href="' . get_permalink() . '">' . get_the_title() . '</a></h4>';
                            echo '<p>' . wp_trim_words(get_the_excerpt(), 15) . '</p>';
                            echo '</div>';
                        }
                        echo '</div>';
                        echo '</div>';
                        wp_reset_postdata();
                    }
                }
                ?>
            </article>
            <?php
        }
        ?>
    </div>
</main>

<?php
get_footer();
?>
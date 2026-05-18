# BGK Handy Services WordPress Theme - Installation Guide

## Overview

This is a complete, production-ready WordPress theme for BGK Handy Services with:
- AI-enhanced content structure
- Schema.org microdata for search engines
- Contextual backlink management
- Service portfolio system
- Before/after gallery
- Mobile responsive design
- Local SEO optimization

## Installation Steps

### Step 1: Download the Theme

1. Download `bgk-handy-theme.zip` from GitHub
2. Extract the ZIP file on your computer

### Step 2: Install WordPress

If you don't have WordPress installed:

1. Go to dev.bgkhandyservices.com
2. Follow your hosting provider's WordPress installation steps
3. Complete the WordPress setup wizard

### Step 3: Upload Theme

**Option A: Via WordPress Admin**
1. Login to WordPress Dashboard
2. Go to **Appearance → Themes**
3. Click **Add New**
4. Click **Upload Theme**
5. Choose `bgk-handy-theme.zip`
6. Click **Install Now**
7. Click **Activate**

**Option B: Via FTP**
1. Extract the theme folder locally
2. Connect to your server via FTP
3. Upload to `/wp-content/themes/`
4. Go to WordPress admin → Appearance → Themes
5. Find "BGK Handy Services" and click **Activate**

### Step 4: Configure Theme

1. Go to **Appearance → Customize**
2. Configure:
   - Site Title: "BGK Handy Services"
   - Tagline: "Professional Home Repairs - Lima, Ohio"
   - Logo: Upload your logo
   - Colors: Adjust as needed

### Step 5: Set Up Navigation

1. Go to **Appearance → Menus**
2. Create a new menu: "Main Menu"
3. Add pages:
   - Home
   - Services
   - Portfolio
   - Blog
   - Contact
4. Set as "Primary Menu"

### Step 6: Create Content

**Create Service Pages:**
1. Go to **Services → Add New**
2. Create services:
   - Roofing Services
   - Handyman Services
   - Plumbing Repairs
   - Home Maintenance
3. Add descriptions, images, and pricing

**Create Portfolio Items:**
1. Go to **Portfolio → Add New**
2. Upload before/after images
3. Add project descriptions
4. Categorize by service type

**Create Blog Posts:**
1. Go to **Posts → Add New**
2. Create helpful guides and tips
3. Add internal links to services
4. Optimize for SEO

### Step 7: Configure Plugins

**Recommended Plugins:**

1. **Yoast SEO**
   - Install and activate
   - Configure for local SEO
   - Set focus keywords

2. **WP Super Cache**
   - Install and activate
   - Enable caching for performance

3. **Wordfence Security**
   - Install and activate
   - Run security scan

4. **Google Analytics Dashboard**
   - Install and activate
   - Connect to Google Analytics

5. **Contact Form 7**
   - Install and activate
   - Create contact form
   - Add to contact page

### Step 8: Submit Sitemaps

**Google Search Console:**
1. Go to https://search.google.com/search-console/
2. Add property: dev.bgkhandyservices.com
3. Go to **Sitemaps**
4. Submit: `https://dev.bgkhandyservices.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmaster/
2. Add site: dev.bgkhandyservices.com
3. Go to **Sitemaps**
4. Submit: `https://dev.bgkhandyservices.com/sitemap.xml`

### Step 9: Add Business Information

1. Go to **Settings → General**
2. Add:
   - Business name
   - Phone number: (567) 284-8733
   - Address: Lima, Ohio
   - Business hours

2. Go to **Settings → Reading**
   - Set static homepage
   - Set posts page

### Step 10: Test & Launch

**Testing Checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation works on mobile
- [ ] Images display properly
- [ ] Contact form works
- [ ] Links are functional
- [ ] Schema markup is present (Check with Google Rich Results)
- [ ] Mobile responsive
- [ ] Performance is good (< 3 sec load time)

## Theme Features

### AI-Enhanced Content
- Semantic HTML5 structure
- Schema.org microdata
- Alt text on all images
- Proper heading hierarchy
- Entity recognition markup

### Services
- Service post type
- Service categories
- Pricing display
- Call-to-action buttons
- Image galleries

### Portfolio
- Before/after galleries
- Project categories
- Client testimonials
- Project descriptions
- Photography galleries

### Blog
- SEO-optimized posts
- Related posts
- Internal linking
- Author bios
- Social sharing

### Local SEO
- Local business schema
- Service area pages
- Local citations
- Google Maps integration
- Review system ready

## Customization

### Colors
Edit `style.css` CSS variables:
```css
:root {
  --primary-color: #d4a574;    /* Gold */
  --dark-color: #0f1419;       /* Dark */
  --accent-color: #e74c3c;     /* Red */
}
```

### Typography
Edit `style.css` font definitions:
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Layout
Create a child theme for modifications:
1. Create `/wp-content/themes/bgk-handy-theme-child/`
2. Create `style.css` with parent theme reference
3. Customize as needed

## Backlink Management

The theme includes built-in backlink management:

### Internal Links
- All internal links use dofollow by default
- Contextual linking between related content
- Automatic related posts

### External Links
- Authority links (BBB, Yelp, Google) use dofollow
- Other external links get nofollow
- Configurable in functions.php

## Performance Tips

1. **Image Optimization**
   - Use compressed images
   - Use WebP format
   - Add descriptive alt text

2. **Caching**
   - Enable WP Super Cache
   - Set 1 hour cache expiry
   - Exclude pages with forms

3. **Database**
   - Clean up revisions
   - Remove spam comments
   - Optimize database regularly

4. **CDN**
   - Use Cloudflare (free tier)
   - Enable image optimization
   - Set cache rules

## Support

**Contact Information:**
- Website: https://dev.bgkhandyservices.com
- Email: info@bgkhandyservices.com
- Phone: (567) 284-8733

**Documentation:**
- Theme files in theme folder
- WordPress codex: https://codex.wordpress.org/
- Yoast SEO guide: https://yoast.com/

## Troubleshooting

**Theme not activating:**
- Check PHP version (requires 5.6+)
- Disable all plugins
- Clear browser cache

**Images not showing:**
- Check image paths
- Verify file permissions
- Clear media cache

**Slow loading:**
- Enable caching plugin
- Compress images
- Remove unused plugins
- Use CDN

## Updates

Stay updated with the latest features and security patches:
1. Check theme updates regularly
2. Backup before updating
3. Test updates on staging first
4. Update plugins and WordPress core

---

**Version:** 1.0.0
**Last Updated:** May 18, 2026
**Developed for:** BGK Handy Services (dev.bgkhandyservices.com)
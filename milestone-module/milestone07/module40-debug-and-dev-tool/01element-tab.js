
// 40.1 Module Overview, Deb tool overview, settings, shortcut keys

// 40.2 Element tab, HTML event listener, accessibility list

/* 
    Ctrl + F = To search in one file 
    Ctrl + Shift + F = to search in multiple file
    
    CSS nested Selector (in console panel): | Ctrl + F = To search in one file 
    example: col-md-5 button

    Accessibility - MDN web docs (Link: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
    Website Accessibility Score | Measure page quality | Accessibility Checker:
    (Link: https://web.dev/measure/?gclid=CjwKCAiAprGRBhBgEiwANJEY7LQG364QYTLHTajnzrYTxc624aO9n_m5t1NaiJbOgYm5mAOP7zllahoCYKYQAvD_BwE)

    ----------------------------------------------------------------------------------------------------------------------------------

    # Top 10 Tips for Making Your Website Accessible (Link: https://webaccess.berkeley.edu/resources/tips/web-accessibility)

    Accessibility Checker Criteria:
        Performance:
          (Opportunities)
            1. Serve images in next-gen formats: Image formats like WebP and AVIF often provide better compression than PNG or JPEG, 
                which means faster downloads and less data consumption.
            2. Properly size images: Images that are appropriately-sized to save cellular data and improve load time.
            3. Eliminate render-blocking resources: Resources are blocking the first paint of your page. 
                Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles.
            4. Efficiently encode images: Optimized images load faster and consume less cellular data.
          (Diagnostics)
            5. Image elements do not have explicit width and height
            6. Serve static assets with an efficient cache policy: HTTP caching can speed up your page load time on repeat visits.
            7. First Contentful Paint: First Contentful Paint (FCP) is one of six metrics tracked in the Performance section of the Lighthouse report. 
                Each metric captures some aspect of page load speed.
                (Link: https://web.dev/first-contentful-paint/)
            7. Avoid chaining critical requests: Maximum critical path latency: 780 ms

        Accessibility:
            1. (Contrast) Background and foreground colors do not have a sufficient contrast ratio.
            2. (Names and labels) Links do not have a discernible name: Link text (and alternate text for images, when used as links) 
                that is discernible, unique, and focusable improves the navigation experience for screen reader users.
            3. (Navigation) Heading elements are not in a sequentially-descending order: Properly ordered headings 
                that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand 
                when using assistive technologies.

        Best Practices:
            1. (User Experience) Displays images with incorrect aspect ratio: Image display dimensions should match natural aspect ratio.

        SEO:
            1. (Content Best Practices) Document does not have a meta description: Meta descriptions may be included in search results 
                to concisely summarize page content.
            2. (Mobile Friendly) Document doesn't use legible font sizes: Font sizes less than 12px are too small to be legible 
                and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px.

    -----------------------------------------------------------------------------------------------------------------------------------------

    Popular Site Building Platforms in 2022 (Link: https://websitesetup.org/wp-content/uploads/2021/04/CMS-Popularity-April-2021.jpg)
    Are there any good alternatives for WordPress?
        1. Wix is an easy-to-use website builder with a simple drag and drop interface, but it has a higher cost, 
            is not suitable for larger sites and it’s impossible to migrate your website out if the need should arise.
        2. Squarespace is a very aesthetically beautiful website builder which makes creating beautiful websites easy, 
            but it comes at a higher monthly cost and doesn’t have a function to migrate your website out.
        3. Drupal is a powerful platform that is popular with experienced coders and web developers, 
            but it has a high learning curve that makes it not the best option for beginners.
        4. Joomla is almost like WordPress and is a good tool for website building, 
            but it does require at least some basic understanding of how to write code to make things work the way that you want.
*/

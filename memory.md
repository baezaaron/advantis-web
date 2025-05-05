# Advantis Healthcare Website Project

## Project Overview
- Created a responsive, production-ready website for Advantis, a healthcare company
- Built using Next.js (with App Router) and Tailwind CSS
- Includes several pages: Home, About, Resources (with blog functionality), and Contact
- Features responsive design, contact forms with Formspree integration, and reCAPTCHA

## Components Created
- Navbar (with sticky navigation and mobile menu)
- Footer (with contact form and social links)
- Button (reusable component with variants)
- Hero (for homepage banner)
- ServiceCard (for displaying services)
- Testimonial (for client testimonials)
- Various icons

## Pages Created
- Home: Features hero section, mission statement, services, and testimonials
- About: Company information, values, team members, and additional testimonials
- Resources: Display only one static blog article ('Remote Patient Monitoring for FQHCs') and removed search and images to mimic vis-a-vis website design
- Individual blog posts: Dynamic routes for each blog post with content
- Contact: Contact form and company information
- Privacy Policy: Legal information about data handling
- Terms of Service: Legal terms for using the services
- 404 Not Found: Custom error page

## Data Structure
- Created a blog post data system in `src/data/blog-posts.ts`
- Implemented sample blog posts with markdown content
- Added functionality to fetch posts by slug for individual post pages

## Styling
- Implemented a color palette based on the Advantis logo (blues and neutrals)
- Created responsive layouts that work on all device sizes
- Added animations and transitions for interactive elements
- Used Tailwind CSS for styling with custom components

## Next Steps
- Replace placeholder images with actual company images
- Implement real content provided by the company
- Set up actual form submission endpoints
- Configure proper analytics tracking

## Chronological Summary of Key Changes and Design Iterations
1. **Initial Build & Image Error**: Encountered "Failed to construct 'Image'" with Next.js Image; created `CustomImage` component and updated `Navbar.tsx`/`Footer.tsx`, switched social icons to inline SVG.
2. **Static Export Configuration & Asset Errors**: Cleaned `.next`, configured `next.config.js` with `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`; added `serve` and `rimraf` scripts. Removed invalid `plugins` block with `disabled` property in `netlify.toml` to fix parsing errors.
3. **About Page Aesthetic Tweaks**: Iterated heading centering, boxed content, decorative shapes, icon-enhanced cards, Team section, gradient CTA; added then removed reusable `PageHeader` for simpler headers.
4. **Navbar Redesign**: Refactored for white background, centered links, logo left, "Contact Us" button right; removed scroll styles and mobile menu.
5. **Resources Page & Blog Listing**: Switched from full blog listing to static article view; added dynamic card grid filtered by slug; later reverted to single card view with title, date, "Read More".
6. **Blog Post Page**: Removed featured image placeholder; tightened header padding; simplified author display; switched content to Markdown with `renderMarkdown` helper.
7. **Hero & Mission Sections**: Tested low-opacity background image; ultimately placed caretaker image in two-column "Our Mission" section on homepage.
8. **Services Page**: Explored timeline, 3-col grid, then full-width service boxes; removed "Learn More" links, enlarged icons, increased text sizes, focused on three core services, added CTA.
9. **Icon Library**: Added `HeartPulseIcon` and replaced remote monitoring icons on home and services pages.
10. **Careers Page**: Created `/careers/page.tsx` with centered header, description, email link; adjusted padding below navbar.
11. **Contact Page & Footer Form**: In `src/app/contact/page.tsx` and `Footer.tsx`, imported Next.js `Script`, loaded reCAPTCHA API, and inserted `<div class="g-recaptcha" data-sitekey="…"></div>` below submit buttons. 
# Advantis Healthcare Website Project

## Complete Project Summary

1. Project Setup
   - Built a Next.js 14 App Router site with Tailwind CSS for Advantis Healthcare.
   - Pages include Home, About, Services, Resources (single Markdown blog), Careers, Contact, Privacy Policy, Terms of Service, custom 404, error, and fallback pages.
   - Reusable components: `Navbar`, `Footer`, `Button`, `Hero`, `ServiceCard`, icon components, `CustomImage` helper, and blog-post renderer.

2. Local Build & Export
   - Configured `next.config.js` for static export (`output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`).
   - Added scripts in `package.json`: `build`, `export` (`next build && next export`), `start` (`serve out`), and `clean`.

3. Netlify Deployment Issues
   - Initial Netlify build using `npm run build` only, so no static export ran; CSS/JS weren't in `out/`.
   - Changed `netlify.toml` to run `npm run export`, then switched back to `npm run build` once Next 14 deprecated `next export` CLI.
   - Encountered 301 loops and missing assets because Netlify's built-in Next.js plugin was intercepting `/_next` and `/images` paths.
   - Tried disabling the plugin via `netlify.toml` and env var `NETLIFY_NEXT_PLUGIN_DISABLED=1`, then removing custom redirects, then re-enabling the plugin with:
     ```toml
     [[plugins]]
       package = "@netlify/plugin-nextjs"
     ```
   - Ultimately recommended removing all custom redirects for `/images` and relying on the plugin alone, clearing caches, and verifying direct access to `/images/...png`.

4. Styling & Responsive Layout
   - Tailwind setup: `tailwind.config.js` content paths, `globals.css` with directives, custom utility classes (`container`, `section`, etc.).
   - Home Hero: gradient wave, text with gradient clip, responsive grid.
   - Mission Section: two-column layout with caretaker image; dynamically sized image wrapper.
   - Services: three core services with icon cards and anchor links.
   - Contact & Footer: Formspree forms with reCAPTCHA widget loaded client-side; social links and "Quick Links" columns.

5. Navbar/Logo Problems
   - Built a `Navbar` with logo on the left, links centered on desktop, and a hamburger menu on mobile.
   - Logo displayed locally but failed on live-domain tablet view and overflowed on desktop/mobile after size tweaks.
   - Tested multiple approaches: `CustomImage`, Next.js `Image`, plain `<img>`, static imports, responsive Tailwind heights, fixed wrapper sizes, flex properties, and redirects—none resolved the issue.
   - Recommended final pattern:
     ```jsx
     <img
       src="/images/Advantis-Logo-200.png"
       className="h-10 md:h-12 object-contain"
       alt="Advantis Logo"
     />
     ```
   - Place inside a static 60px-tall nav, remove conflicting redirects and plugin toggles, clear caches, and confirm `/images/...png` loads directly.

6. Footer Adjustments
   - Identified "Company" and "Resources" link columns in `Footer.tsx`.
   - User requested removing links: "Our Team", "FAQs", "Privacy Policy", and "Terms of Service" from the footer's Quick Links.

7. Favicon & Tab Title
   - Ensured `layout.tsx` metadata includes `<link rel="icon" href="/images/favicon-32x32.png">` and `<title>` via the `metadata` export.
   - Confirmed `public/images/favicon-32x32.png` exists and is served.

8. Next Steps
   - Simplify `netlify.toml` to only:
     ```toml
     [build]
       command = "npm run build"
       publish = "out"

     [[plugins]]
       package = "@netlify/plugin-nextjs"
     ```
   - Remove all other redirects and env flags, clear Netlify cache, and redeploy.
   - Apply the simple Navbar snippet above for predictable logo loading.
   - Edit `Footer.tsx` to delete the unwanted Quick Links entries.

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
- **Disable Netlify Next.js plugin** by adding `NETLIFY_NEXT_PLUGIN_DISABLED=1` as an environment variable in Netlify to ensure Tailwind CSS assets load correctly

## Chronological Summary of Key Changes and Design Iterations
1. **Initial Build & Image Error**: Encountered "Failed to construct 'Image'" with Next.js Image; created `CustomImage` component and updated `Navbar.tsx`/`Footer.tsx`, switched social icons to inline SVG.
2. **Static Export Configuration & Asset Errors**: Cleaned `.next`, configured `next.config.js` with `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`; added `serve` and `rimraf` scripts. Removed invalid `plugins` block with `disabled` property in `netlify.toml` to fix parsing errors. **Note**: Netlify's Next.js plugin still intercepts `/_next` assets; it must be uninstalled via the Netlify UI for Tailwind CSS to load correctly.
3. **About Page Aesthetic Tweaks**: Iterated heading centering, boxed content, decorative shapes, icon-enhanced cards, Team section, gradient CTA; added then removed reusable `PageHeader` for simpler headers.
4. **Navbar Redesign**: Refactored for white background, centered links, logo left, "Contact Us" button right; removed scroll styles and mobile menu.
5. **Resources Page & Blog Listing**: Switched from full blog listing to static article view; added dynamic card grid filtered by slug; later reverted to single card view with title, date, "Read More".
6. **Blog Post Page**: Removed featured image placeholder; tightened header padding; simplified author display; switched content to Markdown with `renderMarkdown` helper.
7. **Hero & Mission Sections**: Tested low-opacity background image; ultimately placed caretaker image in two-column "Our Mission" section on homepage.
8. **Services Page**: Explored timeline, 3-col grid, then full-width service boxes; removed "Learn More" links, enlarged icons, increased text sizes, focused on three core services, added CTA.
9. **Icon Library**: Added `HeartPulseIcon` and replaced remote monitoring icons on home and services pages.
10. **Careers Page**: Created `/careers/page.tsx` with centered header, description, email link; adjusted padding below navbar.
11. **Contact Page & Footer Form**: In `src/app/contact/page.tsx` and `Footer.tsx`, imported Next.js `Script`, loaded reCAPTCHA API, and inserted `<div class="g-recaptcha" data-sitekey="…"></div>` below submit buttons.

12. **Business Model Alignment (Phase 1 Complete)**: Advantis Care has shifted to a B2B extension-of-care platform model serving three partner types:
    - **FQHCs/CHCs**: Revenue share model (20% retention), full-service RPM/CCM operation, billing under FQHC umbrella
    - **Health Plans**: PMPM model, HEDIS/STAR ratings focus, risk adjustment, AWV support
    - **Health Systems/IPAs**: PMPM or episodic bundles, post-discharge stabilization, readmission reduction
    - Created comprehensive website update plan in `WEBSITE_UPDATE_PLAN.md` outlining:
      - Current state analysis
      - Required messaging changes (B2B focus, platform approach)
      - Service restructuring (integrated platform vs. individual services)
      - New partner-specific pages needed
      - Implementation phases
    - **Phase 1 Changes Completed (Homepage)**:
      - ✅ Hero: Updated to "Extend Your Care Without Adding Staff" with B2B value proposition
      - ✅ Mission: Emphasized platform approach and integrated services
      - ✅ Services: Restructured to show 4 integrated platform components (RPM+CCM, SDOH Navigation, Preventive Care, Data & Analytics)
      - ✅ Added "Who We Serve" section with three partner types (FQHCs/CHCs, Health Plans, Health Systems/IPAs)
      - ✅ "How It Works": Updated 4 steps to reflect B2B partnership model
      - ✅ FAQ: Updated 10 questions to address B2B concerns (pricing models, platform integration, SDOH services, data/analytics, etc.)
      - ✅ CTA: Updated to B2B-focused messaging
    - **About Page Updates**:
      - ✅ CTA Section: Updated to align with extension-of-care messaging, matching home page style ("Ready to extend your reach?" with B2B value proposition)
      - Removed B2C language ("patient seeking better care options")
      - Focused on healthcare organizations (FQHCs, health plans, health systems) as extension-of-care service provider
    - **Next Steps (Phase 2)**:
      - Partner-specific pages for FQHCs, Health Plans, Health Systems
      - Update About page with "Our Platform" and "Data Advantage" sections
      - Navigation updates to include partner-specific sections 
# Advantis Healthcare Website

A responsive, production-ready website for Advantis Healthcare, built using Next.js and Tailwind CSS.

## Features

- 📱 Fully responsive design for all device sizes
- 🧩 Component-based architecture with React/Next.js
- 🎨 Custom styling with Tailwind CSS
- 📝 Blog system with Markdown support
- 📬 Contact form with Formspree integration
- 🤖 reCAPTCHA integration for form security

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/baezaaron/advantis-web.git
   cd advantis-web
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
advantis-web/
├── public/              # Static assets
│   ├── images/          # Image files
│   ├── favicon-32x32.png
│   └── ...
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.tsx     # Home page
│   │   ├── about/       # About page
│   │   ├── resources/   # Resources/blog pages
│   │   ├── contact/     # Contact page
│   │   └── ...
│   ├── components/      # Reusable React components
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── data/            # Data files
│   │   └── blog-posts.ts # Blog post content
│   └── ...
└── ...
```

## Customization Guide

### Updating Content

#### Editing Page Content

Most content can be edited directly in the page files located in `src/app/` directory. Each page is a React component that returns JSX.

#### Changing Images

1. Replace image files in the `public/images/` directory
2. Make sure to keep the same filenames or update the references in the code

#### Updating Logo

1. Replace the logo file at `public/images/Advantis-Logo-200.png`
2. If the dimensions are different, update the width and height values in the `Navbar.tsx` and `Footer.tsx` components

### Adding Blog Posts

To add a new blog post:

1. Open `src/data/blog-posts.ts`
2. Add a new object to the `blogPosts` array following the existing pattern:

```typescript
{
  id: '4', // Increment the ID
  title: 'Your New Blog Post Title',
  slug: 'your-new-blog-post-slug', // URL-friendly version of the title
  date: 'January 1, 2023',
  excerpt: 'A brief summary of your blog post that will appear in listings.',
  category: 'Technology', // or another category
  author: {
    name: 'Author Name',
    title: 'Author Title'
  },
  content: `
# Your Blog Post Title

Your blog post content in Markdown format.

## Subheading

More content...
  `
}
```

### Configuration

#### Form Submission

The contact form is configured to use Formspree. To update the form submission endpoint:

1. Open `src/components/Footer.tsx` and `src/app/contact/page.tsx`
2. Update the Formspree URL in the fetch request with your own endpoint

#### reCAPTCHA

The site uses Google reCAPTCHA v2. To update the configuration:

1. Open `src/components/Footer.tsx` and `src/app/contact/page.tsx`
2. Update the `data-sitekey` attribute with your own reCAPTCHA site key

#### Adding Analytics

To add Google Analytics or other tracking code:

1. Update the `layout.tsx` file in `src/app/` directory
2. Add your tracking script inside the `<head>` section

## Deployment

This website is configured for easy deployment on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect Vercel to your GitHub repository
3. Vercel will automatically detect Next.js and deploy the site

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Create a new site on Netlify and connect it to your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact the development team at your-email@example.com.

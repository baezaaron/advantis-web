# Remote Patient Monitoring (RPM) Landing Page

A modern, responsive landing page for a direct-to-consumer Remote Patient Monitoring service. Built with React and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Lead capture form with validation
- Clear pricing plans and features
- FAQ section with accordion functionality
- Testimonials section
- SEO optimized

## Tech Stack

- React 18
- Tailwind CSS
- Heroicons
- Headless UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/private-payor-rpm.git
   cd private-payor-rpm
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── Hero.js        # Hero section
  │   ├── HowItWorks.js  # How it works section
  │   ├── Benefits.js    # Benefits section
  │   ├── Testimonials.js# Testimonials section
  │   ├── Pricing.js     # Pricing plans
  │   ├── FAQ.js         # FAQ section
  │   └── LeadCapture.js # Lead capture form
  ├── App.js             # Main App component
  └── index.js           # Entry point
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The primary color is set to a professional blue, but you can modify it to match your brand.

### Content

All content is stored in the respective component files. You can easily modify text, images, and other content by editing these files.

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@yourcompany.com or open an issue in the repository.
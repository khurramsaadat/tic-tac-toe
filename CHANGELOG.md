# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.2.2] - 2024-03-19
### Changed
- Updated Netlify deployment configuration
  - Changed publish directory from `.next` to `out`
  - Removed @netlify/plugin-nextjs plugin
  - Added NETLIFY_NEXT_PLUGIN_SKIP environment variable
  - Simplified build process for static export

## [0.2.1] - 2024-03-19
### Fixed
- Fixed Netlify TOML configuration syntax for proper parsing
- Corrected environment variables format in netlify.toml

## [0.2.0] - 2024-03-19

### Added
- "Play With System" link to the navigation menu
- Overlay effect for mobile menu
- Active link styles to show current page
- Automatic menu closing when changing routes
- Body scroll lock when mobile menu is open
- Improved accessibility with ARIA attributes
- Smooth logo rotation animation
- Link underline animations

### Changed
- Improved mobile menu styling with borders and hover effects
- Adjusted navigation spacing for better layout
- Enhanced burger menu animation
- Made navigation items non-wrapping
- Restored yellow navbar background with black text

### Fixed
- Console errors related to image loading
- Missing logo.svg file
- Mobile menu usability issues
- Navigation accessibility issues

## [0.1.0] - 2024-03-18

### Added
- Initial release
- Two Players game mode
- Instructions page
- Responsive design
- Score tracking
- Game board with animations
- Keyboard navigation support
- Mobile-friendly layout

## [0.1.1] - 2024-02-20
### Changed
- Updated Next.js configuration for Netlify deployment
  - Changed output to 'export' for static deployment
  - Configured image optimization settings
  - Added trailing slash support
- Enhanced Netlify configuration
  - Added security headers
  - Set Node.js version to 18.18.0
  - Disabled telemetry
  - Added proper build settings
- Updated dependencies to latest versions
  - Next.js to ^14.2.28
  - React and React DOM to 18.3.1
  - netlify-cli to ^17.38.1
  - Other minor dependency updates

### Fixed
- Fixed build configuration for Netlify deployment
- Resolved peer dependency issues with React and React DOM
- Removed invalid experimental options from Next.js config 
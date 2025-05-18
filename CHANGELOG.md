# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.3.6] - 2024-03-19
### Changed
- Doubled the size of X and O symbols in 2-players mode
- Increased stroke width for better visibility
- Adjusted animation parameters for larger symbols

## [0.3.5] - 2024-03-19
### Changed
- Updated social links to show X (Twitter), Instagram, and Twitter icons
- Replaced LinkedIn icon with Twitter icon
- Maintained consistent icon styling and hover effects

## [0.3.4] - 2024-03-19
### Changed
- Further reduced footer height by adjusting remaining spacings
- Updated copyright section padding to maintain proportions
- Fixed mobile view gaps to match new compact layout

## [0.3.3] - 2024-03-19
### Changed
- Reduced footer height to approximately 1/3rd of original size
- Adjusted padding and spacing in footer sections
- Optimized footer text sizes for compact layout

## [0.3.2] - 2024-03-19
### Changed
- Updated logo text to lowercase "tictactoe"
- Maintained black color for "tic" and "toe", grey for "tac"

## [0.3.1] - 2024-03-19
### Changed
- Replaced SVG logo with direct text styling
- Implemented "TICTACTOE" text with black and grey colors
- Added bold font styling for the logo text
- Removed unused logo.svg file

## [0.3.0] - 2024-03-19
### Changed
- Updated logo to text-based design with "TICTACTOE"
- Used black color for "TIC" and "TOE", grey for "TAC"
- Implemented bold font using Inter font family
- Adjusted logo dimensions in navigation bar

## [0.2.9] - 2024-03-19
### Fixed
- Improved logo rendering by using SVG paths instead of fonts
- Adjusted logo dimensions for better visibility
- Enhanced text clarity in the logo

## [0.2.8] - 2024-03-19
### Changed
- Updated logo to text-based design with "TICTACTOE"
- Used black color for "TIC" and "TOE", grey for "TAC"
- Implemented bold font using Inter font family
- Adjusted logo dimensions in navigation bar

## [0.2.7] - 2024-03-19
### Changed
- Reordered navigation links to make 2 PLAYERS the first link in Navbar
- Ensured consistent navigation order across Navbar and Footer

## [0.2.6] - 2024-03-19
### Changed
- Updated root page to redirect to 2 PLAYERS instead of PLAY WITH SYSTEM
- Modified navigation active state logic to reflect new root page redirect

## [0.2.5] - 2024-03-19
### Changed
- Updated all navigation links to uppercase in Navbar and Footer
- Updated section headings to uppercase in Footer
- Fixed outdated link in Footer (from /two-players to /2-players)

## [0.2.4] - 2024-03-19
### Changed
- Renamed TEST page to 2 PLAYERS
- Updated navigation to reflect the new page name
- Changed route from /test to /2-players

## [0.2.3] - 2024-03-19
### Removed
- Two Players page and related navigation
- Two Players route and components

### Changed
- Updated home page to redirect to Play With System
- Modified navigation to reflect new structure
- Simplified routing and navigation logic

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

## [0.3.7] - 2024-03-19

### Added
- Active page highlighting in Navbar and Footer
- Visual indicators for current page in navigation
- Smooth transitions for active link states

### Changed
- Enhanced navigation UX with active state styles
- Improved accessibility with aria-current attributes
- Updated hover effects for better visual feedback

## [0.3.8] - 2024-03-19

### Changed
- Enhanced navigation link styling to maintain underline for active pages
- Improved visual feedback by showing underline for both hover and active states
- Separated hover and active state styles for better clarity

## [0.3.9] - 2024-03-19

### Added
- Home icon to the left of TICTACTOE logo
- Interactive hover effects for home icon
- Improved navigation with direct home link

### Changed
- Updated logo section layout to accommodate home icon
- Enhanced visual feedback for home icon interaction
- Optimized spacing between logo elements 

## [0.4.0] - 2024-03-19

### Added
- New "2 Players+" game mode with special rules
  - Each player can only have three marks
  - Placing a fourth mark removes the oldest mark
- Added "2 Players+" link to navigation menu
- Added "2 Players+" button to hero section
- Added "2 Players+" link to footer navigation
- Gradient color effects for X and O symbols
- Red-to-orange gradient for X symbol
- Blue-to-cyan gradient for O symbol

### Changed
- Enhanced SVG animations for smoother transitions
- Updated stroke styles with gradient colors
- Improved visual appeal of game symbols 

## [0.4.1] - 2024-03-19

### Changed
- Enhanced player registration form with matching gradient colors
- Player 1 (X) input styled with red-to-orange gradient
- Player 2 (O) input styled with blue-to-cyan gradient
- Improved input field focus states with colored glows
- Added smooth transitions and hover effects
- Updated responsive design for better mobile experience 

## [0.4.2] - 2024-03-19

### Changed
- Updated scoreboard with player-specific gradient colors
- Player 1 (X) stats now show red-to-orange gradient
- Player 2 (O) stats now show blue-to-cyan gradient
- Enhanced winning player highlights with colored backgrounds
- Improved score update animation with color-specific effects
- Added subtle text shadows for better readability 

## [0.4.3] - 2024-03-19

### Removed
- Next player status message and its grey background card
- Unnecessary status display during active gameplay
- Related turnInfo styles and media queries

### Changed
- Status container now only shows for winner and draw states
- Improved status visibility with backdrop blur effect
- Streamlined game interface for cleaner appearance 

## [0.4.4] - 2024-03-19

### Changed
- Improved game board visual feedback:
  - Added one-time light streak animation for winning lines
  - Streak animation matches the direction of win (horizontal, vertical, diagonal)
  - Streak scales responsively for different screen sizes

### Removed
- Simplified UI elements:
  - Removed card background from winner message
  - Removed (X) and (O) symbols from scoreboard player names
  - Removed symbol indicators from winner announcements

### Enhanced
- Winner message styling:
  - Reduced overall size for more compact display
  - Added player-specific gradient colors (red-orange for Player 1, blue-cyan for Player 2)
  - Improved animations and transitions
  - Better responsive design across all screen sizes 

## [0.4.5] - 2024-03-19

### Added
- Sound effects for game interactions:
  - Click sound when placing X or O
  - Victory sound when winning
  - Draw game sound
  - Error sound for invalid moves
- Mute button in the top-right corner with:
  - Smooth animations
  - Persistent mute state
  - Responsive design
  - Accessibility support

### Changed
- Enhanced game feedback with audio cues
- Added sound management system with volume control
- Improved user experience with audio feedback 

## [0.3.10] - 2024-03-19

### Changed
- Updated navigation text from "Play with System" to "Play with AI" in Navbar and Footer
- Updated button text in Hero component to match new naming
- Maintained all existing functionality while improving naming consistency 

## [0.3.11] - 2024-03-19

### Changed
- Simplified the development modal by removing the upcoming features section
- Adjusted modal styling for a more concise presentation
- Added a helpful message about clicking anywhere to continue
- Reduced modal width for better focus on the main message 

## [0.3.12] - 2024-03-19

### Changed
- Completely redesigned the instructions page with detailed information about all game modes
- Added visual guides and animations for better understanding
- Included game-specific tips and strategies
- Enhanced mobile responsiveness and visual appeal
- Created dedicated sections for 2 PLAYERS, 2 PLAYERS+, and PLAY WITH AI modes 

## [0.3.13] - 2024-03-19

### Added
- Created BoardDemonstration component for generating game board visualizations
- Added image generation page for creating board demonstration PNGs
- Implemented three board visualizations:
  - Classic mode with X and O marks
  - Advanced mode with moving marks indication
  - AI mode with thinking animation
- Added gradient effects and animations to board demonstrations 

## [2024-03-18]

### Added
- Created PNG version of hero background for better social media sharing
- Added scripts/convert-svg.js for SVG to PNG conversion
- Added OpenGraph metadata for improved social media sharing

### Changed
- Updated app/layout.tsx with proper metadata configuration
- Reduced hero background opacity from 0.2 to 0.15 for better visual balance
- Updated metadataBase URL to use the production domain (https://khurram-tictactoe.netlify.app)

### Technical
- Installed new dependencies:
  - puppeteer (dev dependency)
  - sharp (dev dependency)

### Files Modified
- app/layout.tsx
- app/page.module.css
- scripts/convert-svg.js (new)
- public/hero-background.png (new)

### Fixed
- Fixed "Play with AI" card link in home page to correctly point to "/play-with-system"
- Verified and confirmed all navigation links are working correctly
- Ensured consistency between navbar, footer, and home page links

### Technical
- Confirmed all page components are properly connected:
  - 2 Players (TestGameBoard)
  - 2 Players+ (AdvancedGameBoard)
  - Play with AI (AIGameBoard)
  - Instructions page

### Files Modified
- app/page.tsx 
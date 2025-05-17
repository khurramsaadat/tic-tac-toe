# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.3.0] - 2024-03-20

### Added
- Implemented reducer pattern for game state management
- Atomic state updates for more reliable game state transitions
- Enhanced logging for better debugging
- Improved type safety with GameState interface

### Changed
- Refactored TestGameBoard component to use useReducer
- Consolidated state management logic
- Improved winner detection reliability
- Enhanced state update consistency

### Fixed
- Game state not updating correctly after wins
- Inconsistent winner message display
- Race conditions in state updates
- Score update timing issues

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
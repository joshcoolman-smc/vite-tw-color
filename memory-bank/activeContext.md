# Active Context: Moops - Tailwind Color Explorer

## Current Focus
The project is in its initial development phase. The current focus is on building out the core functionality of the Tailwind Color Explorer, starting with the basic color grid component.

### Active Development Areas
1. **Color Grid Component**: Enhancing the existing TailwindColorGrid component with additional features
2. **Palette Management**: Creating the state management for temporary color palettes
3. **Component Previews**: Developing UI components that will showcase the selected color palettes
4. **Export Functionality**: Implementing the ability to export color palettes as JSON

## Recent Changes
- Initial project setup with Vite, React, TypeScript, and Tailwind CSS
- Implementation of basic TailwindColorGrid component that displays Tailwind colors in a grid
- Added ability to click on colors to copy their Tailwind class names
- Enhanced TailwindColorGrid with hex value display and popover details
- Improved layout to show all color palettes in a single row
- Added ColorFlyoutMenu component for compact color selection

## Current State
The application currently has an enhanced implementation of the TailwindColorGrid component that:
- Displays all Tailwind color palettes and their shades in a responsive grid
- Shows all color palettes in a single row that adapts to the screen width
- Provides a popover with both Tailwind class name and hex value when clicking on a color
- Allows users to copy either the Tailwind class name or hex value to clipboard
- Has a clean, modern UI with hover effects and visual feedback
- Includes a compact ColorFlyoutMenu component in the header for quick color selection

## Active Decisions

### Design Decisions
1. **Color Grid Layout**: Currently using a vertical layout for color palettes with shades arranged in columns. This provides a good overview of all available colors but may be refined for better usability.
2. **Color Selection Mechanism**: Currently using click-to-copy functionality. Need to implement a way to select colors for a palette.
3. **Component Preview Strategy**: Need to decide on the specific UI components to showcase and how they will be arranged.

### Technical Decisions
1. **State Management Approach**: Planning to use React Context API for managing the selected color palette state across components.
2. **Color Value Representation**: Need to implement a way to display and copy hex values in addition to Tailwind class names.
3. **Export Format**: Need to define the JSON structure for exported color palettes.

## Next Steps

### Immediate Tasks
1. ✅ Enhance the TailwindColorGrid component:
   - ✅ Add hex value display for each color
   - Implement color selection for building palettes
   - ✅ Improve the visual design and interaction feedback

2. Create a PaletteContext for state management:
   - Define the palette data structure
   - Implement context provider and hooks for accessing palette state
   - Add actions for adding/removing colors from the palette

3. Develop preview components:
   - Create login card component
   - Create profile card component
   - Create settings card component
   - Apply selected palette colors to these components

4. Implement export functionality:
   - Create JSON export utility
   - Add UI for triggering exports
   - Implement copy-to-clipboard for export data

### Upcoming Challenges
1. **Dynamic Theming**: Applying selected colors to components in real-time
2. **Color Accessibility**: Ensuring selected color combinations meet accessibility standards
3. **Mobile Responsiveness**: Optimizing the interface for smaller screens
4. **Performance**: Maintaining smooth performance with many color swatches and real-time previews

## Open Questions
1. Should we support importing existing Tailwind theme configurations?
2. How should we handle color combinations that don't meet accessibility standards?
3. Should we add support for custom colors beyond the Tailwind palette?
4. How can we best visualize the relationship between selected colors in a palette?

## Current Limitations
1. No persistence for created palettes (will be lost on page refresh)
2. Limited to Tailwind's predefined color palettes
3. No dark/light mode toggle yet
4. No way to preview how colors work together in actual UI components

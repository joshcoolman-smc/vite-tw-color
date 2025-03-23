# World Class UX Vite + React Prototype Prompt Template

## Feature Description
A color grid component that allows designers explore color combinations and possible color pallets for use within the context of a larger app. The color grid should allow users to explore the tailwind colors, see hex values, copy values from the ui. There should be a view components representative of common elements used in a web app including a login card with email and pass, a profile card, and a settings card that includes a dropdown menu and several switch options with UI related options typical of popular applications. The palletes created, which are temporary should be applied to the components so a designer can get a sense of how the current pallet looks when applied to shadcn components. There should be a way for the designer to view and download json to apply the pallete to other projects.

---

## Your Role
You are an expert UI/UX designer with exceptional skills in creating visually stunning user-friendly interfaces. Your task is to create a non-functional but highly realistic and interactive prototype for the feature described above. This prototype will be used in presentations to executive stakeholders and will serve as a visual guide for the engineering team.

## Design Standards & Aesthetic
Create a premium visually refined interface that meets the highest standards of contemporary UI design. Your design aesthetic should reflect the caliber of top-tier brands like:
- Apple (clean minimal elegant)
- Nike (bold confident premium)
- Spotify (modern vibrant intuitive)
- Etsy (warm detailed thoughtful)
- Airbnb (accessible clear delightful)

The visual design quality is paramount - stakeholders will be evaluating the feature based largely on its aesthetic appeal and apparent usability before any functional implementation.

## Technical Requirements

### Component Framework
- Use shadcn/ui components as your primary building blocks (already available in src/components/ui/)
- Extend shadcn components with custom styling when necessary to achieve the premium aesthetic required
- Import shadcn components using the format: `import { Component } from "@/components/ui/component"`

### Styling
- Use Tailwind CSS exclusively for styling
- Leverage Tailwind's color system rather than custom CSS colors
- Ensure the design works seamlessly in both dark (default) and light modes
- Prioritize responsive design that works well on all screen sizes

### Icons & Visual Elements
- Use lucide-react icons as the primary icon library
- When necessary suggest SVG elements for custom illustrations or icons
- Maintain consistent visual language throughout the prototype

### Animations & Interactions
- Utilize Motion (https://motion.dev) to create world-class animations and interactions
- Implement thoughtful micro-interactions that enhance usability and delight
- Use Motion's API for smooth physics-based animations that feel natural and responsive
- Consider user-triggered animations, entrance/exit animations, and state transitions

### Data & State Management
- Create realistic mock data repositories to populate your UI components
- Set up client-side state management to simulate interactivity
- Include simulated loading states, error states, and empty states

## Implementation Structure
Follow the feature module pattern:

```
src/features/[feature-name]/
├── components/        # UI components specific to this feature
├── hooks/             # React hooks for component behavior
├── repository/        # Mock data repositories
├── service/           # Service layer for data operations
├── types/             # TypeScript interfaces and types
├── animations/        # Motion animations and variants
└── utils/             # Utility functions
```

## Development Constraints
- Do not modify or depend on any existing files in the application
- Your feature should function as a standalone module
- You may reference existing code to understand patterns and styles but cannot import or use it directly
- Package installations should use pnpm
- Install Motion (https://motion.dev) using: `pnpm add motion`
- Install lucide-react if not already installed: `pnpm add lucide-react`

## Deliverables

1. **Components**
   - Create all necessary UI components for the feature
   - Ensure components are properly typed and commented
   - Components should use shadcn/ui where possible
   - All components should be client components to support interactivity

2. **Mock Data**
   - Provide robust mock data repositories to populate the UI
   - Mock data should be comprehensive enough to demonstrate all feature states

3. **Interactive Elements**
   - Implement realistic client-side interactivity
   - Include hover states, animations, and transitions
   - Simulate API calls with appropriate loading states

4. **Visual Polish & Animation**
   - Apply meticulous attention to spacing, alignment, and typography
   - Ensure consistent use of colors from the Tailwind palette
   - Implement high-quality animations using Motion for a premium world-class experience
   - Create purposeful transitions between states that enhance understanding and delight
   - Design motion that feels natural with appropriate physics and timing
   - Optimize for both dark mode (default) and light mode

5. **Navigation**
   - Include clear navigation flows within the feature
   - Create a complete user journey that demonstrates the feature's value

## Example Implementation Approach

1. Begin by creating the feature directory structure in src/features/
2. Define TypeScript interfaces for your data models
3. Create mock data repositories with realistic example data
4. Build UI components from the bottom up, starting with atomic elements
5. Design animation variants and interaction patterns using Motion
6. Assemble the complete feature UI, implementing client-side state management
7. Integrate Motion animations for transitions, state changes, and interactions
8. Refine animations to feel natural and enhance the user experience
9. Ensure responsive design and cross-browser compatibility
10. Verify dark/light mode support

## Integration with Main App

To integrate your feature with the main application:

1. Import your feature's main component in src/App.tsx
2. Add your component to the appropriate location in the App component
3. Ensure any necessary providers or context are properly set up

## Final Notes
- Prioritize visual quality and attention to detail above all else
- Use Motion to create world-class animations that set your prototype apart
- Consider accessibility throughout the design process, including respecting reduced motion preferences
- Include thoughtful micro-interactions that enhance the premium feel
- Focus on creating a cohesive, intuitive user experience with fluid, natural transitions
- Remember that this prototype will inform development decisions and stakeholder approval
- Animation should serve the user experience, not distract from it
- Balance visual delight with performance and usability

# AI/ML Engineering Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by DeepMind, NVIDIA AI, and OpenAI product pages - technical, minimal, research-lab aesthetic with cinematic data visualization focus.

## Core Design Principles
- **Dark-First Architecture**: Deep blacks (#0a0a0a background) with high-contrast electric accents
- **Technical Precision**: Every element conveys analytical expertise and ML engineering credibility
- **Cinematic Storytelling**: Scroll-driven narrative showcasing ML projects and technical capabilities
- **Data-Driven Visual Language**: Subtle interactive visualizations reinforce technical identity

## Typography System
**Primary Font**: JetBrains Mono or IBM Plex Mono (technical monospace via Google Fonts CDN)
**Secondary Font**: Inter or Archivo (for body content)

Hierarchy:
- Hero Headlines: 4xl to 6xl (64-96px), heavy weight, massive presence
- Section Headers: 3xl to 4xl (36-48px), gradient text effects on key terms (e.g., "Machine Learning", "Neural Networks")
- Project Titles: 2xl (24px), medium weight
- Body Text: base to lg (16-18px), regular weight, increased line-height (1.7) for readability
- Technical Labels/Metrics: sm to base (14-16px), monospace, electric accent colors

## Color Palette
**Foundation**:
- Background: #0a0a0a (deep black)
- Surface: #111111 to #1a1a1a (elevated cards/sections)
- Text Primary: #e5e5e5 to #ffffff (high contrast)
- Text Secondary: #a0a0a0 (muted information)

**Accent Colors** (high-contrast highlights):
- Electric Blue: #00d4ff (primary CTA, links, tech badges)
- Neon Green: #00ff88 (success states, active indicators, code highlights)
- Warning/Alert: #ff3366 (sparingly for emphasis)

**Gradients** (for hero text and section dividers):
- Electric gradient: from #00d4ff to #00ff88
- Apply to hero headline keywords via background-clip text effect

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, py-20, gap-8, etc.)
**Container**: max-w-7xl for main content, max-w-4xl for text-heavy sections
**Vertical Rhythm**: py-20 to py-32 for desktop sections, py-12 to py-16 for mobile

## Component Library

### Navigation
- Fixed minimal header with blur backdrop (backdrop-blur-lg)
- Logo/name left, minimal nav links right (Projects, Skills, Experience, Contact)
- Smooth scroll anchors, active section indicators with electric blue underline

### Hero Section
**No Large Image** - Pure typographic + technical grid background
- Full viewport height (min-h-screen) with centered content
- Massive gradient headline: "AI/ML Engineer" or "Machine Learning Researcher"
- Animated subtitle with typing effect or fade-in sequence describing specialization
- Technical grid overlay: CSS grid pattern or subtle scanning animation
- Primary CTA: "View Projects" with electric blue accent, blurred background treatment
- Floating metrics display: "50+ Models Deployed", "99.2% Accuracy" in minimal cards with monospace numbers

### Projects Showcase
- 2-column grid (lg:grid-cols-2), 1-column mobile
- Project cards with dark surface background (#1a1a1a), subtle border
- Each card includes:
  - Project thumbnail/diagram (technical diagrams, architecture visualizations, or model performance graphs)
  - Bold project title
  - 2-3 sentence technical description
  - Tech stack badges (PyTorch, TensorFlow, Python) with pill-shaped design
  - Key metrics display: "95% F1 Score", "10ms Latency" in monospace
  - GitHub + Demo link buttons with icon library (Heroicons)
- Hover: subtle lift effect (translate-y), border glow in electric blue

### Technical Skills Visualization
- 3-column grid (lg:grid-cols-3) for skill categories: ML Frameworks, Languages, Tools
- Each skill with proficiency bar or percentage indicator
- Icons from Heroicons for categories
- Interactive hover states: skill cards slightly brighten, show proficiency level

### Experience Timeline
- Vertical timeline with left-aligned cards
- Timeline connector line in electric blue
- Each role card includes:
  - Company + role title (bold)
  - Duration in muted text
  - 3-5 bullet points of ML-specific achievements
  - Tech tags for tools/frameworks used
- Stagger animation on scroll (fade-in from left)

### About Section
- Single column, max-w-3xl, centered
- Clean paragraph typography with technical credentials highlighted
- Photo optional (if included: circular frame, electric blue border glow)
- Focus on ML specialization narrative

### Contact Section
- Centered layout with minimal card design
- Professional links: GitHub, LinkedIn, Email as icon buttons
- Copy email on click with success toast notification
- Subtle call-to-action: "Let's build something intelligent"

## Animations & Interactions
**Minimal, Purposeful Motion**:
- Hero headline: Gradient animation on load (2-3s subtle shift)
- Scroll-triggered fade-ins for project cards (stagger delay 100ms)
- Hover states: subtle scale (1.02), glow borders, color transitions
- No complex scroll-jacking or parallax - maintain performance and accessibility
- Loading states for project images: skeleton shimmer in dark theme

## Icons
**Library**: Heroicons (via CDN) - outline style for consistency
**Usage**: Navigation, social links, tech badges, section headers

## Responsive Behavior
- Mobile: Single column layouts, reduced font sizes (scale down 1-2 levels), py-12 section spacing
- Tablet: 2-column grids where appropriate, py-16 spacing
- Desktop: Full 3-column grids, py-20 to py-32 generous spacing
- All touch targets minimum 44x44px for mobile accessibility

## Images
**Hero**: No large hero image - use technical grid CSS pattern background
**Projects**: Include technical diagrams, model architecture visualizations, or performance dashboards (6-8 project images needed)
**About**: Optional professional headshot with technical framing

This portfolio prioritizes technical credibility through precise typography, high-contrast dark aesthetics, and data-driven visual elements that speak directly to ML recruiters' expectations.
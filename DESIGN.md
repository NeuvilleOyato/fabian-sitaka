---
name: Environmental Consulting & Compliance
colors:
  surface: '#f8fafb'
  surface-dim: '#d8dadb'
  surface-bright: '#f8fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f5'
  surface-container: '#eceeef'
  surface-container-high: '#e6e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#41493e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#eff1f2'
  outline: '#717a6d'
  outline-variant: '#c0c9bb'
  surface-tint: '#2a6b2c'
  primary: '#00450d'
  on-primary: '#ffffff'
  primary-container: '#1b5e20'
  on-primary-container: '#90d689'
  inverse-primary: '#91d78a'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#6b1d3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#883454'
  on-tertiary-container: '#ffaec6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acf4a4'
  primary-fixed-dim: '#91d78a'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#0c5216'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3e001d'
  on-tertiary-fixed-variant: '#7a2949'
  background: '#f8fafb'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies the intersection of high-stakes corporate consulting and environmental stewardship. The brand personality is authoritative yet approachable, positioning the consultant as a trusted NEMA-registered expert.

The design style is **Corporate / Modern** with a focus on **Sustainability**. It utilizes high-end editorial layouts, generous whitespace, and a crisp, structured hierarchy reminiscent of global management consultancies. The visual narrative avoids "green-washing" cliches in favor of precision, technical excellence, and institutional trust. Every element should feel deliberate, stable, and transparent.

## Colors

The palette is anchored in a monochromatic green spectrum to reinforce environmental expertise.

- **Primary (#1B5E20):** Used for primary actions, navigation headers, and authoritative brand moments.
- **Secondary (#2E7D32):** Applied to secondary interactive elements and decorative accents.
- **Accent (#81C784):** Reserved for highlights, success states, and subtle background tints to provide depth.
- **Neutral (#F5F7F8):** Used for section backgrounds and card containers to maintain a clean, airy feel.
- **Text (#263238):** A charcoal slate that ensures high legibility and a softer contrast than pure black.

## Typography

The typography strategy pairs the geometric strength of **Montserrat** for headings with the systematic clarity of **Inter** for body text. 

- **Headlines:** Use Montserrat Bold (700) for high-impact titles. Tighten letter spacing on larger sizes to maintain a premium "consulting report" aesthetic.
- **Body:** Use Inter for all long-form content. The generous 1.6x line height for `body-lg` ensures readability for technical environmental assessments.
- **Labels:** Use Inter Semi-Bold (600) with uppercase styling for small metadata, badges, and overlines to create clear categorization.

## Layout & Spacing

This design system utilizes a **Fixed Grid** layout for desktop to ensure content density remains professional and controlled.

- **Grid System:** A 12-column grid with 24px gutters. Elements typically span 3, 4, 6, or 12 columns.
- **Spacing Rhythm:** Based on an 8px base unit. Section vertical spacing is aggressive (120px) to facilitate "Enterprise-level whitespace," allowing complex data and text to breathe.
- **Responsive Behavior:** 
  - **Desktop:** 12 columns, 64px side margins.
  - **Tablet:** 8 columns, 32px side margins.
  - **Mobile:** 4 columns, 20px side margins. Typography scales down (e.g., `headline-lg` becomes `headline-lg-mobile`) to prevent excessive wrapping.

## Elevation & Depth

To maintain a "Modern Corporate" aesthetic, the design system avoids heavy shadows, opting for **Tonal Layers** and **Low-contrast outlines**.

- **Surface Levels:** 
  - Level 0: Pure White (#FFFFFF) background.
  - Level 1: Light Gray (#F5F7F8) for subtle section zoning.
- **Shadows:** Use only one "soft-wash" shadow for interactive cards: `0px 4px 20px rgba(0, 0, 0, 0.04)`. This creates a lifted effect without looking "app-like" or informal.
- **Interaction:** On hover, cards should transition from a 1px Light Gray border to a 1px Primary Green border, accompanied by a subtle 4px vertical lift.

## Shapes

The shape language is **Soft**, utilizing small radii to feel modern without losing the precision of a professional consultancy.

- **Standard Elements:** Buttons and input fields use a 0.25rem (4px) radius.
- **Containers:** Large cards and feature blocks use a 0.5rem (8px) radius.
- **Trust Badges:** Circular or pill-shaped for distinct recognition among rectangular UI elements.

## Components

### Buttons
- **Primary:** Solid Deep Forest Green (#1B5E20) with white text. Montserrat Semi-Bold.
- **Secondary:** Transparent with a Primary Green border.
- **Ghost:** Primary Green text, no border. Used for low-priority actions like "Learn More" in a text block.

### Cards
- **Service Cards:** White background, 1px border (#E0E0E0), featuring a 48px green icon in the top left. Subtle lift on hover.
- **Stat Cards:** Deep Forest Green background with white large-scale typography for "Key Impacts" (e.g., "50+ Audits Completed").

### Inputs & Forms
- Text inputs use a Light Gray (#F5F7F8) fill and a 1px bottom border that transitions to Primary Green on focus.
- Labels are Inter Bold 12px, positioned above the field.

### Trust Indicators
- **NEMA Badge:** A specialized component with a Light Green background and Primary Green text, used to denote certification.
- **Testimonial List:** Clean, centered typography with a subtle separator line between the quote and the client's logo.

### Lists
- Bullet points use the Primary Green color for the marker, using a custom "check" or "leaf" icon instead of standard circles for a sustainability touch.
# Authentication UI System Documentation

## Overview
This is a complete authentication UI system with support for User and Food Partner login/register pages. The system uses centralized CSS variables for theming and automatically adapts to the system's dark/light mode preferences.

## File Structure
```
src/
├── styles/
│   ├── theme.css      # CSS variables for centralized theming
│   └── auth.css       # Shared authentication form styles
├── pages/
│   ├── UserLogin.jsx          # User login page
│   ├── UserRegister.jsx       # User registration page
│   ├── FoodPartnerLogin.jsx   # Food partner login page
│   └── FoodPartnerRegister.jsx # Food partner registration page
└── routes/
    └── AppRoutes.jsx          # Route configuration
```

## CSS Variables (theme.css)

### Primary Colors
- `--primary-color`: Main brand color (orange)
- `--primary-light`: Lighter shade for hover states
- `--primary-dark`: Darker shade for active states

### Secondary Colors
- `--secondary-color`: Secondary brand color (blue)
- `--secondary-light`: Lighter shade
- `--secondary-dark`: Darker shade

### Backgrounds
- `--bg-primary`: Main background (white in light, dark gray in dark mode)
- `--bg-secondary`: Secondary background
- `--bg-tertiary`: Tertiary background (for disabled states)

### Text Colors
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--text-tertiary`: Tertiary text color (for hints)

### UI Elements
- `--border-color`: Border color
- `--border-light`: Light border color
- `--shadow-color`: Shadow color

### Status Colors
- `--success-color`: Green for success messages
- `--error-color`: Red for error messages
- `--warning-color`: Orange for warnings
- `--info-color`: Blue for info

### Spacing
Consistent spacing scale from xs to 2xl for margins and padding

### Typography
Font sizes and weights predefined for consistency

### Animations
Transition speeds: fast (150ms), normal (250ms), slow (350ms)

## Dark Mode Support
The system automatically detects system preferences using `prefers-color-scheme: dark` media query. No additional setup is required - color adjustments happen automatically!

### Manual Toggle (Optional)
To add manual dark mode toggle, add this to App.jsx:

```javascript
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'} Toggle Theme
      </button>
      <AppRoutes />
    </>
  )
}
```

## Shared CSS Classes (auth.css)

### Container
- `.auth-container`: Main container with centering
- `.auth-wrapper`: Wrapper to limit max-width

### Header
- `.auth-header`: Header section container
- `.auth-logo`: Logo/icon element
- `.auth-title`: Main heading
- `.auth-subtitle`: Subtitle text

### Forms
- `.auth-form`: Form container with styling
- `.form-group`: Individual form field wrapper
- `.form-label`: Label styling
- `.form-input`: Input field styling
- `.form-select`: Select dropdown styling

### Buttons
- `.btn`: Base button styles
- `.btn-primary`: Primary action button
- `.btn-secondary`: Secondary action button
- `.btn-social`: Social login buttons

### Other Elements
- `.checkbox-group`: Checkbox container
- `.radio-group`: Radio button container
- `.form-divider`: Divider with text
- `.social-buttons`: Social buttons grid
- `.form-footer`: Footer section with links

## Page Routes

### User Pages
- `/user/login` - User login page
- `/user/register` - User registration page

### Food Partner Pages
- `/food-partner/login` - Food partner login page
- `/food-partner/register` - Food partner registration page

## Customization

### Changing Colors
Edit the CSS variables in `theme.css`:

```css
:root {
  --primary-color: #ff6b35; /* Change this to your brand color */
  --secondary-color: #004e89;
  /* ... other variables */
}
```

### Responsive Adjustments
The system is fully responsive with mobile-first design. Media query at 480px adapts the layout for smaller screens.

### Adding New Form Fields
Use the existing `.form-group` and `.form-input` classes pattern:

```jsx
<div className="form-group">
  <label className="form-label">Field Label</label>
  <input className="form-input" type="text" placeholder="..." />
</div>
```

## Features

✨ **Minimal & Seamless Design**
- Clean, modern interface
- Consistent spacing and typography
- Smooth animations and transitions

🌙 **Dark Mode Support**
- Automatic detection of system preference
- Carefully chosen colors for both modes
- Improved readability in dark environments

📱 **Fully Responsive**
- Works perfectly on mobile, tablet, and desktop
- Adaptive layout for all screen sizes

🎨 **Centralized Theme**
- Single source of truth for all colors and styles
- Easy to customize brand colors
- Consistent user experience across all pages

## Next Steps

1. **Add Navigation Links**: Connect the footer links to actual navigation
2. **Add Form Validation**: Implement form validation logic
3. **Add API Integration**: Connect forms to backend endpoints
4. **Add Loading States**: Show loading indicators during form submission
5. **Add Error Handling**: Display error messages from server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

The system uses standard CSS features supported by all modern browsers.

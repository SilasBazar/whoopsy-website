# 3D Button Component with Spark Effect

This guide explains how to use the reusable 3D button component with spark effects in your WHOOPSY website.

## Files

- **buttons.css** - Contains all button styles and spark animations
- **styles.css** - Contains container styles with simple green backdrop shadows
- **index.html** - Links both CSS files and includes automatic JavaScript initialization

## Usage

### Basic 3D Button with Spark Effect

To create a button with 3D bevel effect and spark animation, wrap it in a `.btn-wrapper` div and add `.btn-3d` class:

```html
<div class="btn-wrapper">
    <button class="btn-3d">BUTTON TEXT</button>
    <div class="spark spark-1"></div>
    <div class="spark spark-2"></div>
    <div class="spark spark-3"></div>
</div>
```

You can also use `<a>` tags instead of `<button>`:

```html
<div class="btn-wrapper">
    <a href="#section" class="btn-3d">BUTTON TEXT</a>
    <div class="spark spark-1"></div>
    <div class="spark spark-2"></div>
    <div class="spark spark-3"></div>
</div>
```

### Features

✅ **3D Bevel Effect** - 10-layer shadow creates a solid, 3D appearance
✅ **Hover Animation** - Button pops up (-10px, -10px) on hover
✅ **Click Animation** - Snaps back to flat position when clicked
✅ **Spark Effect** - Three sparks shoot out from the top-right corner on click
✅ **Automatic Initialization** - No manual JavaScript needed - just use the HTML structure
✅ **Works with Both** `<button>` and `<a>` elements

### Customization

All button styles use CSS variables for easy customization:

```css
:root {
    --btn-green: #86ce43;      /* Bevel color */
    --btn-white: #e5e6cc;     /* Button background */
    --btn-black: #1d1c00;     /* Button text */
    --btn-bevel-depth: 10px;  /* Shadow depth */
    --btn-radius: 16px;       /* Corner radius */
}
```

To customize a specific button, you can override these variables in a wrapper:

```html
<div class="btn-wrapper" style="--btn-green: #ff0000;">
    <button class="btn-3d">CUSTOM COLOR</button>
    <div class="spark spark-1"></div>
    <div class="spark spark-2"></div>
    <div class="spark spark-3"></div>
</div>
```

## Container Shadows

All containers use **simple green backdrop shadows** (no animations, no transforms):

### Components with Green Backdrop:
- `.about-card` - About section cards (green shadow)
- `.stat` - Statistics boxes (black shadow)
- `.social-link` - Footer social media links (green shadow)

Each uses a simple shadow for a nice backdrop effect:

```css
/* Simple shadow pattern */
box-shadow: 4px 4px 0px var(--green);
```

## JavaScript

The spark effect is automatically initialized for all `.btn-3d` buttons. No additional JavaScript needed!

The initialization code in `index.html`:
```javascript
document.querySelectorAll('.btn-3d').forEach(btn => {
    const wrapper = btn.closest('.btn-wrapper');
    if (wrapper) {
        btn.addEventListener('mousedown', () => {
            wrapper.classList.remove('popping');
            void wrapper.offsetWidth; // Trigger reflow to restart animation
            wrapper.classList.add('popping');
        });
    }
});
```

## Creating New Buttons

To add a new button anywhere in your site:

1. Copy the HTML structure from above
2. Change the button text
3. Add any additional classes or event handlers if needed

Example:
```html
<div class="btn-wrapper">
    <button class="btn-3d" onclick="alert('Hello!')">CLICK ME</button>
    <div class="spark spark-1"></div>
    <div class="spark spark-2"></div>
    <div class="spark spark-3"></div>
</div>
```

## Design Philosophy

The 3D button effect matches WHOOPSY's bold, playful aesthetic:
- **Solid forms** - Multi-layer shadows create depth and substance
- **Interactive feedback** - Clear hover and click states
- **Playful details** - Spark effect adds personality
- **Simple containers** - Cards and stats have clean, static shadows

## Browser Support

Works in all modern browsers that support:
- CSS3 box-shadow
- CSS3 transforms
- CSS3 animations
- ES6 JavaScript

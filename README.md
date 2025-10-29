# Divider Block — Gutenberg (WordPress)

A simple, accessible, and configurable Divider / Separator Gutenberg block plugin — no build tools required.

## Features
- Set thickness (px)
- Choose color (Color Palette)
- Choose line style (solid, dashed, dotted, double)
- Set width (percent or px)
- Alignment (left, center, right)
- Toggle to make it a vertical divider
- Accessible `role="separator"` and `aria-orientation`

## Installation
1. Download or clone the repository into your WordPress `wp-content/plugins/` directory, e.g.:

   ```bash
   cd wp-content/plugins
   unzip divider-block-plugin.zip
   ```

2. Activate **Divider Block** from the WordPress admin → Plugins screen.
3. Create or edit a post/page and search for **Divider** in the block inserter.

## Files included
- `divider-block.php` — main plugin bootstrap + block registration
- `src/editor.js` — block editor script (no build step; uses WP's global `wp` object)
- `src/editor.css` — editor preview styles
- `src/style.css` — front-end styles
- `README.md` — this file

## Notes & Tips
- This plugin intentionally does **not** require a JS build step. It uses the global `wp` object provided by WordPress (works in modern WP versions that expose editor scripts).
- If you prefer a build setup (ESNext, JSX), convert `src/editor.js` into ESNext + JSX and use `@wordpress/scripts`.
- To add more presets (thickness, gradients, etc.) modify `src/editor.js` attributes and controls.

## License
GPLv2 or later

---
Generated on 2025-10-29 by ChatGPT — ready to upload to your GitHub.

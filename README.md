# Divider Block — Gutenberg (WordPress)

A simple, accessible, and configurable **Divider / Separator Gutenberg block plugin** — built without any JavaScript build tools.  
Created by **Abir Ovi**.

---

##  Features
- Adjustable **thickness** (in pixels)
- Custom **color** (via color palette)
- Choose **line style**: solid, dashed, dotted, or double
- Flexible **width** (percent or pixel-based)
- Alignment options: **left**, **center**, or **right**
- Optional **vertical divider**
- Accessible markup with `role="separator"` and `aria-orientation`

---

##  Installation

1. **Download** the ZIP file or clone this repository into your WordPress `wp-content/plugins/` directory:
   ```bash
   cd wp-content/plugins
   unzip divider-block-plugin.zip
Go to your WordPress Admin Dashboard → Plugins → Installed Plugins.

Activate Divider Block.

Create or edit a post/page and search for Divider in the block inserter.

Customize your divider using the right sidebar (Block Inspector).

# Files Included
File	Description
divider-block.php	Main plugin bootstrap + block registration
src/editor.js	Gutenberg editor block logic (no build step)
src/editor.css	Styles for block preview in the editor
src/style.css	Front-end styles for your divider
README.md	This documentation

#  Development Notes

This plugin works without any build step — it uses the global wp object provided by WordPress.

Fully compatible with modern WordPress versions (5.8+).

You can easily extend it to use @wordpress/scripts if you prefer JSX or ESNext syntax.

Ideal for learning Gutenberg block development or showcasing clean WordPress JavaScript.

# Author : Abir Ovi


# License

Licensed under the GPLv2 or later.

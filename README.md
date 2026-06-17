# Pebble Theme HTML Preview

Pebble is the static HTML design workspace for the new Milagift storefront theme.

This repository is intentionally scoped to design deliverables only: preview HTML, shared preview CSS, local SVG assets, and planning notes. It does not contain the MilaGift application code or Shopify theme implementation code.

## Preview Pages

- `pebble-custom-gifting-home-preview.html` - latest homepage design draft.
- `pebble-custom-gifting-home-preview-search-open.html` - homepage with search overlay opened.
- `pebble-theme-pages-preview.html` - design language, component library, responsive rules, and ecommerce state references.
- `pebble-product-detail-preview.html` - product detail page with inline customization area and related carousel.
- `pebble-cart-preview.html` - cart page with POD item details, coupons, summary, and checkout entry.
- `pebble-checkout-preview.html` - checkout page with address, delivery, payment, coupon, and order summary components.

## Local Preview

Open any HTML file directly, or run a small static server from this folder:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://localhost:8765/pebble-custom-gifting-home-preview.html
```

## Design Scope

- Source of truth for current visual direction: `pebble-custom-gifting-home-preview.html`.
- Shared design system reference: `pebble-theme-pages-preview.html`.
- Shared inner page CSS: `pebble-commerce-preview.css`.
- Local icon/logo assets live in `assets/`.

## Notes

- Product imagery and product titles are sourced from current reference-site style examples and remote image URLs used in the drafts.
- This folder is treated as the standalone Pebble design repository.

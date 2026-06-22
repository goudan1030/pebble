# Pebble Theme HTML Preview

Pebble is the static HTML design workspace for the new Milagift storefront theme.

This repository is intentionally scoped to design deliverables only: preview HTML, shared preview CSS, local SVG assets, and planning notes. It does not contain the MilaGift application code or Shopify theme implementation code.

## Preview Pages

- `pebble-custom-gifting-home-preview.html` - latest homepage design draft.
- `pebble-custom-gifting-home-preview-search-open.html` - homepage with search overlay opened.
- `pebble-theme-pages-preview.html` - design language, component library, responsive rules, and ecommerce state references.
- `pebble-product-detail-preview.html` - product detail page with inline customization area and related carousel.
- `pebble-collection-preview.html` - collection page with filter chips, sort, product grid, and square media cards.
- `pebble-products-listing-preview.html` - all-products listing page using the collection browsing system.
- `pebble-search-results-preview.html` - search results page with query field, suggestion chips, and no-result reference.
- `pebble-cart-preview.html` - cart page with POD item details, coupons, summary, and checkout entry.
- `pebble-checkout-preview.html` - checkout page with address, delivery, payment, coupon, and order summary components.
- `pebble-account-orders-preview.html` - account center and order list preview.
- `pebble-payment-entry-preview.html` - unpaid order payment recovery preview.
- `pebble-tracking-preview.html` - order tracking lookup and timeline preview.
- `pebble-faq-preview.html`, `pebble-about-preview.html`, `pebble-contact-preview.html`, `pebble-blog-preview.html`, `pebble-article-preview.html` - content and support templates.
- `pebble-404-preview.html`, `pebble-payment-success-preview.html`, `pebble-payment-failure-preview.html`, `pebble-payment-pending-preview.html` - system and payment result states.

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
- Shared inner page interactions: `pebble-commerce-preview.js`.
- Local icon/logo assets live in `assets/`.

## Notes

- Product imagery and product titles are sourced from current reference-site style examples and remote image URLs used in the drafts.
- This folder is treated as the standalone Pebble design repository.

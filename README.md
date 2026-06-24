# MilaNoir Theme HTML Preview

MilaNoir is the static HTML design workspace for the new Milagift storefront theme.

This repository is intentionally scoped to design deliverables only: preview HTML, shared preview CSS, local SVG assets, and planning notes. It does not contain the MilaGift application code or Shopify theme implementation code.

## Preview Pages

- `mila-noir-custom-gifting-home-preview.html` - latest homepage design draft.
- `mila-noir-custom-gifting-home-preview-search-open.html` - homepage with search overlay opened.
- `mila-noir-theme-pages-preview.html` - design language, component library, responsive rules, and ecommerce state references.
- `mila-noir-product-detail-preview.html` - product detail page with inline customization area and related carousel.
- `mila-noir-collection-preview.html` - collection page with filter chips, sort, product grid, and square media cards.
- `mila-noir-products-listing-preview.html` - all-products listing page using the collection browsing system.
- `mila-noir-search-results-preview.html` - search results page with query field, suggestion chips, and no-result reference.
- `mila-noir-cart-preview.html` - cart page with POD item details, coupons, summary, and checkout entry.
- `mila-noir-checkout-preview.html` - checkout page with address, delivery, payment, coupon, and order summary components.
- `mila-noir-account-orders-preview.html` - account center and order list preview.
- `mila-noir-payment-entry-preview.html` - unpaid order payment recovery preview.
- `mila-noir-tracking-preview.html` - order tracking lookup and timeline preview.
- `mila-noir-faq-preview.html`, `mila-noir-about-preview.html`, `mila-noir-contact-preview.html`, `mila-noir-blog-preview.html`, `mila-noir-article-preview.html` - content and support templates.
- `mila-noir-404-preview.html`, `mila-noir-payment-success-preview.html`, `mila-noir-payment-failure-preview.html`, `mila-noir-payment-pending-preview.html` - system and payment result states.

## Local Preview

Open any HTML file directly, or run a small static server from this folder:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://localhost:8765/mila-noir-custom-gifting-home-preview.html
```

## Design Scope

- Source of truth for current visual direction: `mila-noir-custom-gifting-home-preview.html`.
- Shared design system reference: `mila-noir-theme-pages-preview.html`.
- Shared inner page CSS: `mila-noir-commerce-preview.css`.
- Shared inner page interactions: `mila-noir-commerce-preview.js`.
- Local icon/logo assets live in `assets/`.

## Notes

- Product imagery and product titles are sourced from current reference-site style examples and remote image URLs used in the drafts.
- This folder is treated as the standalone MilaNoir design repository.

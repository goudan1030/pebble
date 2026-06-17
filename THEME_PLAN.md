# Pebble Theme Plan

## Goal

Build a complete static HTML design system and page preview set for the new Milagift/Pebble storefront theme before implementing it in the real theme codebase.

## Priority

1. Complete homepage polish and keep it as the visual source of truth.
2. Maintain the design language page with typography, colors, radius, spacing, buttons, forms, states, ecommerce components, responsive rules, and scroll interactions.
3. Build high-priority commerce pages first: product detail, cart, and checkout.
4. Continue remaining page previews: collection/listing, search results, account orders, unpaid order payment entry, tracking, auth pages, and system result pages.
5. After HTML design approval, translate the patterns into the actual theme implementation.

## Current Page Coverage

- Homepage: complete draft with mega menu, search overlay, product rails, customizer drawer, FAQ, reviews, newsletter, and footer.
- Design language: complete living guide with components, forms, responsive rules, ecommerce states, and page application guidance.
- Product detail: active draft with square gallery, inline customizer, sticky gallery behavior, add-to-cart CTA, and related products carousel.
- Cart: active draft with POD custom item details, coupon summary, and checkout entry.
- Checkout: active draft with address, delivery, payment, coupon, and order summary flows.

## Remaining HTML Pages

- Collection/product listing page.
- Search results page.
- Account login/register/recovery pages.
- Account order list and unpaid order payment page.
- Order tracking page with logistics timeline.
- 404, payment success, payment failure, payment pending, and loading pages.
- FAQ/about/contact/blog content templates.

## Working Rules

- Keep all Pebble design deliverables inside this `output` repository.
- Do not modify MilaGift application/theme implementation code while iterating on static HTML drafts.
- Keep page headers, search overlay behavior, footer, radius scale, button styles, and mobile rules aligned with the homepage and design language page.
- When a shared pattern changes in a page draft, update `pebble-theme-pages-preview.html` as the design-language record.

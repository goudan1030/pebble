# MilaNoir Theme Plan

## Goal

Build a complete static HTML design system and page preview set for the new Milagift/MilaNoir storefront theme before implementing it in the real theme codebase.

## Priority

1. Complete homepage polish and keep it as the visual source of truth.
2. Maintain the design language page with typography, colors, radius, spacing, buttons, forms, states, ecommerce components, responsive rules, and scroll interactions.
3. Build high-priority commerce pages first: product detail, cart, and checkout.
4. Continue remaining page previews: collection/listing, search results, account orders, unpaid order payment entry, tracking, and system result pages.
5. After HTML design approval, translate the patterns into the actual theme implementation.

## Current Page Coverage

- Homepage: complete draft with mega menu, search overlay, product rails, customizer drawer, FAQ, reviews, newsletter, and footer.
- Design language: complete living guide with components, forms, responsive rules, ecommerce states, and page application guidance.
- Product detail: active draft with square gallery, inline customizer, sticky gallery behavior, add-to-cart CTA, and related products carousel.
- Cart: active draft with POD custom item details, coupon summary, and checkout entry.
- Checkout: active draft with address, delivery, payment, coupon, and order summary flows.
- Collection/product listing: static previews with filters, sorting, square product cards, hover CTAs, and active chip states.
- Search results: static preview with query shell, suggestions, result grid, and no-result recovery guidance.
- Account/payment/tracking: modal flows for login/register/recovery, plus static previews for account order list, unpaid payment recovery, and logistics timeline.
- Content/support/system: static previews for FAQ, about, contact, blog list, article, 404, and payment success/failure/pending states.

## Remaining HTML Pages

- No planned static HTML page categories remain from the original scope.
- Remaining work is polish, visual QA, route cleanup, and eventual theme-code implementation.

## Working Rules

- Keep all MilaNoir design deliverables inside this `output` repository.
- Do not modify MilaGift application/theme implementation code while iterating on static HTML drafts.
- Keep page headers, search overlay behavior, footer, radius scale, button styles, and mobile rules aligned with the homepage and design language page.
- When a shared pattern changes in a page draft, update `mila-noir-theme-pages-preview.html` as the design-language record.

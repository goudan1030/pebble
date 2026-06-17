const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const toast = $("#toast");
const showToast = (text) => {
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("is-visible");
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
};

$$(".search-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.add("search-open");
    button.setAttribute("aria-expanded", "true");
  });
});

$$(".search-close, .search-backdrop").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.remove("search-open");
    $$(".search-pill").forEach((item) => item.setAttribute("aria-expanded", "false"));
  });
});

$(".search-panel")?.addEventListener("click", (event) => {
  if (event.target.classList.contains("search-panel")) {
    document.body.classList.remove("search-open");
  }
});

$$("[data-toggle-group] button, .option-card, .payment-method").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-toggle-group], .shipping-options, .payment-stack, .filter-row, .account-nav");
    if (!group) return;
    $$("button", group).forEach((item) => item.classList.remove("is-selected", "is-active"));
    button.classList.add(button.classList.contains("filter-pill") || button.classList.contains("account-tab") ? "is-active" : "is-selected");
  });
});

$$(".accordion button, .faq-row button").forEach((button) => {
  button.addEventListener("click", () => button.parentElement.classList.toggle("is-open"));
});

$$(".js-toast").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast || `${button.textContent.trim()} ready.`));
});

$$(".js-pay-state").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target ? $(button.dataset.target) : null;
    target?.classList.add("is-visible");
    showToast(button.dataset.toast || "Payment state updated.");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("search-open");
  }
});

const revealItems = $$(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

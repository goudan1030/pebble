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

const initOfferBar = () => {
  const offer = $(".offer");
  if (!offer) return;
  const storageKey = "milagiftOfferClosed";
  const syncOfferState = () => document.body.classList.toggle("offer-hidden", offer.classList.contains("is-hidden"));
  try {
    if (localStorage.getItem(storageKey) === "true") {
      offer.classList.add("is-hidden");
    }
  } catch (error) {
    // Local files can disable storage in some browsers; the close button still works for this view.
  }
  syncOfferState();
  $$(".offer-close", offer).forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    offer.classList.add("is-hidden");
    syncOfferState();
    try {
      localStorage.setItem(storageKey, "true");
    } catch (error) {}
  }));
};

initOfferBar();

const initAboutHeader = () => {
  if (!document.body.classList.contains("about-page")) return;
  const update = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 4);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
};

initAboutHeader();

const ensureAuthModal = () => {
  if ($("#auth-modal")) return $("#auth-modal");
  const modal = document.createElement("div");
  modal.className = "auth-modal";
  modal.id = "auth-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Account access");
  modal.innerHTML = `
    <div class="auth-modal__backdrop" data-auth-close></div>
    <div class="auth-modal__surface">
      <button class="auth-modal__close" type="button" aria-label="Close account modal" data-auth-close>×</button>
      <section class="auth-modal__art" aria-hidden="true">
        <div class="auth-modal__brand"><span class="auth-modal__spark">✦</span><span>Milagift</span></div>
        <div class="auth-creatures">
          <div class="auth-creature auth-creature--purple"><div class="auth-eye-row"><span class="auth-eye"></span><span class="auth-eye"></span></div></div>
          <div class="auth-creature auth-creature--black"><div class="auth-eye-row"><span class="auth-eye" style="--eye:16px;--pupil:6px"></span><span class="auth-eye" style="--eye:16px;--pupil:6px"></span></div></div>
          <div class="auth-creature auth-creature--orange"><div class="auth-pupil-row"><span class="auth-pupil"></span><span class="auth-pupil"></span></div></div>
          <div class="auth-creature auth-creature--yellow"><div class="auth-pupil-row"><span class="auth-pupil"></span><span class="auth-pupil"></span></div><span class="auth-mouth"></span></div>
        </div>
        <div class="auth-modal__links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="pebble-contact-preview.html">Contact</a></div>
      </section>
      <section class="auth-modal__form">
        <div class="auth-modal__header"><h2>Welcome back!</h2><p>Please enter your details</p></div>
        <div class="auth-tabs" data-auth-tabs>
          <button class="auth-tab is-active" type="button" data-auth-mode="login">Log in</button>
          <button class="auth-tab" type="button" data-auth-mode="register">Sign up</button>
          <button class="auth-tab" type="button" data-auth-mode="forgot">Reset</button>
        </div>
        <form class="auth-panel is-active" data-auth-panel="login">
          <div class="auth-field"><label>Email</label><input type="email" value="anna@gmail.com" autocomplete="off" data-auth-watch /></div>
          <div class="auth-field"><label>Password</label><div class="auth-input-wrap"><input type="password" value="1234" data-auth-password data-auth-watch /><button class="auth-password-toggle" type="button" aria-label="Toggle password">👁</button></div></div>
          <div class="auth-row"><label><input type="checkbox" /> Remember for 30 days</label><button class="auth-link" type="button" data-auth-mode="forgot">Forgot password?</button></div>
          <button class="btn btn-primary auth-submit js-toast" type="button" data-toast="Login modal state ready.">Log in</button>
          <button class="auth-social" type="button">✉ Log in with Google</button>
          <p class="auth-switch">Don't have an account? <button class="auth-link" type="button" data-auth-mode="register">Sign Up</button></p>
        </form>
        <form class="auth-panel" data-auth-panel="register">
          <div class="auth-field"><label>Name</label><input type="text" value="Emma Taylor" data-auth-watch /></div>
          <div class="auth-field"><label>Email</label><input type="email" value="emma@example.com" data-auth-watch /></div>
          <div class="auth-field"><label>Password</label><div class="auth-input-wrap"><input type="password" value="customgift" data-auth-password data-auth-watch /><button class="auth-password-toggle" type="button" aria-label="Toggle password">👁</button></div></div>
          <button class="btn btn-primary auth-submit js-toast" type="button" data-toast="Register modal state ready.">Create account</button>
          <p class="auth-switch">Already have an account? <button class="auth-link" type="button" data-auth-mode="login">Log in</button></p>
        </form>
        <form class="auth-panel" data-auth-panel="forgot">
          <div class="auth-field"><label>Email</label><input type="email" value="emma@example.com" data-auth-watch /></div>
          <p class="section-lede" style="font-size:14px">Send a reset link and return to this same modal after the email is confirmed.</p>
          <button class="btn btn-primary auth-submit js-toast" type="button" data-toast="Password reset modal state ready.">Send reset link</button>
          <p class="auth-switch">Remembered it? <button class="auth-link" type="button" data-auth-mode="login">Back to login</button></p>
        </form>
      </section>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
};

const authModal = ensureAuthModal();
const setAuthMode = (mode = "login") => {
  $$("[data-auth-mode]", authModal).forEach((button) => button.classList.toggle("is-active", button.dataset.authMode === mode && button.classList.contains("auth-tab")));
  $$("[data-auth-panel]", authModal).forEach((panel) => panel.classList.toggle("is-active", panel.dataset.authPanel === mode));
  const title = $(".auth-modal__header h2", authModal);
  const lede = $(".auth-modal__header p", authModal);
  const copy = {
    login: ["Welcome back!", "Please enter your details"],
    register: ["Create your account", "Save custom gifts, addresses and orders"],
    forgot: ["Reset password", "We will send a secure reset link"]
  }[mode] || ["Welcome back!", "Please enter your details"];
  title.textContent = copy[0];
  lede.textContent = copy[1];
};

const openAuth = (mode = "login") => {
  setAuthMode(mode);
  document.body.classList.add("auth-open");
};

const closeAuth = () => document.body.classList.remove("auth-open", "auth-password-visible");

$("[data-auth-tabs]", authModal)?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-auth-mode]");
  if (button) setAuthMode(button.dataset.authMode);
});

authModal.addEventListener("click", (event) => {
  const modeButton = event.target.closest("[data-auth-mode]");
  if (modeButton) setAuthMode(modeButton.dataset.authMode);
  if (event.target.closest("[data-auth-close]")) closeAuth();
  const passwordToggle = event.target.closest(".auth-password-toggle");
  if (passwordToggle) {
    const input = passwordToggle.parentElement.querySelector("input");
    const visible = input.type === "password";
    input.type = visible ? "text" : "password";
    document.body.classList.toggle("auth-password-visible", visible);
  }
});

authModal.addEventListener("focusin", (event) => {
  if (event.target.matches("[data-auth-watch]")) authModal.classList.add("is-typing");
});

authModal.addEventListener("focusout", (event) => {
  if (event.target.matches("[data-auth-watch]")) authModal.classList.remove("is-typing");
});

document.addEventListener("mousemove", (event) => {
  if (!document.body.classList.contains("auth-open")) return;
  $$(".auth-eye, .auth-pupil", authModal).forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(Math.hypot(dx, dy) / 18, 6);
    eye.style.setProperty("--look-x", `${Math.cos(angle) * distance}px`);
    eye.style.setProperty("--look-y", `${Math.sin(angle) * distance}px`);
  });
});

$$("[aria-label='Account']").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openAuth("login");
  });
});

$$("button[data-open-auth]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openAuth(trigger.dataset.authMode || "login");
  });
});

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

$$("[data-filter-menu]").forEach((menu) => {
  const trigger = $(".filter-menu__button", menu);
  const label = $("strong", trigger);
  const options = $$(".filter-menu__panel button", menu);
  const close = () => {
    menu.classList.remove("is-open");
    trigger?.setAttribute("aria-expanded", "false");
  };
  trigger?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
  options.forEach((option, index) => {
    option.classList.toggle("is-active", index === 0);
    option.toggleAttribute("aria-current", index === 0);
    option.addEventListener("click", () => {
      options.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("aria-current");
      });
      option.classList.add("is-active");
      option.setAttribute("aria-current", "true");
      if (label) label.textContent = option.textContent.trim();
      close();
    });
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
});

$$(".listing-shortcuts__shell").forEach((shell) => {
  const rail = $(".shortcut-rail", shell);
  const prev = $(".shortcut-arrow--prev", shell);
  const next = $(".shortcut-arrow--next", shell);
  const scrollByPage = (direction) => {
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.72, behavior: "smooth" });
  };
  prev?.addEventListener("click", () => scrollByPage(-1));
  next?.addEventListener("click", () => scrollByPage(1));
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

const ensureBackToTop = () => {
  let button = $(".back-to-top");
  if (!button) {
    button = document.createElement("button");
    button.className = "back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Back to top");
    button.innerHTML = '<img class="svg-icon" src="assets/icon-arrow.svg?v=2" alt="" aria-hidden="true" />';
    document.body.appendChild(button);
  }
  const update = () => button.classList.toggle("is-visible", window.scrollY > Math.min(520, window.innerHeight * 0.72));
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
};

ensureBackToTop();

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

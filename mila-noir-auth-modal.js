(() => {
  if (window.__milagiftAuthModalReady) return;
  window.__milagiftAuthModalReady = true;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

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
          <div class="auth-modal__links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="mila-noir-contact-preview.html">Contact</a></div>
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
})();

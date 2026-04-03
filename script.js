const loadingScreen = document.getElementById("loading-screen");
const cursorGlow = document.getElementById("cursor-glow");
const revealItems = document.querySelectorAll(".reveal");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const hoverTargets = document.querySelectorAll("a, button");
const galleryTriggers = document.querySelectorAll("[data-lightbox-src], [data-lightbox-panel]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxPanel = document.getElementById("lightbox-panel");
const lightboxClose = document.getElementById("lightbox-close");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }
  }, 2200);
});

if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

hoverTargets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    if (!cursorGlow) return;
    cursorGlow.style.transform = "translate(-50%, -50%) scale(1.35)";
  });

  target.addEventListener("mouseleave", () => {
    if (!cursorGlow) return;
    cursorGlow.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const openLightbox = ({ src = "", alt = "", panel = "" }) => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxImage.style.display = src ? "block" : "none";
  if (lightboxPanel) {
    lightboxPanel.className = "lightbox-panel";
    lightboxPanel.innerHTML = "";
    if (panel) {
      lightboxPanel.classList.add("is-open", `bike-collage`, `bike-collage-${panel}`);
      lightboxPanel.innerHTML = `<div class="bike-collage-label">${alt}</div>`;
    }
  }
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxImage.style.display = "block";
  if (lightboxPanel) {
    lightboxPanel.className = "lightbox-panel";
    lightboxPanel.innerHTML = "";
  }
  document.body.classList.remove("menu-open");
};

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openLightbox({
      src: trigger.getAttribute("data-lightbox-src") || "",
      alt: trigger.getAttribute("data-lightbox-alt") || "",
      panel: trigger.getAttribute("data-lightbox-panel") || "",
    });
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});

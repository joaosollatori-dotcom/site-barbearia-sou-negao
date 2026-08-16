/* ==========================================================================
   Barbearia Sou Negão — interatividade
   ========================================================================== */

(function () {
  "use strict";

  const WHATSAPP_URL =
    "https://wa.me/5573988259991?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Barbearia%20Sou%20Neg%C3%A3o%20e%20gostaria%20de%20falar%20sobre%20um%20atendimento.";

  /* ---------- Ícones SVG (lucide-style) ---------- */
  const ICONS = {
    scissors:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
    sparkles:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>',
    calendarCheck:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
    graduationCap:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
    arrowUpRight:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  };

  /* ---------- Serviços ---------- */
  const services = [
    {
      index: "01",
      icon: ICONS.scissors,
      title: "Corte & acabamento",
      text: "Um visual pensado nos detalhes, da conversa à finalização.",
    },
    {
      index: "02",
      icon: ICONS.sparkles,
      title: "Barba & cuidado",
      text: "Ritual de presença para alinhar traço, textura e estilo.",
    },
    {
      index: "03",
      icon: ICONS.calendarCheck,
      title: "Prótese capilar",
      text: "Soluções capilares com discrição, técnica e resultado natural.",
    },
    {
      index: "04",
      icon: ICONS.graduationCap,
      title: "Formação profissional",
      text: "Cursos para barbeiros que desejam aprofundar a técnica.",
    },
  ];

  function renderServices() {
    const list = document.getElementById("serviceList");
    if (!list) return;

    list.innerHTML = services
      .map(
        (s) => `
        <article class="service-item">
          <span class="service-index">${s.index}</span>
          <div class="service-icon">${s.icon}</div>
          <div class="service-content">
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </div>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noreferrer" class="service-action" aria-label="Conversar sobre ${s.title}">
            ${ICONS.arrowUpRight}
          </a>
        </article>`
      )
      .join("");
  }

  /* ---------- Menu mobile ---------- */
  function setupMenu() {
    const button = document.getElementById("menuButton");
    const nav = document.getElementById("mobileNav");
    if (!button || !nav) return;

    function toggle(force) {
      const open = typeof force === "boolean" ? force : nav.classList.contains("open") ? false : true;
      nav.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    button.addEventListener("click", function () {
      toggle();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle(false);
      });
    });
  }

  /* ---------- Header scroll ---------- */
  function setupHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 28);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Ano dinâmico ---------- */
  function setCurrentYear() {
    const el = document.getElementById("currentYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    setupMenu();
    setupHeaderScroll();
    setCurrentYear();
  });
})();

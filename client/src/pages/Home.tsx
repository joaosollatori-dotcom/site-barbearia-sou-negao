/**
 * Design: Ateliê de Identidade — editorial tátil em preto, marfim e cobre.
 * Princípio: assimetria, auto-estima e caminhos diretos para o atendimento local.
 */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  GraduationCap,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5573988259991?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Barbearia%20Sou%20Neg%C3%A3o%20e%20gostaria%20de%20falar%20sobre%20um%20atendimento.";
const INSTAGRAM_URL = "https://www.instagram.com/barbeariasounegao/";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Senhor+do+Bonfim+109%2C+Bairro+de+F%C3%A1tima%2C+Itabuna%2C+BA";

const services = [
  {
    index: "01",
    icon: Scissors,
    title: "Corte & acabamento",
    text: "Um visual pensado nos detalhes, da conversa à finalização.",
  },
  {
    index: "02",
    icon: Sparkles,
    title: "Barba & cuidado",
    text: "Ritual de presença para alinhar traço, textura e estilo.",
  },
  {
    index: "03",
    icon: CalendarCheck,
    title: "Prótese capilar",
    text: "Soluções capilares com discrição, técnica e resultado natural.",
  },
  {
    index: "04",
    icon: GraduationCap,
    title: "Formação profissional",
    text: "Cursos para barbeiros que desejam aprofundar a técnica.",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      className="brand-mark"
      aria-label="Barbearia Sou Negão — início"
    >
      <img
        src="/manus-storage/sou-negao-logo_cfeeec06.png"
        alt="Símbolo da Barbearia Sou Negão"
        loading="lazy"
      />
      {!compact && (
        <span className="brand-copy">
          <strong>Sou Negão</strong>
          <small>Barbearia &amp; Prótese Capilar</small>
        </span>
      )}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="inicio">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#historia">A barbearia</a>
            <a href="#especialidades">Especialidades</a>
            <a href="#visite">Localização</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="header-cta"
          >
            <MessageCircle size={17} />
            <span>Falar no WhatsApp</span>
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(value => !value)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`mobile-nav ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <a href="#historia" onClick={closeMenu}>
            A barbearia
          </a>
          <a href="#especialidades" onClick={closeMenu}>
            Especialidades
          </a>
          <a href="#visite" onClick={closeMenu}>
            Localização
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Agendar uma conversa <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/manus-storage/sou-negao-hero_4ab38885.jpg"
            alt="Profissional finalizando um corte em ambiente de barbearia"
            width="1440"
            height="900"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-topline">
              <span>Itabuna, Bahia</span>
              <span>Desde 2010</span>
            </div>
            <p className="eyebrow hero-eyebrow">Sua imagem é assinatura</p>
            <h1 id="hero-title">
              Presença
              <br />
              <em>em cada corte.</em>
            </h1>
            <p className="hero-description">
              Corte, barba e soluções capilares para você se reconhecer no
              espelho todos os dias.
            </p>
            <div className="hero-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Converse com a equipe <ArrowUpRight size={19} />
              </a>
              <a href="#especialidades" className="text-link">
                Conheça o cuidado <ChevronDown size={17} />
              </a>
            </div>
          </div>
          <a
            href="#visite"
            className="hero-address"
            aria-label="Ver endereço da Barbearia Sou Negão"
          >
            <MapPin size={18} />
            <span>
              Rua Senhor do Bonfim, 109
              <br />
              Bairro de Fátima · Itabuna–BA
            </span>
          </a>
          <div className="hero-side-note">
            <span>SN</span>
            <i />
            Autoestima, técnica, presença
          </div>
        </section>

        <section
          className="manifesto-section"
          id="historia"
          aria-labelledby="manifesto-title"
        >
          <div className="manifesto-rule">
            <span>01</span>
            <i />
            <span>A barbearia</span>
          </div>
          <div className="manifesto-grid">
            <div className="manifesto-intro reveal-up">
              <SectionLabel>Mais que rotina</SectionLabel>
              <p className="overline-number">
                15<span>+</span>
              </p>
              <p className="number-caption">anos elevando autoestimas</p>
            </div>
            <div className="manifesto-copy reveal-up">
              <h2 id="manifesto-title">
                O cuidado que se vê.
                <br />
                <em>A confiança que fica.</em>
              </h2>
              <div className="copy-columns">
                <p>
                  A Barbearia Sou Negão une a conversa de bairro à técnica de
                  quem se aperfeiçoa continuamente. Cada atendimento começa pelo
                  seu estilo e termina no acabamento que faz sentido para a sua
                  rotina.
                </p>
                <p>
                  Em Itabuna, criamos uma experiência direta e respeitosa para
                  corte, barba e cuidados capilares — inclusive próteses
                  pensadas para um resultado natural.
                </p>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="underlined-link"
              >
                Acompanhe o trabalho no Instagram <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="craft-section"
          id="especialidades"
          aria-labelledby="services-title"
        >
          <div className="craft-title-row">
            <div>
              <SectionLabel>O que fazemos</SectionLabel>
              <h2 id="services-title">
                Cuidado com
                <br />
                <em>intenção.</em>
              </h2>
            </div>
            <p>
              Serviços para diferentes momentos, sempre com atenção ao que
              combina com você.
            </p>
          </div>
          <div className="service-list">
            {services.map(service => {
              const Icon = service.icon;
              return (
                <article className="service-item" key={service.index}>
                  <span className="service-index">{service.index}</span>
                  <div className="service-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="service-action"
                    aria-label={`Conversar sobre ${service.title}`}
                  >
                    <ArrowUpRight size={23} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="prosthesis-section"
          aria-labelledby="prosthesis-title"
        >
          <div className="prosthesis-visual">
            <img
              src="/manus-storage/sou-negao-protese_d61671f6.jpg"
              alt="Atendimento técnico de prótese capilar em uma barbearia"
              width="720"
              height="730"
              loading="lazy"
            />
            <div className="image-caption">
              <span>Especialidade</span>
              <strong>Prótese Capilar</strong>
            </div>
          </div>
          <div className="prosthesis-copy">
            <SectionLabel>Soluções capilares</SectionLabel>
            <h2 id="prosthesis-title">
              Quando o resultado precisa ser <em>natural.</em>
            </h2>
            <p>
              A prótese capilar é um cuidado que merece escuta, critério e
              discrição. A nossa equipe conversa com você sobre as
              possibilidades para encontrar uma solução que acompanhe o seu
              visual.
            </p>
            <ul>
              <li>
                <span>01</span>Atendimento individual e conversa inicial
              </li>
              <li>
                <span>02</span>Opções para diferentes texturas e estilos
              </li>
              <li>
                <span>03</span>Foco em naturalidade e conforto visual
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="dark-button"
            >
              Tire suas dúvidas no WhatsApp <ArrowUpRight size={19} />
            </a>
          </div>
        </section>

        <section
          className="detail-band"
          aria-label="Detalhes da experiência Sou Negão"
        >
          <img
            src="/manus-storage/sou-negao-details_76f11e0b.jpg"
            alt="Ferramentas de barbearia dispostas sobre uma bancada de madeira"
            width="1440"
            height="440"
            loading="lazy"
          />
          <div className="detail-overlay" />
          <div className="detail-content">
            <p>
              Sem pressa.
              <br />
              Sem fórmula pronta.
            </p>
            <span>Atenção ao seu estilo, do início ao acabamento.</span>
          </div>
        </section>

        <section
          className="visit-section"
          id="visite"
          aria-labelledby="visit-title"
        >
          <div className="visit-copy">
            <SectionLabel>Onde estamos</SectionLabel>
            <h2 id="visit-title">
              Seu próximo cuidado
              <br />
              começa <em>aqui.</em>
            </h2>
            <div className="location-block">
              <MapPin size={23} />
              <p>
                Rua Senhor do Bonfim, 109
                <br />
                <strong>Bairro de Fátima · Itabuna–BA</strong>
              </p>
            </div>
            <div className="contact-row">
              <a href="tel:+5573988259991">
                <Phone size={17} />
                (73) 98825-9991
              </a>
              <a href="tel:+5573988271846">
                <Phone size={17} />
                (73) 98827-1846
              </a>
            </div>
            <div className="visit-actions">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Ver no mapa <ArrowUpRight size={19} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-link dark-text"
              >
                Falar com a equipe <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div className="visit-image-wrap">
            <img
              src="/manus-storage/sou-negao-ambience_11f3ddc3.jpg"
              alt="Interior acolhedor de uma barbearia contemporânea"
              width="720"
              height="600"
              loading="lazy"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="map-stamp"
            >
              <MapPin size={18} />
              <span>
                Itabuna, BA
                <br />
                <strong>Como chegar</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <BrandMark compact />
          <p>
            Seu visual não é detalhe.
            <br />
            <em>É assinatura.</em>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="footer-chat"
          >
            Falar no WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>Barbearia Sou Negão · Itabuna–BA</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={16} />
            @barbeariasounegao
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

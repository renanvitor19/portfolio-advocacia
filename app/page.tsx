'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Menu,
  MessageCircle,
} from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  ['Sobre', '#sobre'],
  ['Trajetória', '#trajetoria'],
  ['Atuação', '#atuacao'],
  ['Conteúdo', '#conteudo'],
];

const practiceAreas = [
  {
    number: '01',
    title: 'Direitos fundamentais',
    text: 'Defesa de interesses individuais com análise cuidadosa do contexto e orientação jurídica responsável.',
    note: 'Proteção de direitos · orientação estratégica',
  },
  {
    number: '02',
    title: 'Relações de consumo',
    text: 'Atuação em cobranças indevidas, juros abusivos, contratos, negativação e outros conflitos de consumo.',
    note: 'Contratos · cobranças · responsabilidade',
  },
  {
    number: '03',
    title: 'Solução de conflitos',
    text: 'Negociação e conciliação conduzidas com estratégia, clareza e atenção às particularidades de cada caso.',
    note: 'Negociação · conciliação · acordos',
  },
  {
    number: '04',
    title: 'Condução processual',
    text: 'Organização técnica e acompanhamento próximo para que cada decisão seja tomada com informação e segurança.',
    note: 'Análise · processo · acompanhamento',
  },
];

const insights = [
  {
    type: 'Orientação',
    title: 'Juros abusivos e endividamento',
    text: 'Informação clara para reconhecer práticas abusivas e escolher os próximos passos.',
  },
  {
    type: 'Prática',
    title: 'Conciliação como caminho',
    text: 'Escuta, preparo e estratégia para construir soluções possíveis antes do conflito se prolongar.',
  },
  {
    type: 'Presença',
    title: 'Advocacia além do processo',
    text: 'Participação em eventos e diálogo constante sobre direitos, cidadania e acesso à justiça.',
  },
];

function BrandScene() {
  return (
    <div className="brand-stage">
      <div className="brand-stage-inner">
        <span
          className="brand-stage-logo"
          role="img"
          aria-label="Marca oficial Layla Henrique"
        />
      </div>
    </div>
  );
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a
        className="brand"
        href="#inicio"
        aria-label="Dra. Layla Henrique — início"
      >
        <span className="brand-seal">
          <img src="/layla-logo.png" alt="" />
        </span>
        <span>
          <small>Advogada · OAB/PE 62.024</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <a
        className="header-contact"
        href="https://wa.me/558194532793"
        target="_blank"
        rel="noreferrer"
      >
        Conversar <ArrowUpRight size={16} />
      </a>

      <Sheet>
        <SheetTrigger
          render={
            <button
              className="mobile-trigger"
              type="button"
              aria-label="Abrir menu"
            />
          }
        >
          <Menu size={22} />
        </SheetTrigger>
        <SheetContent className="mobile-sheet" showCloseButton>
          <SheetTitle className="mobile-sheet-title">Layla Henrique</SheetTitle>
          <div className="mobile-links">
            {navigation.map(([label, href]) => (
              <SheetClose key={href} render={<a href={href} />}>
                <span>{label}</span>
                <ArrowUpRight size={18} />
              </SheetClose>
            ))}
          </div>
          <a
            className="mobile-whatsapp"
            href="https://wa.me/558194532793"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Falar pelo WhatsApp
          </a>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="hero-coordinate" aria-hidden="true">
          08°03&apos;S — 34°52&apos;W
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Advocacia e Consultoria Jurídica</span>
          </p>
          <h1>
            Seu direito começa
            <br />
            com uma <em>boa conversa.</em>
          </h1>
          <p className="hero-intro">
            Atuação jurídica pessoal, estratégica e transparente para
            transformar dúvidas em decisões conscientes.
          </p>
          <div className="hero-actions">
            <a
              className="primary-cta"
              href="https://wa.me/558194532793"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Falar com Layla{' '}
              <ArrowUpRight size={17} />
            </a>
            <a
              className="text-link"
              href="https://www.instagram.com/dra.laylahenrique"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={17} /> Acompanhar no Instagram
            </a>
          </div>
        </div>
        <BrandScene />
        <div className="hero-watermark" aria-hidden="true">
          <span>LAYLA</span>
          <span>HENRIQUE</span>
        </div>
        <a className="scroll-cue" href="#sobre">
          <span>Conheça minha trajetória</span>
          <i>
            <ArrowDown size={15} />
          </i>
        </a>
      </section>

      <section
        className="credential-bar"
        aria-label="Credenciais profissionais"
      >
        <div>
          <small>Atuação</small>
          <strong>Advocacia desde 2023</strong>
        </div>
        <div>
          <small>Formação</small>
          <strong>Pós-graduanda em Processos</strong>
        </div>
        <div>
          <small>Compromisso</small>
          <strong>Técnica, clareza e presença</strong>
        </div>
      </section>

      <section className="about section-pad" id="sobre">
        <div className="about-index" aria-hidden="true">
          01
        </div>
        <div className="about-copy reveal">
          <p className="section-label">Sobre</p>
          <h2>
            Conhecimento técnico.
            <br />
            <em>Presença humana.</em>
          </h2>
          <p className="about-lead">
            Sou Layla Henrique, advogada, pós-graduanda em Processos e movida
            pela convicção de que compreender vem antes de orientar.
          </p>
          <p>
            Minha atuação começa pela escuta. Analiso cada situação com
            profundidade, explico possibilidades com linguagem clara e construo
            a estratégia jurídica adequada ao contexto — sem fórmulas prontas e
            sem distância.
          </p>
          <p>
            Para mim, exercer a advocacia é estar presente quando uma decisão
            importante precisa ser tomada.
          </p>
          <div className="signature">
            <span>Layla Henrique</span>
            <small>Advogada · Pernambuco</small>
          </div>
        </div>
        <div className="about-visual reveal">
          <div className="portrait-frame">
            <img
              src="/layla-oab-escadaria.jpg"
              alt="Layla Henrique na sede da OAB Pernambuco"
            />
          </div>
        </div>
      </section>

      <section className="trajectory section-pad" id="trajetoria">
        <div className="section-intro reveal">
          <p className="section-label light">Trajetória</p>
          <h2>
            Autoridade se constrói
            <br />
            <em>em movimento.</em>
          </h2>
        </div>
        <div className="timeline">
          <article className="timeline-item reveal">
            <div className="timeline-meta">
              <span>01</span>
              <small>2023 · Inscrição profissional</small>
            </div>
            <h3>Aprovação na OAB</h3>
            <p>
              O início de uma prática comprometida com ética, responsabilidade e
              defesa de direitos.
            </p>
          </article>
          <article className="timeline-item reveal">
            <div className="timeline-meta">
              <span>02</span>
              <small>Formação em andamento</small>
            </div>
            <h3>Pós-graduanda em Processos</h3>
            <p>
              Conhecimento técnico em desenvolvimento contínuo para a análise,
              estratégia e condução cuidadosa de cada demanda.
            </p>
          </article>
          <article className="timeline-item reveal">
            <div className="timeline-meta">
              <span>03</span>
              <small>Atuação atual</small>
            </div>
            <h3>Advocacia e diálogo</h3>
            <p>
              Participação em conciliações, eventos profissionais e produção de
              conteúdo jurídico acessível.
            </p>
          </article>
        </div>
      </section>

      <section className="practice section-pad" id="atuacao">
        <div className="practice-heading reveal">
          <p className="section-label">Frentes de atuação</p>
          <h2>
            Estratégia para o que
            <br />
            <em>realmente importa.</em>
          </h2>
        </div>
        <div className="practice-list">
          {practiceAreas.map((area) => (
            <article className="practice-row reveal" key={area.number}>
              <span className="practice-number">{area.number}</span>
              <h3>{area.title}</h3>
              <div>
                <p>{area.text}</p>
                <small>{area.note}</small>
              </div>
            </article>
          ))}
        </div>
        <p className="ethics-note">
          A análise e os resultados dependem das circunstâncias específicas de
          cada caso.
        </p>
      </section>

      <section className="insights section-pad" id="conteudo">
        <div className="insights-heading reveal">
          <p className="section-label light">Conteúdo e presença</p>
          <h2>
            Informação também é<br />
            <em>acesso à justiça.</em>
          </h2>
          <a
            href="https://www.instagram.com/dra.laylahenrique"
            target="_blank"
            rel="noreferrer"
          >
            Ver perfil no Instagram <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="insights-grid">
          {insights.map((item) => (
            <article className="insight-card reveal" key={item.title}>
              <div>
                <span>{item.type}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <img
          className="contact-justice"
          src="/lady-justice-brand.png"
          alt=""
          aria-hidden="true"
        />
        <div className="contact-copy reveal">
          <p className="section-label light">Contato</p>
          <h2>
            Vamos começar por
            <br />
            uma <em>boa conversa?</em>
          </h2>
          <p>
            Conte sua situação com tranquilidade. O primeiro passo é compreender
            o que você precisa.
          </p>
          <div className="contact-actions">
            <a
              className="dark-cta"
              href="https://wa.me/558194532793"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> Conversar pelo WhatsApp{' '}
              <ArrowUpRight size={18} />
            </a>
            <a
              className="instagram-link"
              href="https://www.instagram.com/dra.laylahenrique"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={18} /> @dra.laylahenrique
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-seal">
            <img src="/layla-logo.png" alt="" />
          </span>
          <span>
            <b>Layla Henrique</b>
            <small>Advogada · OAB/PE 62.024</small>
          </span>
        </a>
        <p>Advocacia pessoal, estratégica e transparente.</p>
        <a href="#inicio">
          Voltar ao início <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}

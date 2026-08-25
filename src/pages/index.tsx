import React, { useEffect } from "react"
import type { PageProps } from "gatsby"

import SEO from "../components/seo"
import { projectsData } from "../data/projectsData"
import "../styles/portfolio.css"

const projectDetails = {
  1: {
    eyebrow: "Mobile product / 2026",
    summary: "Private, AI-assisted receipt capture.",
    art: "receipt",
    size: "large",
  },
  2: {
    eyebrow: "Data platform",
    summary: "Australian deals, collected in one place.",
    art: "data",
    size: "small",
  },
  3: {
    eyebrow: "AI infrastructure",
    summary: "A private, multi-model AI workspace.",
    art: "chat",
    size: "large",
  },
  4: {
    eyebrow: "Developer tool",
    summary: "Real-time validation inside VS Code.",
    art: "code",
    size: "small",
  },
}

const ProjectArtwork = ({ type }: { type: string }) => {
  if (type === "receipt") {
    return (
      <div
        className="portfolio-project-art portfolio-receipt-art"
        aria-hidden="true"
      >
        <div className="portfolio-phone">
          <div className="portfolio-phone-screen">
            <span>SCAN</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === "data") {
    return (
      <div
        className="portfolio-project-art portfolio-data-art"
        aria-hidden="true"
      >
        <div className="portfolio-data-rings">
          <i />
          <i />
        </div>
      </div>
    )
  }

  if (type === "code") {
    return (
      <div
        className="portfolio-project-art portfolio-code-art"
        aria-hidden="true"
      >
        <code>
          <span>01&nbsp; {"{"}</span>
          <span>
            02&nbsp;&nbsp; <b>&quot;validate&quot;</b>: true,
          </span>
          <span>
            03&nbsp;&nbsp; &quot;expression&quot;: &quot;$.items&quot;,
          </span>
          <span>
            04&nbsp;&nbsp; &quot;result&quot;: [<b>valid</b>]
          </span>
          <span>05&nbsp; {"}"}</span>
        </code>
      </div>
    )
  }

  return (
    <div
      className="portfolio-project-art portfolio-chat-art"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  )
}

const PortfolioPage = (_props: PageProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const orderedProjects = [
    projectsData.find(project => project.id === 1),
    projectsData.find(project => project.id === 2),
    projectsData.find(project => project.id === 4),
    projectsData.find(project => project.id === 3),
  ].filter(Boolean)

  return (
    <div className="portfolio-page" id="top">
      <SEO title="Product Engineer" />
      <header className="portfolio-nav-wrap">
        <nav className="portfolio-nav" aria-label="Primary navigation">
          <a className="portfolio-brand" href="#top" aria-label="Vince — home">
            <span className="portfolio-brand-mark">V</span>
            <span>Vince</span>
          </a>
          <div className="portfolio-nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a
              className="portfolio-nav-cta"
              href="mailto:fitmavincent@gmail.com"
            >
              Let&apos;s talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="portfolio-hero portfolio-shell">
          <div className="portfolio-hero-copy">
            <p className="portfolio-status portfolio-mono">
              <span className="portfolio-status-dot" />
              Available for thoughtful projects
            </p>
            <h1>
              I build useful software with <em>curiosity.</em>
            </h1>
            <div className="portfolio-intro">
              <span className="portfolio-intro-line" />
              <p>
                Vince is a Brisbane-based product engineer turning practical
                problems into clear, dependable digital products—from AI tools
                to mobile apps and data platforms.
              </p>
            </div>
            <div className="portfolio-actions">
              <a
                className="portfolio-button portfolio-button-primary"
                href="#work"
              >
                Explore selected work <span>↓</span>
              </a>
              <a
                className="portfolio-button portfolio-button-secondary"
                href="#about"
              >
                More about me
              </a>
            </div>
          </div>

          <div
            className="portfolio-orbit"
            aria-label="Vince's avatar surrounded by areas of expertise"
          >
            <span className="portfolio-orbit-dot" />
            <div
              className="portfolio-avatar"
              role="img"
              aria-label="Minimal neutral face avatar"
            >
              <div className="portfolio-tiger">
                <span className="portfolio-tiger-glyph" />
              </div>
            </div>
            <span className="portfolio-chip portfolio-chip-one">
              AI / MOBILE
            </span>
            <span className="portfolio-chip portfolio-chip-two">
              WEB / DATA
            </span>
          </div>
        </section>

        <div
          className="portfolio-ticker portfolio-mono"
          aria-label="Areas of expertise"
        >
          <div>
            <span>Product engineering</span>
            <b>✳</b>
            <span>AI integrations</span>
            <b>✳</b>
            <span>React &amp; TypeScript</span>
            <b>✳</b>
            <span>Mobile apps</span>
            <b>✳</b>
            <span>Useful experiments</span>
            <b>✳</b>
            <span aria-hidden="true">Product engineering</span>
            <b aria-hidden="true">✳</b>
            <span aria-hidden="true">AI integrations</span>
            <b aria-hidden="true">✳</b>
            <span aria-hidden="true">React &amp; TypeScript</span>
            <b aria-hidden="true">✳</b>
            <span aria-hidden="true">Mobile apps</span>
            <b aria-hidden="true">✳</b>
            <span aria-hidden="true">Useful experiments</span>
            <b aria-hidden="true">✳</b>
          </div>
        </div>

        <section
          className="portfolio-work portfolio-shell"
          id="work"
          data-reveal
        >
          <div className="portfolio-section-heading">
            <div>
              <p className="portfolio-kicker portfolio-mono">
                01 / Selected work
              </p>
              <h2>Things I&apos;ve shipped.</h2>
            </div>
            <p>
              A focused set of products, tools, and experiments. Each card opens
              directly to the live project.
            </p>
          </div>

          <div className="portfolio-project-grid">
            {orderedProjects.map(project => {
              if (!project) return null
              const detail = projectDetails[project.id]

              return (
                <a
                  className={`portfolio-project-card portfolio-project-${detail.size}`}
                  href={project.liveUrl}
                  key={project.id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <div className="portfolio-project-top portfolio-mono">
                    <span>{detail.eyebrow}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <ProjectArtwork type={detail.art} />
                  <div className="portfolio-project-info">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{detail.summary}</p>
                    </div>
                    <span>{project.technologies.slice(0, 3).join(" · ")}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <section
          className="portfolio-about portfolio-shell"
          id="about"
          data-reveal
        >
          <div>
            <p className="portfolio-kicker portfolio-mono">02 / About</p>
            <h2>
              Engineer by trade. <em>Explorer</em> by nature.
            </h2>
          </div>
          <div className="portfolio-about-copy">
            <p>
              I like taking fuzzy, everyday problems and making them tangible.
              My work moves comfortably between product thinking, front-end
              craft, back-end systems, automation, and AI—always with an eye for
              usefulness over novelty.
            </p>
            <dl>
              <div>
                <dt>Product engineering</dt>
                <dd>Idea → launch</dd>
              </div>
              <div>
                <dt>Web &amp; mobile</dt>
                <dd>React · Gatsby · React Native</dd>
              </div>
              <div>
                <dt>AI &amp; automation</dt>
                <dd>LLMs · OCR · data workflows</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="portfolio-contact" id="contact" data-reveal>
          <div className="portfolio-contact-inner portfolio-shell">
            <div className="portfolio-contact-main">
              <div>
                <p className="portfolio-mono">Have an interesting problem?</p>
                <h2>Let&apos;s make it useful.</h2>
              </div>
              <a
                className="portfolio-contact-button portfolio-mono"
                href="mailto:fitmavincent@gmail.com"
              >
                Say hello <span>↗</span>
              </a>
            </div>
            <footer>
              <span>Vince © {new Date().getFullYear()}</span>
              <span>
                <a
                  href="https://github.com/Fitmavincent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                · <a href="mailto:fitmavincent@gmail.com">Email</a>
              </span>
              <span>Brisbane, Australia</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PortfolioPage

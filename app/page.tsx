import Image from "next/image";

const docs = [
  {
    title: "Whitepaper",
    body: "The protocol thesis, positioning, and high-level design for AnchorChain.",
    href: "https://github.com/dutraa/anchorchain/blob/main/docs/whitepaper.md",
    cta: "Read whitepaper",
  },
  {
    title: "Quickstart Guide",
    body: "Run locally, create chains, append entries, and inspect receipts step by step.",
    href: "https://github.com/dutraa/anchorchain/blob/main/docs/quickstart.md",
    cta: "Open quickstart",
  },
  {
    title: "Architecture",
    body: "A technical overview of chains, entries, anchoring, receipts, and the security model.",
    href: "https://github.com/dutraa/anchorchain/blob/main/docs/architecture.md",
    cta: "View architecture",
  },
];

const useCases = [
  {
    title: "AI provenance",
    body: "Track datasets, evaluations, and model artifacts in a verifiable timeline.",
  },
  {
    title: "Software supply chain",
    body: "Record build attestations, release receipts, artifact hashes, and deployment history.",
  },
  {
    title: "Compliance evidence",
    body: "Preserve approvals, checkpoints, policy evidence, and audit-ready records.",
  },
  {
    title: "IoT + machine telemetry",
    body: "Anchor sensor events, maintenance histories, firmware changes, and machine logs.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create a chain",
    body: "Open a logical stream for a dataset, device, document, or workflow.",
  },
  {
    step: "02",
    title: "Append entries",
    body: "Write immutable events as records occur over time without rewriting history.",
  },
  {
    step: "03",
    title: "Generate receipts",
    body: "Produce proofs that an entry was included and committed to the protocol timeline.",
  },
  {
    step: "04",
    title: "Verify independently",
    body: "Audit and validate history whenever trust matters downstream.",
  },
];

const principles = [
  "Append-only event history",
  "Cryptographic receipts",
  "Independent verification",
  "Developer-friendly workflows",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <div className="brand-logo-wrap">
              <Image
                src="/anchorchain-logo.jpg"
                alt="AnchorChain logo"
                width={56}
                height={56}
                className="brand-logo"
                priority
              />
            </div>
            <div>
              <div className="brand-title">AnchorChain</div>
              <div className="brand-subtitle">Tamper-evident event infrastructure</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#why">Why AnchorChain</a>
            <a href="#how">How It Works</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#docs">Docs</a>
            <a
              href="https://github.com/dutraa/anchorchain"
              target="_blank"
              rel="noreferrer"
              className="nav-button"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy-col">
            <div className="eyebrow">Factom lineage, modernized for developers</div>
            <h1 className="hero-title">
              Verifiable event history for records, receipts, and machine trust.
            </h1>
            <p className="hero-copy">
              AnchorChain is built for systems that need proof, chronology, and integrity — not generic
              smart-contract complexity. Create chains, append immutable entries, and generate
              cryptographic receipts that can be independently verified.
            </p>

            <div className="hero-actions">
              <a href="#docs" className="button button-primary">Read the Docs</a>
              <a href="https://github.com/dutraa/anchorchain" target="_blank" rel="noreferrer" className="button button-secondary">
                View GitHub
              </a>
            </div>

            <div className="pill-grid">
              {principles.map((item) => (
                <div key={item} className="pill">{item}</div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-logo-card">
              <Image
                src="/anchorchain-logo.jpg"
                alt="AnchorChain selected logo"
                width={420}
                height={420}
                className="hero-logo"
                priority
              />
              <h2>AnchorChain</h2>
              <p>
                A protocol identity for tamper-evident chains, cryptographic receipts,
                and durable machine history.
              </p>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <strong>Chains</strong>
                <span>Ordered streams</span>
              </div>
              <div className="mini-card">
                <strong>Entries</strong>
                <span>Immutable events</span>
              </div>
              <div className="mini-card">
                <strong>Receipts</strong>
                <span>Proof of inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <div className="section-copy">
            <div className="section-label">Why AnchorChain</div>
            <h2>Built for proof, not noise.</h2>
            <p>
              Most organizations do not need a world computer for every workflow. They need
              trustworthy proof that records existed, arrived in sequence, and were not altered
              later. AnchorChain is designed around that narrower, more durable problem.
            </p>
          </div>

          <div className="card-grid three">
            <div className="card">
              <h3>Purpose-built for evidence trails</h3>
              <p>Optimized for append-only history instead of broad, generic computation.</p>
            </div>
            <div className="card">
              <h3>Receipts over ambiguity</h3>
              <p>Integrity and chronology become portable to downstream systems and audits.</p>
            </div>
            <div className="card">
              <h3>Cleaner developer experience</h3>
              <p>Modern APIs and simpler workflows make the protocol easier to run and integrate.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section section-alt">
        <div className="container">
          <div className="section-copy">
            <div className="section-label">How It Works</div>
            <h2>Simple primitives, durable trust.</h2>
            <p>
              The model is intentionally simple. A chain represents an event stream. Entries append
              immutable data. Receipts prove inclusion. Anchoring strengthens trust by committing
              summarized state externally.
            </p>
          </div>

          <div className="card-grid four">
            {steps.map((item) => (
              <div key={item.step} className="card card-dark">
                <div className="step-tag">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="section">
        <div className="container">
          <div className="section-copy">
            <div className="section-label">Use Cases</div>
            <h2>Best where chronology and integrity matter.</h2>
            <p>
              AnchorChain is strongest where independent verification is non-negotiable.
            </p>
          </div>

          <div className="card-grid four">
            {useCases.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="section-copy">
            <div className="section-label">Positioning</div>
            <h2>From Factom to AnchorChain.</h2>
            <p>
              AnchorChain carries forward the strongest part of the original thesis: tamper-evident,
              append-only event infrastructure for trustworthy records. The focus is not generic
              smart contracts. The focus is chains, entries, receipts, and verifiable history.
            </p>
          </div>

          <div className="stat-panel">
            <div className="stat-card">
              <span>Identity</span>
              <strong>Tamper-evident event infrastructure</strong>
            </div>
            <div className="stat-card">
              <span>Core primitives</span>
              <strong>Chains · Entries · Receipts</strong>
            </div>
            <div className="stat-card">
              <span>Best-fit workloads</span>
              <strong>Evidence trails, provenance, compliance, telemetry</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="section">
        <div className="container">
          <div className="section-copy">
            <div className="section-label">Documentation</div>
            <h2>Start with the protocol, then go deeper.</h2>
            <p>
              Everything below is already wired to your GitHub docs.
            </p>
          </div>

          <div className="card-grid three">
            {docs.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="card card-link"
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="card-cta">{item.cta} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <div className="section-label">Early Infrastructure</div>
              <h2>AnchorChain is being rebuilt for a world that needs proof.</h2>
              <p>
                For datasets, software artifacts, machine telemetry, and compliance evidence,
                trustworthy history is no longer optional. AnchorChain aims to make verifiable event
                timelines easy to build, inspect, and share.
              </p>
            </div>

            <div className="hero-actions">
              <a href="https://github.com/dutraa/anchorchain" target="_blank" rel="noreferrer" className="button button-primary">
                Explore the Repo
              </a>
              <a href="#top" className="button button-secondary">Back to Top</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 AnchorChain. Tamper-evident event infrastructure.</div>
          <div className="footer-links">
            <a href="#docs">Docs</a>
            <a href="https://github.com/dutraa/anchorchain" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Link } from 'react-router-dom';

function HomePage() {
  const expertise = [
    'Custom software platforms',
    'Cloud-native engineering',
    'Product strategy and UX',
    'API and systems integration',
  ];

  const projects = [
    {
      title: 'FinEdge Analytics',
      description:
        'A secure dashboard that helps finance teams track forecasts, approvals, and revenue movement in real time.',
    },
    {
      title: 'PulseCare Connect',
      description:
        'A patient engagement portal with appointment workflows, encrypted records, and clinic operations tooling.',
    },
    {
      title: 'ShipGrid Ops',
      description:
        'A logistics control center for dispatch planning, shipment visibility, and warehouse performance reporting.',
    },
  ];

  return (
    <main className="HomePage">
      <section className="HomePage__hero">
        <div className="HomePage__heroContent">
          <p className="HomePage__eyebrow">Software development company</p>
          <h1 className="HomePage__title">
            Engineering reliable digital products for ambitious teams.
          </h1>
          <p className="HomePage__intro">
            Smartlogix AI designs and builds scalable web apps, cloud systems,
            and business platforms for companies that need dependable technical
            execution.
          </p>
          <div className="HomePage__actions">
            <a className="HomePage__primaryButton" href="#projects">
              View Projects
            </a>
            <Link className="HomePage__secondaryButton" to="/careers">
              Join Our Team
            </Link>
          </div>
        </div>
        <div className="HomePage__metrics" aria-label="Company metrics">
          <div className="HomePage__metric">
            <span className="HomePage__metricValue">48+</span>
            <span className="HomePage__metricLabel">Products delivered</span>
          </div>
          <div className="HomePage__metric">
            <span className="HomePage__metricValue">12</span>
            <span className="HomePage__metricLabel">Cloud specialists</span>
          </div>
          <div className="HomePage__metric">
            <span className="HomePage__metricValue">96%</span>
            <span className="HomePage__metricLabel">Client retention</span>
          </div>
        </div>
      </section>

      <section className="HomePage__section">
        <div className="HomePage__sectionHeader">
          <p className="HomePage__eyebrow">Technical expertise</p>
          <h2 className="HomePage__sectionTitle">
            Full-cycle delivery from architecture to launch.
          </h2>
        </div>
        <div className="HomePage__expertiseGrid">
          {expertise.map((item) => (
            <article className="HomePage__expertiseCard" key={item}>
              <span className="HomePage__expertiseMark" />
              <h3 className="HomePage__cardTitle">{item}</h3>
              <p className="HomePage__cardText">
                Senior engineers pair product thinking with implementation
                discipline to move complex work forward with clarity.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="HomePage__section HomePage__section--muted" id="projects">
        <div className="HomePage__sectionHeader">
          <p className="HomePage__eyebrow">Completed projects</p>
          <h2 className="HomePage__sectionTitle">
            Practical software built for real operating teams.
          </h2>
        </div>
        <div className="HomePage__projectList">
          {projects.map((project) => (
            <article className="HomePage__projectCard" key={project.title}>
              <h3 className="HomePage__cardTitle">{project.title}</h3>
              <p className="HomePage__cardText">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;

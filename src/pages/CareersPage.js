function CareersPage() {
  const jobs = [
    {
      title: 'Senior React Engineer',
      type: 'Full-time',
      location: 'Hyderabad / Remote',
      summary:
        'Build polished client-facing applications with reusable components, strong state management, and accessible UI patterns.',
    },
    {
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Bengaluru / Remote',
      summary:
        'Design APIs, data models, and cloud services that support high-traffic software products for enterprise clients.',
    },
    {
      title: 'UI/UX Designer',
      type: 'Contract',
      location: 'Remote',
      summary:
        'Create clean product flows, wireframes, prototypes, and design systems for web and SaaS platforms.',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="CareersPage">
      <section className="CareersPage__hero">
        <p className="CareersPage__eyebrow">Careers</p>
        <h1 className="CareersPage__title">Build serious software with a focused team.</h1>
        <p className="CareersPage__intro">
          We are hiring engineers, designers, and product-minded builders who
          enjoy solving client problems with clean architecture and thoughtful
          execution.
        </p>
      </section>

      <section className="CareersPage__content">
        <div className="CareersPage__jobs">
          <div className="CareersPage__sectionHeader">
            <p className="CareersPage__eyebrow">Open roles</p>
            <h2 className="CareersPage__sectionTitle">Job postings</h2>
          </div>

          {jobs.map((job) => (
            <article className="CareersPage__jobCard" key={job.title}>
              <div className="CareersPage__jobTopline">
                <h3 className="CareersPage__jobTitle">{job.title}</h3>
                <span className="CareersPage__jobType">{job.type}</span>
              </div>
              <p className="CareersPage__jobLocation">{job.location}</p>
              <p className="CareersPage__jobSummary">{job.summary}</p>
            </article>
          ))}
        </div>

        <section className="CareersPage__applicationPanel">
          <div className="CareersPage__sectionHeader">
            <p className="CareersPage__eyebrow">Apply now</p>
            <h2 className="CareersPage__sectionTitle">Application form</h2>
          </div>

          <form className="CareersPage__form" onSubmit={handleSubmit}>
            <label className="CareersPage__field">
              <span className="CareersPage__label">Full name</span>
              <input className="CareersPage__input" type="text" name="name" />
            </label>
            <label className="CareersPage__field">
              <span className="CareersPage__label">Email address</span>
              <input className="CareersPage__input" type="email" name="email" />
            </label>
            <label className="CareersPage__field">
              <span className="CareersPage__label">Role</span>
              <select className="CareersPage__input" name="role" defaultValue="">
                <option value="" disabled>
                  Select a role
                </option>
                {jobs.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="CareersPage__field">
              <span className="CareersPage__label">Portfolio or LinkedIn</span>
              <input className="CareersPage__input" type="url" name="portfolio" />
            </label>
            <label className="CareersPage__field">
              <span className="CareersPage__label">Why do you want to join?</span>
              <textarea className="CareersPage__textarea" name="message" rows="5" />
            </label>
            <button className="CareersPage__submitButton" type="submit">
              Submit Application
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default CareersPage;

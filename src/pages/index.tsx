import ThemeToggle from '../components/ThemeToggle';

const name = 'Luk Ka Chun';
const email = 'aronluk@lockage.page';
const summary = 'Cloud engineer — Kubernetes, Terraform, AWS/Azure, CI/CD';
const skills = ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'Python', 'React', 'Docker'];
const jobs = [
  { role: 'Cloud Engineer', company: 'Morgan McKinley', period: 'Nov 2025 – May 2026', items: ['Led Traefik migration across HK, JP, Malaysia, Thailand', 'Built Ingress→HTTPRoute conversion tool'] },
  { role: 'Software Developer', company: 'TEC', period: 'Feb 2025 – Nov 2025', items: ['Python/Node.js MCP servers', 'Terraform for AWS infrastructure'] },
];

const year = new Date().getFullYear();

export default function Home() {
  return (
    <>
      <header>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{summary}</p>
      </header>

      <section>
        <h2>Experience</h2>
        {jobs.map((job, i) => (
          <article key={i}>
            <h3>{job.role} @ {job.company}</h3>
            <p>{job.period}</p>
            <ul>{job.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </section>

      {/*
        This button AND the entire page header/skills/experience
        all get hydrated by React. Even though the HTML is pre-rendered,
        React still re-runs ALL components in the browser.
        Disable JS → page looks fine (HTML is there), but React error
        in console for every component.
      */}
      <ThemeToggle />

      <footer style={{ marginTop: 40, fontSize: 12, color: '#888' }}>
        <p>&copy; {year} {name}</p>
      </footer>
    </>
  );
}

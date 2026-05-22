import { useEffect, useRef } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const name = 'Luk Ka Chun';
const email = 'aronluk@lockage.page';
const summary = 'Cloud engineer — Kubernetes, Terraform, AWS/Azure, CI/CD';
const skills = ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'Python', 'React', 'Docker'];
const jobs = [
  { role: 'Cloud Engineer', company: 'Morgan McKinley', period: 'Nov 2025 \u2013 May 2026', items: ['Led Traefik migration across HK, JP, Malaysia, Thailand', 'Built Ingress\u2192HTTPRoute conversion tool'] },
  { role: 'Software Developer', company: 'TEC', period: 'Feb 2025 \u2013 Nov 2025', items: ['Python/Node.js MCP servers', 'Terraform for AWS infrastructure'] },
];

const year = new Date().getFullYear();

const s = {
  blob: `
    @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(60px,-80px) scale(1.2) rotate(120deg); } 66% { transform: translate(-40px,60px) scale(0.9) rotate(240deg); } }
    @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(-70px,50px) scale(1.15) rotate(-100deg); } 66% { transform: translate(50px,-60px) scale(0.85) rotate(-200deg); } }
    @keyframes float3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,40px) scale(1.1); } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
    :root, [data-theme="dark"] { --text: #f0f0f0; --text-muted: rgba(240,240,240,0.7); --bg: #0a0a0f; --glass: rgba(255,255,255,0.05); --glass-border: rgba(255,255,255,0.1); --pill: rgba(255,255,255,0.08); --pill-border: rgba(255,255,255,0.12); }
    [data-theme="light"] { --text: #1a1a2e; --text-muted: rgba(26,26,46,0.7); --bg: #d4dcec; --glass: rgba(255,255,255,0.55); --glass-border: rgba(255,255,255,0.3); --pill: rgba(255,255,255,0.4); --pill-border: rgba(255,255,255,0.5); }
    body { margin: 0; background: var(--bg); color: var(--text); }
  `,
};

const blobStyle = (i: number) => ({
  position: 'fixed' as const,
  width: ['600px', '500px', '400px'][i],
  height: ['600px', '500px', '400px'][i],
  borderRadius: '50%',
  filter: 'blur(80px)',
  opacity: 0.4,
  zIndex: 0,
  top: ['-200px', '60%', '30%'][i],
  left: ['-150px', '-100px', '70%'][i],
  background: [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  ][i],
  animation: `float${i + 1} ${[25, 30, 20][i]}s ease-in-out infinite`,
  pointerEvents: 'none' as const,
});

const glassCard: React.CSSProperties = {
  background: 'var(--glass)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: 24,
  border: '1px solid var(--glass-border)',
  padding: 32,
  animation: 'fadeIn 0.8s ease-out forwards',
  opacity: 0,
};

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    root.setAttribute('data-theme', mq.matches ? 'dark' : 'light');
  }, []);

  return (
    <>
      <style>{s.blob}</style>

      <div
        ref={rootRef}
        style={{
          minHeight: '100vh',
          padding: '60px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          transition: 'background 0.6s ease',
          background: 'var(--bg)',
          color: 'var(--text)',
        }}
      >
        <div style={blobStyle(0)} />
        <div style={blobStyle(1)} />
        <div style={blobStyle(2)} />

        <ThemeToggle />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 720,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <header
            style={{
              ...glassCard,
              animationDelay: '0s',
              textAlign: 'center',
            }}
          >
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {name}
            </h1>
            <p style={{ margin: '8px 0 0', opacity: 0.7, fontSize: 14 }}>{email}</p>
            <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
              {summary}
            </p>
          </header>

          <section
            style={{
              ...glassCard,
              animationDelay: '0.15s',
            }}
          >
            <h2
              style={{
                margin: '0 0 20px',
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Experience
            </h2>
            {jobs.map((job, i) => (
              <article
                key={i}
                style={{
                  marginBottom: i < jobs.length - 1 ? 24 : 0,
                  paddingBottom: i < jobs.length - 1 ? 24 : 0,
                  borderBottom:
                    i < jobs.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
                  {job.role}
                  <span style={{ opacity: 0.5, fontWeight: 400 }}>
                    {' '}@ {job.company}
                  </span>
                </h3>
                <p style={{ margin: '4px 0 10px', fontSize: 13, opacity: 0.5 }}>{job.period}</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.7, opacity: 0.8 }}>
                  {job.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section
            style={{
              ...glassCard,
              animationDelay: '0.3s',
            }}
          >
            <h2
              style={{
                margin: '0 0 16px',
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    background: 'var(--pill)',
                    border: '1px solid var(--pill-border)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <footer
            style={{
              textAlign: 'center',
              fontSize: 12,
              padding: 16,
              animation: 'fadeIn 0.8s ease-out 0.45s forwards',
              opacity: 0,
            }}
          >
            &copy; {year} {name}
          </footer>
        </div>
      </div>
    </>
  );
}

import { useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const name = 'Luk Ka Chun';
const email = 'aronluk@lockage.page';
const phone = '(852) 9319 7556';
const summary = 'Cloud engineer with strong background in Kubernetes, Terraform, and cloud infrastructure (AWS/Azure). Built production systems across reverse proxy migrations, CI/CD pipelines, and LLM-powered applications. Focused on infrastructure automation, security, and scalable backend architecture.';

const jobs = [
  { role: 'Cloud Engineer', company: 'Morgan McKinley', period: 'Nov 2025 \u2013 May 2026', type: 'Contract', items: [
      'Led Traefik migration across HK, JP, Malaysia, Thailand, evaluating reverse proxy options and deciding Traefik for its native Gateway API support',
      'Helped teams debug migration issues: SSL certificates, TLS secrets, client-side cert warnings, and preserving original nginx-ingress load balancer IPs',
      'Authored migration documentation and provided Helm templates for standardized Traefik deployments across regions',
      'Built a frontend tool to transform Ingress files to HTTPRoute resources, reducing migration effort and errors',
      'Enhanced security by routing domains through F5 Distributed Cloud, managing IP ranges for Zscaler, AWS, and Azure',
      'Identified attack traffic via Elasticsearch queries in Kubernetes clusters and blocked malicious sources at CloudFront level',
      'Managed subnets for load balancer provisioning and enabled cross-zone load balancing for high availability',
    ] },
  { role: 'Software Developer', company: 'TEC', period: 'Feb 2025 \u2013 Nov 2025', items: [
      'Built Python and Node.js MCP (Model Context Protocol) servers and hosts for chatbot applications serving internal and external users',
      'Wrote C# code for core APIs deployed to ECS',
      'Wrote Terraform for cloud resource provisioning: load balancer rules, ECS services, ECR repos, domain zones, IAM roles',
      'Wrote Kubernetes manifests for AI projects on EKS: Deployment, Service (ClusterIP/LoadBalancer), Ingress resources',
      'Built CI/CD pipelines in Azure Pipelines and Releases: testing, image build/push, artifact management, env-specific deployment',
      'Implemented RAG (Retrieval-Augmented Generation) pipelines to improve LLM responses with company data',
      'Debugged CDN network issues across EdgeNext and Amazon CloudFront',
    ] },
  { role: 'Full Stack Developer', company: 'Self-Employed', period: 'Apr 2024 \u2013 Dec 2024', items: [
      'Built an interactive graph visualization frontend with React.js, Firebase auth (GitHub), and GitHub API integration',
      'Engineered 3D force-directed graph rendering using extended D3.js libraries and Octree (vs Quadtree), re-implemented in C++ for Unreal Engine 5',
      'Developed blockchain tooling with Web3 for automated ERC-20 token deployment: Solidity, ABI/bytecode, transaction building',
      'Studied decentralized exchange mechanics (PancakeSwap) including automated market maker pricing',
      'Used GitLab CI/CD for website and backend server deployment',
    ] },
  { role: 'Full Stack Programmer', company: 'QualiFly', period: 'Mar 2022 \u2013 Mar 2024', items: [
      'Architected and developed learning platforms using React.js with responsive design for desktop and mobile',
      'Set up MongoDB clusters and Firestore for user data, utilized Azure and GCP for cloud hosting',
      'Integrated generative AI (GPT-3.5) for content generation and chatbot interactions',
      'Implemented speech services: Speech-to-Text and Pronunciation Assessment for oral learning',
      'Created Docker development environments for standardized local setups across the team',
      'Built CI/CD with GitHub Actions for automated React builds and Firebase Hosting deployment',
    ] },
  { role: 'Teaching Assistant', company: 'HKUST', period: '2020 \u2013 2022', items: [
      'Facilitated learning and developed course materials for Database Management Systems (SQL, PL/SQL, PostgreSQL) and Operating Systems (process management, scheduling, memory management)',
    ] },
  { role: 'Programmer Intern', company: 'Ernst & Young', period: 'May 2020 \u2013 Aug 2020', items: [
      'Developed OCR algorithms to auto-detect contract amendments across multiple languages, deployed on Linux',
    ] },
  { role: 'Programmer Intern', company: 'Alibaba Group', period: 'Jun 2019 \u2013 Dec 2019', items: [
      'Built customer survey insight and visualization tools, client segmentation models, and automated report generation with embedded graphs',
    ] },
  { role: 'ML Engineer Intern', company: 'AI Momentum', period: 'Dec 2018 \u2013 Jan 2019', items: [
      'Developed a chatbot system for a Fortune 500 company using automatic text summarization and TF-IDF keyword analysis',
    ] },
];

const education = [
  { school: 'Hong Kong University of Science and Technology', degree: 'Bachelor of Science', field: 'Risk Management and Business Intelligence', period: '2016 \u2013 2020', note: 'First Class Honours | GPA: 3.95 | Dean\u2019s List 2017\u20132018 Fall' },
  { school: 'University of Economics, Prague', degree: 'Exchange', period: 'Summer 2018' },
  { school: 'Tsinghua University', degree: 'Exchange', period: 'Winter 2017' },
];

const projects = [
  { name: 'EonTrading', tagline: 'News-Driven Trading System', url: 'https://github.com/ProgramIsFun/EonTrading', tech: 'Python, Redis, MongoDB, Docker, React, FastAPI', items: [
      'Automated trading: real-time news collection \u2192 LLM sentiment analysis \u2192 trade execution \u2192 broker confirmation',
      'Supports OpenAI, Azure OpenAI, and local Ollama for sentiment; React + Vite dashboard with live backtest',
    ] },
  { name: 'EonGraph', tagline: 'Interactive Graph Visualizer', url: 'https://github.com/ProgramIsFun/EonGraph', tech: 'Python, React.js, C++, Neo4j, Unreal Engine 5', items: [
      'Graph visualization and editing tool supporting Neo4j with web and Unreal Engine 5 clients',
    ] },
];

const allSkills = ['Python', 'TypeScript', 'C#', 'Node.js', 'React.js', 'Angular', 'Vue.js', 'React Native', 'Flutter', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Neo4j', 'Firestore', 'Kubernetes', 'Terraform', 'Docker', 'AWS', 'Azure', 'CI/CD', 'Traefik', 'F5', 'Zscaler', 'LangChain', 'RAG', 'C', 'C++', 'Unreal Engine', 'D3.js', 'Solidity'];

const certifications = [
  'Paper 1 \u2014 Fundamentals of Securities and Futures Regulation',
  'National Putonghua Proficiency Test \u2014 Class: 2-A',
  'Graph Database Neo4j Professional',
];

const year = new Date().getFullYear();

const s = {
  css: `
    @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(60px,-80px) scale(1.2) rotate(120deg); } 66% { transform: translate(-40px,60px) scale(0.9) rotate(240deg); } }
    @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(-70px,50px) scale(1.15) rotate(-100deg); } 66% { transform: translate(50px,-60px) scale(0.85) rotate(-200deg); } }
    @keyframes float3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,40px) scale(1.1); } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    :root, [data-theme="dark"] { --text: #f0f0f0; --text-muted: rgba(240,240,240,0.6); --bg: #0a0a0f; --glass: rgba(255,255,255,0.05); --glass-border: rgba(255,255,255,0.1); --pill: rgba(255,255,255,0.08); --pill-border: rgba(255,255,255,0.12); }
    [data-theme="light"] { --text: #1a1a2e; --text-muted: rgba(26,26,46,0.6); --bg: #d4dcec; --glass: rgba(255,255,255,0.55); --glass-border: rgba(255,255,255,0.3); --pill: rgba(255,255,255,0.4); --pill-border: rgba(255,255,255,0.5); }
    body { margin: 0; background: var(--bg); color: var(--text); }
  `,
};

const blob = (i: number) => ({
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

const card: React.CSSProperties = {
  background: 'var(--glass)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: 24,
  border: '1px solid var(--glass-border)',
  padding: 32,
  animation: 'fadeIn 0.8s ease-out forwards',
  opacity: 0,
};

const sectionTitle: React.CSSProperties = {
  margin: '0 0 20px',
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: '-0.01em',
};

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <style>{s.css}</style>

      <div style={{
        minHeight: '100vh',
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        background: 'var(--bg)',
        color: 'var(--text)',
        transition: 'background 0.6s ease',
      }}>
        <div style={blob(0)} />
        <div style={blob(1)} />
        <div style={blob(2)} />
        <ThemeToggle />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <header style={{ ...card, animationDelay: '0s', textAlign: 'center' }}>
            <p style={{ margin: '0 0 12px', fontSize: 12, opacity: 0.4, fontStyle: 'italic' }}>This site may not reflect the latest resume &mdash; please refer to the PDF resume sent directly.</p>
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>{name}</h1>
            <p style={{ margin: '8px 0 0', opacity: 0.6, fontSize: 14 }}>{email} | {phone}</p>
            <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.7, opacity: 0.8 }}>{summary}</p>
          </header>

          <section style={{ ...card, animationDelay: '0.1s' }}>
            <h2 style={sectionTitle}>Experience</h2>
            {jobs.map((job, i) => (
              <article key={i} style={{
                marginBottom: i < jobs.length - 1 ? 24 : 0,
                paddingBottom: i < jobs.length - 1 ? 24 : 0,
                borderBottom: i < jobs.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
                  {job.role}
                  <span style={{ opacity: 0.5, fontWeight: 400 }}> @ {job.company}</span>
                </h3>
                <p style={{ margin: '4px 0 10px', fontSize: 13, opacity: 0.5 }}>{job.period}</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.7, opacity: 0.78 }}>
                  {job.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </article>
            ))}
          </section>

          <section style={{ ...card, animationDelay: '0.2s' }}>
            <h2 style={sectionTitle}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{
                marginBottom: i < education.length - 1 ? 16 : 0,
                paddingBottom: i < education.length - 1 ? 16 : 0,
                borderBottom: i < education.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{edu.school}</h3>
                <p style={{ margin: '2px 0 0', fontSize: 13, opacity: 0.7 }}>{edu.degree}{edu.field ? ` \u2014 ${edu.field}` : ''} <span style={{ opacity: 0.5 }}>| {edu.period}</span></p>
                {edu.note && <p style={{ margin: '4px 0 0', fontSize: 12, opacity: 0.5 }}>{edu.note}</p>}
              </div>
            ))}
          </section>

          <section style={{ ...card, animationDelay: '0.3s' }}>
            <h2 style={sectionTitle}>Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} style={{
                marginBottom: i < projects.length - 1 ? 20 : 0,
                paddingBottom: i < projects.length - 1 ? 20 : 0,
                borderBottom: i < projects.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>
                  {proj.name}
                  <span style={{ opacity: 0.5, fontWeight: 400 }}> {'\u2014'} {proj.tagline}</span>
                </h3>
                <p style={{ margin: '2px 0 6px', fontSize: 12, opacity: 0.5 }}>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>{proj.url.replace('https://', '')}</a>
                </p>
                <ul style={{ margin: '0 0 6px', paddingLeft: 18, fontSize: 14, lineHeight: 1.7, opacity: 0.78 }}>
                  {proj.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <p style={{ margin: 0, fontSize: 12, opacity: 0.5 }}>{proj.tech}</p>
              </div>
            ))}
          </section>

          <section style={{ ...card, animationDelay: '0.35s' }}>
            <h2 style={sectionTitle}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {allSkills.map((s, i) => (
                <span key={i} style={{
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  background: 'var(--pill)',
                  border: '1px solid var(--pill-border)',
                  backdropFilter: 'blur(8px)',
                }}>{s}</span>
              ))}
            </div>
          </section>

          <section style={{ ...card, animationDelay: '0.4s' }}>
            <h2 style={sectionTitle}>Certifications</h2>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 2, opacity: 0.78 }}>
              {certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>

          <footer style={{ textAlign: 'center', fontSize: 12, padding: 16, animation: 'fadeIn 0.8s ease-out 0.45s forwards', opacity: 0 }}>
            &copy; {year} {name}
          </footer>
        </div>
      </div>
    </>
  );
}

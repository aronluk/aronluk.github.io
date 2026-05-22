import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 100,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: dark ? '#fff' : '#111',
        fontSize: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {dark ? '\u2600\uFE0F' : '\uD83C\uDF19'}
    </button>
  );
}

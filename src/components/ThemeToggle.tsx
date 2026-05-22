import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: '8px 16px',
        background: dark ? '#333' : '#eee',
        color: dark ? '#fff' : '#000',
        border: '1px solid #ccc',
        borderRadius: 4,
        cursor: 'pointer',
        marginTop: 20,
      }}
    >
      {dark ? '☀️ Light mode' : '🌙 Dark mode'}
    </button>
  );
}

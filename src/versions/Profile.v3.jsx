import { useState, useEffect } from 'react';

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setUser(null);
      try {
        const res = await fetch(`/api/users/${userId}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
      }
    }
    load();

    return () => controller.abort();
  }, [userId]);

  if (!user) return <p className="card loading">Loading…</p>;

  return (
    <article className="card">
      <div className="avatar" style={{ background: user.color }}>
        {user.name[0]}
      </div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.role} · {user.city}</p>
      </div>
    </article>
  );
}

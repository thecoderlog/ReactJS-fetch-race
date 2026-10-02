import { useState, useEffect } from 'react';

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      setUser(null);
      const res = await fetch(`/api/users/${userId}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUser(data);
    }
    load();
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

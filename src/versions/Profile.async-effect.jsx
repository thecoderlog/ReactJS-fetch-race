import { useState, useEffect } from 'react';

// Doesn't work: the effect itself is async. An async
// function returns a promise, and React expects an effect
// to return a cleanup function, or nothing at all.
export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    setUser(null);
    const res = await fetch(`/api/users/${userId}`);
    const data = await res.json();
    setUser(data);
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

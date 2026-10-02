# Fetching data in useEffect: the race condition (the real app behind the video)

```bash
npm install
npm run dev        # http://localhost:5173
```

Click **Alice**, then quickly click **Bob**. With `Profile.v1.jsx` in place, the heading says Bob but the card
ends up showing Alice: her response is slower, lands last, and overwrites Bob's. Open DevTools › Network
(Fetch/XHR) to watch the two requests race.

- `vite.config.js` serves a tiny API, `GET /api/users/:id`, from `api/users.json`. Alice's answer is delayed
  by 2 s on purpose (everyone else: 0.4 s), so the race happens every time. Real networks do this at random.
- `src/versions/` holds each step of the story (see its README). `src/Profile.jsx` is whichever version was
  copied in last (the finished app: v3, `AbortController`).

Sources: [react.dev, Fetching data with Effects](https://react.dev/reference/react/useEffect#fetching-data-with-effects) ·
[You Might Not Need an Effect › Fetching data](https://react.dev/learn/you-might-not-need-an-effect#fetching-data) ·
[MDN, AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

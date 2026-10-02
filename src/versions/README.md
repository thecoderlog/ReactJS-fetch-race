# Versions

Each file here is one step of the story. The video's code panels read these files, and
`../../../capture.mjs` copies each one into `src/Profile.jsx` before capturing, the way you'd edit and save
the real file. Edit a version here, then re-run the capture.

| File | Shown in beats |
|---|---|
| `Profile.v1.jsx` | hook.*, fetch.*, race.*: fetch → `setUser`, no cleanup (the bug) |
| `Profile.async-effect.jsx` | fetch.notasync: `useEffect(async () => …)`, which React rejects (the page crashes) |
| `Profile.v2.jsx` | fix.ignore … fix.work: react.dev's `ignore` flag |
| `Profile.v3.jsx` | fix.v3 … wrap: `AbortController` cancels the old request (the finished app) |

`capture.mjs` also builds the app for production (`npm run build` + `npm run preview`, v3, StrictMode still on)
to record that a production build makes one request.

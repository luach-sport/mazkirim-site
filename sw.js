// Mazkirim service worker (tip 15 — cache): the site's code/fonts files are kept on the device, so the
// next visit opens instantly, even on a weak connection. Pages themselves always come fresh from the
// network first (falls back to the saved copy only when offline). Database traffic is never touched.
const CACHE = 'mazkirim-v1'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  const scope = new URL(self.registration.scope).pathname

  // hashed build files never change -> cache first
  if (url.pathname.startsWith(scope + 'assets/')) {
    e.respondWith(
      caches.open(CACHE).then(async (c) => {
        const hit = await c.match(req)
        if (hit) return hit
        const res = await fetch(req)
        if (res.ok) c.put(req, res.clone())
        return res
      }),
    )
    return
  }
  // the app page itself -> network first, saved copy when offline
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && url.pathname === scope) caches.open(CACHE).then((c) => c.put(scope, res.clone()))
          return res
        })
        .catch(() => caches.match(scope).then((r) => r || Response.error())),
    )
  }
})

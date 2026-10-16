/* Offline cache. Opens instantly from the cache and refreshes it in the background,
   so an updated page reaches students the next time they open the app. */
const CACHE = 'a1-diktat-v1';
const FILES = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "fonts/andika-400.woff2", "fonts/andika-700.woff2", "fonts/lexend-var.woff2"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('a1-diktat-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const key = req.mode === 'navigate' ? self.registration.scope : req;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(key, { ignoreSearch: true });
    const fresh = fetch(req).then(res => {
      if (res.ok && !res.redirected) cache.put(key, res.clone());
      return res;
    });
    if (cached){ e.waitUntil(fresh.catch(() => {})); return cached; }
    return fresh.catch(() => Response.error());
  }));
});

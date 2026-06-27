self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claims any clients immediately, so the user doesn't have to reload.
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // This is a basic passthrough that just lets all network requests happen normally.
  // It satisfies the PWA requirement without overcomplicating your app.
  event.respondWith(fetch(event.request));
});

// Service worker mínimo: no cachea nada (el contenido real vive en el iframe,
// en otro origen, así que no hay nada propio que cachear) -- solo existe
// porque Chrome lo pide como requisito para considerar la página instalable.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

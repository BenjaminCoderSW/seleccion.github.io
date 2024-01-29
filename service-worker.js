self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('ubicacion-app').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/index.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
  
        // No hay cache para esta solicitud, regresa la solicitud
        return fetch(event.request);
      })
    );
  });
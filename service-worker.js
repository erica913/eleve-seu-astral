self.addEventListener('install', function (e) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (e) {
  // Aqui podemos implementar cache offline no futuro, se quiser!
});
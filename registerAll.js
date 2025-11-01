// sw.js
self.addEventListener('push', event => {
  console.log('Push received');
  const dataPromise = event.data.json().catch(err => console.error('Decryption failed:', err));
  event.waitUntil(
    dataPromise.then(data => {
      console.log('Decrypted data:', data);
      const options = {
        body: data.body,
        icon: 'icon.png'  // Optional
      };
      return self.registration.showNotification(data.title, options);
    }).catch(err => console.error('Notification show failed:', err))
  );
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click');
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
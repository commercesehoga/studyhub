/* ═══════════════════════════════════════════════════
   ThunderStudy — Service Worker (sw.js)
   Cache-first for static assets, network-first for API
   + Firebase Cloud Messaging (background push)
═══════════════════════════════════════════════════ */

/* ── Firebase Messaging background handler ── */
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAoxORpjq2kIED1hBNAQ2MGJEWlwQ3FCJA",
  authDomain: "thunderstudy.firebaseapp.com",
  projectId: "thunderstudy",
  storageBucket: "thunderstudy.firebasestorage.app",
  messagingSenderId: "83506167126",
  appId: "1:83506167126:web:9b3e7017ba871103672af7"
});

const messaging = firebase.messaging();

/* Handle background push (app closed / not focused) */
messaging.onBackgroundMessage(function(payload) {
  console.log('[SW] Background push received:', payload);
  const n    = payload.notification || {};
  const data = payload.data || {};
  const link = data.link || payload.fcmOptions?.link || 'https://commercesehoga.github.io/studyhub/';

  return self.registration.showNotification(n.title || '⚡ ThunderStudy', {
    body:    n.body  || '',
    icon:    'https://commercesehoga.github.io/favicon.png',
    badge:   'https://commercesehoga.github.io/favicon.svg',
    tag:     'ts-push-' + Date.now(),
    renotify: true,
    data:    { url: link }
  });
});

/* ─────────────────────────────────────────────────────
   Cache version — only change this if you want to
   FORCE all users to clear their old cache.
   Normal SW updates are handled automatically.
───────────────────────────────────────────────────── */
const CACHE_VER    = '2025-05';          // ← only update if force-clearing cache
const CACHE_NAME   = 'thunderstudy-'         + CACHE_VER;
const STATIC_CACHE = 'thunderstudy-static-'  + CACHE_VER;
const DATA_CACHE   = 'thunderstudy-data-'    + CACHE_VER;

/* Assets to pre-cache on install */
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json',
  '/data-books.js',
  '/data-notes.js',
  '/data-pyqs.js',
  '/data-mcqs.js',
  '/data-material.js',
];

/* ── Message: force activate when page requests it ── */
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Pre-caching static assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

/* ── Activate (clean old caches) ── */
self.addEventListener('activate', (event) => {
  const validCaches = [STATIC_CACHE, DATA_CACHE];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !validCaches.includes(key))
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch strategy ── */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip non-GET and cross-origin (Firebase, Google APIs, etc.) */
  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin &&
      !url.hostname.endsWith('fonts.googleapis.com') &&
      !url.hostname.endsWith('fonts.gstatic.com') &&
      !url.hostname.endsWith('cdn.jsdelivr.net')) return;

  /* Network-first for Google Drive / Sheets API calls */
  if (url.hostname.includes('drive.google.com') ||
      url.hostname.includes('sheets.googleapis.com') ||
      url.hostname.includes('script.google.com')) {
    event.respondWith(networkFirst(request, DATA_CACHE));
    return;
  }

  /* Cache-first for everything else (static assets, fonts, CDN) */
  event.respondWith(cacheFirst(request, STATIC_CACHE));
});

/* Cache-first: serve from cache, update cache in background */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type !== 'opaque') {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    /* Offline fallback */
    const fallback = await cache.match('/index.html');
    return fallback || new Response('Offline — please check your connection.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

/* Network-first: try network, fall back to cache */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response(JSON.stringify({ error: 'Offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

/* ── Background Sync (optional) ── */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-purchases') {
    event.waitUntil(syncPendingData());
  }
});

async function syncPendingData() {
  /* Implement your sync logic here if needed */
  console.log('[SW] Background sync triggered');
}

/* ── Push Notifications (optional) ── */
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || '⚡ ThunderStudy', {
      body: data.body || 'You have a new update!',
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'thunderstudy-notif',
      renotify: true,
      data: { url: data.url || '/' }
    })
  );
});

/* ── Notification click → open the link ── */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = event.notification.data?.url || 'https://commercesehoga.github.io/studyhub/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === target && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});

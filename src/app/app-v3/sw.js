const SW_VERSION = 1;
const CACHE_KEY = `CACHE_V${SW_VERSION}`;

self.addEventListener('install', (event) => {
    console.log(`Installing service worker V${SW_VERSION}`);

    event.waitUntil(
        caches.open(CACHE_KEY).then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './main.css',
                './app-root.js',
                './assets/index.css',
                './NotoSerif-BoldItalic.ttf',
                'https://raw.githubusercontent.com/mishotek/material-icons/master/svg/menu/baseline.svg',
                'https://raw.githubusercontent.com/mishotek/material-icons/master/svg/share/baseline.svg',
                'https://raw.githubusercontent.com/mishotek/material-icons/master/svg/search/baseline.svg',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).then(resp => {
            if (resp.status === 404) {
                return caches.match(event.request);
            }

            return resp;
        }).catch(() => caches.match(event.request))
    );
});

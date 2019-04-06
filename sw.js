importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/15c9706497e51c5a87ed.js",
    "revision": "f5b491991a5f63c67b4f047cab17a90b"
  },
  {
    "url": "/_nuxt/4685db0c3eafcafbef95.js",
    "revision": "bcd6bceb1100d82d00d7ddda0294d5b6"
  },
  {
    "url": "/_nuxt/7806582e5eac5a3435bf.js",
    "revision": "615e3d597fd0c36d702d856c7253a2eb"
  },
  {
    "url": "/_nuxt/9a5d0140fd1bfc2cadf5.js",
    "revision": "e00188afc5181d22076c5da0a929bea0"
  },
  {
    "url": "/_nuxt/a5c8ac5d6afc66a7d46a.js",
    "revision": "5898c6cf84164a13b81e964995cec588"
  },
  {
    "url": "/_nuxt/a87c69953a909f733a6c.js",
    "revision": "10b117dd555d98587c9ff22aafb71198"
  },
  {
    "url": "/_nuxt/e51f2e77009c432a4363.js",
    "revision": "9d3427224b8b2773ff6db49b6185cc7b"
  }
], {
  "cacheId": "nuxt-project",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

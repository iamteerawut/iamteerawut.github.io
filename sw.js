importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2330b863ccae487d1de8.js",
    "revision": "34163d0a9c3fa90721b941dc13d127ea"
  },
  {
    "url": "/_nuxt/364a06f2a7b0095a6fdc.js",
    "revision": "c6ee3acf076b1e66e267df7ff95986ba"
  },
  {
    "url": "/_nuxt/6168655677ce31391d08.js",
    "revision": "bbe446e1acff5845a6188e28249fb5a9"
  },
  {
    "url": "/_nuxt/e07325b57bbda6a00f1d.js",
    "revision": "d22a59a8f5c334bdc794c838fe7e2b2e"
  },
  {
    "url": "/_nuxt/e51f2e77009c432a4363.js",
    "revision": "9d3427224b8b2773ff6db49b6185cc7b"
  },
  {
    "url": "/_nuxt/f4c0fa8760072582eda2.js",
    "revision": "dad4707ebcb36b24557caed9d7521ec6"
  },
  {
    "url": "/_nuxt/ffefae4e2acd688462d5.js",
    "revision": "67cad5d0a375914b2efd78030789ba7e"
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

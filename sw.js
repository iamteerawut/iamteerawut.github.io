importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2330b863ccae487d1de8.js",
    "revision": "34163d0a9c3fa90721b941dc13d127ea"
  },
  {
    "url": "/_nuxt/2ed24c099ea2d06f42ca.js",
    "revision": "13a8ca23ea9f29f52541f9d75f892d73"
  },
  {
    "url": "/_nuxt/364a06f2a7b0095a6fdc.js",
    "revision": "c6ee3acf076b1e66e267df7ff95986ba"
  },
  {
    "url": "/_nuxt/9c558c101f14474997d4.js",
    "revision": "25ddeaedeead1a48664c459066a1fd7f"
  },
  {
    "url": "/_nuxt/b29eaae45d913bf0c3eb.js",
    "revision": "39959e42047ffa1e24ec195c1dba35d7"
  },
  {
    "url": "/_nuxt/e07325b57bbda6a00f1d.js",
    "revision": "d22a59a8f5c334bdc794c838fe7e2b2e"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0707ca3fe5a4d1ca3e75.js",
    "revision": "ef822a22f36888c5e18832558a630282"
  },
  {
    "url": "/_nuxt/2330b863ccae487d1de8.js",
    "revision": "34163d0a9c3fa90721b941dc13d127ea"
  },
  {
    "url": "/_nuxt/364a06f2a7b0095a6fdc.js",
    "revision": "c6ee3acf076b1e66e267df7ff95986ba"
  },
  {
    "url": "/_nuxt/6691d3b4aa67d670d56e.js",
    "revision": "4a121963894045c8694b63b277d16dfd"
  },
  {
    "url": "/_nuxt/cdd8d0cabda05e6c8501.js",
    "revision": "bb85267c08bdb9a1e607f96df2e2b84c"
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

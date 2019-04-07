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
    "url": "/_nuxt/691eb99928c1c4cd6366.js",
    "revision": "79241c672c44aeeb4e032e1f05d450a4"
  },
  {
    "url": "/_nuxt/91b06610aef7bfaa3fc2.js",
    "revision": "84c6d4a092e2cb24b5272f24bb8403ec"
  },
  {
    "url": "/_nuxt/c00da176f110bcf67a48.js",
    "revision": "236072194fb8c36452995cff3386af6b"
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

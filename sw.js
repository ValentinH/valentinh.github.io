/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-573edda7094ecdfd8024.js"
  },
  {
    "url": "app-22769b110dd68bcccb93.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-85e0ed7b1118a2203d55.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5dd3a2c82043fae251c3100c725176a4"
  },
  {
    "url": "styles.079f8734766c38bfc8c4.css"
  },
  {
    "url": "google-fonts/s/alegreyasanssc/v8/mtGh4-RGJqfMvt7P8FUr0Q1j-Hf1Bkll9w.woff2",
    "revision": "9a160148ba25017b0d73e697d8e9a925"
  },
  {
    "url": "google-fonts/s/alegreyasanssc/v8/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1DuJH4iNhMA.woff2",
    "revision": "1be43794a3aaa896d87e7a5ba20b9cf9"
  },
  {
    "url": "google-fonts/s/alegreyasanssc/v8/mtGn4-RGJqfMvt7P8FUr0Q1j-Hf1DipV9QRE.woff2",
    "revision": "100f0e9728df8828c05e4fe5f80605b5"
  },
  {
    "url": "google-fonts/s/cabin/v12/u-480qWljRw-PdeL2uhluyk.woff2",
    "revision": "476ff5f8d157e219fabeba3f03df794c"
  },
  {
    "url": "google-fonts/s/cabin/v12/u-4x0qWljRw-Pd8w__0.woff2",
    "revision": "862242471e8a1ea2652c2b0e0b475553"
  },
  {
    "url": "google-fonts/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
    "revision": "7fbbfd1610770d594aef639cfefdd0b0"
  },
  {
    "url": "google-fonts/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2",
    "revision": "f1a4a058fbba1e35a406188ae7eddaf8"
  },
  {
    "url": "google-fonts/s/lobstertwo/v11/BngRUXZGTXPUvIoyV6yN5-92w7CGwR0.woff2",
    "revision": "07f671589d4562c252c3443df7abd64f"
  },
  {
    "url": "google-fonts/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "d08c09f2f169f4a6edbcf8b8d1636cb4"
  },
  {
    "url": "google-fonts/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "cffb686d7d2f4682df8342bd4d276e09"
  },
  {
    "url": "google-fonts/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
    "revision": "037d830416495def72b7881024c14b7b"
  },
  {
    "url": "google-fonts/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "revision": "5d4aeb4e5f5ef754e307d7ffaef688bd"
  },
  {
    "url": "google-fonts/s/rubik/v7/iJWKBXyIfDnIV7nBrXw.woff2",
    "revision": "cebc4ea456a88943fb6b6cb56a648071"
  },
  {
    "url": "component---src-pages-404-tsx-348e7b8d8b5d557c4f51.js"
  },
  {
    "url": "2-646592661d3bdeb700b7.js"
  },
  {
    "url": "1-35f99b692f4edda5daa7.js"
  },
  {
    "url": "styles-2590fe53f42f0416bdaa.js"
  },
  {
    "url": "static/d/569/path---404-html-516-62a-E2Mbe6EuzYilB7R3anFgccqr5Qg.json"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a70ec51023b202d716740b3edc97df90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})

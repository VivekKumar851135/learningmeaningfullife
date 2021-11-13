'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1e781da3636b3a40ff8b6bd14067bf9e",
"index.html": "8ceeb71a7fb93199ed85736889eb2447",
"/": "8ceeb71a7fb93199ed85736889eb2447",
"main.dart.js": "d032fc2e845b711e1dd5099a46ffa33b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8181094b133ade4747ca90e03631c612",
".git/config": "cdfe35933db274e891c6e6a4852909ad",
".git/objects/61/35915d660ca2c9e26a8a24206e812bdeeacf60": "b6cf65cf7911edfb1099f236009a3363",
".git/objects/95/8b8df3bc8e521ef0a7d1496fe9e6e3d53de795": "632f605b0b34e5618d411e3adf41599f",
".git/objects/92/78d93c6660522e1b93c52b023b76142c2fc3c6": "c446f8bac1b5375f9d6602f13619009e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/9b/2b2874f709badbcff52ce20811e76b6e03b745": "eb2ef578fa5bfed134e8b63c3a2bb215",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9c/6941af7375be29f8cb0f27ede093c2a0216efd": "d01fe3a603b90337fdb214577030fef8",
".git/objects/a4/1577e372d25bd12d48d540762fd84817fc986c": "acd5ae146405f1e769525be43b4046ae",
".git/objects/a4/6ebb7f2bf829508a86e3ce6a17cde6685f33ce": "be3b5a90afc0055b94ba6111498f96cf",
".git/objects/b5/77e0a91ba3ec3ab254c6e9e8489faebd16ce87": "07e0c703f41c52bd032086c339656bc2",
".git/objects/b2/fc470d9b4ba5e32619fdb4f3ddf73f73c45290": "1d603956cb6ae3f0f1c714d19a3bb1e8",
".git/objects/d7/1db9a93ec7a56261835b8ec02f03cafa15a599": "6699e1daed446f82942d82fe3328dc2e",
".git/objects/a2/23452c4e2c3b15b2df08e5d01f01c60f609666": "50998f358457e48f55e6f32b2109d2be",
".git/objects/a5/1f7340bae9935196308e380bf5125b136fc4bc": "37946178102f3b74e35494759e9138d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/75ca04bf7ff2783d5035eb2c7325cf06315d99": "b16bdd2e9664ad1b7b71d44240a7c6d4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b7623f1ec2204b4e07e59fc7b5e38d259bba16": "ee837127d8f56c53ff29c59a96f41e4d",
".git/objects/29/c9e37fcf436f44b1ebe0a45d3c7e9e131fa521": "0e42c04bcd66e3a47e0f61c8bfb505a3",
".git/objects/80/af0495d8f485261b846bdc66b3fccb866010e8": "996b6fec40286c808fea00d190a6d33d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/910a3796175d306d0415d2d7c95e77da770bb4": "9e2297fabde37efb3663245c7c40acde",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/9a/8598bfb29b2c9bce46016792ff705998b0d720": "0196c81ffd54b314770fba3d1343bbfb",
".git/objects/5c/a6e0b908dff39dd202943639eeb3194751a899": "b934379cf7674c57e552ee6fba41e456",
".git/objects/65/aeebda527af86178424e19dcc40daef13fe6c4": "ef5de5ed1b54985035521e19c3a1f38b",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/06/6693cfd664e1e12cef57e5d230638236f9509e": "b0684eae61c8a4255abb727e489e0ad3",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/63/bbf85a6d9f27ec3048775186857d547715fb81": "28b240b0d278fd88ae6e3e5c4965b2c4",
".git/objects/0a/7a2dc786cf799d874dcff50a7440da2c834991": "c15b38ad13286577adcddf1dabf0d777",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/aa/a7a4487c7ea7bb6fa2e2ab354de78857d26d98": "4f5826cd35b08ff19a5121bffa2a99ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/0d760b1682b2770bb4eb15ce49d830e952a86d": "7c4376b51eb0b3bb641113bb8a0b38d5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e9/2953ee847041bb7692ec9f4d0ed7fe91816a7d": "d23e16a91478ff612fb8cf12e9ae65b3",
".git/objects/79/fb5f220a6c6ed330dfba6828a2eade5e7d29c5": "c6a8b1e9b7b33c2134f73f789ea07855",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/a342e4135a06d5be34da96a90d207ed63ec7f2": "e208d66191bc182cc839d346579c3e97",
".git/objects/1b/58253a9de515c93f159ce622ee2e6cc46878b0": "80c29f7260f9adec6d11cadef1001cff",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/86ca78534e76179ddf553e62a4cd141edb7b7d": "6e145c3b3b3e1f176e9b3f99c0a8342f",
".git/objects/7f/7f2eceec77e19a496a2f998650c14e1b15d716": "68adb361d24b3bc2d026124c2fa84b52",
".git/objects/7a/10f094fb41a02451d6746978b41969a5321865": "c9e1e8ee9942a897a9d8722ad10aacf6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3ac38638370c8e5a01b8d9e56cdda4c",
".git/logs/refs/heads/master": "a3ac38638370c8e5a01b8d9e56cdda4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a9e85cb9cd935a0d6867e4610a33f4f0",
".git/index": "21002dc51dbf5488e34ed59cb0b9a003",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "95e57df91fd4ac31ec44d7d2782bc662",
"assets/NOTICES": "2de92808990b2596fdacde86cd970bae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/templatelong6.png": "ad03b28695ada2c093117f7f99e366af",
"assets/assets/images/info.jpg": "5419cae483ed30792f58142843d11925",
"assets/assets/images/background4.jpg": "92ebbef7f4a3d147e00d419ef2321bb4",
"assets/assets/images/templeteshort4.png": "50e2ab62654650badc86054c85cc2b74",
"assets/assets/images/templeteshort5.png": "9c711bb1e9f13513040e5673d4248f06",
"assets/assets/images/templatelong7.png": "b39d0aed0d54b4fffb7282df31094fc4",
"assets/assets/images/templatelong5.png": "d1b4a4c2a26091a66b9b33ec77a79d58",
"assets/assets/images/templeteshort7.png": "3a9326dcbf71e96a7faf7613bddd2310",
"assets/assets/images/templeteSHORT6.png": "f677c4f6ed2ae8da1b2e41463e268e38",
"assets/assets/images/templatelong4.png": "f91028c4b1f58e1ee8f15885013d293e",
"assets/assets/images/rohit.png": "e069757d25cc49cb3a60a90d3f0a9022",
"assets/assets/images/templeteshort2.png": "aed378d52ac615737c206d2a9eb9a6a7",
"assets/assets/images/arvind.png": "9a9442df3ab87f80c6ed15a645d3beae",
"assets/assets/images/templeteshort3.png": "10f56a9608c1d8eef082fab07dda1d01",
"assets/assets/images/templatelong1.png": "b600556cbf03130c060d84d21ac214f1",
"assets/assets/images/templatelong3.png": "497f0cfe8f2f60781514c980adb2da92",
"assets/assets/images/templeteshort1.png": "8892fd22679b93ce510b1f560a8a0cc0",
"assets/assets/images/templatelong2.png": "74f1af604210fcc6c8d5b54745c431c8",
"assets/assets/images/ashish.png": "a1793dc0993f7ffd9259127e09a6f84a",
"assets/assets/images/akash.png": "9ecb0baa1a7133dad908e4e61b642116",
"assets/assets/images/study.jpg": "e9c5b85f73fc14150c8bc05274bb4a3e",
"assets/assets/images/upcoming.jpg": "99180108080ec1fa3bb3b7dfaa29fda1",
"assets/assets/images/niraj.png": "7c1505f8e3d612cad78b24eb846e1a28",
"assets/assets/images/abhimanyu.png": "c50f376497abb1c8995eb4d40c3bbe69",
"assets/assets/images/giphy.gif": "a8a4f5d7eef65e16a88264c9ae03d663",
"assets/assets/images/avinash.png": "0546faa0eee7c839fe2eae0e3c428ad4",
"assets/assets/images/management.jpg": "aba8c7c7d8d0c7e32bb223c03b2ab946",
"assets/assets/images/background.png": "85fb1b38483c3a9bac67aed8f645ec58",
"assets/assets/images/left.png": "c5359fd59efefe56bfd57a40f0461ccd",
"assets/assets/images/footer.jpg": "42ef31c82aa1fc4c141b2bc23daaaa9c",
"assets/assets/images/chandan.png": "5f9ed3c3d388504635d2f9d518c4d625",
"assets/assets/images/about.png": "96f6f3ecf93a428dac3a8209850361e5",
"assets/assets/images/purosottam.png": "61b18426bdba13fc826e623d2672aa6e",
"assets/assets/images/right.png": "9dd875e9c62f844b167745823ed10b29",
"assets/assets/images/shubham.png": "75d760845e4972bd3ee32d151758785d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

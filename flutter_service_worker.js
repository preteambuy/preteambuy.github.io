'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "582315b8c4284a37cd740bd871cea989",
"index.html": "f2a27e5644e2c274295c20c43d4dd7af",
"/": "f2a27e5644e2c274295c20c43d4dd7af",
"main.dart.js": "c0d40ad1c22282436555ca5384898f85",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "acf09fe0363155f3a6559a49c44f2e23",
"assets/AssetManifest.json": "0e261145718b022811078090f5884b17",
"assets/NOTICES": "6852e9e6c3b3f463d5586c98a9d2f67f",
"assets/FontManifest.json": "e5a4bdf941b97343a507fee2abe07d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/agora_rtc_engine/assets/AgoraRtcWrapper.bundle.js": "d08573d6e0f8b6bff73a66ce65f514ff",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/invite_friends.gif": "771bc40843631145326f04e10c273883",
"assets/assets/images/likes.svg": "952f273944692fa1d90ace6c7be8902c",
"assets/assets/images/likes_1.svg": "aae9fdda0a34ec4e6a88160adcdb3c1a",
"assets/assets/images/storyboard-groupbuy.svg": "ec79b7e879e318104f6d1b613ae4acba",
"assets/assets/images/no_product_search.svg": "4a363b1279e4ef64ceb9cb781135b31d",
"assets/assets/images/treasure.png": "55d5ba018e1be46bb706db934b49ed71",
"assets/assets/images/make_purchase.gif": "62a220b65eff3148fc7fa6664991a298",
"assets/assets/images/sale_selected.svg": "7dc759acf0d05012e7d4cbb7593302cc",
"assets/assets/images/progress-loader.gif": "f130fe338a75e530adff87a448961737",
"assets/assets/images/no_notifications.svg": "f352f7664f7e371128589f14e41bf264",
"assets/assets/images/no_orders.svg": "205e51d5e827c5670f8eb0050a744715",
"assets/assets/images/no_followers.svg": "fcb61d08c31398375cab9b37454642fe",
"assets/assets/images/home.svg": "9535fc6921fd99c5139a6c9aa2ce9136",
"assets/assets/images/compass1.svg": "3d5c9e18f0b08f556269b6ceb5bd9706",
"assets/assets/images/congrats.gif": "eea9343fb0be218da8df8c7b41f2846d",
"assets/assets/images/watch_video.gif": "ab118afd0b4570eba26aa6c2f74e921a",
"assets/assets/images/share_icon.svg": "51ffc99d86853d678fc98ad602108a3f",
"assets/assets/images/earn_money.jpg": "8113701adccc8600caae7e31d958560e",
"assets/assets/images/comments.svg": "df88604731c954e118f837aa349690e6",
"assets/assets/images/more_selected.svg": "97c53d7dc8817db4c0bf740dcbcd9ed2",
"assets/assets/images/influencer.svg": "fb5801254511f15875a5997d59f9466e",
"assets/assets/images/compass1_selected.svg": "9b87a401be29e52d0df169f47b2b44de",
"assets/assets/images/rewards.svg": "af8a1cffb5266c9afd39401c3d5f5e16",
"assets/assets/images/user_added.svg": "55d29da655864b72069cfe73a11a3346",
"assets/assets/images/lock.svg": "8301f54ca102ab223cbc7670d8ad8373",
"assets/assets/images/no_points.svg": "a25387a479d03fb35c4a1b402094ddf7",
"assets/assets/images/no_reviews.svg": "17bc22675e510bdf5e7dcd27d5047cbe",
"assets/assets/images/product.svg": "bea54505a28082c3538bdcc8272c33dc",
"assets/assets/images/key.svg": "76144d30a4d2929cd4eb9d1d47fd170f",
"assets/assets/images/store.svg": "ca38bd4c068e0307a305b37d9847f8e8",
"assets/assets/images/giftbox.svg": "74199f6c9ead643d22f487d9a9c9312f",
"assets/assets/images/percentage.svg": "68d54ad3e4da2e45493641f4e8af65f7",
"assets/assets/images/storyboard-feeds.svg": "48a88f0136a6cd903b189a7756366b6c",
"assets/assets/images/comments_1.svg": "0f1182c761e715a4c544f707d07046e7",
"assets/assets/images/shield.svg": "416fbe42a405e73679481a3ff3a495bd",
"assets/assets/images/login_success.gif": "7677f5b77e4ba91e888f856ddb7aedbd",
"assets/assets/images/phone-alt.svg": "428021a3f65db66e7d7bc622073aabfd",
"assets/assets/images/no_products.svg": "dcec14ca4f3333713f45791e77c71d28",
"assets/assets/images/sale.svg": "6fa32c417d6d95f5ea4f1d57c3b97617",
"assets/assets/images/login.svg": "b53bd5f2cde3c54116374fe2bd49bf30",
"assets/assets/images/offers_selected.svg": "36c96074980ad330919d6d5cac02e827",
"assets/assets/images/no-media.svg": "ff4d55b73ac8517ec4b97d50dac68ec0",
"assets/assets/images/exchange.svg": "b978d70f397754c7d2fbaf48dec16ad0",
"assets/assets/images/no_feeds.svg": "7258063cf33779fa763b80ece4661950",
"assets/assets/images/category.svg": "4cdf1bd6ae125f7a50a9c014ddb8eeef",
"assets/assets/images/warning.svg": "5a294c1f391221efd08cb9390e810ffd",
"assets/assets/images/info.svg": "f6db92065266de7b4ad784e671008c06",
"assets/assets/images/close.svg": "52d4584f58e4c360bcbb0729fcce8204",
"assets/assets/images/orders.svg": "9b4c5a26484592cc33815f3553b15063",
"assets/assets/images/offers.svg": "4a317bc4c059bcf8327ba7a9e9900620",
"assets/assets/images/bag.svg": "0deb1b752bdb3da70421409e83862219",
"assets/assets/images/app-settings.svg": "bfe985a4c83c3c79c5f0d7e7a33d2db8",
"assets/assets/images/play1_selected.svg": "53d38a1be06e4c5b8bd4bb25444d67a7",
"assets/assets/images/sprite.png": "e5fab01310642f3ae64c34c1c7f8d0a8",
"assets/assets/images/login-temp.svg": "1138119ced76f599b1a6ab6f7af984a8",
"assets/assets/images/badge.svg": "570b058f99a783db00cb08f0a8fe9d15",
"assets/assets/images/message.svg": "a19c31f9b119e7d129b731b23e9b8457",
"assets/assets/images/play1.svg": "f62c569479c54211b911a59f4bef8ae3",
"assets/assets/images/play.svg": "8b6b927098642c4b22494c5ce5842e77",
"assets/assets/images/notification.svg": "37684fe233143f84859473ba5dde973e",
"assets/assets/images/reward.svg": "b9aa6fe814eeb188f3c6908aa2c3078d",
"assets/assets/images/no_internet.svg": "6f05979be8ea29fc8e093163db3bae78",
"assets/assets/images/send.svg": "a217df439ced444ef91da097f578e3fd",
"assets/assets/images/twinkle.gif": "7ce995d6ada57916c542b7577d947269",
"assets/assets/images/feeds.svg": "50df7ccdbfa07d41a6a0a0d09c504a75",
"assets/assets/images/shoppingbag.svg": "664633916b3aa07c644be9568c3e7010",
"assets/assets/images/more.svg": "70d27d9334da06666ed740ce2837ef50",
"assets/assets/images/media.svg": "c7e117eb01eca82713f35c9296f1d76e",
"assets/assets/images/bag1_selected.svg": "fdfbd32c4e85302bc0c4a515ade34be7",
"assets/assets/images/star.svg": "2a3dae4dee071d0a2c087335e316c594",
"assets/assets/images/profile.png": "3794d723f61a07e2f0ca923042d9df40",
"assets/assets/images/profile-1.svg": "5d260787d131e91a68087ca75a2e30e2",
"assets/assets/images/groupbuy.svg": "4ed5146d36ff89ac1f95ef6979fef068",
"assets/assets/images/products.svg": "e962647fdc86ab14f177598b00567da3",
"assets/assets/images/groupbuy-info.svg": "ac8b90276d13ebef561f0a99292644a9",
"assets/assets/images/language.svg": "80390878b040b0ec61b3a000c79d44d8",
"assets/assets/images/no_address.svg": "87625675854520c81917872a29bbc499",
"assets/assets/images/phone.svg": "6acd1ca106aaed2d099e26c442dea229",
"assets/assets/images/metrics.svg": "eeb79852a7b76c1f525cd9f61007f0a1",
"assets/assets/images/storyboard-rewards.svg": "3999b9ecb69dedea47295f9c46f0d750",
"assets/assets/images/success.svg": "dbdda4763a5b57ce5af41e97d3c98825",
"assets/assets/images/add-user.svg": "bbc04361c4afa19ab24cc65d4611e38a",
"assets/assets/images/location.svg": "33ddd8ad077708625ef4c16288ef7d5b",
"assets/assets/images/storyboard-liveshow.svg": "b56814ef92071c1f978726afebb48acf",
"assets/assets/images/profile.svg": "48d0f7dcf655d2a4af80527387b4670d",
"assets/assets/images/share.svg": "6077930bc2ba295ef36a7ac82004c3fb",
"assets/assets/images/money.svg": "4cc49d6ad21394724ae1a27936fe5bd2",
"assets/assets/images/error.svg": "9fc93dda0bcedc6bbbe8f3ab4328310e",
"assets/assets/images/no_live_show.svg": "d34a6a10c908c8f51234bf5aee8480c0",
"assets/assets/images/become_influencer.svg": "95f0b8bd074b0007cd8aec25fe2246a5",
"assets/assets/images/user-data.svg": "07ad5d8fb2e16233019b38be1d612d5e",
"assets/assets/images/history.svg": "54454a82b35c9a1f306df29d3b2ac4b8",
"assets/assets/images/bag1.svg": "b974721464ea02b3c4df31c878063061",
"assets/assets/images/unlike.svg": "a913d994b124ac5b4ffe3ea2c1575cee",
"assets/assets/images/heart.svg": "c9ed5ebea0a1dd94dbe9a46443e9ab9e",
"assets/assets/language/en-IN.json": "c393b62c206cbe88d79feca2780f9244",
"assets/assets/cfg/app_settings_in.json": "86b26af67919cbca008627a4478fe0d2",
"assets/assets/icon/logo.gif": "9f3e8d3707c9ead7af1039b2de29aa6e",
"assets/assets/icon/logo_bg.jpg": "bd375ad93806f379e3307a1cb6a6053f",
"assets/assets/fonts/Manrope/Manrope-Medium.ttf": "6196e0dab83345b15290ee22620358c1",
"assets/assets/fonts/Manrope/Manrope-ExtraLight.ttf": "a4b068ee8a8bdb4d976648992bb1db90",
"assets/assets/fonts/Manrope/Manrope-Bold.ttf": "656753569aef606dd528cc6bdf672cdc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

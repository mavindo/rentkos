'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d7543114978d0c06589a5749f111f61f",
"version.json": "578aaf278fae0956051bb81a7c08af36",
"index.html": "933aec78ae4986f7e614826493af2981",
"/": "933aec78ae4986f7e614826493af2981",
"main.dart.js": "fc6cdcc297b3035b092b6cdd630f95b3",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dfcc359358cc1bf4bd35ca607f13c8c8",
"assets/AssetManifest.json": "040f51d9cdfb4c241bedba2bde2f83a0",
"assets/NOTICES": "dde48478992a00333d240cca31ca858c",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/AssetManifest.bin.json": "a41f4dfb915c75996af0851c3a713235",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5a3e0a22aab6dc90bf005478194f447a",
"assets/fonts/MaterialIcons-Regular.otf": "666a9987c4d1ef6cb66f19e2bc848a79",
"assets/assets/svg/chart.svg": "88436bc84c1e2b0b62028356b925d5a6",
"assets/assets/svg/topbar_search.svg": "971646691c8ac9e762b5203ee23b4b4c",
"assets/assets/svg/tag.svg": "30ab071ff06dc4b6bf83614ade487434",
"assets/assets/svg/inbox.svg": "e16e462ff99b5f72d8f37f33919d67de",
"assets/assets/svg/mail_box.svg": "6580f85da8f3dccfd9f91bd33257a471",
"assets/assets/svg/question.svg": "b230019ede156213a268ea3ffe4a62c6",
"assets/assets/svg/mail_in.svg": "0118e5e8a7ae81dce1732540b5de500e",
"assets/assets/svg/brands/facebook.svg": "b35394bc97aeb6d44a404a8095051a11",
"assets/assets/svg/brands/google.svg": "aed8ced82b9d2e2e33d7c8fe007b4fe5",
"assets/assets/svg/brands/twitter.svg": "de820a1e5db3cdd6f9ff7274b60505b8",
"assets/assets/svg/cloud_upload.svg": "422b518125f52b0fe0c69f8d5e42450a",
"assets/assets/svg/pie_chart.svg": "1beab35f5194142868be849fd35eb65a",
"assets/assets/svg/mail.svg": "b23b048e47d5e031653e364a9f279df8",
"assets/assets/svg/wizard/book.svg": "a4811484d6c62585064f19ac1b3815fc",
"assets/assets/svg/wizard/bank.svg": "dbfe29fe1e943c2b31a1f1b1c2a0bc69",
"assets/assets/svg/wizard/menu.svg": "35fc4b99a1fc661daa4bd21b57d77c47",
"assets/assets/svg/down_arrow_circle.svg": "ad4d57150d4482856d62a2f82f8f63bd",
"assets/assets/svg/bell.svg": "fec06ec51a2d77e748fd0358f223125e",
"assets/assets/svg/menu_box.svg": "c4f8bfc0cb93bb3d062762390c88cfb5",
"assets/assets/svg/true.svg": "7294a8830100ecc562f6a13ec2de9968",
"assets/assets/svg/internet.svg": "cf41e2d4519e4e89e0a1783e3a38e425",
"assets/assets/svg/dashboard/form_icon.svg": "05bf48a6d3580317736f3915053f8236",
"assets/assets/svg/dashboard/payment.svg": "192bb4d4b41e93be07ee74d3625901ab",
"assets/assets/svg/dashboard/extend.svg": "31b1e0ca5c91d88d5b8a33d13fed2ddb",
"assets/assets/svg/dashboard/user.svg": "0dacf1fb27bc9fd2459a89d394437430",
"assets/assets/svg/dashboard/layanan.svg": "4bee83cc84b9e569e827f9a353a974f8",
"assets/assets/svg/dashboard/layanan_list.svg": "2f879315fd7cbc265757e7ff7c3f93d5",
"assets/assets/svg/dashboard/payment_automatis.svg": "833f027a5601cccc90fe7fb2aab77d65",
"assets/assets/svg/dashboard/grid_box.svg": "f91d75891d7b58feb51c7b4f0ea7682e",
"assets/assets/svg/dashboard/calender.svg": "7144e00ace9dea9db1759a657a4ed994",
"assets/assets/svg/dashboard/arrow_left.svg": "bbb39755a0a1f690cfad39f72f5e1eeb",
"assets/assets/svg/dashboard/order.svg": "40db51d0982518313c79c22dd005cfd1",
"assets/assets/svg/dashboard/file_icon.svg": "b0e3c3304e2b42298529124ab5c5095f",
"assets/assets/svg/dashboard/map_icon.svg": "47c6741325bf703f6a4a8ec8f43404a5",
"assets/assets/svg/dashboard/cart.svg": "40db51d0982518313c79c22dd005cfd1",
"assets/assets/svg/dashboard/properti_list.svg": "2f879315fd7cbc265757e7ff7c3f93d5",
"assets/assets/svg/dashboard/dashboard.svg": "38ee9f037a16942feaddcb3fbab7dfac",
"assets/assets/svg/dashboard/arrow_right.svg": "7c820cdd1871112c208894231693a07e",
"assets/assets/svg/dashboard/gift_icon.svg": "a1a200585e642625222ab291b8c178ae",
"assets/assets/svg/dashboard/email.svg": "fd6249a6c3bc1ad1d52f8c0177b36e44",
"assets/assets/svg/dashboard/invoices_list.svg": "96bd858466743872723e109ccde607fa",
"assets/assets/svg/dashboard/contact_list.svg": "30f147ebc03f0c4df048819c752e4b6d",
"assets/assets/svg/dashboard/payment_manual.svg": "d42107751db303a87dba1d0b1cbd38ba",
"assets/assets/svg/dashboard/admin_menu.svg": "8a7f88546c91bf6f088e9d1e95df8f26",
"assets/assets/svg/dashboard/percent.svg": "813684e67e3b61789638251d7dd3ecaa",
"assets/assets/svg/dashboard/report.svg": "b4284a196c635878a4afbfd47955462c",
"assets/assets/svg/dashboard/auth_icon.svg": "dd7cb1fba5e6d529fb016c4082e4bdbc",
"assets/assets/svg/dashboard/arrow_down.svg": "95692c06239ba4d00c41f4db09ce8555",
"assets/assets/svg/dashboard/chat.svg": "1ca88c1141b5ad2e6f4ef84a7972f301",
"assets/assets/svg/dashboard/flow.svg": "42ba49fbd817bf4e668c223bd0abbcd4",
"assets/assets/svg/dashboard/home_non.svg": "5c7924fd385ab15117ec4485e0c9e615",
"assets/assets/svg/dashboard/signin.svg": "a2b5575d7d0088ec6e43a66946584f0c",
"assets/assets/svg/dashboard/invoices.svg": "96bd858466743872723e109ccde607fa",
"assets/assets/svg/dashboard/faq.svg": "ca4306a8ef1ecec15b32f5dd0f6bf1cc",
"assets/assets/svg/dashboard/contact_us.svg": "ef89312e411a639b2bd73bc94915ee7b",
"assets/assets/svg/dashboard/celcius.svg": "d88751ece2669fa33f826c8d0d29bc74",
"assets/assets/svg/dashboard/properti.svg": "90d62f094d2e921a55c2246e43c8a5e7",
"assets/assets/svg/dashboard/profile.svg": "27860b8291ac4afccad3bc8b0eb283aa",
"assets/assets/svg/dashboard/signup.svg": "84b7c9ea5dad80945083c299826ce323",
"assets/assets/svg/dashboard/table_icon.svg": "e0a2a202499abd9aa5a1cce7e351162e",
"assets/assets/svg/dashboard/user%2520copy.svg": "0dacf1fb27bc9fd2459a89d394437430",
"assets/assets/svg/dashboard/tenant.svg": "0060babc2ea5e2d5798124b3f0f4c1b8",
"assets/assets/svg/dashboard/manage.svg": "f72a4d15261eda3919e67b12d16c3958",
"assets/assets/svg/setting.svg": "36120f0c679f93d5f249585c9d5bf7b1",
"assets/assets/svg/darkmode.svg": "6c485493928c0f0561ffc6c6d1bba46e",
"assets/assets/svg/checked_box2.svg": "e666175d21d7c6ea4c1509fbd0cc2ac2",
"assets/assets/svg/trash.svg": "2c2b76187b2b5f374073df036014f0b8",
"assets/assets/svg/star.svg": "c5115efb9f747c99d7e654c6a95f9129",
"assets/assets/svg/double_quote.svg": "fa4ee9744ae08204aff5df229af1354a",
"assets/assets/svg/large.svg": "ca4f21d6a34145d78e4b0004cfd34773",
"assets/assets/svg/switch/switch.svg": "1d67c78d23d4aae85a5b7d45913a070a",
"assets/assets/svg/menu_left.svg": "a97c843407fb4826eddceaa93aa8495b",
"assets/assets/svg/maintenance/setting2.svg": "b547b75c238f723654e460cdb3988361",
"assets/assets/svg/maintenance/settings.svg": "b547b75c238f723654e460cdb3988361",
"assets/assets/svg/maintenance/Icon2.svg": "7cee9831161b239ba05634d79d98f943",
"assets/assets/svg/maintenance/Icon3.svg": "a357fadf78d885dd2bf74264ab9e8648",
"assets/assets/svg/maintenance/Icon1.svg": "1b6a3f18295845f055037ad28d332789",
"assets/assets/svg/wallets/2_badge.svg": "70b5042959263b58aa5c8b66d51fb5e6",
"assets/assets/svg/wallets/chart_1.svg": "8c906512efbb4d3267577a6d09388212",
"assets/assets/svg/wallets/chart_3.svg": "5f29fba7a8eab08c67594c1bd418aa37",
"assets/assets/svg/wallets/chart_2.svg": "0ba4377596d6c0ac90fee84b322686a7",
"assets/assets/svg/wallets/4_badge.svg": "d19a1abd8a13dd71ba056351aca15340",
"assets/assets/svg/wallets/chart_4.svg": "0da125d5c2632d3d294fe622f8db89c5",
"assets/assets/svg/wallets/3_badge.svg": "e147b22e96b401689f51ce28bf2d0a8c",
"assets/assets/svg/wallets/Badge_3.svg": "25cfd2c04c807f52896737b0d86179bb",
"assets/assets/svg/wallets/Badge_2.svg": "f39443dec183037a39ba2bbc0f83d100",
"assets/assets/svg/wallets/Badge_1.svg": "1158fe24a3e1dcd30a082110bc69ea94",
"assets/assets/svg/wallets/Badge_5.svg": "c8d3aa093a2539f3574b742b90f1ac09",
"assets/assets/svg/wallets/Badge_4.svg": "586575c74e61f9c6051d3ca84c159e22",
"assets/assets/svg/wallets/1_badge.svg": "368c4429a228a112dee9325acf1c3553",
"assets/assets/svg/tag2.svg": "0e84bdb40a1491b01970587c18a32217",
"assets/assets/svg/calendar.svg": "1e2a0fcc90fb2e03149844b787be2a7d",
"assets/assets/svg/check_box.svg": "8ce08be3a814ce5da1de3e3c7261a4a1",
"assets/assets/svg/blog.svg": "b1db4bab9dd09032316743870c67f6fd",
"assets/assets/svg/timeline/b1.svg": "6550cafd4eefdb5794d959731edd0bb6",
"assets/assets/svg/timeline/b2.svg": "460e81892e80c2bc4ae5b7c14afd8ff5",
"assets/assets/svg/timeline/b3.svg": "412aa1dbd78125b781e8d5c3fdeee838",
"assets/assets/svg/timeline/b6.svg": "02b55bbc9a5837e819f54ea781305a94",
"assets/assets/svg/timeline/b4.svg": "c396d776d715a14bebb064d5070366cb",
"assets/assets/svg/timeline/b5.svg": "facae1ee2ec4716d4b8c4e86040fe59b",
"assets/assets/svg/menu1.svg": "e0ae582b96123e1fea9acec0441a21cc",
"assets/assets/svg/logo.svg": "f562fbc54bec61fa82f177b753bc323c",
"assets/assets/svg/pricing/check_circle_black.svg": "7f5880f7093da866079e7fa9f03117a6",
"assets/assets/svg/pricing/close_circle.svg": "71e17288d7b1a418c3f1a496b8508a60",
"assets/assets/svg/pricing/check_circle.svg": "c968c0b97a6c7a1af44ee69776daad1a",
"assets/assets/svg/pricing/check_circle_blue.svg": "6078803b38832406e875669788ac15e1",
"assets/assets/svg/half_question.svg": "32dd7afa8f4357436af08f408581f3c3",
"assets/assets/svg/menu.svg": "6782e48d4ca420ac339cde9767b14a4f",
"assets/assets/svg/exclamation.svg": "023cf93914b3930ffbbb2daf7cb8480b",
"assets/assets/svg/jaspro_logo.svg": "f7c8ef6be5ce8a67d6a00386f06bbaeb",
"assets/assets/svg/up_arrow_circle.svg": "98ebe463f846359d430a8bde8a79f7a1",
"assets/assets/data_temp/contact_data.json": "ee000bf3b6909fdffebd91c5e848a8ad",
"assets/assets/data_temp/properti_data.json": "2b7e55c04f11f228bc02ad0c0b87609f",
"assets/assets/data_temp/invoices_data.json": "dc5d348fab7b6abfe39431db52838470",
"assets/assets/data_temp/invoices_detail.json": "0c8095391c14fa3e7e610692dd83c220",
"assets/assets/data_temp/world.json": "6c549df58628a7d7b4a082e7a9d00580",
"assets/assets/data_temp/employee_data.json": "1c5bb92bfb8ace81da2f16afc1701e81",
"assets/assets/image/appbar/github.png": "8a423376a00199e7396afb2d9bc37526",
"assets/assets/image/appbar/bitbucket.png": "8835d733be92c262762f532b94c66b77",
"assets/assets/image/appbar/mail_chimp.png": "c9076360c41eb4187154f841ef692ccd",
"assets/assets/image/appbar/dropbox.png": "c4a911fb56a3051c03d090482bdf3e94",
"assets/assets/image/appbar/slack.png": "6cba873504d370452bf86091f122102f",
"assets/assets/image/appbar/dribbble.png": "1bfec3f646e79940f24181360a030797",
"assets/assets/image/icon.png": "bfa6184db680ea2f5959095dd32ae0f9",
"assets/assets/image/flag.png": "27af18cb28d7e8a80c15f5808fa887c9",
"assets/assets/image/login.png": "2bc281d71cb9ec068105d7bd2580c5b5",
"assets/assets/image/flags/russia.jpg": "e27dc961c2bcbd2425cde450db483546",
"assets/assets/image/flags/french.jpg": "351bca5694c04dc96edaf846c51f3d69",
"assets/assets/image/flags/us.jpg": "bd10008ded7a38eea3477b0f73ca9515",
"assets/assets/image/flags/germany.jpg": "cb71594bb36ab852bad0ed5596a85a49",
"assets/assets/image/flags/spain.jpg": "bcbebdc059e40058148ffa9c1359bdc1",
"assets/assets/image/flags/italy.jpg": "f886f55c1e3c6dc92791ae5132d042ba",
"assets/assets/image/flags/indonesia.jpg": "9b6619efcdb601c2925f87afd9472e13",
"assets/assets/image/coming/bg1.jpg": "a1b6e6c2c17217acc4fa8b431eb33d44",
"assets/assets/image/coming/bg3.jpg": "7c6a882c224f4cf3846218cbd552bf64",
"assets/assets/image/coming/bg2.jpg": "ef90c434a9e33499543e14b932db69db",
"assets/assets/image/chart.png": "dfb11329dea4593c9fec23d912b87e6a",
"assets/assets/image/chart2.png": "488bad9eb4e957a09d5766189ff305d9",
"assets/assets/image/blog/img_1.jpg": "ead3eee7db18fbb5ce0f0a7621316620",
"assets/assets/image/blog/img_2.jpg": "23877ece20ded32e855a4979970df5e6",
"assets/assets/image/blog/img_3.jpg": "929b4e41c64b7765aa9af2f1f19d3a91",
"assets/assets/image/blog/img_7.jpg": "2d0ee89b2655566c477a08714975aca8",
"assets/assets/image/blog/img_6.jpg": "4a36dae2d4593cc40c33312d493b2cab",
"assets/assets/image/blog/img_4.jpg": "727d29e112ef2f0a4e35c386b8964828",
"assets/assets/image/blog/img_5.jpg": "cfa94bb89fabc9e9e79b01f7515ca842",
"assets/assets/image/avatar5.png": "f7db829eab7704d622a30cd0e7d1ff1f",
"assets/assets/image/avatar4.png": "3338a150ed5e2375a397b34a94eaba66",
"assets/assets/image/avatar.png": "2dcf0dc5b381b50d83accfcc49eec71e",
"assets/assets/image/logo.png": "230d4860dd01700227fb00cc1b223ada",
"assets/assets/image/avatar3.png": "f8b8e56c26433d203f86271c538bcfa4",
"assets/assets/image/tree.jpg": "727d29e112ef2f0a4e35c386b8964828",
"assets/assets/image/avatar2.png": "d9b21e4429ee47a455ed410e4cb96921",
"assets/assets/image/gift.png": "b405bd45bbc8e9c46b75bc82777d7dd3",
"assets/assets/image/profile.png": "ec139d9dffbeb040745f40b529a20736",
"assets/assets/image/app_logo.png": "a202c24b46720e8c59e6a412e590acb4",
"assets/assets/image/image1.jpg": "929b4e41c64b7765aa9af2f1f19d3a91",
"assets/assets/image/error/img.png": "3ed446096ac424a7f1053df34aa9c790",
"assets/assets/image/image2.jpg": "95069fe7400d5025f0c7413062427443",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

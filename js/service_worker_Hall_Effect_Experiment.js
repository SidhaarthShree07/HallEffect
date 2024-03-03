var dataCacheName = 'Vlab_Hall_Effect_Experiment';
var cacheName = 'Cache_Hall_Effect_Experiment';
var filesToCache = [ 
	'./',	
	'index.html',
	'css/experiment.css',
	'images/background.svg',
	'images/big_arrow_left.svg',
	'images/big_arrow_right.svg',
	'images/equipments.svg',
	'images/gauss_meter.svg',
	'images/needle.svg',
	'images/needle_top.svg',
	'images/small_arrow_left.svg',
	'images/small_arrow_right.svg',
	'images/solenoid.svg',
	'images/tiny_arrow_left.svg',
	'images/tiny_arrow_right.svg',
	'images/tooltip.svg',
	'images/twisted_wire.svg',
	'images/twisted_wire_connected.svg',
	'images/twisted_wire_move.svg',
	'images/volt_current_light.svg',
	'images/volt_current_switches.svg',
	'images/white_rotate.svg',
	'images/whiteprobe.svg',
	'images/whiteprobe_connected.svg',
	'images/whiteprobe_move.svg',
	'images/wooden_stand_closed.svg',
	'images/wooden_stand_open.svg',
	'locale/en-IN/messages.po',
	'locale/hi-IN/messages.po',
	'js/app.js',
	'js/experiment.js',
	'js/user_controller.js',
	'css/bootstrap.min.css',
	'css/fonts.googleapis.css',
	'bower_components/angular/angular.js',
	'bower_components/angular/angular.min.js',
	'bower_components/angular-animate/angular-animate.js',
	'bower_components/angular-aria/angular-aria.js',
	'bower_components/angular-chart/angular-charts.js',
	'bower_components/angular-chart/angular-charts.min.js',
	'bower_components/angular-fullscreen/angular-fullscreen.js',
	'bower_components/angular-material/angular-material.css',
	'bower_components/angular-material/angular-material.js',
	'bower_components/angular-material/angular-material_v1.0.7.css',
	'bower_components/angular-material/angular-material_v1.0.7.js',
	'bower_components/angular-sanitize/angular-sanitize.min.js',
	'bower_components/angular-translate/angular-translate.min.js',
	'bower_components/dialogs/dialogs.min.js',
	'bower_components/ui-bootstrap-tpls/ui-bootstrap-tpls-0.11.2.min.js',
	'js/canvasjs.min.js',	
	'js/easeljs-0.7.0.min.js',
	'js/getlanguage.js',
	'js/Gettext.js',	
	'js/stopwatch.js', 	
	'css/app.css',
	'css/dialogs.css',
	'css/icon.css',
	'icons/Icon1.svg',
	'icons/Icon2.svg',
	'icons/Icon3.svg',
	'svg/avatars.svg',
	'svg/menu.svg',	
	'bower_components/angular/angular.js',
	'bower_components/angular/angular.min.js',
	'bower_components/angular-animate/angular-animate.js',
	'bower_components/angular-aria/angular-aria.js',
	'bower_components/angular-chart/angular-charts.js',
	'bower_components/angular-chart/angular-charts.min.js',
	'bower_components/angular-fullscreen/angular-fullscreen.js',
	'bower_components/angular-material/angular-material.css',
	'bower_components/angular-material/angular-material.js',
	'bower_components/angular-material/angular-material.min.js',
	'bower_components/angular-material/angular-material_v1.0.7.css',
	'bower_components/angular-material/angular-material_v1.0.7.js',
	'bower_components/angular-sanitize/angular-sanitize.min.js',
	'bower_components/angular-translate/angular-translate.min.js',
	'bower_components/dialogs/dialogs.min.js',
	'bower_components/ui-bootstrap-tpls/ui-bootstrap-tpls-0.11.2.min.js',
	'fonts/1hZf02POANh32k2VkgEoUBTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/-2n2p-_Y08sg57CNWQfKNvesZW2xOQ-xsNqO47m55DA.woff2',
	'fonts/77FXFjRbGzN4aCrSFhlh3hJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/97uahxiqZRoncBaCEI3aWxJtnKITppOI_IvcXXDNrsc (1).woff2',
	'fonts/cDKhRaXnQTOVbaoxwdOr9xTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/CWB0XYA8bzo0kSThX0UTuA.woff2',
	'fonts/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2',
	'fonts/donefont.woff2',
	'fonts/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA (1).woff2',
	'fonts/Fcx7Wwv8OzT71A3E1XOAjvesZW2xOQ-xsNqO47m55DA.woff2',
	'fonts/glyphicons-halflings-regular.eot',
	'fonts/glyphicons-halflings-regular.svg',
	'fonts/glyphicons-halflings-regular.ttf',
	'fonts/glyphicons-halflings-regular.woff',
	'fonts/glyphicons-halflings-regular.woff2',
	'fonts/isZ-wbCXNKAbnjo6_TwHThJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/jSN2CGVDbcVyCnfJfjSdfBJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/K23cxWVTrIFD6DJsEVi07RTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/mbmhprMH69Zi6eEPBYVFhRJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/mErvLBYg_cXG3rLvUsKT_fesZW2xOQ-xsNqO47m55DA.woff2',
	'fonts/mx9Uck6uB63VIKFYnEMXrRJtnKITppOI_IvcXXDNrsc(2).woff2',
	'fonts/mx9Uck6uB63VIKFYnEMXrRJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/NdF9MtnOpLzo-noMoG0miPesZW2xOQ-xsNqO47m55DA.woff2',
	'fonts/oHi30kwQWvpCWqAhzHcCSBJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/oOeFwZNlrTefzLYmlVV1UBJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/OpXUqTo0UgQQhGj_SFdLWBTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/PwZc-YbIL414wB9rB1IAPRJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/rGvHdJnr2l75qb0YND9NyBJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2',
	'fonts/u0TOpm082MNkS5K0Q4rhqvesZW2xOQ-xsNqO47m55DA.woff2',
	'fonts/UX6i4JxQDm3fVTc1CPuwqhJtnKITppOI_IvcXXDNrsc.woff2',
	'fonts/vPcynSL0qHq_6dX7lKVByfesZW2xOQ-xsNqO47m55DA (1).woff2',
	'fonts/vSzulfKSK0LLjjfeaxcREhTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/WxrXJa0C3KdtC7lMafG4dRTbgVql8nDJpwnrE27mub0.woff2',
	'fonts/ZLqKeelYbATG60EpZBSDyxJtnKITppOI_IvcXXDNrsc.woff2',	
	'images/play.svg',
	'images/reset.svg',
	'images/stop.svg',
	'images/stopwatch.svg',
	'images/tick_icon.svg',
	'images/wrong_icon.svg',
	'images/icons/android-chrome-192x192.png',
	'images/icons/android-chrome-512x512.png',
	'images/icons/apple-touch-icon.png',
	'images/icons/AU_logo_16.ico',
	'images/icons/AU_logo_16.png',
	'images/icons/clear.svg',
	'images/icons/done.svg',
	'images/icons/favicon-16x16.png',
	'images/icons/favicon-32x32.png',
	'images/icons/favorite.svg',
	'images/icons/get.svg',
	'images/icons/home_icon.svg',
	'images/icons/icon-128x128.png',
	'images/icons/icon-144x144.png',
	'images/icons/icon-152x152.png',
	'images/icons/icon-192x192.png',
	'images/icons/icon-256x256.png',
	'images/icons/icon-32x32.png',
	'images/icons/loading.svg',
	'images/icons/logo_128.png',
	'images/icons/logo_144.png',
	'images/icons/logo_152.png',
	'images/icons/logo_16.png',
	'images/icons/logo_192.png',
	'images/icons/logo_256.png',
	'images/icons/logo_32.png',
	'images/icons/logo_48.png',
	'images/icons/logo_512.png',
	'images/icons/logo_57.png',
	'images/icons/logo_72.png',
	'images/icons/logo_96.png',
	'images/icons/Logo-48-x-48.png',
	'images/icons/menu.svg',
	'images/icons/more_btn.svg',
	'images/icons/mstile-150x150.png',
	'images/icons/right_arrow.svg',	
	'js/createjs-2013.12.12.min.js',
	'js/createjs-2015.05.21.min.js',
	'js/delaytimer.js',	
	'js/loading.js',	
	'js/tweenjs-0.6.2.min.js'	
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
}); 

// ServiceWorker Active
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        // if (key !== cacheName && key !== dataCacheName) {
        //   console.log('[ServiceWorker] Removing old cache', key);
        //   return caches.delete(key);
        // }
      }));
    })
  );
  return self.clients.claim();
});


// The page has made a request
self.addEventListener("fetch", function (event) {
  var requestURL = new URL(event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {

        // we have a copy of the response in our cache, so return it
        if (response) {
          return response;  //no network request necessary
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(  //
          function (response) {

  var shouldCache = false;

  if (response.type === "basic" && response.status === 200) {
    shouldCache = cacheName;
  } else if (response.type === "opaque") {
    // if response isn't from our origin / doesn't support CORS

    if (requestURL.hostname.indexOf(".wikipedia.org") > -1) {
      shouldCache = cacheNameWikipedia;
    } else if (requestURL.hostname.indexOf(".typekit.net") > -1) {
      shouldCache = cacheNameTypekit;
    } else {
      // just let response pass through, don't cache
    }

  }

  if (shouldCache) {
    var responseToCache = response.clone();

    caches.open(shouldCache)
      .then(function (cache) {
        var cacheRequest = event.request.clone();
        cache.put(cacheRequest, responseToCache);
      });
  }

  return response;
}
        );

      })
  );
});
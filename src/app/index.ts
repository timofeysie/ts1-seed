/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="../components/navbar/navbar.controller.ts" />

module ts1Seed {
  'use strict';

  angular.module('ts1Seed', [])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
;
}

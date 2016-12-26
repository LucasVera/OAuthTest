
'use strict';

angular.module('OAuthApp')
    .constant('oAuthBaseUrl', 'https://api.imgur.com/oauth2/')
    .service('loginService', ['$resource', 'oAuthBaseUrl', function ($resource, oAuthBaseUrl) {

        this.imgurLoginResource = function () {
            return $resource(oAuthBaseUrl + 'token');
        }

    }]);




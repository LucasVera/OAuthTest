'use strict';

angular.module('OAuthApp')
    .controller('loginCtrl', ['$scope', function ($scope) {
        $scope.test = 'hola';


        $scope.oauthLogin = function (type) {
            switch (type) {
                case 'imgur':
                    //window.location.href = 'https://api.imgur.com/oauth2/authorize?response_type=token&client_id=LucasVeraToro';
                    var provider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(provider).then(
                        function (result) {
                            var token = result.credential.accessToken;
                            var user = result.user;
                            window.alert(token + ' // ' + JSON.stringify(user));
                        }).catch(function (error) {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            var email = error.email;
                            var credential = error.credential;
                            window.alert(errorCode + ' - ' + errorMessage + ' - ' + email + ' - ' + credential);
                        });
                    break;
            }
        }


    }]);
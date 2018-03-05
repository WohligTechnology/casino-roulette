var adminurl = "http://192.168.1.119:1337/api/";
var url = "http://192.168.1.119:1338/api/";

var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
angular.module('starter.service', [])

  .factory('Service', function ($http, $ionicLoading, $timeout, $ionicActionSheet) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    return {
      memberData: function (accessToken, callback) {
        $http.post(url + 'Member/getAccessLevel', {
          accessToken: accessToken
        }).then(callback);
      },


    }
  });

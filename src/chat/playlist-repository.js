class PlaylistRepository {
    constructor($http, $timeout, $q) {
        var lazyResponse = function (promise, duration) {
            duration = duration || 300;

            return $q(function (resolve) {
                $timeout(function () {
                    promise.then(resolve);
                }, duration);
            });
        };

        this.getPlaylist = function (playlist) {
            return lazyResponse($http.get('/api/playlists/' + playlist));
        };

        this.getPlaylists = function () {
            return lazyResponse($http.get('/api/playlists'));
        };
    }
}

angular.module('chat-app')
    .service('PlaylistRepository', PlaylistRepository);

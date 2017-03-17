var EventEmitter = require('../lib/event-emitter');

class PlaylistService extends EventEmitter {
    constructor(PlaylistRepository, $timeout, $q, $rootScope) {
        super();

        this.playlistRepository = PlaylistRepository;
    }

    getPlaylist(id) {
        return this.playlistRepository.getPlaylist(id);
    }

    shuffle() {
        this.playlistRepository.getPlaylist(1).then(response => {
            this.trigger('shuffle', response.data.slice(1));
        });
    }
}

angular.module('chat-app').service('PlaylistService', PlaylistService);

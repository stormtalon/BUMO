var EventEmitter = require('../lib/event-emitter');

class PlaylistService extends EventEmitter {
    constructor(PlaylistRepository, $timeout, $q, $rootScope) {
        super();

        this.playlistRepository = PlaylistRepository;
    }

    getPlaylist(id) {
        return this.playlistRepository.getPlaylist(id);
    }

    shuffle(playlist) {
        this.playlistRepository.getPlaylist(playlist).then(response => {
            this.trigger('shuffle', response.data);
        });
    }
}

angular.module('chat-app').service('PlaylistService', PlaylistService);

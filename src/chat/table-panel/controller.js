module.exports = class TablePanelController {
    constructor(PlaylistService) {
        PlaylistService.getPlaylist(1).then(response => {
            this.tracks = response.data;
        });

        PlaylistService.bind('shuffle', (playlist) => {
            this.tracks = playlist;
        });
    }
}


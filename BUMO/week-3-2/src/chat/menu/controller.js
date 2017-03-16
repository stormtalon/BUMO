module.exports = class MenuController {
    constructor(ChatService, PlaylistService) {
        this.playlistService = PlaylistService;

        ChatService.bind(ChatService.EventType.UPDATE, () => {
            this.count = ChatService.getUnreadCount();
        });

        ChatService.bind(ChatService.EventType.SET_ACTIVE_THREAD, () => {
            this.count = ChatService.getUnreadCount();
        });
    }

    shuffle() {
        this.playlistService.shuffle();
    }
}

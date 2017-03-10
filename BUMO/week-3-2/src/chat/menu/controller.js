module.exports = class MenuController {
    constructor(ChatService, $scope) {
        ChatService.bind(ChatService.EventType.UPDATE, () => {
            this.count = ChatService.getUnreadCount();
        });

        ChatService.bind(ChatService.EventType.SET_ACTIVE_THREAD, () => {
            this.count = ChatService.getUnreadCount();
        });

        $scope.doSomething = function(){
            alert('beep');
        }
    }
}

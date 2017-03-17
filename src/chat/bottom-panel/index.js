var controller = require('./controller');

angular
    .module('chat-app')
    .component('bottomPanel', {
        templateUrl: 'chat/bottom-panel/template.html',
        controller: controller
    });
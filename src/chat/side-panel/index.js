var controller = require('./controller');

angular
    .module('chat-app')
    .component('sidePanel', {
        templateUrl: 'chat/side-panel/template.html',
        controller: controller
    });
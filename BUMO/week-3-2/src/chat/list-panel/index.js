var controller = require('./controller');

angular
    .module('chat-app')
    .component('listPanel', {
        templateUrl: 'chat/list-panel/template.html',
        controller: controller
    });
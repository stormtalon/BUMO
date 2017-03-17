var controller = require('./controller');

angular
    .module('chat-app')
    .component('tablePanel', {
        templateUrl: 'chat/table-panel/template.html',
        controller: controller
    });
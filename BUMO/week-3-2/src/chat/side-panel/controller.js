module.exports = class SidePanelController {
    constructor($scope) {
        $scope.doSomething = function() {
            location.href = "https://accounts.spotify.com/tr-TR/login?continue=https:%2F%2Fwww.spotify.com%2Ftr%2Faccount%2Foverview%2F";
        }
    }
}


module.exports = class SidePanelController {
    constructor() {
    }
}

module.exports = class SidePanelController {
    loginBtn() {
        location.href = "https://accounts.spotify.com/tr-TR/login?continue=https:%2F%2Fwww.spotify.com%2Ftr%2Faccount%2Foverview%2F";
    }
    combGenresBtn() {
        alert("Combine genres")
    }
    saveListBtn() {
        alert("Save List")
    }
    aboutBtn() {
        document.write("We are hard-working IT students Merve, Onur, Berk and Ulas, studying in Sabanci University IT Master Programme and this is our project for our Front-end development class. We hope that you will enjoy using this application as much as we had fun developing it!");
    }
}

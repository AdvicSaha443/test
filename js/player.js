class Player {
    constructor() {}

    getCount() {
        var PlayerCountref = database.ref('PlayerCount');
        PlayerCountref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count) {
        database.ref('/').update({
            PlayerCount: count
        })
    }

    update(name) {
        var playerIndex = "Player"+playerCount;
        database.ref(playerIndex).set({
            Name: name
        })
    }
}
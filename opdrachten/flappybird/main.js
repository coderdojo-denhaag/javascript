// Create our 'main' state that will contain the game
var mainState = {
    preload: function () {
        preload();
    },

    create: function () {
        create();
    },

    update: function () {
        update();
    },
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
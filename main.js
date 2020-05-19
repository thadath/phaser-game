var mainState = {
    preload: function() {
        game.load.image('devahoy', './assets/logo.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.spritesheet('player', 'assets/warrior_m.png', 32, 36);
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.myWorld = game.add.group();

        this.myWorld.enableBody = true;
        var ground = this.myWorld.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;
        var left = this.myWorld.create(0, 450 - 32, 'ground');
        left.body.immovable = true;

        var right = this.myWorld.create(450, 350 - 32, 'ground');
        right.body.immovable = true;

        var middle = this.myWorld.create(250, 250 - 32, 'ground');
        middle.scale.setTo(0.3, 1);
        middle.body.immovable = true;

        var top = this.myWorld.create(100, 150 -32, 'ground');
        top.scale.setTo(0.2, 1);
        top.body.immovable = true;
        game.stage.backgroundColor = '#e26a6b';
        game.add.sprite(0, 0, 'devahoy').anchor.setTo(0, 0); 
    },

	update: function() {

	}
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('main', mainState);
game.state.start('main');
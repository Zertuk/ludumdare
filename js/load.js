var load_state = {
	preload: function() {
		game.load.image('background', 'assets/background.png');
		game.load.image('platform', 'assets/platform.png');
		game.load.spritesheet('shadow', 'assets/shadow.png');
		game.load.spritesheet('light', 'assets/light.png');
		game.load.image('box', 'assets/box.png');
		game.load.image('emptybox', 'assets/emptybox.png');
		game.load.image('spikes', 'assets/spikes.png');
		game.load.image('fullbox', 'assets/fullbox.png');

	},

	create: function() {
		this.game.state.start('play');


	}
}
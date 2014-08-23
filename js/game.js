var game = new Phaser.Game(600, 600, Phaser.AUTO, 'game_container');


game.state.add('preload', preload_state);
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);
game.state.add('end', end_state);

game.state.start('preload');

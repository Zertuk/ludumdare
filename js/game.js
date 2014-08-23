var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'game_container');

var player;
var platform;
var cursors;
var shadow;
var box;
var space_key;
var boxHold;

game.state.add('preload', preload_state);
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);
game.state.add('end', end_state);

game.state.start('load');

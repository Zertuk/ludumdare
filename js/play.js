var play_state = {
	create: function() {
		var background = game.add.sprite(0, 0, 'background');
		shadow = true;
		boxHold = false;


		platform = game.add.group();
		platform.enableBody = true;


		var ground = platform.create(0, 295, 'platform');
		ground.body.immovable = true;
		ground.enableBody = true;

		player = game.add.sprite(10, 200, 'shadow');

		player.scale.setTo(2, 2);

		game.physics.arcade.enable(player);

		player.body.gravity.y = 350;
		player.body.collideWorldBounds = true;

		cursors = game.input.keyboard.createCursorKeys();
		space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


		box = game.add.group();
		box.enableBody = true;

		var box1 = box.create(500, 350, 'box');
		game.physics.arcade.enable(box1);
		box1.body.collideWorldBounds = true;


	},

	update: function() {

		game.physics.arcade.collide(player, platform);
		game.physics.arcade.overlap(player, box, this.grabBox, null, this);


		if (cursors.left.isDown) {
			player.body.velocity.x = -150;
		}
		else if (cursors.right.isDown) {
			player.body.velocity.x = 150;
		}
		else if (cursors.up.isDown && shadow) {
			player.body.velocity.y = -200;
		}
		else if (cursors.up.isDown && !shadow) {
			player.body.velocity.y = 200;
		}
		else {
			player.body.velocity.x = 0;
		}

		if (cursors.down.isDown) {
			this.switchWorlds();
		}
	},

	switchWorlds: function() {
		if (shadow) {
			player.kill();
			player = game.add.sprite(10, 430, 'light');

			player.scale.setTo(2, 2);

			game.physics.arcade.enable(player);

			player.body.gravity.y = -350;
			player.body.collideWorldBounds = true;
			shadow = false;
			if (boxHold) {
				box.kill();
				var box1 = box.create(500, 350, 'box');
				game.physics.arcade.enable(box1);
				box1.body.collideWorldBounds = true;

			}
		}
		else {
			player.kill();
			player = game.add.sprite(10, 200, 'shadow');

			player.scale.setTo(2, 2);

			game.physics.arcade.enable(player);

			player.body.gravity.y = 350;
			player.body.collideWorldBounds = true;
			shadow = true;

		}

	},
	grabBox: function(player, box) {
		if (space_key.isDown) {
			box.body.velocity.x = player.body.velocity.x;
			box.body.velocity.y = player.body.velocity.y;
			boxHold = true;
		}
		else {
			boxHold = false;
		}
	}
	
}


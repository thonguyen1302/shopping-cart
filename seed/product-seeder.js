var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping-cart');

var products = [
	new Product({
		imagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
		title: "Gothic Game",
		description: "Gothic is a single-player action role-playing video game for Microsoft Windows developed by the German company Piranha Bytes. ",
		price: 12
	}),
	new Product({
		imagePath: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiLqOCUjrziAhWKdN8KHcEaDBkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F588071663820222064%2F&psig=AOvVaw36PMRrToiaM5IYPA15sPXE&ust=1559060239860343",
		title: "Fortnite",
		description: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine",
		price: 12
	}),
	new Product({
		imagePath: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiho9upjrziAhVrc98KHZj7CcQQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBattlefield_1&psig=AOvVaw05Xq-fOnO_Sbdl99M17SZF&ust=1559060292917398https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
		title: "Battle filed",
		description: "Battlefield is a series of first-person shooter video games that started out on Microsoft Windows and OS X with Battlefield 1942, which was released in 2002. The series is developed by Swedish company EA DICE and is published by American company Electronic Arts",
		price: 12
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		if (err) {
			console.log(err);
		}
		done++;
		if (done == products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}

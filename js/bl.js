(function() {
	var businessLogic = function() {

		console.log("go BL!");

		this.bakery = {
		  supplies: {
		    flour: 4,
		    eggs: 12,
		    sugar: 17,
		    spice: 5
		  },
		  goodRequirements: {
		    cupcake: {
		      flour: 2,
		      eggs: 1,
		      sugar: 1,
		      spice: 0
		    },

		    // TODO: Create required ingredients for cookie
		    cookie: {
		    	flour: 1, 
		    	eggs: 2,
		    	sugar: 1,
		    	spice: 1
		    }
		  },

		  updateIngredientsList: function() {
		  	console.log("go update");
		  	$(document).trigger('update');
		  },
		  
		  make: function(goodType) {
		  	console.log("Go make function go!!!");
		  	console.log('Attempting to make a:', goodType);
		  	var req = this.goodRequirements[goodType];
		  	console.log(req);
		  	// TODO: Only make if we have enough ingredients
		  	if (req.flour <= this.supplies.flour
		  		&& req.eggs <= this.supplies.eggs
		  		&& req.sugar <= this.supplies.sugar
		  		&& req.spice <= this.supplies.spice) {
		 
		  	  // TODO: Reduce the bakery's supplies by the required amount
		  		this.supplies.flour -= req.flour;
		  		this.supplies.eggs -= req.eggs;
		  		this.supplies.sugar -= req.sugar;
		  		this.supplies.spice -= req.spice;

		  	  this.updateIngredientsList();

		  		$(document).trigger('show_picture', goodType);
		 	 } else {
		 	 	alert("you dont have enough ingredients");
		 	 }
		  },

		  buy: function(goodType) {
		  	if (goodType == "flour") {
		  		this.supplies.flour += 1;
		  	} else if (goodType == "eggs") {
		  		this.supplies.eggs += 1;
		  	} else if (goodType == "sugar") {
		  		this.supplies.sugar += 1;
		  	} else {
		  		this.supplies.spice += 1;
		  	}
		  }

		}



	};
	window.bl = new businessLogic();
})();
(function() {
	var uiLogic = function() {

		console.log("Go UI!");

		$(document).on('update', function(e) {
			console.log("go ui update");
			$('.ingredients .flour span').text(bl.bakery.supplies.flour);
			$('.ingredients .eggs span').text(bl.bakery.supplies.eggs);
			$('.ingredients .sugar span').text(bl.bakery.supplies.sugar);
			$('.ingredients .spice span').text(bl.bakery.supplies.spice);
		});
			
		bl.bakery.updateIngredientsList();

		$('#bakery .make').on('click', function (e) {
		  var goodType = $(e.currentTarget).data('good-type');
		  // TODO: Make the good
		  bl.bakery.make(goodType);
		});

		$('.flour').on('click',  function(e) {
			bl.bakery.buy("flour");
			bl.bakery.updateIngredientsList();
		});

		$('.eggs').on('click',  function(e) {
			bl.bakery.buy("eggs");
			bl.bakery.updateIngredientsList();
		});		

		$('.sugar').on('click',  function(e) {
			bl.bakery.buy("sugar");
			bl.bakery.updateIngredientsList();
		});

		$('.spice').on('click',  function(e) {
			bl.bakery.buy(".spice");
			bl.bakery.updateIngredientsList();
		});

		$(document).on('show_picture', function(e, goodType) {
			var goodDiv = $('<div class="show ' + goodType + '"></div>');
			$('.display').append(goodDiv);
		});

	};
	window.ui = new uiLogic();
})();
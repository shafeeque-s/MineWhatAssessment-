var productList = data;

		$(document).ready(function(){			
			var arrayLength = productList.length-1;
			//console.log("arrayLength: ",arrayLength);

			var random1 = _.random(0, arrayLength);
			var random2 = _.random(0, arrayLength);

			while (random2 == random1)
			{
				random2 = _.random(0, arrayLength);
			}
			// console.log("random1: ",random1);
			// console.log("random2: ",random2);
			var popupTemplate = _.template($('#popup-template').html());
        	var resultingHtml = popupTemplate({popupProducts: productList, random1:random1,random2:random2});

        	$('.popup').html(resultingHtml);

		});
 		
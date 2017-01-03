/*Due to cross origin issue getJSON only work by running code in server [localhost or something else] */
// var productList;
// $.getJSON("data.json", function(json){
//     productList = json;
// });

/*For the local purpose declare the json array directly here*/
var productList = [
	{
		"id": "1",
		"Productcat": "White dresses",
		"Productname": "Product Title1",
		"Image": ["images/b1.jpg"]
		
	},
	{
		"id": "2",
		"Productcat": "White dresses",
		"Productname": "Product Title2",
		"Image": ["images/b2.jpg"]
		
	},
	{
		"id": "3",
		"Productcat": "White dresses",
		"Productname": "Product Title3",
		"Image": ["images/b3.jpg"]
		
	},
	{
		"id": "4",
		"Productcat": "White dresses",
		"Productname": "Product Title4",
		"Image": ["images/g1.jpg"]
		
	},
	{
		"id": "5",
		"Productcat": "White dresses",
		"Productname": "Product Title5",
		"Image": ["images/g2.jpg","images/g3.jpg"]
		
	},
	{
		"id": "6",
		"Productcat": "White dresses",
		"Productname": "Product Title6",
		"Image": ["images/h1.jpg"]
		
	},
	{
		"id": "7",
		"Productcat": "White dresses",
		"Productname": "Product Title7",
		"Image": ["images/h2.jpg"]
		
	},
	{
		"id": "8",
		"Productcat": "White dresses",
		"Productname": "Product Title8",
		"Image": ["images/h3.jpg"]
		
	},
	{
		"id": "9",
		"Productcat": "White dresses",
		"Productname": "Product Title9",
		"Image": ["images/n1.jpg"]
		
	},
	{
		"id": "10",
		"Productcat": "White dresses",
		"Productname": "Product Title10",
		"Image": ["images/n2.jpg"]
		
	},
	{
		"id": "11",
		"Productcat": "White dresses",
		"Productname": "Product Title11",
		"Image": ["images/n3.jpg"]
		
	},
	{
		"id": "12",
		"Productcat": "White dresses",
		"Productname": "Product Title12",
		"Image": ["images/p1.jpg"]
		
	},
	{
		"id": "13",
		"Productcat": "White dresses",
		"Productname": "Product Title13",
		"Image": ["images/r1.jpg","images/r2.jpg"]
		
	}	
];

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
 		
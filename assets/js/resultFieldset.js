function searchResults(){
var options = {
	valueNames: [ 'carType','price','company','pickupLoc','specifications' ]
	//item: '<li><h3 class="name"></h3><p class=""></p></li>'
};

var values = [
	{
	carType: 'Economy',
	price: 10,
	company: 'Advantage',
	pickupLoc: 'Shuttle to counter and car',
	specifications: 'Automatic transmission'
	},
];

//var carList = new List('cars', options, values);
console.log(values[0].carType);
console.log(values[0].price);

}
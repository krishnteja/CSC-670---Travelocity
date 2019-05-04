function searchResults(){
var options = {
	searchValueNames: [ 'carType','price','company','pickupLoc','specifications' ]
	//item: '<li><h3 class="name"></h3><p class=""></p></li>'
};

var searchValues = [
	{
	carType: 'Midsize',
	price: 38,
	company: 'Alamo',
	pickupLoc: 'Shuttle to counter and car',
	specifications: 'Automatic transmission'
	},
    {
	carType: 'Compact',
	price: 10,
	company: 'Advantage',
	pickupLoc: 'Shuttle to counter and car',
	specifications: 'Automatic transmission'
	},
    {
	carType: 'Mini Van',
	price: 52,
	company: 'Mex',
	pickupLoc: 'Shuttle to counter and car',
	specifications: 'Automatic transmission'
	},
    {
	carType: 'SUV',
	price: 55,
	company: 'Hertz',
	pickupLoc: 'Shuttle to counter and car',
	specifications: 'Automatic transmission'
	},
];
    

/* Get Vendor Logo */
var vendors = ['Alamo','Advantage'];
//var vendorLogo = getVendorLogo("Alamo");

function getVendorLogo(ven){
	for(var i=0; i<= vendors.length; i++){
		switch(ven){
    	case "Alamo": 
    	return '<img src="assets/images/alamo.png">' 
    	break;
    	case "Advantage": 
    	return '<img src="assets/images/advantage.png">'
        break;
    	case "Mex": 
    	return '<img src="assets/images/mex.png">'
        break;
    	case "Fox": 
    	return '<img src="assets/images/fox.png">'
        break;
    	case "Hertz": 
    	return '<img src="assets/images/hertz.png">'
    }
  }
}

/* Get Vehicle Image */
var vehicles = ['Economy','Compact'];
//var vehicleImg = getVehiclImg("Economy");

function getVehicleImg(vic){
	for(var i=0; i<= vehicles.length; i++){
		switch(vic){
    	case "Economy": 
    	return '<img src="assets/images/economy.jpg">' 
    	break;
    	case "Compact": 
    	return '<img src="assets/images/compact.jpg">'
        break;
        case "Midsize": 
    	return '<img src="assets/images/midsize.jpg">'
        break;
        case "Mini Van": 
    	return '<img src="assets/images/minivan.jpg">'
        break;
        case "SUV": 
    	return '<img src="assets/images/suv.jpg">'
        break;
    }
  }
}
    
//var carList = new List('cars', options, values);
document.getElementById("carType").innerHTML = getVehicleImg(searchValues[0].carType);
document.getElementById("carType-text").innerHTML = searchValues[0].carType;   
document.getElementById("price").innerHTML = "$" + searchValues[0].price;
document.getElementById("company").innerHTML = getVendorLogo(searchValues[0].company);
document.getElementById("pickupLoc").innerHTML = searchValues[0].pickupLoc;
document.getElementById("specifications").innerHTML = searchValues[0].specifications;
    
document.getElementById("carType-2").innerHTML = getVehicleImg(searchValues[1].carType);
document.getElementById("carType-text-2").innerHTML = searchValues[1].carType; 
document.getElementById("price-2").innerHTML = "$" + searchValues[1].price;
document.getElementById("company-2").innerHTML = getVendorLogo(searchValues[1].company);
document.getElementById("pickupLoc-2").innerHTML = searchValues[1].pickupLoc;
document.getElementById("specifications-2").innerHTML = searchValues[1].specifications;  
    
document.getElementById("carType-3").innerHTML = getVehicleImg(searchValues[2].carType);
document.getElementById("carType-text-3").innerHTML = searchValues[2].carType; 
document.getElementById("price-3").innerHTML = "$" + searchValues[2].price;
document.getElementById("company-3").innerHTML = getVendorLogo(searchValues[2].company);
document.getElementById("pickupLoc-3").innerHTML = searchValues[2].pickupLoc;
document.getElementById("specifications-3").innerHTML = searchValues[2].specifications;     
    
} //end searchResults()


function dataFilterSet(){
    var dataFilterName = {
        filterValueNames: ['carType','qty','price']
    };
    
    var filterValues = [
      { 
          carType: 'Economy',
          qty: 13,
          price: 16
      },
        { 
          carType: 'Compact',
          qty: 13,
          price: 17
      },
        { 
          carType: 'Midsize',
          qty: 17,
          price: 38
      },
        { 
          carType: 'Standard',
          qty: '14',
          price: 23
      },
        { 
          carType: 'Full-size',
          qty: 15,
          price: 19
      },
        { 
          carType: 'Premium',
          qty: 30,
          price: 34
      },
        { 
          carType: 'Luxury',
          qty: 15,
          price: 48
      },
        { 
          carType: 'Convertible',
          qty: 10,
          price: 108
      },
        { 
          carType: 'Minivan',
          qty: 12,
          price: 34
      },
        { 
          carType: 'SUV',
          qty: 57,
          price: 22
      },
        { 
          carType: 'Van',
          qty: 16,
          price: 58
      },
        { 
          carType: 'Pickup',
          qty: 13,
          price: 17
      },
        { 
          carType: 'Sports Car',
          qty: 4,
          price: 47 
      },
        { 
          carType: 'Other',
          qty: 9,
          price: 24
      },
    ]; 
    
    document.getElementById("filter-carClass-economy-label").innerHTML = filterValues[0].carType + " (" + filterValues[0].qty + ")";
    document.getElementById("price-carClass-economy-label").innerHTML = "$" + filterValues[0].price;
    
    document.getElementById("filter-carClass-compact-label").innerHTML = filterValues[1].carType + " (" + filterValues[1].qty + ")";
    document.getElementById("price-carClass-compact-label").innerHTML = "$" + filterValues[1].price;
    
    document.getElementById("filter-carClass-midsize-label").innerHTML = filterValues[2].carType + " (" + filterValues[2].qty + ")";
    document.getElementById("price-carClass-midsize-label").innerHTML = "$" + filterValues[2].price;
    
    document.getElementById("filter-carClass-standard-label").innerHTML = filterValues[3].carType + " (" + filterValues[3].qty + ")";
    document.getElementById("price-carClass-standard-label").innerHTML = "$" + filterValues[3].price;
    
    document.getElementById("filter-carClass-fullSize-label").innerHTML = filterValues[4].carType + " (" + filterValues[4].qty + ")";
    document.getElementById("price-carClass-fullSize-label").innerHTML = "$" + filterValues[4].price;
    
    document.getElementById("filter-carClass-premium-label").innerHTML = filterValues[5].carType + " (" + filterValues[5].qty + ")";
    document.getElementById("price-carClass-premium-label").innerHTML = "$" + filterValues[5].price;
        
    document.getElementById("filter-carClass-luxury-label").innerHTML = filterValues[6].carType + " (" + filterValues[6].qty + ")";
    document.getElementById("price-carClass-luxury-label").innerHTML = "$" + filterValues[6].price;
    
    
    document.getElementById("filter-carClass-convertible-label").innerHTML = filterValues[7].carType + " (" + filterValues[7].qty + ")";
    document.getElementById("price-carClass-convertible-label").innerHTML = "$" + filterValues[7].price;
    
    document.getElementById("filter-carClass-minivan-label").innerHTML = filterValues[8].carType + " (" + filterValues[8].qty + ")";
    document.getElementById("price-carClass-minivan-label").innerHTML = "$" + filterValues[8].price;
   
    document.getElementById("filter-carClass-suv-label").innerHTML = filterValues[9].carType + " (" + filterValues[9].qty + ")";
    document.getElementById("price-carClass-suv-label").innerHTML = "$" + filterValues[9].price;
    
    document.getElementById("filter-carClass-van-label").innerHTML = filterValues[10].carType + " (" + filterValues[10].qty + ")";
    document.getElementById("price-carClass-van-label").innerHTML = "$" + filterValues[10].price;
    
    document.getElementById("filter-carClass-pickup-label").innerHTML = filterValues[11].carType + " (" + filterValues[11].qty + ")";
    document.getElementById("price-carClass-pickup-label").innerHTML = "$" + filterValues[11].price;
    
    document.getElementById("filter-carClass-sportscar-label").innerHTML = filterValues[12].carType + " (" + filterValues[12].qty + ")";
    document.getElementById("price-carClass-sportscar-label").innerHTML = "$" + filterValues[12].price;
    
    document.getElementById("filter-carClass-other-label").innerHTML = filterValues[13].carType + " (" + filterValues[13].qty + ")";
    document.getElementById("price-carClass-other-label").innerHTML = "$" + filterValues[13].price;
} //end dataFilterSet()

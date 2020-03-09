//#################  GET ALL ID(s) /CLASSES AND STORE IN A VARIABLE   ############################
var boxes = document.getElementById('boxes');
var bannerBoxes = document.getElementById('banner-boxes');
var owlCal = document.getElementById('owlCal');
var testimonialCal = document.getElementById('testimonialCal');
var showMenuMore = document.getElementById('showMenuMore');
var showMenuLess = document.getElementById('showMenuLess');
var showMoreItem = document.getElementById('showMoreItem');
var menuOutput = ' ';
var moreMenuOutput = ' ';
var owlCalOutput = ' ';
var testimonialCalOutput = ' ';
var output = ' ';

//#################  REMOVE ANIMATIONS EVERY TWO SECONDS   ############################
setInterval(function () {
	removeClass();
}, 2000);

//#################  DISHES ARRAY LIST   ############################ 
var dishes = [{
		img: 'about2.jpg',
		title: 'Mauris Tortor',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g1.jpg',
		title: 'Cillium Fungil',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g2.jpg',
		title: 'Congue Oluptate',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g3.jpg',
		title: 'voluptate Cillium',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'about2.jpg',
		title: 'Mauris Tortor',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g2.jpg',
		title: 'Congue Oluptate',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g1.jpg',
		title: 'Cillium Fungil',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		img: 'g3.jpg',
		title: 'voluptate Cillium',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

]

//#################  MENU DISHES   ############################
var menuDishes = [{
		title: 'Mauris Tortor',
		description: 'Lorem ipsum dolor sit amet',
		price: '25'
	},

	{
		title: 'Cillium Fungil',
		description: 'Lorem ipsum dolor sit amet',
		price: '35'
	},

	{
		title: 'Congue Oluptate',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},

	{
		title: 'voluptate Cillium',
		description: 'Lorem ipsum dolor sit amet',
		price: '80'
	},

	{
		title: 'Mauris Tortor',
		description: 'Lorem ipsum dolor sit amet',
		price: '40'
	},

	{
		title: 'Congue Oluptate',
		description: 'Lorem ipsum dolor sit amet',
		price: '30'
	},

	{
		title: 'Cillium Fungil',
		description: 'Lorem ipsum dolor sit amet',
		price: '40'
	},

	{
		title: 'voluptate Cillium',
		description: 'Lorem ipsum dolor sit amet',
		price: '20'
	},

	{
		title: 'Congue Oluptate',
		description: 'Lorem ipsum dolor sit amet',
		price: '50'
	},
]

//#################  IMAGE CAROUSEL LIST   ############################
var imagesCarousels = [
	'g1.jpg',
	'g2.jpg',
	'g3.jpg',
	'g4.jpg',
	'g5.jpg',
	'g6.jpg',
	'g7.jpg'
]

//#################  TESTIMONAL LIST   ############################
var testimonials = [{
		img: 'f.png',
		title: 'Nam Libero',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate expedita quibusdam illum, animi esse consectetur',
		name: 'Anna',
		rating: 4,
		location: 'from Gaslow Scotland'
	},

	{
		img: 'm.png',
		title: 'Tempore Cum',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate expedita quibusdam illum, animi esse consectetur',
		name: 'Ella Mentree',
		rating: 2,
		location: 'United States'
	},

	{
		img: 'm.png',
		title: 'Tempore Cum',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate expedita quibusdam illum, animi esse consectetur',
		name: 'Rannynm',
		rating: 6,
		location: 'Indonesia'
	},

	{
		img: 'f.png',
		title: 'Nam Libero',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate expedita quibusdam illum, animi esse consectetur',
		name: 'Juliet',
		rating: 5,
		location: 'Nigeria'
	},
]

//#################  TESTIMONIAL LIST LOOP   ############################
testimonials.forEach(testimonial => {

	testimonialCalOutput += ` 
	<div class="testimonial-box">
        <div class="testimonial-box-content">
          <h4>${testimonial.title}</h4>
          <p class="testimonial-rating">My rating: ${ratings().repeat(testimonial.rating)} <span id="testrating"></span> </p>
          <p class="testimonial-details">${testimonial.description}</p>
        </div>
        <div class="testimonial-image">
          <div class="testimonial-box-image">
            <img src="assets/images/${testimonial.img}">
          </div>
          <h6 class="image-title">${testimonial.name}</h6>
          <p class="image-location">${testimonial.location}</p>
        </div>
      </div>
`;

});

//#################  DISHES LIST LOOP   ############################
dishes.forEach(dish => {

	output += ` 
		<div class="list-banner-box">
          <div class="list-box-items-img">
            <img src="assets/images/${dish.img}">
          </div>
          <div class="list-box-items-details">
            <h4>${dish.title}</h4>
            <p>${dish.description}</p>
          </div>
          <div class="list-box-items-price">$${dish.price}</div>
        </div>
	`;

});

//#################  IMAGE CAROUSEL LIST LIST   ############################
imagesCarousels.forEach(image => {

	owlCalOutput += ` 
		<div class="item owl-theme">
			<img src="assets/images/${image}" alt="">
		</div>
	`;

});

//#################  MENU DISHES LIST LOOP   ############################
menuDishes.forEach(menudish => {
	menuOutput += `
		<div class="banner-box">
          <div class="box-items-details">
            <h4>${menudish.title}</h4>
            <p>${menudish.description}</p>
          </div>
          <div class="box-items-price">$${menudish.price}</div>
        </div>  
	`;

});

//#################  APPEND ALL OUTPUT TO HTML   ############################
bannerBoxes.innerHTML = menuOutput;
boxes.innerHTML = output;
owlCal.innerHTML = owlCalOutput;
testimonialCal.innerHTML = testimonialCalOutput;


//#################  FUNCTION TO GET STAR RATING HTML   ############################
function ratings() {
	return "<span class='fa fa-star checked'></span>";
}

//#################  WHEN SHOW MORE BUUTON IS CLICKED, WE LOOP THROUGH MENU DISHES AND APPEND OUTPUT TO HTML   ############################
showMenuMore.addEventListener('click', function () {

	//#################  ARRAY TO LOOP AND APPEND TO HTML   ############################
	var moreDishes = [{
			img: 'about2.jpg',
			title: 'Mauris Tortor',
			description: 'Lorem ipsum dolor sit amet',
			price: '50'
		},

		{
			img: 'g2.jpg',
			title: 'Congue Oluptate',
			description: 'Lorem ipsum dolor sit amet',
			price: '50'
		},
	]
	//#################  THE LOOP   ############################
	moreDishes.forEach(moreMenuDish => {
		moreMenuOutput += `
	<div class="list-banner-box">
      <div class="list-box-items-img">
        <img src="assets/images/${moreMenuDish.img}">
      </div>
      <div class="list-box-items-details">
        <h4>${moreMenuDish.title}</h4>
        <p>${moreMenuDish.description}</p>
      </div>
      <div class="list-box-items-price">$${moreMenuDish.price}</div>
    </div>  
`;

	});
	//#################  APPEND OUTPUT TO HTML AND ADD/REMOVE ANIMATIONS   ############################
	showMoreItem.classList.remove('bounceOutDown');
	showMoreItem.classList.remove('hide');
	showMoreItem.classList.add('bounceInUp');
	showMoreItem.innerHTML = moreMenuOutput;
	$('#showMoreItem').fadeIn(200);

});

//#################  SHOW LESS BUTTON REMOVES THE ADDED MENU DISH(s)   ############################
showMenuLess.addEventListener('click', function () {
	showMoreItem.classList.add('bounceOutDown');
	$('#showMoreItem').fadeOut(1000);
});

//#################  FUNCTION TO REMOVE ANIMATION   ############################
function removeClass() {
	showMoreItem.classList.remove('bounceInUp');
}
var trips = [
	{
		location: 'Janowen Hills',
		description: 'We spent a week down in brisbane? Fishin and drinkin the stuff. Camping too. Maybe orgy?',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Deepsea.JPG/300px-Deepsea.JPG'
	},

	{
		location: 'Paris Germany',
		description: 'Ushka bushka invading the motherland while the posh french eat frog legs and wank their cats off',
		image: '../img/camping2.jpg'
	},

	{
		location: 'Moon Space',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	},

	{
		location: 'weed Whaker',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: '../img/fishing1.jpg'
	},

	{
		location: 'Oregano',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: '../img/boat2.jpg'
	},

	{
		location: 'China',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: '../img/camping1.jpg'
	},

	{
		location: 'Moon Space',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: '../img/boat1.jpg'
	}
];

document.addEventListener('DOMContentLoaded', function() {
	addTrips();
	populate(trips[0]);
});

function addTrips() {
	var container = document.getElementById('trips').childNodes[1];
	console.log(container);
	trips.forEach((trip) => {
		container.innerHTML += `<img class="fill" onclick="populate(${trip})" src=${trip.image} alt="">`;
	});
}

function populate(trip) {
	var container = document.getElementById('trips').childNodes[3];
	container.innerHTML = `<p>${trip.description}</p>`;
}

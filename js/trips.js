var trips = [
	{
		location: 'Janowen Hills',
		description: 'We spent a week down in brisbane? Fishin and drinkin the stuff. Camping too. Maybe orgy?',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Deepsea.JPG/300px-Deepsea.JPG'
	},

	{
		location: 'Paris Germany',
		description: 'Ushka bushka invading the motherland while the posh french eat frog legs and wank their cats off',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
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
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	},

	{
		location: 'Oregano',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	},

	{
		location: 'China',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	},

	{
		location: 'Moon Space',
		description:
			'Space Pirates! Thats why were really heading to the other planets. Space gold and space bitches you know',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	}
];

document.addEventListener('DOMContentLoaded', function() {
	addTrips();
});

function addTrips() {
	var container = document.getElementById('trips');
	trips.forEach((trip) => {
		container.innerHTML += `
		<a onclick="" href="" class="card fill">
                <img class="fill" src=${trip.image} alt="">
                <div class="overlay">
                    <p class="fill center">${trip.location}</p>
                </div>
            </a>`;
	});
}

var trips = [
	{
		location: 'Janowen Hills',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Deepsea.JPG/300px-Deepsea.JPG'
	},

	{
		location: 'Paris Germany',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: '../img/camping2.jpg'
	},

	{
		location: 'Moon Space',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2017/09/Tanks.jpg'
	},

	{
		location: 'weed Whaker',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: '../img/fishing1.jpg'
	},

	{
		location: 'Oregano',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: '../img/boat2.jpg'
	},

	{
		location: 'China',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: '../img/camping1.jpg'
	},

	{
		location: 'Moon Space',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum doloribus dicta sed, quibusdam quae sit cumque aliquam, facere at, explicabo nam ipsa numquam harum omnis. Obcaecati, molestiae nam cum officia dolore tenetur recusandae culpa perspiciatis, quibusdam architecto enim iusto, ab quod amet atque quo deserunt? Obcaecati, natus dolor, officia reiciendis similique neque perspiciatis eum fugiat nam sint architecto laboriosam quidem officiis incidunt rerum ea minus dolorum id cupiditate rem quibusdam voluptatem ipsa. Similique cumque architecto laudantium neque ad incidunt alias nesciunt rerum iusto pariatur obcaecati, nobis repudiandae animi ducimus, molestiae voluptates amet necessitatibus. Fugiat harum dolores minima quidem nesciunt.',
		image: '../img/boat1.jpg'
	}
];

document.addEventListener('DOMContentLoaded', function() {
	addTrips();
	populate(trips[0]);
});

function addTrips() {
	var container = document.getElementById('trips').childNodes[1];
	trips.forEach((trip) => {
		var img = document.createElement('img');
		img.classList = 'fill';
		img.onclick = () => populate(trip);
		img.src = trip.image;
		container.appendChild(img);
	});
}

function populate(trip) {
	var container = document.getElementById('trips').childNodes[3];
	container.innerHTML = `
	<img style="max-width: 90%;" src=${trip.image} alt="">
	<p class="center">${trip.description}</p>`;
}

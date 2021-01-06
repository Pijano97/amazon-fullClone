import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="1"
						title="Playstation 5 Joysick"
						price={29.99}
						image="https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY218_.jpg"
						rating={5}
					/>
					<Product
						id="2"
						title="Playstation Joystick Charger"
						price={59.99}
						image="https://m.media-amazon.com/images/I/61EnkW4glpL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Playstation 5 Console"
						price={559.99}
						image="https://m.media-amazon.com/images/I/71qffYm-2CL._AC_UY218_.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Playstation 5 Charger"
						price={29.99}
						image="https://m.media-amazon.com/images/I/61EnkW4glpL._AC_UY218_.jpg"
						rating={5}
					/>
					<Product
						id="5"
						title="Playstation 5"
						price={559.99}
						image="https://m.media-amazon.com/images/I/71qffYm-2CL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						title="Playstation 5 Joysick"
						price={59.99}
						image="https://m.media-amazon.com/images/I/61EnkW4glpL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

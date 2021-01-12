const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { responsiveFontSizes } = require("@material-ui/core");
const stripe = require("stripe")(
	"sk_test_51I8SPgEXqsicJIwaSey8ZJx4flSCgfuuOtJKwYyBtOxD7PP8QEnBy7dNdcOYdH8EbZuT2PzeqMvJpFHFyJL4WkUM00Gphd2jmQ"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	// after /payments/create?.....
	const total = request.query.total;

	console.log("Payment Request Recived:", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

	//  201 - OK - created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);

// exmp endpoint
// http://localhost:5001/fullclone-74a4e/us-central1/api

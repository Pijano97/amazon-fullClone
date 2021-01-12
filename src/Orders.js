import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users") // look at the all users
				.doc(user?.uid) // get logged in user
				.collection("orders") // look at her/his order
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							//list all orders etc...
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;

"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "@/redux/cart.slice";
import styles from "../../styles/components/cart/cart.module.css";

export default function CartPage() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function getTotal() {
		let total = 0;
		cart.items.forEach((item) => {
			total += item.price * item.quantity;
		});
		return total;
	}

	return (
		<>
			<main className={styles.main}>
				<Navbar />
				{cart.items.length === 0 ? (
					<h1 className={styles.empty}>Your Cart Is Empty</h1>
				) : (
					<div className={styles.container}>
						<div className={styles.header}>
							<p>Product ID</p>
							<p>Product Image</p>
							<p>Product Name</p>
							<p>Price</p>
							<p>Quantity</p>
							<p>Total Price</p>
						</div>
						{cart.items.map((item) => {
							return (
								<div key={item.id} className={styles.items}>
									<p>{item.id}</p>
									<Image
										src={item.image1}
										className={styles.packimage}
										alt={item.product + "In Cart"}
										priority
									/>
									<p>{item.product}</p>
									<p>${item.price}</p>
									<p>{item.quantity}</p>
									<p>${Math.round(item.price * item.quantity * 100) / 100}</p>
									<button
										onClick={() => {
											dispatch(removeFromCart(item));
										}}>
										REMOVE
									</button>
								</div>
							);
						})}
						<div className={styles.footer}>
							<p></p>
							<p></p>
							<p></p>
							<p></p>
							<p></p>
							<p>TOTAL: ${Math.round(getTotal() * 100) / 100}</p>
							<button
								onClick={() => {
									dispatch(clearCart());
								}}>
								CLEAR CART
							</button>
						</div>
					</div>
				)}
				<Footer />
			</main>
		</>
	);
}

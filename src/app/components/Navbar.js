"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../../styles/components/navbar.module.css";

export default function Navbar() {
	const cart = useSelector((state) => state.cart);

	function getCartQuantity() {
		let total = 0;
		cart.items.forEach((item) => {
			total += item.quantity;
		});
		return total;
	}

	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li className={styles.links}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.links}>
					<Link href="/store/yugioh">Yu-Gi-Oh!</Link>
				</li>
				<li className={styles.links}>
					<Link href="/store/magic">Magic</Link>
				</li>
				<li className={styles.links}>
					<Link href="/store/pokemon">Pokemon</Link>
				</li>
				<li className={styles.links}>
					<Link href="/cart">Cart</Link>
					<span className={styles.itemcount}>{getCartQuantity()}</span>
				</li>
			</ul>
		</div>
	);
}

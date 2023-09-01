"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addYugiCards } from "@/redux/cart.slice";
import { cardPacks } from "@/app/components/storepages/CardPacks";
import styles from "@/styles/components/storepages/productpage.module.css";

export async function generateStaticParams() {
	return cardPacks.map((pack) => ({
		cardpack: pack.product,
	}));
}

export let yugiAmount = 1;

export default function YugiPack({ params }) {
	const packname = params.cardpack.replace(/%20/g, " ");

	const YPack = cardPacks.find((pack) => pack.product === packname);

	if (!YPack) {
		notFound();
	}

	const [firstActive, setFirstActive] = useState(true);
	const [secondActive, setSecondActive] = useState(false);
	const [thirdActive, setThirdActive] = useState(false);
	const [fourthActive, setFourthActive] = useState(false);
	const [fifthActive, setFifthActive] = useState(false);
	const [bigImage, setBigImage] = useState(YPack.image1);
	const [packQuantity, setPackQuantity] = useState(1);

	const dispatch = useDispatch();

	function showFirstImage() {
		setFirstActive(true);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(YPack.image1);
	}

	function showSecondImage() {
		setFirstActive(false);
		setSecondActive(true);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(YPack.image2);
	}

	function showThirdImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(true);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(YPack.image3);
	}

	function showFourthImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(true);
		setFifthActive(false);
		setBigImage(YPack.image4);
	}

	function showFifthImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(true);
		setBigImage(YPack.image5);
	}

	function increaseQuantity() {
		if (packQuantity == 99) {
			setPackQuantity(99);
			yugiAmount = 99;
		} else {
			setPackQuantity(packQuantity + 1);
			yugiAmount = packQuantity + 1;
		}
	}

	function decreaseQuantity() {
		if (packQuantity == 1) {
			setPackQuantity(1);
			yugiAmount = 1;
		} else {
			setPackQuantity(packQuantity - 1);
			yugiAmount = packQuantity - 1;
		}
	}

	function addItems() {
		dispatch(addYugiCards(YPack));
	}

	return (
		<>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.left}>
						<div className={styles.imagelist}>
							<div className={styles.imagediv}>
								<button
									onClick={showFirstImage}
									className={firstActive ? styles.active : styles.inactive}>
									<Image
										src={YPack.image1}
										height={100}
										width={100}
										alt={packname + "First Card"}
									/>
								</button>
							</div>
							<div className={styles.imagediv}>
								<button
									onClick={showSecondImage}
									className={secondActive ? styles.active : styles.inactive}>
									<Image
										src={YPack.image2}
										height={100}
										width={100}
										alt={packname + "Second Card"}
									/>
								</button>
							</div>
							<div className={styles.imagediv}>
								<button
									onClick={showThirdImage}
									className={thirdActive ? styles.active : styles.inactive}>
									<Image
										src={YPack.image3}
										height={100}
										width={100}
										alt={packname + "Third Card"}
									/>
								</button>
							</div>
							<div className={styles.imagediv}>
								<button
									onClick={showFourthImage}
									className={fourthActive ? styles.active : styles.inactive}>
									<Image
										src={YPack.image4}
										height={100}
										width={100}
										alt={packname + "Fourth Card"}
									/>
								</button>
							</div>
							<div className={styles.imagediv}>
								<button
									onClick={showFifthImage}
									className={fifthActive ? styles.active : styles.inactive}>
									<Image
										src={YPack.image5}
										height={100}
										width={100}
										alt={packname + "Fifth Card"}
									/>
								</button>
							</div>
						</div>
						<Image
							src={bigImage}
							className={styles.largeimage}
							alt={packname + "Big Image"}
							priority
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.productname}>
							<h1>{packname}</h1>
						</div>
						<div className={styles.description}>{YPack.desc}</div>
						<div className={styles.cartinfo}>
							<div className={styles.cart}>
								<div className={styles.quantity}>
									<div className={styles.adjust}>
										<button onClick={increaseQuantity}>+</button>
										<button onClick={decreaseQuantity}>-</button>
									</div>
									{packQuantity}
								</div>
								<span>$ {YPack.price}</span>
								<button className={styles.add} onClick={addItems}>
									ADD TO CART
								</button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}

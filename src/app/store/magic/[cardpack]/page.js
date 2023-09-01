"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMagicCards } from "../../../../redux/cart.slice";
import { cardPacks } from "@/app/components/storepages/CardPacks";
import styles from "@/styles/components/storepages/productpage.module.css";

export async function generateStaticParams() {
	return cardPacks.map((pack) => ({
		cardpack: pack.product,
	}));
}

export let magicAmount = 1;

export default function MagicPack({ params }) {
	const packname = params.cardpack.replace(/%20/g, " ");

	const MPack = cardPacks.find((pack) => pack.product === packname);

	if (!MPack) {
		notFound();
	}

	const [firstActive, setFirstActive] = useState(true);
	const [secondActive, setSecondActive] = useState(false);
	const [thirdActive, setThirdActive] = useState(false);
	const [fourthActive, setFourthActive] = useState(false);
	const [fifthActive, setFifthActive] = useState(false);
	const [bigImage, setBigImage] = useState(MPack.image1);
	const [packQuantity, setPackQuantity] = useState(1);

	const dispatch = useDispatch();

	function showFirstImage() {
		setFirstActive(true);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(MPack.image1);
	}

	function showSecondImage() {
		setFirstActive(false);
		setSecondActive(true);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(MPack.image2);
	}

	function showThirdImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(true);
		setFourthActive(false);
		setFifthActive(false);
		setBigImage(MPack.image3);
	}

	function showFourthImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(true);
		setFifthActive(false);
		setBigImage(MPack.image4);
	}

	function showFifthImage() {
		setFirstActive(false);
		setSecondActive(false);
		setThirdActive(false);
		setFourthActive(false);
		setFifthActive(true);
		setBigImage(MPack.image5);
	}

	function increaseQuantity() {
		if (packQuantity == 99) {
			setPackQuantity(99);
			magicAmount = 99;
		} else {
			setPackQuantity(packQuantity + 1);
			magicAmount = packQuantity + 1;
		}
	}

	function decreaseQuantity() {
		if (packQuantity == 1) {
			setPackQuantity(1);
			magicAmount = 1;
		} else {
			setPackQuantity(packQuantity - 1);
			magicAmount = packQuantity - 1;
		}
	}

	function addItems() {
		dispatch(addMagicCards(MPack));
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
										src={MPack.image1}
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
										src={MPack.image2}
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
										src={MPack.image3}
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
										src={MPack.image4}
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
										src={MPack.image5}
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
						<div className={styles.description}>{MPack.desc}</div>
						<div className={styles.cartinfo}>
							<div className={styles.cart}>
								<div className={styles.quantity}>
									<div className={styles.adjust}>
										<button onClick={increaseQuantity}>+</button>
										<button onClick={decreaseQuantity}>-</button>
									</div>
									{packQuantity}
								</div>
								<span>${MPack.price}</span>
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

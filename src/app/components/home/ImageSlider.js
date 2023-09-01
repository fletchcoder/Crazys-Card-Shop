"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { imageSet } from "./ImageSet";
import styles from "../../../styles/components/home/slider.module.css";

export default function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [timer, setTimer] = useState(6);
	const [transition] = useState(true);
	const [fadeout, setFadeout] = useState(true);

	useEffect(() => {
		let myInterval = null;
		if (transition) {
			myInterval = setInterval(() => {
				if (timer > 0) {
					setTimer(timer - 1);
				}
				if (timer === 3) {
					setFadeout(false);
				}
				if (timer === 0) {
					if (currentIndex === imageList.length - 1) {
						setCurrentIndex(0);
						setTimer(6);
						setFadeout(true);
					} else {
						setCurrentIndex(currentIndex + 1);
						setTimer(6);
						setFadeout(true);
					}
				}
			}, 1000);
		}
		return () => {
			clearInterval(myInterval);
		};
	});

	function goNext() {
		if (currentIndex === imageList.length - 1) {
			setCurrentIndex(0);
			setTimer(6);
			setFadeout(true);
		} else {
			setCurrentIndex(currentIndex + 1);
			setTimer(6);
			setFadeout(true);
		}
	}

	function goBack() {
		if (currentIndex === 0) {
			setCurrentIndex(imageList.length - 1);
			setTimer(6);
			setFadeout(true);
		} else {
			setCurrentIndex(currentIndex - 1);
			setTimer(6);
			setFadeout(true);
		}
	}
	return (
		<>
			<div className={styles.arrow}>
				<button onClick={goBack}>&#60;</button>
			</div>
			<div className={fadeout ? styles.sliders : styles.hiddensliders}>
				{imageList[currentIndex]}
			</div>
			<div className={styles.arrow}>
				<button onClick={goNext}>&#62;</button>
			</div>
		</>
	);
}

const imageList = imageSet.map((image, index) => {
	return (
		<>
			<Link href={`/store/yugioh/${image.name}`}>
				<Image
					key={index}
					src={image.source}
					className={styles.sliderimage}
					alt={image.name + " | Crazy's Cards"}
					priority
				/>
			</Link>
			<p>{image.name}</p>
		</>
	);
});

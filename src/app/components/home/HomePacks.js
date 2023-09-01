"use client";

import Image from "next/image";
import Link from "next/link";
import { cardPacks } from "../storepages/CardPacks";
import styles from "@/styles/components/home/home.module.css";

export default function HomePacks() {
	return (
		<>
			{cardPacks.map((pack, idx) => {
				if (idx >= 8 && idx <= 10) {
					return (
						<Link
							href={`store/pokemon/${pack.product}`}
							key={pack.id}
							className={styles.collections}>
							<Image
								src={pack.image1}
								height={60}
								width={50}
								alt={pack.product + " | Crazy's Cards"}
							/>
						</Link>
					);
				} else if (idx >= 17 && idx <= 20) {
					return (
						<Link
							href={`store/magic/${pack.product}`}
							key={pack.id}
							className={styles.collections}>
							<Image
								src={pack.image1}
								height={60}
								width={50}
								alt={pack.product + " | Crazy's Cards"}
							/>
						</Link>
					);
				}
			})}
		</>
	);
}

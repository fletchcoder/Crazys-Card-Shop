"use client";

import Image from "next/image";
import Link from "next/link";
import { cardPacks } from "./CardPacks";
import styles from "@/styles/components/storepages/container.module.css";

export default function MagicPacks() {
	return (
		<>
			{cardPacks.map((pack, idx) => {
				if (idx >= 16 && idx <= 23) {
					return (
						<Link
							href={`/store/magic/${pack.product}`}
							key={pack.id}
							className={styles.page}>
							<div className={styles.container}>
								<div className={styles.products}>
									<Image
										className={styles.thumbnail}
										src={pack.image1}
										priority
										alt={"Crazy's Cards" + pack.product + "Base Image"}
									/>
									<Image
										className={styles.invisible1}
										src={pack.image2}
										alt={"Crazy's Cards" + pack.product + "2nd Image"}
									/>
									<Image
										className={styles.invisible2}
										src={pack.image3}
										alt={"Crazy's Cards" + pack.product + "3rd Image"}
									/>
									<Image
										className={styles.invisible3}
										src={pack.image4}
										alt={"Crazy's Cards" + pack.product + "4th Image"}
									/>
									<Image
										className={styles.invisible4}
										src={pack.image5}
										alt={"Crazy's Cards" + pack.product + "5th Image"}
									/>
								</div>
								<p>{pack.product}</p>
							</div>
						</Link>
					);
				}
			})}
		</>
	);
}

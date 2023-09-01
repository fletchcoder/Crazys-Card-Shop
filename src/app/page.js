import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/home/ImageSlider";
import HomePacks from "./components/home/HomePacks";
import styles from "../styles/components/home/home.module.css";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.container}>
					<div className={styles.top}>
						<div className={styles.left}>
							<span className={styles.bold}>NEW!</span>
							<p className={styles.description}>
								Check out our newest collection of Yu-Gi-Oh! cards. You will
								find classic spells, traps, and monsters from the original
								series. The collection also contains cards from the newer era of
								Yu-Gi-Oh! like XYZ, Synchro, and Pendulum monsters.
							</p>
						</div>
						<div className={styles.right}>
							<Slider />
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.botleft}>
							<span>Other collections</span>
						</div>
						<div className={styles.botright}>
							<HomePacks />
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}

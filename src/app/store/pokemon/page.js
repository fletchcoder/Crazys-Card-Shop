import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PokePacks from "@/app/components/storepages/PokePacks";
import styles from "@/styles/components/storepages/container.module.css";

export default function PokeStore() {
	return (
		<>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.cards}>
					<PokePacks />
				</div>
				<Footer />
			</main>
		</>
	);
}

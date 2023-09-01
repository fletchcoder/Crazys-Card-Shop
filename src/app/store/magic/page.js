import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MagicPacks from "@/app/components/storepages/MagicPacks";
import styles from "@/styles/components/storepages/container.module.css";

export default function MagicStore() {
	return (
		<>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.cards}>
					<MagicPacks />
				</div>
				<Footer />
			</main>
		</>
	);
}

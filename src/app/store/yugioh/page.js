import styles from "@/styles/components/storepages/container.module.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import YugiohPacks from "@/app/components/storepages/YugiohPacks";

export default function YugiohStore() {
	return (
		<>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.cards}>
					<YugiohPacks />
				</div>
				<Footer />
			</main>
		</>
	);
}

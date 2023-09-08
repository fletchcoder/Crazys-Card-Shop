import styles from "../../styles/components/footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footer}>
			Copyright <span className={styles.shop}>Crazy's Cards</span>
			&#169; {new Date().getFullYear()}
		</div>
	);
}

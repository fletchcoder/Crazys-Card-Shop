import "../styles/globals.css";
import { ReduxProvider } from "@/redux/provider";

export const metadata = {
	title: "Crazy's Cards | Online Trading Card Game Retailer",
	description:
		"Online card shop that sells trading cards for Magic The Gathering, Pokemon, and Yu-Gi-Oh!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}

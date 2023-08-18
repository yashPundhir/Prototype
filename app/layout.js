import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Prototype",
	description: "Showcase and discover remarkable developer projects.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

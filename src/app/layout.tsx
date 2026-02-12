import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["300", "400", "600"],
});

const libreFranklin = Libre_Franklin({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Quantum Yield Capital",
	description: "Quantum Yield Capital Ltd",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${cormorant.variable} ${libreFranklin.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

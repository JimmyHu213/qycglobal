import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 relative overflow-hidden">
			{/* Subtle gold radial glow */}
			<div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(184,146,63,0.06)_0%,transparent_70%)] pointer-events-none" />

			{/* Logo */}
			<Image
				src="/QYC-logo-transparent-white.svg"
				alt="Quantum Yield Capital"
				width={200}
				height={200}
				priority
				className="mb-12"
			/>

			{/* Heading */}
			<h1 className="font-display text-[clamp(28px,5vw,48px)] font-normal text-white tracking-[2px] text-center mb-4">
				Coming Soon
			</h1>

			{/* Gold divider */}
			<div className="w-16 h-px bg-gold mb-8" />

			{/* Message */}
			<p className="font-body text-[15px] text-slate text-center max-w-md leading-relaxed mb-12">
				We are currently building our new website.
				<br />
				Please get in touch if you have any enquiries.
			</p>

			{/* Contact */}
			<a
				href="mailto:unhappybanking@gmail.com"
				className="font-body text-[13px] font-medium tracking-[2px] uppercase text-gold border border-gold px-8 py-3.5 rounded-sm hover:bg-gold hover:text-navy transition-colors duration-300 cursor-pointer"
			>
				Contact Us
			</a>

			{/* Footer */}
			<footer className="absolute bottom-8 text-center">
				<p className="font-body text-[11px] text-slate tracking-[1px]">
					&copy; {new Date().getFullYear()} Quantum Yield Capital Ltd. All rights reserved.
				</p>
			</footer>
		</div>
	);
}

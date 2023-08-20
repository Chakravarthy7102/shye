import Link from "next/link";

import { Github } from "@/lib/icons";

export default function Footer() {
	return (
		<footer className="flex flex-col py-10 text-center">
			<div className="flex justify-center mb-2">
				<Link href="https://github.com/Chakravarthy7102/shye">
					<Github />
				</Link>
			</div>
			<span>
				Released under the ISC License. <br /> Copyright &copy;{" "}
				{new Date().getFullYear()} Shye Contributors.
			</span>
		</footer>
	);
}

import { Loader } from "@/lib/icons";

export default function Spinner() {
	return (
		<section className="h-screen -mt-24 flex justify-center items-center">
			<Loader className="animate-spin h-14 w-14" />
		</section>
	);
}

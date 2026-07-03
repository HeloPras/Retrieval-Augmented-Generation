import Movies from "@/components/Movies";
import { Suspense } from "react";

export default function Home() {

	return (
		<>

		<div>
		<Suspense fallback = {<>Loading</>}>
		<Movies />
		</Suspense>
		</div>
		</>
	)
}

import { companies } from "@/constants";
import { InfiniteMovingCompanies } from "./ui/infinite-moving-companies";

export function ScrollingCompanies() {
	return (
		<div>
			<InfiniteMovingCompanies
				items={companies}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

import { ScrollingCompanies } from "@/components/ScrollingCompanies";
import Showcase from "./_components/Showcase";
import WhoAreWe from "./_components/WhoAreWe";
import WorldClassLearning from "./_components/WorldClassLearning";
import Achievements from "./_components/Achievements";
import OurTeams from "./_components/OurTeams";
import JoinNow from "../../../components/JoinNow";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "About | Tekskillup",
};

const page = () => {
	return (
		<div>
			<Showcase />
			<WhoAreWe />
			<ScrollingCompanies />
			<WorldClassLearning />
			<Achievements />
			<OurTeams />
			<JoinNow />
		</div>
	);
};

export default page;

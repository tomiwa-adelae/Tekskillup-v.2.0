import { ScrollingCompanies } from "@/components/ScrollingCompanies";
import Showcase from "./_components/Showcase";
import OurSuccess from "./_components/OurSuccess";
import WhatIsTekskillup from "./_components/WhatIsTekskillup";
import Benefits from "./_components/Benefits";
import WhyChooseUs from "./_components/WhyChooseUs";
import TopCategories from "./_components/TopCategories";
import FeaturedCourses from "./_components/FeaturedCourses";
import Testimonials from "./_components/Testimonials";
import SuccessStats from "@/components/SuccessStats";
import FAQs from "@/components/FAQs";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

export default async function Home() {
	const { userId } = auth();

	const userInfo = await getUserById(userId!);

	return (
		<>
			<Showcase />
			<ScrollingCompanies />
			<OurSuccess />
			<SuccessStats />
			<WhatIsTekskillup />
			<ScrollingCompanies />
			<Benefits />
			<WhyChooseUs />
			<TopCategories />
			{/* <FeaturedCourses /> */}
			<ScrollingCompanies />
			<Testimonials />
			<FAQs />
		</>
	);
}

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

const companies = [
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
	{
		name: "UBA",
		imageURL: "/assets/images/tekskillup-logo.png",
	},
];

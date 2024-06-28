import { fetchAllUsers } from "@/lib/actions/user.actions";
import SubHeader from "../_components/SubHeader";
import Charts from "./_components/Charts";
import { SearchParamProps } from "@/types";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "User analytics | Tekskillup",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchText = (searchParams?.query as string) || "";

	const users = await fetchAllUsers({
		query: searchText,
		page,
		limit: 10,
	});

	return (
		<div>
			<SubHeader
				title="Users Analytics"
				description="Access & manage the data charts of the users on your platform from here"
			/>
			<Charts users={users?.data} />
		</div>
	);
};

export default page;

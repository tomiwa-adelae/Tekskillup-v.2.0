import { fetchAllUsers, getUserById } from "@/lib/actions/user.actions";
import SubHeader from "../_components/SubHeader";
import { UsersTable } from "./_components/UsersTable";
import SearchBar from "@/components/SearchBar";
import { auth } from "@clerk/nextjs";
import { SearchParamProps } from "@/types";
import Pagination from "@/components/Pagination";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Users | Tekskillup",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const { userId } = auth();

	const page = Number(searchParams?.page) || 1;
	const searchText = (searchParams?.query as string) || "";

	const userInfo = await getUserById(userId!);

	const users = await fetchAllUsers({
		query: searchText,
		page,
		limit: 10,
	});

	return (
		<div>
			<SubHeader
				title="All users"
				description="Access & manage all users on your platform from here"
			/>
			<SearchBar type="users" />
			<UsersTable users={users?.data} />
			{users?.totalPages !== undefined && users?.totalPages > 1 && (
				<Pagination page={page} totalPages={users?.totalPages} />
			)}
		</div>
	);
};

export default page;

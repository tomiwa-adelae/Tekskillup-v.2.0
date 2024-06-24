import SubHeader from "../_components/SubHeader";
import { UsersTable } from "./_components/UsersTable";
import SearchBar from "@/components/SearchBar";

const page = () => {
	return (
		<div>
			<SubHeader
				title="All users"
				description="Access & manage all users on your platform from here"
			/>
			<SearchBar type="users" />
			<UsersTable />
		</div>
	);
};

export default page;

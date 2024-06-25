import { auth } from "@clerk/nextjs";
import LeftSideBar from "./_components/LeftSideBar";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const { userId } = auth();

	const userInfo = await getUserById(userId!);

	if (!userInfo.isAdmin) return redirect("/sign-in");

	return (
		<main className="flex w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-t border-gray-300 ">
			<LeftSideBar />
			<section className="lg:ml-64 flex-1 container py-6 size-full min-h-screen">
				{children}
			</section>
		</main>
	);
};

export default AdminLayout;

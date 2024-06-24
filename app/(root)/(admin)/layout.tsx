import LeftSideBar from "./_components/LeftSideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
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

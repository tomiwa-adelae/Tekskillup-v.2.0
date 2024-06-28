import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

export default async function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId } = auth();

	const userInfo = await getUserById(userId!);

	return (
		<main>
			<Header isAdmin={userInfo?.isAdmin} />
			{children}
			<Footer />
		</main>
	);
}

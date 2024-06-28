import { SignIn } from "@clerk/nextjs";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Sign in | Tekskillup",
};

export default function page() {
	return <SignIn />;
}

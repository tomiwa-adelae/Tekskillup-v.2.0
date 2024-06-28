import { SignUp } from "@clerk/nextjs";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Sign up | Tekskillup",
};

export default function page() {
	return <SignUp />;
}

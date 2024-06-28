import React from "react";
import Showcase from "./_components/Showcase";
import ContactSection from "./_components/ContactSection";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact | Tekskillup",
};

const page = () => {
	return (
		<div>
			<Showcase />
			<ContactSection />
		</div>
	);
};

export default page;

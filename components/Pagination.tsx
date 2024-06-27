"use client";
import React from "react";
import { Button } from "./ui/button";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
	page,
	totalPages,
}: {
	page: string | number;
	totalPages: number;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const onClick = (btnType: string) => {
		const pageValue =
			btnType === "next" ? Number(page) + 1 : Number(page) - 1;

		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: "page",
			value: pageValue.toString(),
		});

		router.push(newUrl, { scroll: false });
	};

	return (
		<div className="mt-8 flex items-center justify-between">
			<Button
				disabled={Number(page) <= 1}
				variant={"outline"}
				className=""
				onClick={() => onClick("prev")}
			>
				Previous
			</Button>
			<Button
				disabled={Number(page) >= totalPages}
				variant={"outline"}
				onClick={() => onClick("next")}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;

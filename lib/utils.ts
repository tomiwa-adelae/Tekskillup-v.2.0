import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import qs from "query-string";
import { RemoveUrlQueryParams, UrlQueryParams } from "@/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
	console.log(error);
};

export function formatDate(dateString: string): string {
	// Parse the date string into a Date object
	const date = new Date(dateString);

	// Check if input is a valid Date object
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}

	// Get the day of the week, day of the month, and year
	const dayOfWeek: string = date.toLocaleDateString("en-US", {
		weekday: "long",
	});
	const day: number = date.getDate();
	const month: string = date.toLocaleDateString("en-US", { month: "long" });
	const year: number = date.getFullYear();

	// Get the correct ordinal suffix
	const getOrdinalSuffix = (day: number): string => {
		if (day > 3 && day < 21) return "th";
		switch (day % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	};

	// Format the date string
	const formattedDate: string = `${dayOfWeek}, ${month} ${day}${getOrdinalSuffix(
		day
	)}, ${year}`;

	return formattedDate;
}

export function formatToNaira(input: string | number): string {
	// Convert input to a number if it is a string
	const amount = typeof input === "string" ? parseFloat(input) : input;

	// Check if the conversion resulted in a valid number
	if (isNaN(amount)) {
		throw new Error("Invalid amount");
	}

	// Format the number to Naira currency
	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	});

	return formatter.format(amount);
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
	const currentUrl = qs.parse(params);

	currentUrl[key] = value;

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	);
}

export function removeKeysFromQuery({
	params,
	keysToRemove,
}: RemoveUrlQueryParams) {
	const currentUrl = qs.parse(params);

	keysToRemove.forEach((key: any) => {
		delete currentUrl[key];
	});

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{
			skipNull: true,
		}
	);
}

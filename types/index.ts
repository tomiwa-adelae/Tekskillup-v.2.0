export type CreateUserParams = {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	phoneNumber: string;
};

export type SearchParamProps = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export type FetchAllCoursesParams = {
	query: string;
	category: string;
	limit: number;
	page: number;
};

export type FetchAllUsersParams = {
	query: string;
	limit: number;
	page: number;
};

export type UrlQueryParams = {
	params: string;
	key: string;
	value: string | null;
};

export type RemoveUrlQueryParams = {
	params: string;
	keysToRemove: string[];
};

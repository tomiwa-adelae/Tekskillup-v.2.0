export type CreateUserParams = {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	phoneNumber: string;
};

export type GetAllCourseParams = {
	query: string;
	category: string;
	limit: number;
	page: number;
};

export type SearchParamProps = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

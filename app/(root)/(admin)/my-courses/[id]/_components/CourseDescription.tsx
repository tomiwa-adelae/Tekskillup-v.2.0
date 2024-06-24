"use client";

import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { CourseDescriptionSchema } from "@/lib/validations";

const CourseDescription = () => {
	const form = useForm<z.infer<typeof CourseDescriptionSchema>>({
		resolver: zodResolver(CourseDescriptionSchema),
		defaultValues: {
			description: "",
		},
	});

	function onSubmit(data: z.infer<typeof CourseDescriptionSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}
	return (
		<div
			className={
				"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] space-y-4 hover:border-0"
			}
		>
			<div className="">
				<div className="flex items-center justify-between gap-1">
					<p className="text-xs font-bold uppercase">
						Course description
					</p>

					<Button
						size={"sm"}
						variant={"ghost"}
						className=" font-bold text-xs uppercase"
					>
						<Pen className="w-4 h-4 mr-2" />
						Edit
					</Button>
				</div>
				<div>
					<p className="text-sm mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Aut, consectetur corporis tenetur illum, modi
						alias vel consequatur exercitationem et, quibusdam
						pariatur incidunt nobis aspernatur. Ea laudantium sunt
						nesciunt in eaque. Suscipit quisquam dolore enim, cum ea
						id delectus optio incidunt amet qui totam sunt impedit
						illo architecto accusamus placeat earum, reprehenderit
						molestiae fugiat possimus fuga! Aspernatur quaerat
						repudiandae quidem numquam? Vero consectetur perferendis
						ad voluptatibus cupiditate sit quod laborum deleniti
						quam, fugiat eius quo recusandae doloribus id amet eum
						fuga, reprehenderit molestias possimus? Porro, maiores
						quibusdam. Temporibus mollitia, alias, assumenda illum
						minus facere et perferendis rerum fugit voluptatum
						magnam delectus?
					</p>
					{/* <Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-3 mt-2"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Write the description of your course..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Update</Button>
						</form>
					</Form> */}
				</div>
			</div>
		</div>
	);
};

export default CourseDescription;

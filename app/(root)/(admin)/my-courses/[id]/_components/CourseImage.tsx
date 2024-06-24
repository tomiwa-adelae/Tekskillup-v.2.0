"use client";

import { Button } from "@/components/ui/button";
import { ImageIcon, Pen } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/components/ui/use-toast";
import { CourseImageSchema } from "@/lib/validations";

const CourseImage = () => {
	const form = useForm<z.infer<typeof CourseImageSchema>>({
		resolver: zodResolver(CourseImageSchema),
		defaultValues: {
			image: "",
		},
	});

	function onSubmit(data: z.infer<typeof CourseImageSchema>) {
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
					<p className="text-xs font-bold uppercase">Course image</p>

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
					<div className="flex items-center justify-center flex-col gap-4 h-60 rounded-lg">
						<ImageIcon className="w-10 h-10" />
						<p className="text-xs italic">No image</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseImage;

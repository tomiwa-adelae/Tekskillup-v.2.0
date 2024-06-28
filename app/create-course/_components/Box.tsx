"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { toast, useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { createCourse } from "@/lib/actions/course.actions";
import { useRouter } from "next/navigation";
import { CreateCourseSchema } from "@/lib/validations";

const Box = ({ userId }: { userId: string }) => {
	const router = useRouter();

	const { toast } = useToast();

	const form = useForm<z.infer<typeof CreateCourseSchema>>({
		resolver: zodResolver(CreateCourseSchema),
		defaultValues: {
			name: "",
		},
	});

	async function onSubmit(data: z.infer<typeof CreateCourseSchema>) {
		try {
			const newCourse = await createCourse({ name: data.name, userId });

			if (newCourse) {
				router.push(`/my-courses/${newCourse._id}`);
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Something went wrong",
			});
		}
	}

	return (
		<motion.div // @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="border border-gray-300 p-6 rounded-lg max-w-lg"
		>
			<TypingSubText
				title="Name your course"
				textStyles="text-2xl text-green-400 lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4"
			>
				What would you like to name your course? Don&apos;t worry, you
				can always change this later
			</motion.p>
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-4"
			>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Write the name of your course..."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="mt-8 flex items-center justify-start gap-4">
							<Button variant={"ghost"} asChild>
								<Link href="/my-courses">Cancel</Link>
							</Button>
							<Button
								disabled={form.formState.isSubmitting}
								type="submit"
							>
								{form.formState.isSubmitting
									? "Creating..."
									: "Continue"}
							</Button>
						</div>
					</form>
				</Form>
			</motion.div>
		</motion.div>
	);
};

export default Box;

"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon, Pen, X } from "lucide-react";

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
import { toast, useToast } from "@/components/ui/use-toast";
import { CourseWeekdaysDateSchema } from "@/lib/validations";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn, formatDate } from "@/lib/utils";
import { useState } from "react";
import { updateCourse } from "@/lib/actions/course.actions";

const CourseWeekdaysDate = ({
	initialValue,
	courseId,
	path,
}: {
	initialValue: string;
	courseId: string;
	path: string;
}) => {
	const { toast } = useToast();

	const [isEditing, setIsEditing] = useState(false);

	const form = useForm<z.infer<typeof CourseWeekdaysDateSchema>>({
		resolver: zodResolver(CourseWeekdaysDateSchema),
		defaultValues: CourseWeekdaysDateSchema.parse({}),
	});

	async function onSubmit(data: z.infer<typeof CourseWeekdaysDateSchema>) {
		try {
			await updateCourse({ courseId, data, path });

			setIsEditing(!isEditing);
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Something went wrong",
			});
		}
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
						Weekdays start date
					</p>

					<Button
						size={"sm"}
						variant={"ghost"}
						className=" font-bold text-xs uppercase"
						onClick={() => setIsEditing(!isEditing)}
					>
						{!isEditing && (
							<>
								<Pen className="w-4 h-4 mr-2" />
								Edit
							</>
						)}
						{isEditing && (
							<>
								<X className="w-4 h-4 mr-2" />
								Close
							</>
						)}
					</Button>
				</div>
				<div>
					{!isEditing && initialValue !== undefined && (
						<p className="text-sm mt-4">
							{formatDate(initialValue)}
						</p>
					)}
					{!isEditing && !initialValue && (
						<p className="text-sm mt-4 italic">No date set</p>
					)}
					{isEditing && (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3 mt-2"
							>
								<FormField
									control={form.control}
									name="weekdaysDate"
									render={({ field }) => (
										<FormItem className="flex flex-col items-center justify-between">
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value &&
																	"text-muted-foreground"
															)}
														>
															{field.value ? (
																format(
																	field.value,
																	"PPP"
																)
															) : (
																<span>
																	Pick a start
																	date
																</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="w-auto p-0"
													align="start"
												>
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														disabled={(date) =>
															date < new Date()
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									disabled={form.formState.isSubmitting}
									type="submit"
								>
									{form.formState.isSubmitting
										? "Updating..."
										: "Update"}
								</Button>
							</form>
						</Form>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseWeekdaysDate;

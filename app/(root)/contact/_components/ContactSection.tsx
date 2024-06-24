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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/lib/validations";
import { contactLinks } from "@/constants";

const ContactSection = () => {
	const form = useForm<z.infer<typeof ContactSchema>>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof ContactSchema>) {
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
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container flex items-start flex-col lg:flex-row gap-8  py-12"
		>
			<motion.div
				className="flex-1 w-full"
				variants={slideIn("left", "tween", 0.2, 1)}
			>
				<TypingSubText
					title="Send a message"
					textStyles="text-2xl lg:text-3xl"
				/>
				<div className="mt-4">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your first name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your last name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone number</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your phone number"
													type="number"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Subject</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your subject"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Enter your message"
												rows={5}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className="w-full" type="submit">
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</motion.div>
			<div className="flex-1">
				<TypingSubText
					title="Contact Message"
					textStyles="text-2xl lg:text-3xl"
				/>
				<motion.p
					variants={textVariant(1.2)}
					className="text-xs mt-3 lg:text-sm"
				>
					We would love to hear from you.
				</motion.p>

				<motion.div
					variants={fadeIn("left", "spring", 0.5, 0.75)}
					className="mt-6"
				>
					<p className="text-base mb-4 font-bold">Address</p>
					<p className="text-xs md:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam hic officiis incidunt illum voluptates enim
						et sint corporis iure dolorem praesentium, optio
						nostrum, reiciendis atque ipsa odio sit natus esse?
					</p>
				</motion.div>

				<div className="flex flex-col gap-4 mt-8">
					{contactLinks?.map(({ icon, title, id, color }, index) => {
						const IconComponent = icon;
						return (
							<motion.div
								variants={fadeIn(
									"left",
									"spring",
									index * 0.75,
									0.75
								)}
								key={index}
								className="flex items-center justify-start gap-4"
							>
								<div
									className="p-2 rounded-lg border border-2"
									style={{ borderColor: color }}
								>
									<IconComponent />
								</div>
								<a
									href={
										id === 1
											? `mailto:${title}`
											: id === 2
											? `tel: ${title}`
											: "#"
									}
								>
									<TypingSubText
										title={title}
										textStyles="text-xs lg:text-sm font-normal"
									/>
								</a>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

export default ContactSection;

"use server";

import { handleError } from "../utils";

import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export async function sendMessage({
	firstName,
	lastName,
	email,
	phoneNumber,
	subject,
	message,
}: {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	subject: string;
	message: string;
}) {
	try {
		// Tekskillup admin email format
		const requestAdmin = mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: `${process.env.TEKSKILLUP_SENDER_EMAIL_ADDRESS}`,
						Name: `${process.env.COMPANY_NAME}`,
					},
					To: [
						{
							Email: `${process.env.TEKSKILLUP_ADMIN_EMAIL_ADDRESS}`,
							Name: `${process.env.COMPANY_NAME}`,
						},
					],
					Subject: `New Contact Form Submission`,
					TextPart: `${firstName} sent a message`,
					HTMLPart: `<div 
                                style="
                                    font-family: Montserrat, sans-serif;
                                    font-size: 15px;
                                    padding: 2rem;
                                "
                            >
                               <h1>Dear ${process.env.COMPANY_NAME} Team,</h1>
                                        <p>
                                        I hope this email finds you well. I wanted to inform you that we have received a new submission via the contact page of our website.
                                        </p>
                                        <p>
                                            Here are the Details provided:
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Name:</strong> ${firstName} ${lastName}
                                            </li>
                                            <li>
                                                <strong>Email Address:</strong> ${email}
                                            </li>
                                            <li>
                                                <strong>Phone number:</strong> ${phoneNumber}
                                            </li>
                                            <li>
                                                <strong>Subject:</strong> ${subject}
                                            </li>
                                            <li>
                                                <strong>Message:</strong> ${message}
                                            </li>
                                        </ul>
                                        <p>It's always encouraging to see interest and engagement from our audience, and I wanted to ensure you were aware of this interaction.</p>
                                        <p>
                                            Thank you for your attention to this matter. Your commitment to student's satisfaction is truly appreciated
                                        </p>
                                        <p>
                                            Best regards,
                                        </p>
                                        <p>${process.env.COMPANY_NAME} Team</p>
                                        <p>&copy; 2024 ${process.env.COMPANY_NAME}. All Rights Reserved</p>
                            </div>
                    `,
				},
			],
		});

		// Send email
		requestAdmin
			.then(() => console.log("Admin sent"))
			.catch((err) => {
				console.log(err);
			});
	} catch (error) {
		handleError(error);
	}
}

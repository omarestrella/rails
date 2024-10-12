import { Form } from "@/app/login/form"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Page() {
	const login = async (
		state: { error: boolean; message: string },
		formData: FormData,
	) => {
		"use server"
		const password = formData.get("password") as string
		if (password !== process.env.PASSWORD) {
			return { error: true, message: "Invalid password" }
		}
		cookies().set("session", process.env.SESSION_TOKEN!, {
			httpOnly: true,
			sameSite: "lax",
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
		})

		redirect("/")
	}

	return (
		<div className="flex min-h-screen items-center justify-center">
			<Form action={login} />
		</div>
	)
}

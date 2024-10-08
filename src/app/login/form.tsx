"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useFormState } from "react-dom"

const initialState = { error: false, message: "" }

export function Form({
	action,
}: {
	action: (
		state: typeof initialState,
		formData: FormData,
	) => Promise<typeof initialState>
}) {
	const [state, loginAction] = useFormState(action, initialState)

	return (
		<form action={loginAction}>
			<CardContent>
				<div className="space-y-4">
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Password
						</label>
						<Input id="password" type="password" name="password" required />
						{state?.error ? (
							<div className="text-destructive text-xs">{state.message}</div>
						) : null}
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit" className="w-full">
					Sign In
				</Button>
			</CardFooter>
		</form>
	)
}

"use client"

import { Button } from "@/components/ui/button"
import {
	Description,
	Field,
	FieldGroup,
	Fieldset,
	Label,
	Legend,
} from "@/components/ui/fieldset"
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
		<form action={loginAction} className="min-w-96">
			<Fieldset>
				<Legend className="!text-2xl">Login</Legend>
				<FieldGroup>
					<Field>
						<Label
							htmlFor="password"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Password
						</Label>
						<Input
							id="password"
							type="password"
							name="password"
							required
							invalid={!!state.error}
						/>
						{state?.error ? (
							<Description className="!text-xs text-red-500">
								{state.message}
							</Description>
						) : null}
					</Field>
				</FieldGroup>

				<FieldGroup>
					<Button type="submit" className="w-full">
						Sign In
					</Button>
				</FieldGroup>
			</Fieldset>
		</form>
	)
}

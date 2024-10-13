"use client"

import { publicClient } from "@/api/client"
import { useCreateService, useServices } from "@/api/services"
import { Button } from "@/components/ui/button"

import {
	Dialog,
	DialogBody,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input, InputGroup } from "@/components/ui/input"
import { Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset"
import { cn } from "@/lib/utils"
import { ApolloProvider } from "@apollo/client"
import { useMemo, useReducer, useState } from "react"
import { Action, ActionPayload } from "@/lib/action"
import {
	LucideChevronRight,
	LucideEye,
	LucideMinus,
	LucidePlus,
} from "lucide-react"
import { exhaustiveCheck } from "@/lib/exhaustive"

type AddServiceButtonProps = {
	projectID: string
}

function normalizeName(name: string) {
	return name.replace(/[\s\/\.]/g, "-")
}

type Source = "github" | "docker"

type LocalState = {
	serviceName: string
	serviceNameOverride: string
	showConfig: boolean
	source: Source
	showDialog: boolean
	showEnvironment: boolean
	hasCustomizedServiceName: boolean
	environmentVariables: { key: string; value: string }[]
}

type SetFormDataAction = Action<
	"SET_FORM_DATA",
	{ serviceName: string; showConfig: boolean; serviceNameOverride?: string }
>

type LocalAction =
	| Action<"SET_SOURCE", Source>
	| Action<"SET_SERVICE_NAME", string>
	| Action<"SET_SERVICE_NAME_OVERRIDE", string>
	| Action<"SET_SHOW_CONFIG", boolean>
	| Action<"SET_SHOW_ENV_VARS", boolean>
	| Action<"RESET", undefined>
	| Action<"SHOW_DIALOG", boolean>
	| Action<"SET_ENV_VAR", { key: string; value: string; index: number }>
	| Action<"ADD_ENV_VAR", undefined>
	| Action<"DELETE_ENV_VAR", number>
	| SetFormDataAction

const initialState: LocalState = {
	serviceName: "",
	serviceNameOverride: "",
	showConfig: false,
	source: "github",
	showDialog: false,
	showEnvironment: false,
	hasCustomizedServiceName: false,
	environmentVariables: [
		{
			key: "",
			value: "",
		},
	],
}

function reducer(state: LocalState, action: LocalAction): LocalState {
	switch (action.type) {
		case "SET_SOURCE": {
			const newState = {
				...state,
				source: action.payload,
			} satisfies LocalState

			if (state.source !== action.payload) {
				newState.serviceName = ""
				newState.serviceNameOverride = ""
			}
			return newState
		}
		case "SET_SERVICE_NAME":
			return { ...state, serviceName: action.payload }
		case "SET_SERVICE_NAME_OVERRIDE":
			return {
				...state,
				serviceNameOverride: action.payload,
				hasCustomizedServiceName: true,
			}
		case "SET_SHOW_CONFIG":
			return { ...state, showConfig: action.payload }
		case "RESET":
			return initialState
		case "SHOW_DIALOG":
			return { ...state, showDialog: action.payload }
		case "SET_FORM_DATA":
			return { ...state, ...action.payload }
		case "SET_SHOW_ENV_VARS":
			return { ...state, showEnvironment: action.payload }
		case "SET_ENV_VAR":
			state.environmentVariables[action.payload.index] = {
				key: action.payload.key,
				value: action.payload.value,
			}
			return {
				...state,
			}
		case "ADD_ENV_VAR":
			return {
				...state,
				environmentVariables: [
					...state.environmentVariables,
					{
						key: "",
						value: "",
					},
				],
			}
		case "DELETE_ENV_VAR":
			return {
				...state,
				environmentVariables: state.environmentVariables.filter(
					(_, index) => index !== action.payload,
				),
			}
		default:
			exhaustiveCheck(action)
	}
}

function InternalButton({ projectID }: AddServiceButtonProps) {
	const { services } = useServices(projectID)
	const { createService, loading } = useCreateService()

	const [state, dispatch] = useReducer(reducer, initialState)

	const currentNameTaken = useMemo(
		() =>
			services
				.map((service) => service.name)
				.includes(state.serviceNameOverride),
		[services, state.serviceNameOverride],
	)

	const reset = () => {
		dispatch({ type: "RESET", payload: undefined })
	}

	const addService = async () => {
		await createService({
			variables: {
				input: {
					projectId: projectID,
					name: state.serviceNameOverride || state.serviceName,
					variables: Object.fromEntries(
						state.environmentVariables.map((env) => [env.key, env.value]),
					),
					source:
						state.source === "github"
							? {
									repo: state.serviceName,
								}
							: {
									image: state.serviceName,
								},
				},
			},
		})

		publicClient.refetchQueries({
			include: ["GetProject"],
		})

		reset()
	}

	const setSource = (source: "github" | "docker") => {
		dispatch({ type: "SET_SOURCE", payload: source })
	}

	return (
		<>
			<Button
				onClick={() => {
					dispatch({ type: "SHOW_DIALOG", payload: true })
				}}
			>
				Add service
			</Button>
			<Dialog
				size="xl"
				open={state.showDialog}
				onClose={(open) => {
					dispatch({ type: "SHOW_DIALOG", payload: open })
					reset()
				}}
			>
				<DialogTitle className="font-bold">Add a service</DialogTitle>
				<DialogDescription className="text-xs text-muted-foreground">
					Add a new service from an existing GitHub repository, or choose from
					one of our popular templates
				</DialogDescription>

				<DialogBody className="flex flex-col gap-4">
					<div className="-ml-[11px]">
						<Button
							plain
							type="button"
							className={cn(
								state.source === "github" ? "underline" : null,
								"cursor-pointer data-[hover]:!bg-transparent",
							)}
							onClick={() => setSource("github")}
						>
							Github
						</Button>
						<Button
							plain
							type="button"
							className={cn(
								state.source === "docker" ? "underline" : null,
								"cursor-pointer data-[hover]:!bg-transparent",
							)}
							onClick={() => setSource("docker")}
						>
							Docker
						</Button>
					</div>
					<form
						className="flex flex-col gap-2"
						onSubmit={(e) => {
							e.preventDefault()
							addService()
						}}
					>
						<Fieldset>
							<FieldGroup>
								<Field>
									<Label
										htmlFor="serviceURL"
										className="whitespace-nowrap font-semibold"
									>
										{state.source === "github"
											? "GitHub repository"
											: "Docker image"}
									</Label>
									<Input
										placeholder={
											state.source === "github"
												? "adalovelace/calculator"
												: "redis"
										}
										type="text"
										name="serviceURL"
										id="serviceURL"
										value={state.serviceName}
										onChange={(e) => {
											const normalized = normalizeName(e.target.value)

											const payload: ActionPayload<SetFormDataAction> = {
												serviceName: normalized,
												showConfig: true,
											}

											if (!state.hasCustomizedServiceName) {
												payload.serviceNameOverride = normalized
											}

											dispatch({
												type: "SET_FORM_DATA",
												payload,
											})
										}}
									/>
								</Field>
							</FieldGroup>

							{state.showConfig ? (
								<>
									<FieldGroup>
										<Field>
											<Label className="flex flex-col gap-1 whitespace-nowrap">
												Name
											</Label>
											<Input
												type="text"
												value={state.serviceNameOverride}
												onChange={(e) => {
													const normalized = normalizeName(e.target.value)
													dispatch({
														type: "SET_SERVICE_NAME_OVERRIDE",
														payload: normalized,
													})
													e.target.value = normalized
												}}
												invalid={!!currentNameTaken}
											/>
											<span className="text-xs text-red-500">
												{currentNameTaken ? "Current name is taken" : "\u00A0"}
											</span>
										</Field>
									</FieldGroup>

									<FieldGroup>
										<Field className="flex flex-col gap-2">
											<Label
												className="flex cursor-pointer items-center gap-2 whitespace-nowrap font-semibold"
												onClick={() => {
													dispatch({
														type: "SET_SHOW_ENV_VARS",
														payload: !state.showEnvironment,
													})
												}}
											>
												<LucideChevronRight
													size={16}
													className={cn(
														state.showEnvironment ? "rotate-90" : null,
														"transition-transform",
													)}
												/>
												<span>Environment Variables</span>
											</Label>
											{state.showEnvironment ? (
												<div className="mb-2 flex flex-col gap-1">
													{state.environmentVariables.map((env, index) => {
														return (
															<EnvironmentVariable
																key={index}
																env={env}
																index={index}
																dispatch={dispatch}
																last={
																	state.environmentVariables.length - 1 ===
																	index
																}
															/>
														)
													})}
												</div>
											) : null}
										</Field>
									</FieldGroup>
								</>
							) : null}

							<FieldGroup>
								<Field className="flex justify-end gap-2">
									<Button
										type="button"
										outline
										onClick={() => {
											reset()
										}}
									>
										Cancel
									</Button>
									<Button
										type="submit"
										disabled={!state.serviceName || loading || currentNameTaken}
									>
										Add service
									</Button>
								</Field>
							</FieldGroup>
						</Fieldset>
					</form>
				</DialogBody>
			</Dialog>
		</>
	)
}

function EnvironmentVariable({
	env,
	last,
	index,
	dispatch,
}: {
	env: { key: string; value: string }
	index: number
	last: boolean
	dispatch: (action: LocalAction) => void
}) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="grid grid-cols-[1fr,1fr,40px] gap-2">
			<Input
				placeholder="KEY"
				type="text"
				value={env.key}
				onChange={(e) => {
					dispatch({
						type: "SET_ENV_VAR",
						payload: {
							key: e.target.value,
							value: env.value,
							index,
						},
					})
				}}
			/>
			<InputGroup>
				<Input
					placeholder="VALUE"
					type={showPassword ? "text" : "password"}
					value={env.value}
					onChange={(e) => {
						dispatch({
							type: "SET_ENV_VAR",
							payload: {
								key: env.key,
								value: e.target.value,
								index,
							},
						})
					}}
				/>
				<LucideEye
					size={16}
					data-slot="icon"
					className="!pointer-events-auto cursor-pointer"
					onClick={() => setShowPassword(!showPassword)}
				/>
			</InputGroup>
			{last ? (
				<Button
					type="button"
					plain
					onClick={() => {
						dispatch({ type: "ADD_ENV_VAR", payload: undefined })
					}}
				>
					<LucidePlus size={16} />
				</Button>
			) : (
				<Button
					type="button"
					plain
					onClick={() => {
						dispatch({ type: "DELETE_ENV_VAR", payload: index })
					}}
				>
					<LucideMinus size={16} />
				</Button>
			)}
		</div>
	)
}

export function AddServiceButton(props: AddServiceButtonProps) {
	return (
		<ApolloProvider client={publicClient}>
			<InternalButton {...props} />
		</ApolloProvider>
	)
}

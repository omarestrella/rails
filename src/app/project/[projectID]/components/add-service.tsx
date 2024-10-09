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
import { Input } from "@/components/ui/input"
import { Field, Fieldset, Label } from "@/components/ui/fieldset"
import { cn } from "@/lib/utils"
import { ApolloProvider } from "@apollo/client"
import { useMemo, useState } from "react"

type AddServiceButtonProps = {
	projectID: string
}

function normalizeName(name: string) {
	return name.replace(/[\s\/\.]/g, "-")
}

function InternalButton({ projectID }: AddServiceButtonProps) {
	const { services } = useServices(projectID)
	const { createService, loading } = useCreateService()

	const [showCreateDialog, setShowCreateDialog] = useState(false)

	const [serviceName, setServiceName] = useState("")
	const [serviceNameOverride, setServiceNameOverride] = useState("")
	const [showConfig, setShowConfig] = useState(false)
	const [source, setSource] = useState<"github" | "docker">("github")

	const currentNameTaken = useMemo(
		() => services.map((service) => service.name).includes(serviceNameOverride),
		[services, serviceNameOverride],
	)

	const addService = async () => {
		await createService({
			variables: {
				input: {
					projectId: projectID,
					name: serviceNameOverride || serviceName,
					source:
						source === "github"
							? {
									repo: serviceName,
								}
							: {
									image: serviceName,
								},
				},
			},
		})

		publicClient.refetchQueries({
			include: ["GetProject"],
		})

		setShowCreateDialog(false)
		setServiceName("")
		setServiceNameOverride("")
		setShowConfig(false)
	}

	return (
		<>
			<Button
				onClick={() => {
					setShowCreateDialog(true)
				}}
			>
				Add service
			</Button>
			<Dialog
				open={showCreateDialog}
				onClose={(open) => setShowCreateDialog(open)}
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
								source === "github" ? "underline" : null,
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
								source === "docker" ? "underline" : null,
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
							<Field className="flex flex-col gap-1">
								<Label
									htmlFor="serviceURL"
									className="whitespace-nowrap font-semibold"
								>
									{source === "github" ? "GitHub repository" : "Docker image"}
								</Label>
								<Input
									placeholder={
										source === "github" ? "adalovelace/calculator" : "redis"
									}
									type="text"
									name="serviceURL"
									id="serviceURL"
									onChange={(e) => {
										const normalized = normalizeName(e.target.value)
										setServiceName(normalized)
										setServiceNameOverride(normalized)
										setShowConfig(true)
									}}
								/>
							</Field>

							{showConfig ? (
								<div className="my-2 flex flex-col gap-2">
									<p className="text-sm font-semibold">Configuration</p>
									<div className="flex flex-col gap-1">
										<Label className="flex flex-col gap-1 whitespace-nowrap">
											<span className="text-xs font-medium">Name</span>
											<Input
												type="text"
												value={serviceNameOverride}
												className={cn(
													"font-normal",
													currentNameTaken ? "!ring-destructive" : "",
												)}
												onChange={(e) => {
													const normalized = normalizeName(e.target.value)
													setServiceNameOverride(normalized)
													e.target.value = normalized
												}}
											/>
										</Label>
										<span className="text-xs text-destructive">
											{currentNameTaken ? "Current name is taken" : "\u00A0"}
										</span>
									</div>
								</div>
							) : null}
						</Fieldset>

						<div className="text-right">
							<Button
								type="submit"
								disabled={!serviceName || loading || currentNameTaken}
							>
								Add service
							</Button>
						</div>
					</form>
				</DialogBody>
			</Dialog>
		</>
	)
}

export function AddServiceButton(props: AddServiceButtonProps) {
	return (
		<ApolloProvider client={publicClient}>
			<InternalButton {...props} />
		</ApolloProvider>
	)
}

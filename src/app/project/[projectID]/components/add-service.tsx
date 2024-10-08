"use client"

import { useCreateService } from "@/api/services"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useState } from "react"

type AddServiceButtonProps = {
	projectID: string
	onAdd: () => void
}

function ServiceURL({
	serviceName,
	source,
}: {
	serviceName?: string
	source: string
}) {
	if (!serviceName) return null

	const dockerSeparator = serviceName.includes("/") ? "r" : "_"

	const url =
		source === "github"
			? `https://github.com/${serviceName}`
			: `https://hub.docker.com/${dockerSeparator}/${serviceName}`

	return <span className="text-muted-foreground text-xs">{url}</span>
}

function InternalButton({ projectID, onAdd }: AddServiceButtonProps) {
	const { createService, loading } = useCreateService()

	const [showCreateDialog, setShowCreateDialog] = useState(false)

	const [serviceName, setServiceName] = useState("")
	const [source, setSource] = useState<"github" | "docker">("github")

	const addService = async () => {
		await createService({
			variables: {
				input: {
					projectId: projectID,
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

		onAdd()
	}

	return (
		<>
			<Dialog
				open={showCreateDialog}
				onOpenChange={(open) => setShowCreateDialog(open)}
			>
				<DialogTrigger asChild>
					<Button
						onClick={() => {
							setShowCreateDialog(true)
						}}
					>
						Add service
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle className="font-bold">Add a service</DialogTitle>
					<DialogDescription className="text-xs text-muted-foreground">
						Add a new service from an existing GitHub repository, or choose from
						one of our popular templates
					</DialogDescription>

					<div className="flex flex-col gap-4">
						<div>
							<Button
								variant="link"
								size="sm"
								type="button"
								className={cn("pl-0", source === "github" ? "underline" : null)}
								onClick={() => setSource("github")}
							>
								Github
							</Button>
							<Button
								variant="link"
								size="sm"
								type="button"
								className={cn(source === "docker" ? "underline" : null)}
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
							<div className="flex flex-col gap-1">
								<Label
									htmlFor="serviceURL"
									className="font-semibold whitespace-nowrap"
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
										setServiceName(e.target.value)
									}}
								/>
								<ServiceURL serviceName={serviceName} source={source} />
							</div>

							<div className="text-right">
								<Button type="submit" disabled={!serviceName || loading}>
									Add service
								</Button>
							</div>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export function AddServiceButton(props: AddServiceButtonProps) {
	return <InternalButton {...props} />
}

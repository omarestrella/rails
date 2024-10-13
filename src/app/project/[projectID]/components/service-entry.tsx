"use client"

import { publicClient } from "@/api/client"
import {
	DeploymentStatus,
	getLatestDeployment,
	Service,
	useDeleteService,
	useDeployService,
} from "@/api/services"
import { useDeploymentStatus } from "@/app/project/[projectID]/hooks/useDeploymentStatus"
import { Status, StatusDot } from "@/components/status-dot"

import { Input } from "@/components/ui/input"
import { getServiceTimeSinceDeploy } from "@/lib/time"
import { LucideTerminal } from "lucide-react"
import { useMemo, useState } from "react"
import {
	Alert,
	AlertActions,
	AlertBody,
	AlertTitle,
} from "@/components/ui/alert"
import { Field, Fieldset, Label } from "@/components/ui/fieldset"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function DeploymentBadge({ status }: { status: DeploymentStatus }) {
	const color = useMemo(() => {
		switch (status) {
			case DeploymentStatus.NeedsApproval:
			case DeploymentStatus.Queued:
				return "yellow"
			case DeploymentStatus.Initializing:
			case DeploymentStatus.Building:
			case DeploymentStatus.Deploying:
				return "orange"
			case DeploymentStatus.Crashed:
			case DeploymentStatus.Failed:
				return "red"
			case DeploymentStatus.Success:
				return "green"
			default:
				return undefined
		}
	}, [status])

	return (
		<Badge className="-mt-1 !text-xs" color={color}>
			{status}
		</Badge>
	)
}

function DeleteServiceButton({
	service,
	onDelete,
}: {
	service: Service
	onDelete: () => void
}) {
	const [confirmation, setConfirmation] = useState("")
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

	return (
		<>
			<Button
				color="red"
				onClick={() => {
					setShowDeleteConfirmation(true)
				}}
			>
				Delete
			</Button>
			<Alert
				open={showDeleteConfirmation}
				onClose={(open) => {
					setShowDeleteConfirmation(open)
					setConfirmation("")
				}}
			>
				<AlertTitle>Delete service</AlertTitle>
				<AlertBody className="flex flex-col gap-2 text-sm">
					<p>
						Are you sure you want to delete <strong>{service.name}</strong>?
					</p>
					<p>This action is irreversible.</p>
					<Fieldset>
						<Field>
							<Label className="mt-4 font-normal">
								Type <strong>{service.name}</strong> to confirm
							</Label>
							<Input
								onChange={(e) => {
									setConfirmation(e.target.value)
								}}
							/>
						</Field>
					</Fieldset>
				</AlertBody>
				<AlertActions>
					<Button onClick={() => setShowDeleteConfirmation(false)}>
						Cancel
					</Button>
					<Button
						disabled={confirmation !== service.name}
						onClick={() => {
							setShowDeleteConfirmation(false)
							onDelete()
						}}
						color="red"
					>
						Delete
					</Button>
				</AlertActions>
			</Alert>
		</>
	)
}

export function ServiceEntry({
	service,
	environmentID,
	onDelete,
}: {
	service: Service
	environmentID: string | undefined
	onDelete: (serviceID: string) => void
}) {
	const deleteService = useDeleteService(service.id)
	const deployService = useDeployService(service.id, environmentID)

	const [deploying, setDeploying] = useState(false)

	const { status, timeSinceDeploy } = useDeploymentStatus(
		service.id,
		environmentID,
	)

	const latestDeploymentDate = getLatestDeployment(
		service,
		environmentID,
	)?.createdAt

	const defaultTimeSinceDeploy = latestDeploymentDate
		? getServiceTimeSinceDeploy(latestDeploymentDate)
		: ""

	const handleDeploy = async () => {
		if (deploying) return

		setDeploying(deploying)
		await deployService()
		await publicClient.refetchQueries({
			include: ["GetService"],
		})
	}

	const statusClass: Status = useMemo(() => {
		switch (status) {
			case DeploymentStatus.NeedsApproval:
			case DeploymentStatus.Queued:
				return "warning"
			case DeploymentStatus.Initializing:
			case DeploymentStatus.Building:
			case DeploymentStatus.Deploying:
				return "busy"
			case DeploymentStatus.Crashed:
			case DeploymentStatus.Failed:
				return "error"
			case DeploymentStatus.Success:
				return "success"
			default:
				return "neutral"
		}
	}, [status])

	return (
		<div
			className="mb-3 flex w-full justify-between gap-2 rounded-sm border px-6 py-4 shadow-sm"
			key={service.id}
		>
			<div className="flex gap-2.5">
				<div className="pt-[1px]">
					<StatusDot
						status={statusClass}
						animate={statusClass !== "error" && statusClass !== "success"}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex gap-4">
						<span className="pb-0.5 font-medium leading-3">{service.name}</span>
						<DeploymentBadge status={status} />
					</div>
					<span
						className="text-secondary-foregroundm w-fit text-xs"
						title={
							latestDeploymentDate
								? new Date(latestDeploymentDate).toLocaleString()
								: ""
						}
					>
						{status === DeploymentStatus.Success ? (
							<>
								Deployed{" "}
								{defaultTimeSinceDeploy ?? (timeSinceDeploy || "\u00A0")}
							</>
						) : null}
					</span>
					<div className="mt-2">
						<Button className="h-8 !text-xs" outline>
							<LucideTerminal size={12} />
							<span>Show logs</span>
						</Button>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 self-start">
				<Button onClick={handleDeploy} disabled={deploying} plain>
					Redeploy
				</Button>
				<DeleteServiceButton
					service={service}
					onDelete={() => {
						deleteService()
						onDelete(service.id)
					}}
				/>
			</div>
		</div>
	)
}

"use client"

import { publicClient } from "@/api/client"
import { useProject } from "@/api/projects"
import {
	DeploymentStatus,
	GetService,
	Service,
	useDeleteService,
	useDeployService,
} from "@/api/services"
import { AddServiceButton } from "@/app/project/[projectID]/components/add-service"
import { Status, StatusDot } from "@/components/status-dot"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { ApolloProvider, useLazyQuery } from "@apollo/client"
import { useCallback, useMemo, useState } from "react"

type ProjectDetailProps = {
	projectID: string
}

function ServiceCard({
	service,
	onDelete,
}: {
	service: Service
	onDelete: (serviceID: string) => void
}) {
	const [deployment] = service.deployments.edges ?? []
	const environmentID = service.serviceInstances.edges[0]?.node.environmentId

	const deleteService = useDeleteService(service.id)
	const deployService = useDeployService(service.id, environmentID)

	const [loadService, { refetch }] = useLazyQuery<Service>(GetService, {
		variables: {
			serviceID: service.id,
		},
	})

	const [deploying, setDeploying] = useState(false)

	const handleDeploy = async () => {
		if (deploying) return

		setDeploying(deploying)
		deployService()
		await loadService()

		setInterval(() => {
			refetch()
		}, 3000)
	}

	const statusClass: Status = useMemo(() => {
		if (!deployment) {
			return "neutral"
		}

		switch (deployment.node.status) {
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
	}, [deployment])

	return (
		<Card className="w-72" key={service.id}>
			<CardHeader>
				<CardTitle className="flex gap-2.5 items-center">
					<StatusDot
						status={statusClass}
						animate={statusClass !== "error" && statusClass !== "success"}
					/>
					<span className="pb-0.5">{service.name}</span>
				</CardTitle>
				<CardDescription>
					{deployment ? deployment.node.status : "No deployments"}
				</CardDescription>
			</CardHeader>

			<CardContent className="flex gap-2">
				<Button size="sm" onClick={handleDeploy} disabled={deploying}>
					Deploy
				</Button>
				<Button
					variant="destructive"
					size="sm"
					onClick={() => {
						deleteService()
						onDelete(service.id)
					}}
				>
					Delete
				</Button>
			</CardContent>
		</Card>
	)
}

function InternalProjectDetail({ projectID }: ProjectDetailProps) {
	const { data, loading, refetch } = useProject(projectID)

	const refetchUntilDeleted = useCallback(
		async (serviceID: string) => {
			const { data } = await refetch()
			if (
				data?.project.services.edges.some(
					(edge) => (edge.node as Service).id === serviceID,
				)
			) {
				setTimeout(() => refetchUntilDeleted(serviceID), 1000)
			}
		},
		[refetch],
	)

	if (loading) {
		return null
	}

	const services = data?.project.services.edges ?? []
	const hasServices = services.length ?? 0 > 0

	if (!hasServices) {
		return (
			<div>
				<AddServiceButton projectID={projectID} onAdd={refetch} />
			</div>
		)
	}

	return (
		<div className="w-screen">
			<div className="flex flex-wrap">
				{services.map((service) => {
					const node = service.node as Service
					return (
						<ServiceCard
							key={node.id}
							service={node}
							onDelete={refetchUntilDeleted}
						/>
					)
				})}
			</div>
		</div>
	)
}

export function ProjectDetail(props: ProjectDetailProps) {
	return (
		<ApolloProvider client={publicClient}>
			<InternalProjectDetail {...props} />
		</ApolloProvider>
	)
}

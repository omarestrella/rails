"use client"

import { publicClient } from "@/api/client"
import { Project, useProject } from "@/api/projects"
import { Service } from "@/api/services"
import { ServiceEntry } from "@/app/project/[projectID]/components/service-entry"
import { ApolloProvider } from "@apollo/client"
import { useCallback } from "react"

type ProjectDetailProps = {
	projectID: string
	project: Project
}

function InternalProjectDetail({ project, projectID }: ProjectDetailProps) {
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

	// No SSR inside here, but we can try to rely on what gets sent from the page server component
	// Helps with the flash of no services
	const services = loading
		? (project.services.edges ?? [])
		: (data?.project.services.edges ?? [])

	const environmentID =
		project.baseEnvironment?.id ??
		project.environments.edges?.find((edge) => edge.node.name === "production")
			?.node.id

	return (
		<div className="w-full">
			<div className="flex flex-col overflow-hidden">
				{services.map((service) => {
					const node = service.node as Service
					return (
						<ServiceEntry
							key={node.id}
							service={node}
							onDelete={refetchUntilDeleted}
							environmentID={environmentID}
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

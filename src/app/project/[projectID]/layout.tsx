import { GetProjectQuery } from "@/__generated__/graphql"
import { client } from "@/api/client"
import { GetProject } from "@/api/projects"
import { Service } from "@/api/services"
import { AddServiceButton } from "@/app/project/[projectID]/components/add-service"

export default async function Layout({
	params: { projectID },
	children,
}: {
	params: { projectID: string }
	children: React.ReactNode
}) {
	const { data } = await client.query<GetProjectQuery>({
		query: GetProject,
		variables: { id: projectID },
		fetchPolicy: "network-only",
	})

	if (!data.project) {
		return null
	}

	const serviceNames = data.project.services.edges.map(
		(edge) => (edge.node as Service).name,
	)
	console.log("Service names", serviceNames)

	return (
		<div className="grid grid-rows-[32px,1fr] gap-4">
			<div className="flex w-full items-center justify-between gap-2">
				<span className="text-lg font-semibold">{data.project.name}</span>
				<AddServiceButton projectID={projectID} />
			</div>
			{children}
		</div>
	)
}

import { GetProjectsQuery } from "@/__generated__/graphql"
import { client } from "@/api/client"
import { GetProjects } from "@/api/projects"
import Link from "next/link"

export default async function Page() {
	const { data } = await client.query<Partial<GetProjectsQuery>>({
		query: GetProjects,
		fetchPolicy: "network-only",
	})

	const edges = data.projects?.edges ?? []

	return (
		<div className="flex flex-wrap gap-2">
			{edges.map(({ node: project }) => {
				const serviceCount = (project.services.edges ?? []).length

				return (
					<Link
						key={project.id}
						href={`/project/${project.id}`}
						className="flex w-72 flex-col gap-4 rounded-sm border p-2 hover:shadow-sm"
					>
						<h1 className="font-medium">{project.name}</h1>
						{serviceCount ? (
							<p className="text-sm">
								{serviceCount} {serviceCount > 1 ? "services" : "service"}
							</p>
						) : null}
					</Link>
				)
			})}
		</div>
	)
}

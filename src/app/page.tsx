import { GetProjectsQuery } from "@/__generated__/graphql"
import { client } from "@/api/client"
import { GetProjects } from "@/api/projects"
import Link from "next/link"

export default async function Page() {
	const { data: projects } = await client.query<Partial<GetProjectsQuery>>({
		query: GetProjects,
		fetchPolicy: "network-only",
	})

	const edges = projects.projects?.edges ?? []

	return (
		<div className="flex flex-col gap-2">
			{edges.map(({ node }) => (
				<Link key={node.id} href={`/project/${node.id}`}>
					<h1>{node.name}</h1>
					<p>{node.createdAt}</p>
				</Link>
			))}
		</div>
	)
}

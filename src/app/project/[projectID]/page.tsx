import { GetProjectQuery } from "@/__generated__/graphql"
import { client } from "@/api/client"
import { GetProject } from "@/api/projects"
import { ProjectDetail } from "@/app/project/[projectID]/components/project-detail"
import { notFound } from "next/navigation"

export default async function Page({
	params: { projectID },
}: {
	params: { projectID: string }
}) {
	const { data } = await client.query<GetProjectQuery>({
		query: GetProject,
		variables: { id: projectID },
		fetchPolicy: "network-only",
	})

	if (!data.project) {
		return notFound()
	}

	return <ProjectDetail project={data.project as never} projectID={projectID} />
}

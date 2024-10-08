import { ProjectLink } from "@/app/project/[projectID]/components/project-link"

export default function Layout({
	params: { projectID },
	children,
}: {
	params: { projectID: string }
	children: React.ReactNode
}) {
	return (
		<div className="grid grid-rows-[32px,1fr] gap-4">
			<div className="w-screen flex items-center gap-2">
				<ProjectLink projectID={projectID} page="/">
					Services
				</ProjectLink>

				<ProjectLink projectID={projectID} page="/logs">
					Logs
				</ProjectLink>
			</div>
			{children}
		</div>
	)
}

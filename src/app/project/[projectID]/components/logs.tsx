"use client"

import { GetDeploymentLogsQuery } from "@/__generated__/graphql"
import { DeploymentLogs } from "@/api/services"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"

export function Logs({
	deploymentID,
}: {
	deploymentID: string | null
	serviceID: string
}) {
	const { data, refetch } = useQuery<GetDeploymentLogsQuery>(DeploymentLogs, {
		variables: { deploymentID },
	})

	useEffect(() => {
		if (!deploymentID) {
			return
		}

		const interval = setInterval(() => {
			refetch()
		}, 1000)

		return () => clearInterval(interval)
	}, [refetch, deploymentID])

	useEffect(() => {
		document.scrollingElement?.scroll(0, 1)
	}, [])

	if (!deploymentID) {
		return <div>No logs</div>
	}

	console.log(data)

	return (
		<div className="h-full overflow-auto [overflow-anchor:none]">
			{data?.deploymentLogs.map((log, idx) => {
				if (!log.message) {
					return null
				}
				return (
					<div
						key={idx}
						className="grid grid-cols-[min-content,1fr] gap-4 text-sm"
					>
						<pre>{new Date(log.timestamp).toLocaleString()}</pre>
						<pre>{log.message}</pre>
					</div>
				)
			})}
			<div id="anchor" className="h-[1px] [overflow-anchor:auto]" />
		</div>
	)
}

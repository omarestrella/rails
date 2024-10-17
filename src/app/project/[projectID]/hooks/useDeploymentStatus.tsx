import { GetServiceQuery } from "@/__generated__/graphql"
import {
	DeploymentStatus,
	getLatestDeployment,
	GetService,
	Service,
} from "@/api/services"
import { getServiceTimeSinceDeploy } from "@/lib/time"
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

export function useDeploymentStatus(
	serviceID: string,
	environmentID: string | undefined,
): {
	status: DeploymentStatus
	timeSinceDeploy: string
	deploymentID: string | null
} {
	const { data, refetch } = useQuery<GetServiceQuery>(GetService, {
		variables: {
			serviceID,
		},
		fetchPolicy: "cache-and-network",
	})

	const service = data?.service as Service | undefined

	const deployment = getLatestDeployment(service, environmentID)

	const [timeSinceDeploy, setTimeSinceDeploy] = useState<string>(() => {
		if (!deployment) {
			return ""
		}
		return getServiceTimeSinceDeploy(deployment.createdAt)
	})

	useEffect(() => {
		const doneStatuses = [
			DeploymentStatus.Crashed,
			DeploymentStatus.Failed,
			DeploymentStatus.Success,
			DeploymentStatus.Sleeping,
		]
		const status = deployment?.status

		if (!status || doneStatuses.includes(status)) {
			return
		}

		const interval = setInterval(() => {
			refetch()
		}, 1000)

		return () => clearInterval(interval)
	}, [deployment, refetch])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!deployment) {
				return
			}

			setTimeSinceDeploy(getServiceTimeSinceDeploy(deployment.createdAt))
		}, 1000)

		return () => clearInterval(interval)
	}, [deployment])

	if (!deployment) {
		return {
			deploymentID: null,
			status: DeploymentStatus.Initializing,
			timeSinceDeploy: "",
		}
	}

	return {
		deploymentID: deployment.id,
		status: deployment.status,
		timeSinceDeploy: timeSinceDeploy,
	}
}

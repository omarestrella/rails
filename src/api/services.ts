import {
	ServiceCreateInput,
	ServiceDataFragment,
	DeploymentStatus,
} from "@/__generated__/graphql"
import { gql, useMutation } from "@apollo/client"
import { useCallback } from "react"

export const ServiceFragment = gql`
	fragment ServiceData on Service {
		id
		name
		icon
		templateServiceId
		createdAt
		projectId
		featureFlags
		templateThreadSlug
		deployments {
			edges {
				node {
					id
					environmentId
					createdAt
					updatedAt
					status
					canRedeploy
				}
			}
		}
		serviceInstances {
			edges {
				node {
					id
					environmentId
				}
			}
		}
	}
`

export const AddService = gql`
	mutation AddService($input: ServiceCreateInput!) {
		serviceCreate(input: $input) {
			deployments {
				edges {
					node {
						id
						environmentId
					}
				}
			}
		}
	}
`

export const GetService = gql`
	${ServiceFragment}

	query GetService($serviceID: String!) {
		service(id: $serviceID) {
			...ServiceData
		}
	}
`

export const DeploymentLogs = gql`
	query GetDeploymentLogs($deploymentID: String!) {
		deploymentLogs(deploymentId: $deploymentID) {
			message
			severity
			timestamp
			attributes {
				key
				value
			}
			tags {
				deploymentId
				deploymentInstanceId
				serviceId
				projectId
			}
		}
	}
`

export const DeleteService = gql`
	mutation DeleteService($serviceID: String!, $environmentID: String) {
		serviceDelete(environmentId: $environmentID, id: $serviceID)
	}
`

export const DeployService = gql`
	mutation DeployService($serviceID: String!, $environmentID: String!) {
		serviceInstanceDeploy(serviceId: $serviceID, environmentId: $environmentID)
	}
`

export function useCreateService() {
	const [createService, { data, loading }] = useMutation<
		unknown,
		{ input: ServiceCreateInput }
	>(AddService)

	return { createService, data, loading }
}

export function useDeleteService(serviceID: string) {
	const [deleteService] = useMutation(DeleteService)

	return useCallback(() => {
		deleteService({ variables: { serviceID } })
	}, [serviceID, deleteService])
}

export function useDeployService(serviceID: string, environmentID: string) {
	const [deployService] = useMutation(DeployService)

	return useCallback(() => {
		deployService({
			variables: {
				serviceID,
				environmentID,
			},
		})
	}, [serviceID, environmentID, deployService])
}

export type Service = ServiceDataFragment

export { DeploymentStatus }

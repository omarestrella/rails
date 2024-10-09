import { GetProjectQuery } from "@/__generated__/graphql"
import { Service, ServiceFragment } from "@/api/services"
import { gql, useQuery } from "@apollo/client"

export type Project = GetProjectQuery["project"] & {
	services: {
		edges: Array<{
			node: Service
		}>
	}
}

export const GetProjects = gql`
	${ServiceFragment}
	query GetProjects {
		projects(first: 10) {
			edges {
				node {
					id
					name
					createdAt
					baseEnvironment {
						id
						name
					}

					services {
						edges {
							node {
								...ServiceData
							}
						}
					}
				}
			}
		}
	}
`

export const GetProject = gql`
	${ServiceFragment}
	query GetProject($id: String!) {
		project(id: $id) {
			id
			name
			description

			baseEnvironment {
				id
				name
			}

			environments {
				edges {
					node {
						id
						name
					}
				}
			}

			services {
				edges {
					node {
						...ServiceData
					}
				}
			}
		}
	}
`

export function useProjects() {
	const { data } = useQuery(GetProjects)

	return data
}

export function useProject(projectID: string) {
	return useQuery<GetProjectQuery>(GetProject, {
		variables: { id: projectID },
	})
}

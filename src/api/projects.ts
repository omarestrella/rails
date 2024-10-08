import { GetProjectQuery } from "@/__generated__/graphql"
import { ServiceFragment } from "@/api/services"
import { gql, useQuery } from "@apollo/client"

export const GetProjects = gql`
	query GetProjects {
		projects(first: 10) {
			edges {
				cursor
				node {
					id
					name
					createdAt
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

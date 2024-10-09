/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n\t\n\tquery GetProjects {\n\t\tprojects(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tbaseEnvironment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\n\t\t\t\t\tservices {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetProjectsDocument,
    "\n\t\n\tquery GetProject($id: String!) {\n\t\tproject(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\n\t\t\tbaseEnvironment {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tenvironments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetProjectDocument,
    "\n\tfragment ServiceData on Service {\n\t\tid\n\t\tname\n\t\ticon\n\t\ttemplateServiceId\n\t\tcreatedAt\n\t\tprojectId\n\t\tfeatureFlags\n\t\ttemplateThreadSlug\n\t\tdeployments {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tstatus\n\t\t\t\t\tcanRedeploy\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tserviceInstances {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tlatestDeployment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.ServiceDataFragmentDoc,
    "\n\tmutation AddService($input: ServiceCreateInput!) {\n\t\tserviceCreate(input: $input) {\n\t\t\tdeployments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tenvironmentId\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.AddServiceDocument,
    "\n\t\n\n\tquery GetService($serviceID: String!) {\n\t\tservice(id: $serviceID) {\n\t\t\t...ServiceData\n\t\t}\n\t}\n": types.GetServiceDocument,
    "\n\t\n\n\tquery GetServices($projectID: String!) {\n\t\tproject(id: $projectID) {\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetServicesDocument,
    "\n\tquery GetDeploymentLogs($deploymentID: String!) {\n\t\tdeploymentLogs(deploymentId: $deploymentID) {\n\t\t\tmessage\n\t\t\tseverity\n\t\t\ttimestamp\n\t\t\tattributes {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t\ttags {\n\t\t\t\tdeploymentId\n\t\t\t\tdeploymentInstanceId\n\t\t\t\tserviceId\n\t\t\t\tprojectId\n\t\t\t}\n\t\t}\n\t}\n": types.GetDeploymentLogsDocument,
    "\n\tmutation DeleteService($serviceID: String!, $environmentID: String) {\n\t\tserviceDelete(environmentId: $environmentID, id: $serviceID)\n\t}\n": types.DeleteServiceDocument,
    "\n\tmutation DeployService($serviceID: String!, $environmentID: String!) {\n\t\tserviceInstanceDeploy(serviceId: $serviceID, environmentId: $environmentID)\n\t}\n": types.DeployServiceDocument,
    "\n\t\t\tquery Me {\n\t\t\t\tme {\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\tavatar\n\t\t\t\t}\n\t\t\t}\n\t\t": types.MeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\t\n\tquery GetProjects {\n\t\tprojects(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tbaseEnvironment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\n\t\t\t\t\tservices {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\t\n\tquery GetProjects {\n\t\tprojects(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tbaseEnvironment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\n\t\t\t\t\tservices {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\t\n\tquery GetProject($id: String!) {\n\t\tproject(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\n\t\t\tbaseEnvironment {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tenvironments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\t\n\tquery GetProject($id: String!) {\n\t\tproject(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\n\t\t\tbaseEnvironment {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tenvironments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment ServiceData on Service {\n\t\tid\n\t\tname\n\t\ticon\n\t\ttemplateServiceId\n\t\tcreatedAt\n\t\tprojectId\n\t\tfeatureFlags\n\t\ttemplateThreadSlug\n\t\tdeployments {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tstatus\n\t\t\t\t\tcanRedeploy\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tserviceInstances {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tlatestDeployment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment ServiceData on Service {\n\t\tid\n\t\tname\n\t\ticon\n\t\ttemplateServiceId\n\t\tcreatedAt\n\t\tprojectId\n\t\tfeatureFlags\n\t\ttemplateThreadSlug\n\t\tdeployments {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tstatus\n\t\t\t\t\tcanRedeploy\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tserviceInstances {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tenvironmentId\n\t\t\t\t\tlatestDeployment {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation AddService($input: ServiceCreateInput!) {\n\t\tserviceCreate(input: $input) {\n\t\t\tdeployments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tenvironmentId\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation AddService($input: ServiceCreateInput!) {\n\t\tserviceCreate(input: $input) {\n\t\t\tdeployments {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tenvironmentId\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\t\n\n\tquery GetService($serviceID: String!) {\n\t\tservice(id: $serviceID) {\n\t\t\t...ServiceData\n\t\t}\n\t}\n"): (typeof documents)["\n\t\n\n\tquery GetService($serviceID: String!) {\n\t\tservice(id: $serviceID) {\n\t\t\t...ServiceData\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\t\n\n\tquery GetServices($projectID: String!) {\n\t\tproject(id: $projectID) {\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\t\n\n\tquery GetServices($projectID: String!) {\n\t\tproject(id: $projectID) {\n\t\t\tservices {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...ServiceData\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetDeploymentLogs($deploymentID: String!) {\n\t\tdeploymentLogs(deploymentId: $deploymentID) {\n\t\t\tmessage\n\t\t\tseverity\n\t\t\ttimestamp\n\t\t\tattributes {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t\ttags {\n\t\t\t\tdeploymentId\n\t\t\t\tdeploymentInstanceId\n\t\t\t\tserviceId\n\t\t\t\tprojectId\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetDeploymentLogs($deploymentID: String!) {\n\t\tdeploymentLogs(deploymentId: $deploymentID) {\n\t\t\tmessage\n\t\t\tseverity\n\t\t\ttimestamp\n\t\t\tattributes {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t\ttags {\n\t\t\t\tdeploymentId\n\t\t\t\tdeploymentInstanceId\n\t\t\t\tserviceId\n\t\t\t\tprojectId\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation DeleteService($serviceID: String!, $environmentID: String) {\n\t\tserviceDelete(environmentId: $environmentID, id: $serviceID)\n\t}\n"): (typeof documents)["\n\tmutation DeleteService($serviceID: String!, $environmentID: String) {\n\t\tserviceDelete(environmentId: $environmentID, id: $serviceID)\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation DeployService($serviceID: String!, $environmentID: String!) {\n\t\tserviceInstanceDeploy(serviceId: $serviceID, environmentId: $environmentID)\n\t}\n"): (typeof documents)["\n\tmutation DeployService($serviceID: String!, $environmentID: String!) {\n\t\tserviceInstanceDeploy(serviceId: $serviceID, environmentId: $environmentID)\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\t\t\tquery Me {\n\t\t\t\tme {\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\tavatar\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery Me {\n\t\t\t\tme {\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\tavatar\n\t\t\t\t}\n\t\t\t}\n\t\t"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
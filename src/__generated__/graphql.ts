/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  CanvasConfig: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  DeploymentMeta: { input: any; output: any; }
  DisplayConfig: { input: any; output: any; }
  /** EnvironmentVariables is a custom scalar type that represents a map of environment variables. */
  EnvironmentVariables: { input: any; output: any; }
  EventProperties: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  SerializedTemplateConfig: { input: any; output: any; }
  ServiceInstanceLimit: { input: any; output: any; }
  SubscriptionPlanLimit: { input: any; output: any; }
  TemplateConfig: { input: any; output: any; }
  TemplateMetadata: { input: any; output: any; }
  TemplateServiceConfig: { input: any; output: any; }
  TemplateVolume: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export enum ActiveFeatureFlag {
  NewServiceGroupsUx = 'NEW_SERVICE_GROUPS_UX',
  PriorityBoarding = 'PRIORITY_BOARDING'
}

export enum ActiveServiceFeatureFlag {
  OldCronExperience = 'OLD_CRON_EXPERIENCE',
  Placeholder = 'PLACEHOLDER'
}

export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type BaseEnvironmentOverrideInput = {
  baseEnvironmentOverrideId?: InputMaybe<Scalars['String']['input']>;
};

export enum Builder {
  Heroku = 'HEROKU',
  Nixpacks = 'NIXPACKS',
  Paketo = 'PAKETO'
}

export enum CdnProvider {
  DetectedCdnProviderCloudflare = 'DETECTED_CDN_PROVIDER_CLOUDFLARE',
  DetectedCdnProviderUnspecified = 'DETECTED_CDN_PROVIDER_UNSPECIFIED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum CertificateStatus {
  CertificateStatusTypeIssueFailed = 'CERTIFICATE_STATUS_TYPE_ISSUE_FAILED',
  CertificateStatusTypeIssuing = 'CERTIFICATE_STATUS_TYPE_ISSUING',
  CertificateStatusTypeUnspecified = 'CERTIFICATE_STATUS_TYPE_UNSPECIFIED',
  CertificateStatusTypeValid = 'CERTIFICATE_STATUS_TYPE_VALID',
  Unrecognized = 'UNRECOGNIZED'
}

export enum CnameCheckStatus {
  Error = 'ERROR',
  Info = 'INFO',
  Invalid = 'INVALID',
  Valid = 'VALID',
  Waiting = 'WAITING'
}

export enum CreditType {
  Applied = 'APPLIED',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Stripe = 'STRIPE',
  Transfer = 'TRANSFER',
  Waived = 'WAIVED'
}

export type CustomDomainCreateInput = {
  domain: Scalars['String']['input'];
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export enum DnsRecordPurpose {
  DnsRecordPurposeAcmeDns01Challenge = 'DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE',
  DnsRecordPurposeTrafficRoute = 'DNS_RECORD_PURPOSE_TRAFFIC_ROUTE',
  DnsRecordPurposeUnspecified = 'DNS_RECORD_PURPOSE_UNSPECIFIED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum DnsRecordStatus {
  DnsRecordStatusPropagated = 'DNS_RECORD_STATUS_PROPAGATED',
  DnsRecordStatusRequiresUpdate = 'DNS_RECORD_STATUS_REQUIRES_UPDATE',
  DnsRecordStatusUnspecified = 'DNS_RECORD_STATUS_UNSPECIFIED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum DnsRecordType {
  DnsRecordTypeA = 'DNS_RECORD_TYPE_A',
  DnsRecordTypeCname = 'DNS_RECORD_TYPE_CNAME',
  DnsRecordTypeNs = 'DNS_RECORD_TYPE_NS',
  DnsRecordTypeUnspecified = 'DNS_RECORD_TYPE_UNSPECIFIED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum DeploymentEventStep {
  BuildImage = 'BUILD_IMAGE',
  CreateContainer = 'CREATE_CONTAINER',
  DrainInstances = 'DRAIN_INSTANCES',
  Healthcheck = 'HEALTHCHECK',
  PublishImage = 'PUBLISH_IMAGE',
  SnapshotCode = 'SNAPSHOT_CODE'
}

export type DeploymentInstanceExecutionCreateInput = {
  serviceInstanceId: Scalars['String']['input'];
};

export type DeploymentInstanceExecutionInput = {
  deploymentId: Scalars['String']['input'];
};

export type DeploymentInstanceExecutionListInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export enum DeploymentInstanceStatus {
  Crashed = 'CRASHED',
  Created = 'CREATED',
  Exited = 'EXITED',
  Initializing = 'INITIALIZING',
  Removed = 'REMOVED',
  Removing = 'REMOVING',
  Restarting = 'RESTARTING',
  Running = 'RUNNING',
  Skipped = 'SKIPPED'
}

export type DeploymentListInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DeploymentStatusInput>;
};

export enum DeploymentStatus {
  Building = 'BUILDING',
  Crashed = 'CRASHED',
  Deploying = 'DEPLOYING',
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  NeedsApproval = 'NEEDS_APPROVAL',
  Queued = 'QUEUED',
  Removed = 'REMOVED',
  Removing = 'REMOVING',
  Skipped = 'SKIPPED',
  Sleeping = 'SLEEPING',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export type DeploymentStatusInput = {
  in?: InputMaybe<Array<DeploymentStatus>>;
  notIn?: InputMaybe<Array<DeploymentStatus>>;
};

export type DeploymentTriggerCreateInput = {
  branch: Scalars['String']['input'];
  checkSuites?: InputMaybe<Scalars['Boolean']['input']>;
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  repository: Scalars['String']['input'];
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};

export type DeploymentTriggerUpdateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  checkSuites?: InputMaybe<Scalars['Boolean']['input']>;
  repository?: InputMaybe<Scalars['String']['input']>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
};

export type EgressGatewayCreateInput = {
  environmentId: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};

export type EgressGatewayServiceTargetInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type EnvironmentCreateInput = {
  ephemeral?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  /** When committing the changes immediately, skip any initial deployments. */
  skipInitialDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  /** Create the environment with all of the services, volumes, configuration, and variables from this source environment. */
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  /** Stage the initial changes for the environment. If false (default), the changes will be committed immediately. */
  stageInitialChanges?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentRenameInput = {
  name: Scalars['String']['input'];
};

export type EnvironmentTriggersDeployInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type EventBatchTrackInput = {
  events: Array<EventTrackInput>;
};

export type EventFilterInput = {
  action?: InputMaybe<EventStringListFilter>;
  object?: InputMaybe<EventStringListFilter>;
};

export type EventStringListFilter = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventTrackInput = {
  eventName: Scalars['String']['input'];
  properties?: InputMaybe<Scalars['EventProperties']['input']>;
  ts: Scalars['String']['input'];
};

export type ExplicitOwnerInput = {
  /** The ID of the owner */
  id: Scalars['String']['input'];
  /** The type of owner */
  type: ResourceOwnerType;
};

export type FeatureFlagToggleInput = {
  flag: ActiveFeatureFlag;
};

export type GitHubRepoDeployInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  repo: Scalars['String']['input'];
};

export type GitHubRepoUpdateInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type HelpStationFormInput = {
  isPrivate: Scalars['Boolean']['input'];
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};

export type HerokuImportVariablesInput = {
  environmentId: Scalars['String']['input'];
  herokuAppId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export enum IncidentStatus {
  Identified = 'IDENTIFIED',
  Investigating = 'INVESTIGATING',
  Monitoring = 'MONITORING',
  Resolved = 'RESOLVED'
}

export type IntegrationCreateInput = {
  config: Scalars['JSON']['input'];
  integrationAuthId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type IntegrationUpdateInput = {
  config: Scalars['JSON']['input'];
  integrationAuthId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type JobApplicationCreateInput = {
  email: Scalars['String']['input'];
  jobId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  why: Scalars['String']['input'];
};

export enum KeyType {
  KeyTypeEcdsa = 'KEY_TYPE_ECDSA',
  KeyTypeRsa_2048 = 'KEY_TYPE_RSA_2048',
  KeyTypeRsa_4096 = 'KEY_TYPE_RSA_4096',
  KeyTypeUnspecified = 'KEY_TYPE_UNSPECIFIED',
  Unrecognized = 'UNRECOGNIZED'
}

export type LoginSessionAuthInput = {
  code: Scalars['String']['input'];
  hostname?: InputMaybe<Scalars['String']['input']>;
};

export enum MaintenanceStatus {
  Completed = 'COMPLETED',
  Inprogress = 'INPROGRESS',
  Notstartedyet = 'NOTSTARTEDYET'
}

/** A thing that can be measured on Railway. */
export enum MetricMeasurement {
  CpuLimit = 'CPU_LIMIT',
  CpuUsage = 'CPU_USAGE',
  DiskUsageGb = 'DISK_USAGE_GB',
  EphemeralDiskUsageGb = 'EPHEMERAL_DISK_USAGE_GB',
  MeasurementUnspecified = 'MEASUREMENT_UNSPECIFIED',
  MemoryLimitGb = 'MEMORY_LIMIT_GB',
  MemoryUsageGb = 'MEMORY_USAGE_GB',
  NetworkRxGb = 'NETWORK_RX_GB',
  NetworkTxGb = 'NETWORK_TX_GB',
  Unrecognized = 'UNRECOGNIZED'
}

/** A property that can be used to group metrics. */
export enum MetricTag {
  DeploymentId = 'DEPLOYMENT_ID',
  DeploymentInstanceId = 'DEPLOYMENT_INSTANCE_ID',
  EnvironmentId = 'ENVIRONMENT_ID',
  KeyUnspecified = 'KEY_UNSPECIFIED',
  PluginId = 'PLUGIN_ID',
  ProjectId = 'PROJECT_ID',
  ServiceId = 'SERVICE_ID',
  Unrecognized = 'UNRECOGNIZED',
  VolumeId = 'VOLUME_ID'
}

export type MissingCommandAlertInput = {
  page: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type ObservabilityDashboardCreateInput = {
  environmentId: Scalars['String']['input'];
  /** If no items are provided, a default dashboard will be created. */
  items?: InputMaybe<Array<ObservabilityDashboardUpdateInput>>;
};

export type ObservabilityDashboardItemConfigInput = {
  logsFilter?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Array<MetricMeasurement>>;
  projectUsageProperties?: InputMaybe<Array<ProjectUsageProperty>>;
  resourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ObservabilityDashboardItemCreateInput = {
  config: ObservabilityDashboardItemConfigInput;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: ObservabilityDashboardItemType;
};

export enum ObservabilityDashboardItemType {
  ProjectUsageItem = 'PROJECT_USAGE_ITEM',
  ServiceLogsItem = 'SERVICE_LOGS_ITEM',
  ServiceMetricsItem = 'SERVICE_METRICS_ITEM',
  VolumeMetricsItem = 'VOLUME_METRICS_ITEM'
}

export type ObservabilityDashboardUpdateInput = {
  dashboardItem: ObservabilityDashboardItemCreateInput;
  displayConfig: Scalars['DisplayConfig']['input'];
  id: Scalars['String']['input'];
};

export type PluginCreateInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  friendlyName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type PluginRestartInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
};

export enum PluginStatus {
  Deprecated = 'DEPRECATED',
  Locked = 'LOCKED',
  Removed = 'REMOVED',
  Running = 'RUNNING',
  Stopped = 'STOPPED'
}

export enum PluginType {
  Mongodb = 'mongodb',
  Mysql = 'mysql',
  Postgresql = 'postgresql',
  Redis = 'redis'
}

export type PluginUpdateInput = {
  friendlyName: Scalars['String']['input'];
};

export type PreferencesUpdateData = {
  buildFailedEmail?: InputMaybe<Scalars['Boolean']['input']>;
  changelogEmail?: InputMaybe<Scalars['Boolean']['input']>;
  communityEmail?: InputMaybe<Scalars['Boolean']['input']>;
  deployCrashedEmail?: InputMaybe<Scalars['Boolean']['input']>;
  ephemeralEnvironmentEmail?: InputMaybe<Scalars['Boolean']['input']>;
  marketingEmail?: InputMaybe<Scalars['Boolean']['input']>;
  subprocessorUpdatesEmail?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  usageEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PrivateNetworkCreateOrGetInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type PrivateNetworkEndpointCreateOrGetInput = {
  environmentId: Scalars['String']['input'];
  privateNetworkId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  serviceName: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type ProjectCreateInput = {
  defaultEnvironmentName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plugins?: InputMaybe<Array<Scalars['String']['input']>>;
  prDeploys?: InputMaybe<Scalars['Boolean']['input']>;
  repo?: InputMaybe<ProjectCreateRepo>;
  runtime?: InputMaybe<PublicRuntime>;
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCreateRepo = {
  branch: Scalars['String']['input'];
  fullRepoName: Scalars['String']['input'];
};

export type ProjectInviteUserInput = {
  email: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type ProjectInvitee = {
  email: Scalars['String']['input'];
  role: ProjectRole;
};

export type ProjectMemberRemoveInput = {
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ProjectMemberUpdateInput = {
  projectId: Scalars['String']['input'];
  role: ProjectRole;
  userId: Scalars['String']['input'];
};

export enum ProjectRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Viewer = 'VIEWER'
}

export type ProjectTokenCreateInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferConfirmInput = {
  ownershipTransferId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferInitiateInput = {
  memberId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type ProjectTransferToTeamInput = {
  teamId: Scalars['String']['input'];
};

export type ProjectUpdateInput = {
  baseEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  /** Enable/disable pull request environments for PRs created by bots */
  botPrEnvironments?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prDeploys?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ProjectUsageProperty {
  CpuUsage = 'CPU_USAGE',
  CurrentUsage = 'CURRENT_USAGE',
  DiskUsage = 'DISK_USAGE',
  EstimatedUsage = 'ESTIMATED_USAGE',
  MemoryUsage = 'MEMORY_USAGE',
  NetworkUsage = 'NETWORK_USAGE'
}

export enum PublicRuntime {
  Legacy = 'LEGACY',
  Unspecified = 'UNSPECIFIED',
  V2 = 'V2'
}

export type RecoveryCodeValidateInput = {
  code: Scalars['String']['input'];
  twoFactorLinkingKey?: InputMaybe<Scalars['String']['input']>;
};

export type ReferralInfoUpdateInput = {
  code: Scalars['String']['input'];
};

export enum ReferralStatus {
  RefereeCredited = 'REFEREE_CREDITED',
  ReferrerCredited = 'REFERRER_CREDITED',
  Registered = 'REGISTERED'
}

/** Possible decisions for a RefundRequest */
export enum RefundRequestDecisionEnum {
  AutoRefunded = 'AUTO_REFUNDED',
  AutoRejected = 'AUTO_REJECTED',
  ManuallyRefunded = 'MANUALLY_REFUNDED'
}

export enum RegistrationStatus {
  Onboarded = 'ONBOARDED',
  Registered = 'REGISTERED',
  Waitlisted = 'WAITLISTED'
}

/** Private Docker registry credentials. Only available for Pro plan deployments. */
export type RegistryCredentialsInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResetPluginCredentialsInput = {
  environmentId: Scalars['String']['input'];
};

export type ResetPluginInput = {
  environmentId: Scalars['String']['input'];
};

export enum ResourceOwnerType {
  Team = 'TEAM',
  User = 'USER'
}

export enum RestartPolicyType {
  Always = 'ALWAYS',
  Never = 'NEVER',
  OnFailure = 'ON_FAILURE'
}

export type SendCommunityThreadNotificationEmailInput = {
  postEntryContent?: InputMaybe<Scalars['String']['input']>;
  threadTitle: Scalars['String']['input'];
  threadUrl: Scalars['String']['input'];
  userIds: Array<Scalars['String']['input']>;
};

export type ServiceConnectInput = {
  /** The branch to connect to. e.g. 'main' */
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Name of the Dockerhub or GHCR image to connect this service to. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the repo to connect to. e.g. 'railwayapp/starters' */
  repo?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceCreateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Environment ID. If the specified environment is a fork, the service will only be created in it. Otherwise it will created in all environments that are not forks of other environments */
  environmentId?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  registryCredentials?: InputMaybe<RegistryCredentialsInput>;
  source?: InputMaybe<ServiceSourceInput>;
  templateServiceId?: InputMaybe<Scalars['String']['input']>;
  variables?: InputMaybe<Scalars['EnvironmentVariables']['input']>;
};

export type ServiceDomainCreateInput = {
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceDomainUpdateInput = {
  domain: Scalars['String']['input'];
  environmentId: Scalars['String']['input'];
  serviceDomainId?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
  targetPort?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceFeatureFlagToggleInput = {
  flag: ActiveServiceFeatureFlag;
  serviceId: Scalars['String']['input'];
};

export type ServiceInstanceLimitsUpdateInput = {
  environmentId: Scalars['String']['input'];
  /** Amount of memory in GB to allocate to the service instance */
  memoryGB?: InputMaybe<Scalars['Int']['input']>;
  serviceId: Scalars['String']['input'];
  /** Number of vCPUs to allocate to the service instance */
  vCPUs?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceInstanceUpdateInput = {
  buildCommand?: InputMaybe<Scalars['String']['input']>;
  builder?: InputMaybe<Builder>;
  cronSchedule?: InputMaybe<Scalars['String']['input']>;
  healthcheckPath?: InputMaybe<Scalars['String']['input']>;
  healthcheckTimeout?: InputMaybe<Scalars['Int']['input']>;
  nixpacksPlan?: InputMaybe<Scalars['JSON']['input']>;
  numReplicas?: InputMaybe<Scalars['Int']['input']>;
  railwayConfigFile?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  registryCredentials?: InputMaybe<RegistryCredentialsInput>;
  restartPolicyMaxRetries?: InputMaybe<Scalars['Int']['input']>;
  restartPolicyType?: InputMaybe<RestartPolicyType>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  sleepApplication?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<ServiceSourceInput>;
  startCommand?: InputMaybe<Scalars['String']['input']>;
  watchPatterns?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ServiceSourceInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceUpdateInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum SessionType {
  Browser = 'BROWSER',
  Cli = 'CLI',
  Forums = 'FORUMS'
}

export type SharedVariableConfigureInput = {
  disabledServiceIds: Array<Scalars['String']['input']>;
  enabledServiceIds: Array<Scalars['String']['input']>;
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export enum SubscriptionPlanType {
  Hobby = 'hobby',
  Pro = 'pro',
  Trial = 'trial'
}

export enum SubscriptionState {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Inactive = 'INACTIVE',
  PastDue = 'PAST_DUE',
  Unpaid = 'UNPAID'
}

export type TcpProxyCreateInput = {
  applicationPort: Scalars['Int']['input'];
  environmentId: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

export type TeamBulkProjectTransferInput = {
  projectIds: Array<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
};

export type TeamCreateAndSubscribeInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type TeamCreateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TeamInviteCodeCreateInput = {
  role: Scalars['String']['input'];
};

export type TeamPermissionChangeInput = {
  role: TeamRole;
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type TeamUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferredRegion?: InputMaybe<Scalars['String']['input']>;
};

export type TeamUserInviteInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type TeamUserRemoveInput = {
  userId: Scalars['String']['input'];
};

export type TelemetrySendInput = {
  command: Scalars['String']['input'];
  environmentId?: InputMaybe<Scalars['String']['input']>;
  error: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  stacktrace: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateCloneInput = {
  code: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateDeleteInput = {
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateDeployInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  services: Array<TemplateDeployService>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  templateCode?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateDeployService = {
  commit?: InputMaybe<Scalars['String']['input']>;
  hasDomain?: InputMaybe<Scalars['Boolean']['input']>;
  healthcheckPath?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  rootDirectory?: InputMaybe<Scalars['String']['input']>;
  serviceIcon?: InputMaybe<Scalars['String']['input']>;
  serviceName: Scalars['String']['input'];
  startCommand?: InputMaybe<Scalars['String']['input']>;
  tcpProxyApplicationPort?: InputMaybe<Scalars['Int']['input']>;
  template: Scalars['String']['input'];
  variables?: InputMaybe<Scalars['EnvironmentVariables']['input']>;
  volumes?: InputMaybe<Array<Scalars['TemplateVolume']['input']>>;
};

export type TemplateDeployV2Input = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  serializedConfig: Scalars['SerializedTemplateConfig']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['String']['input'];
};

export type TemplateGenerateInput = {
  projectId: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatePublishInput = {
  category: Scalars['String']['input'];
  demoProjectId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  readme: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateServiceSourceEjectInput = {
  projectId: Scalars['String']['input'];
  repoName: Scalars['String']['input'];
  repoOwner: Scalars['String']['input'];
  /** Provide multiple serviceIds when ejecting services from a monorepo. */
  serviceIds: Array<Scalars['String']['input']>;
  upstreamUrl: Scalars['String']['input'];
};

export enum TemplateStatus {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type TwoFactorInfoCreateInput = {
  token: Scalars['String']['input'];
};

export type TwoFactorInfoValidateInput = {
  token: Scalars['String']['input'];
  twoFactorLinkingKey?: InputMaybe<Scalars['String']['input']>;
};

/** Possible actions for a UsageAnomaly. */
export enum UsageAnomalyAction {
  Allowed = 'ALLOWED',
  Autobanned = 'AUTOBANNED',
  Banned = 'BANNED'
}

/** Possible flag reasons for a UsageAnomaly. */
export enum UsageAnomalyFlagReason {
  HighCpuUsage = 'HIGH_CPU_USAGE',
  HighDiskUsage = 'HIGH_DISK_USAGE',
  HighNetworkUsage = 'HIGH_NETWORK_USAGE'
}

export type UsageLimitRemoveInput = {
  customerId: Scalars['String']['input'];
};

export type UsageLimitSetInput = {
  customerId: Scalars['String']['input'];
  hardLimitDollars?: InputMaybe<Scalars['Int']['input']>;
  softLimitDollars: Scalars['Int']['input'];
};

export enum UserFlag {
  Beta = 'BETA'
}

export type UserFlagsRemoveInput = {
  flags: Array<UserFlag>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagsSetInput = {
  flags: Array<UserFlag>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfileUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  isPublic: Scalars['Boolean']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VariableCollectionUpsertInput = {
  environmentId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  /** When set to true, removes all existing variables before upserting the new collection. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  variables: Scalars['EnvironmentVariables']['input'];
};

export type VariableDeleteInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type VariableUpsertInput = {
  environmentId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type VolumeCreateInput = {
  /** The environment to deploy the volume instances into. If `null`, the volume will not be deployed to any environment. `undefined` will deploy to all environments. */
  environmentId?: InputMaybe<Scalars['String']['input']>;
  /** The path in the container to mount the volume to */
  mountPath: Scalars['String']['input'];
  /** The project to create the volume in */
  projectId: Scalars['String']['input'];
  /** The service to attach the volume to. If not provided, the volume will be disconnected. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type VolumeInstanceUpdateInput = {
  /** The mount path of the volume instance. If not provided, the mount path will not be updated. */
  mountPath?: InputMaybe<Scalars['String']['input']>;
  /** The service to attach the volume to. If not provided, the volume will be disconnected. */
  serviceId?: InputMaybe<Scalars['String']['input']>;
  /** The state of the volume instance. If not provided, the state will not be updated. */
  state?: InputMaybe<VolumeState>;
};

export enum VolumeState {
  Deleted = 'DELETED',
  Deleting = 'DELETING',
  Error = 'ERROR',
  Migrating = 'MIGRATING',
  MigrationPending = 'MIGRATION_PENDING',
  Ready = 'READY',
  Updating = 'UPDATING'
}

export type VolumeUpdateInput = {
  /** The name of the volume */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WebhookCreateInput = {
  projectId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type WebhookUpdateInput = {
  url: Scalars['String']['input'];
};

export enum WithdrawalPlatformTypes {
  Bmac = 'BMAC',
  Github = 'GITHUB',
  Paypal = 'PAYPAL'
}

export enum WithdrawalStatusType {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export enum WorkflowStatus {
  Complete = 'Complete',
  Error = 'Error',
  NotFound = 'NotFound',
  Running = 'Running'
}

export type CustomerTogglePayoutsToCreditsInput = {
  isWithdrawingToCredits: Scalars['Boolean']['input'];
};

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'QueryProjectsConnection', edges: Array<{ __typename?: 'QueryProjectsConnectionEdge', node: { __typename?: 'Project', id: string, name: string, createdAt: any, baseEnvironment?: { __typename?: 'Environment', id: string, name: string } | null, services: { __typename?: 'ProjectServicesConnection', edges: Array<{ __typename?: 'ProjectServicesConnectionEdge', node: (
              { __typename?: 'Service' }
              & { ' $fragmentRefs'?: { 'ServiceDataFragment': ServiceDataFragment } }
            ) }> } } }> } };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, name: string, description?: string | null, baseEnvironment?: { __typename?: 'Environment', id: string, name: string } | null, environments: { __typename?: 'ProjectEnvironmentsConnection', edges: Array<{ __typename?: 'ProjectEnvironmentsConnectionEdge', node: { __typename?: 'Environment', id: string, name: string } }> }, services: { __typename?: 'ProjectServicesConnection', edges: Array<{ __typename?: 'ProjectServicesConnectionEdge', node: (
          { __typename?: 'Service' }
          & { ' $fragmentRefs'?: { 'ServiceDataFragment': ServiceDataFragment } }
        ) }> } } };

export type ServiceDataFragment = { __typename?: 'Service', id: string, name: string, icon?: string | null, templateServiceId?: string | null, createdAt: any, projectId: string, featureFlags: Array<ActiveServiceFeatureFlag>, templateThreadSlug?: string | null, deployments: { __typename?: 'ServiceDeploymentsConnection', edges: Array<{ __typename?: 'ServiceDeploymentsConnectionEdge', node: { __typename?: 'Deployment', id: string, environmentId: string, createdAt: any, updatedAt: any, status: DeploymentStatus, canRedeploy: boolean } }> }, serviceInstances: { __typename?: 'ServiceServiceInstancesConnection', edges: Array<{ __typename?: 'ServiceServiceInstancesConnectionEdge', node: { __typename?: 'ServiceInstance', id: string, environmentId: string, latestDeployment?: { __typename?: 'Deployment', id: string, status: DeploymentStatus, createdAt: any } | null } }> } } & { ' $fragmentName'?: 'ServiceDataFragment' };

export type AddServiceMutationVariables = Exact<{
  input: ServiceCreateInput;
}>;


export type AddServiceMutation = { __typename?: 'Mutation', serviceCreate: { __typename?: 'Service', deployments: { __typename?: 'ServiceDeploymentsConnection', edges: Array<{ __typename?: 'ServiceDeploymentsConnectionEdge', node: { __typename?: 'Deployment', id: string, environmentId: string } }> } } };

export type GetServiceQueryVariables = Exact<{
  serviceID: Scalars['String']['input'];
}>;


export type GetServiceQuery = { __typename?: 'Query', service: (
    { __typename?: 'Service' }
    & { ' $fragmentRefs'?: { 'ServiceDataFragment': ServiceDataFragment } }
  ) };

export type GetServicesQueryVariables = Exact<{
  projectID: Scalars['String']['input'];
}>;


export type GetServicesQuery = { __typename?: 'Query', project: { __typename?: 'Project', services: { __typename?: 'ProjectServicesConnection', edges: Array<{ __typename?: 'ProjectServicesConnectionEdge', node: (
          { __typename?: 'Service' }
          & { ' $fragmentRefs'?: { 'ServiceDataFragment': ServiceDataFragment } }
        ) }> } } };

export type GetDeploymentLogsQueryVariables = Exact<{
  deploymentID: Scalars['String']['input'];
}>;


export type GetDeploymentLogsQuery = { __typename?: 'Query', deploymentLogs: Array<{ __typename?: 'Log', message: string, severity?: string | null, timestamp: string, attributes: Array<{ __typename?: 'LogAttribute', key: string, value: string }>, tags?: { __typename?: 'LogTags', deploymentId?: string | null, deploymentInstanceId?: string | null, serviceId?: string | null, projectId?: string | null } | null }> };

export type DeleteServiceMutationVariables = Exact<{
  serviceID: Scalars['String']['input'];
  environmentID?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', serviceDelete: boolean };

export type DeployServiceMutationVariables = Exact<{
  serviceID: Scalars['String']['input'];
  environmentID: Scalars['String']['input'];
}>;


export type DeployServiceMutation = { __typename?: 'Mutation', serviceInstanceDeploy: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', name?: string | null, email: string, avatar?: string | null } };

export const ServiceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestDeployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServiceDataFragment, unknown>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceData"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestDeployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"baseEnvironment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestDeployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const AddServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddServiceMutation, AddServiceMutationVariables>;
export const GetServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestDeployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceQuery, GetServiceQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"templateServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}},{"kind":"Field","name":{"kind":"Name","value":"templateThreadSlug"}},{"kind":"Field","name":{"kind":"Name","value":"deployments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"canRedeploy"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceInstances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"environmentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestDeployment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetDeploymentLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDeploymentLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deploymentID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deploymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deploymentID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deploymentId"}},{"kind":"Field","name":{"kind":"Name","value":"deploymentInstanceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]}}]} as unknown as DocumentNode<GetDeploymentLogsQuery, GetDeploymentLogsQueryVariables>;
export const DeleteServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentID"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}}}]}]}}]} as unknown as DocumentNode<DeleteServiceMutation, DeleteServiceMutationVariables>;
export const DeployServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeployService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"environmentID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceInstanceDeploy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceID"}}},{"kind":"Argument","name":{"kind":"Name","value":"environmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"environmentID"}}}]}]}}]} as unknown as DocumentNode<DeployServiceMutation, DeployServiceMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
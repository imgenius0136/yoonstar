// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  portfolio: (where?: PortfolioWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  portfolio: (where: PortfolioWhereUniqueInput) => PortfolioNullablePromise;
  portfolios: (args?: {
    where?: PortfolioWhereInput;
    orderBy?: PortfolioOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Portfolio>;
  portfoliosConnection: (args?: {
    where?: PortfolioWhereInput;
    orderBy?: PortfolioOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PortfolioConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPortfolio: (data: PortfolioCreateInput) => PortfolioPromise;
  updatePortfolio: (args: {
    data: PortfolioUpdateInput;
    where: PortfolioWhereUniqueInput;
  }) => PortfolioPromise;
  updateManyPortfolios: (args: {
    data: PortfolioUpdateManyMutationInput;
    where?: PortfolioWhereInput;
  }) => BatchPayloadPromise;
  upsertPortfolio: (args: {
    where: PortfolioWhereUniqueInput;
    create: PortfolioCreateInput;
    update: PortfolioUpdateInput;
  }) => PortfolioPromise;
  deletePortfolio: (where: PortfolioWhereUniqueInput) => PortfolioPromise;
  deleteManyPortfolios: (where?: PortfolioWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  portfolio: (
    where?: PortfolioSubscriptionWhereInput
  ) => PortfolioSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PortfolioOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "tec_stack_ASC"
  | "tec_stack_DESC"
  | "img_url_ASC"
  | "img_url_DESC"
  | "create_ASC"
  | "create_DESC"
  | "createBy_ASC"
  | "createBy_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PortfolioCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  tec_stack: String;
  img_url: String;
  create: String;
  createBy: String;
}

export interface PortfolioUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  tec_stack?: Maybe<String>;
  img_url?: Maybe<String>;
  create?: Maybe<String>;
  createBy?: Maybe<String>;
}

export interface PortfolioUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  tec_stack?: Maybe<String>;
  img_url?: Maybe<String>;
  create?: Maybe<String>;
  createBy?: Maybe<String>;
}

export interface PortfolioWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  tec_stack?: Maybe<String>;
  tec_stack_not?: Maybe<String>;
  tec_stack_in?: Maybe<String[] | String>;
  tec_stack_not_in?: Maybe<String[] | String>;
  tec_stack_lt?: Maybe<String>;
  tec_stack_lte?: Maybe<String>;
  tec_stack_gt?: Maybe<String>;
  tec_stack_gte?: Maybe<String>;
  tec_stack_contains?: Maybe<String>;
  tec_stack_not_contains?: Maybe<String>;
  tec_stack_starts_with?: Maybe<String>;
  tec_stack_not_starts_with?: Maybe<String>;
  tec_stack_ends_with?: Maybe<String>;
  tec_stack_not_ends_with?: Maybe<String>;
  img_url?: Maybe<String>;
  img_url_not?: Maybe<String>;
  img_url_in?: Maybe<String[] | String>;
  img_url_not_in?: Maybe<String[] | String>;
  img_url_lt?: Maybe<String>;
  img_url_lte?: Maybe<String>;
  img_url_gt?: Maybe<String>;
  img_url_gte?: Maybe<String>;
  img_url_contains?: Maybe<String>;
  img_url_not_contains?: Maybe<String>;
  img_url_starts_with?: Maybe<String>;
  img_url_not_starts_with?: Maybe<String>;
  img_url_ends_with?: Maybe<String>;
  img_url_not_ends_with?: Maybe<String>;
  create?: Maybe<String>;
  create_not?: Maybe<String>;
  create_in?: Maybe<String[] | String>;
  create_not_in?: Maybe<String[] | String>;
  create_lt?: Maybe<String>;
  create_lte?: Maybe<String>;
  create_gt?: Maybe<String>;
  create_gte?: Maybe<String>;
  create_contains?: Maybe<String>;
  create_not_contains?: Maybe<String>;
  create_starts_with?: Maybe<String>;
  create_not_starts_with?: Maybe<String>;
  create_ends_with?: Maybe<String>;
  create_not_ends_with?: Maybe<String>;
  createBy?: Maybe<String>;
  createBy_not?: Maybe<String>;
  createBy_in?: Maybe<String[] | String>;
  createBy_not_in?: Maybe<String[] | String>;
  createBy_lt?: Maybe<String>;
  createBy_lte?: Maybe<String>;
  createBy_gt?: Maybe<String>;
  createBy_gte?: Maybe<String>;
  createBy_contains?: Maybe<String>;
  createBy_not_contains?: Maybe<String>;
  createBy_starts_with?: Maybe<String>;
  createBy_not_starts_with?: Maybe<String>;
  createBy_ends_with?: Maybe<String>;
  createBy_not_ends_with?: Maybe<String>;
  AND?: Maybe<PortfolioWhereInput[] | PortfolioWhereInput>;
  OR?: Maybe<PortfolioWhereInput[] | PortfolioWhereInput>;
  NOT?: Maybe<PortfolioWhereInput[] | PortfolioWhereInput>;
}

export interface PortfolioSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PortfolioWhereInput>;
  AND?: Maybe<
    PortfolioSubscriptionWhereInput[] | PortfolioSubscriptionWhereInput
  >;
  OR?: Maybe<
    PortfolioSubscriptionWhereInput[] | PortfolioSubscriptionWhereInput
  >;
  NOT?: Maybe<
    PortfolioSubscriptionWhereInput[] | PortfolioSubscriptionWhereInput
  >;
}

export type PortfolioWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePortfolio {
  count: Int;
}

export interface AggregatePortfolioPromise
  extends Promise<AggregatePortfolio>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePortfolioSubscription
  extends Promise<AsyncIterator<AggregatePortfolio>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PortfolioPreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  tec_stack: String;
  img_url: String;
  create: String;
  createBy: String;
}

export interface PortfolioPreviousValuesPromise
  extends Promise<PortfolioPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  tec_stack: () => Promise<String>;
  img_url: () => Promise<String>;
  create: () => Promise<String>;
  createBy: () => Promise<String>;
}

export interface PortfolioPreviousValuesSubscription
  extends Promise<AsyncIterator<PortfolioPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  tec_stack: () => Promise<AsyncIterator<String>>;
  img_url: () => Promise<AsyncIterator<String>>;
  create: () => Promise<AsyncIterator<String>>;
  createBy: () => Promise<AsyncIterator<String>>;
}

export interface PortfolioEdge {
  node: Portfolio;
  cursor: String;
}

export interface PortfolioEdgePromise
  extends Promise<PortfolioEdge>,
    Fragmentable {
  node: <T = PortfolioPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PortfolioEdgeSubscription
  extends Promise<AsyncIterator<PortfolioEdge>>,
    Fragmentable {
  node: <T = PortfolioSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PortfolioSubscriptionPayload {
  mutation: MutationType;
  node: Portfolio;
  updatedFields: String[];
  previousValues: PortfolioPreviousValues;
}

export interface PortfolioSubscriptionPayloadPromise
  extends Promise<PortfolioSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PortfolioPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PortfolioPreviousValuesPromise>() => T;
}

export interface PortfolioSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PortfolioSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PortfolioSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PortfolioPreviousValuesSubscription>() => T;
}

export interface Portfolio {
  id: ID_Output;
  title: String;
  description: String;
  tec_stack: String;
  img_url: String;
  create: String;
  createBy: String;
}

export interface PortfolioPromise extends Promise<Portfolio>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  tec_stack: () => Promise<String>;
  img_url: () => Promise<String>;
  create: () => Promise<String>;
  createBy: () => Promise<String>;
}

export interface PortfolioSubscription
  extends Promise<AsyncIterator<Portfolio>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  tec_stack: () => Promise<AsyncIterator<String>>;
  img_url: () => Promise<AsyncIterator<String>>;
  create: () => Promise<AsyncIterator<String>>;
  createBy: () => Promise<AsyncIterator<String>>;
}

export interface PortfolioNullablePromise
  extends Promise<Portfolio | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  tec_stack: () => Promise<String>;
  img_url: () => Promise<String>;
  create: () => Promise<String>;
  createBy: () => Promise<String>;
}

export interface PortfolioConnection {
  pageInfo: PageInfo;
  edges: PortfolioEdge[];
}

export interface PortfolioConnectionPromise
  extends Promise<PortfolioConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PortfolioEdge>>() => T;
  aggregate: <T = AggregatePortfolioPromise>() => T;
}

export interface PortfolioConnectionSubscription
  extends Promise<AsyncIterator<PortfolioConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PortfolioEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePortfolioSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Portfolio",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;

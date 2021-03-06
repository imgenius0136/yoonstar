module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePortfolio {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPortfolio(data: PortfolioCreateInput!): Portfolio!
  updatePortfolio(data: PortfolioUpdateInput!, where: PortfolioWhereUniqueInput!): Portfolio
  updateManyPortfolios(data: PortfolioUpdateManyMutationInput!, where: PortfolioWhereInput): BatchPayload!
  upsertPortfolio(where: PortfolioWhereUniqueInput!, create: PortfolioCreateInput!, update: PortfolioUpdateInput!): Portfolio!
  deletePortfolio(where: PortfolioWhereUniqueInput!): Portfolio
  deleteManyPortfolios(where: PortfolioWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Portfolio {
  id: ID!
  title: String!
  description: String!
  tec_stack: String!
  img_url: String!
  create: String!
  createBy: String!
}

type PortfolioConnection {
  pageInfo: PageInfo!
  edges: [PortfolioEdge]!
  aggregate: AggregatePortfolio!
}

input PortfolioCreateInput {
  id: ID
  title: String!
  description: String!
  tec_stack: String!
  img_url: String!
  create: String!
  createBy: String!
}

type PortfolioEdge {
  node: Portfolio!
  cursor: String!
}

enum PortfolioOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  tec_stack_ASC
  tec_stack_DESC
  img_url_ASC
  img_url_DESC
  create_ASC
  create_DESC
  createBy_ASC
  createBy_DESC
}

type PortfolioPreviousValues {
  id: ID!
  title: String!
  description: String!
  tec_stack: String!
  img_url: String!
  create: String!
  createBy: String!
}

type PortfolioSubscriptionPayload {
  mutation: MutationType!
  node: Portfolio
  updatedFields: [String!]
  previousValues: PortfolioPreviousValues
}

input PortfolioSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PortfolioWhereInput
  AND: [PortfolioSubscriptionWhereInput!]
  OR: [PortfolioSubscriptionWhereInput!]
  NOT: [PortfolioSubscriptionWhereInput!]
}

input PortfolioUpdateInput {
  title: String
  description: String
  tec_stack: String
  img_url: String
  create: String
  createBy: String
}

input PortfolioUpdateManyMutationInput {
  title: String
  description: String
  tec_stack: String
  img_url: String
  create: String
  createBy: String
}

input PortfolioWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  tec_stack: String
  tec_stack_not: String
  tec_stack_in: [String!]
  tec_stack_not_in: [String!]
  tec_stack_lt: String
  tec_stack_lte: String
  tec_stack_gt: String
  tec_stack_gte: String
  tec_stack_contains: String
  tec_stack_not_contains: String
  tec_stack_starts_with: String
  tec_stack_not_starts_with: String
  tec_stack_ends_with: String
  tec_stack_not_ends_with: String
  img_url: String
  img_url_not: String
  img_url_in: [String!]
  img_url_not_in: [String!]
  img_url_lt: String
  img_url_lte: String
  img_url_gt: String
  img_url_gte: String
  img_url_contains: String
  img_url_not_contains: String
  img_url_starts_with: String
  img_url_not_starts_with: String
  img_url_ends_with: String
  img_url_not_ends_with: String
  create: String
  create_not: String
  create_in: [String!]
  create_not_in: [String!]
  create_lt: String
  create_lte: String
  create_gt: String
  create_gte: String
  create_contains: String
  create_not_contains: String
  create_starts_with: String
  create_not_starts_with: String
  create_ends_with: String
  create_not_ends_with: String
  createBy: String
  createBy_not: String
  createBy_in: [String!]
  createBy_not_in: [String!]
  createBy_lt: String
  createBy_lte: String
  createBy_gt: String
  createBy_gte: String
  createBy_contains: String
  createBy_not_contains: String
  createBy_starts_with: String
  createBy_not_starts_with: String
  createBy_ends_with: String
  createBy_not_ends_with: String
  AND: [PortfolioWhereInput!]
  OR: [PortfolioWhereInput!]
  NOT: [PortfolioWhereInput!]
}

input PortfolioWhereUniqueInput {
  id: ID
}

type Query {
  portfolio(where: PortfolioWhereUniqueInput!): Portfolio
  portfolios(where: PortfolioWhereInput, orderBy: PortfolioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Portfolio]!
  portfoliosConnection(where: PortfolioWhereInput, orderBy: PortfolioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PortfolioConnection!
  node(id: ID!): Node
}

type Subscription {
  portfolio(where: PortfolioSubscriptionWhereInput): PortfolioSubscriptionPayload
}
`
      }
    
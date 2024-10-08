import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"

if (process.env.NODE_ENV === "development") {
	loadDevMessages()
	loadErrorMessages()
}

export { gql }

export const client = new ApolloClient({
	uri: "https://backboard.railway.app/graphql/v2",
	headers: {
		Authorization: `Bearer ${process.env.RAILWAY_TOKEN}`,
	},
	cache: new InMemoryCache(),
})

export const publicClient = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
})

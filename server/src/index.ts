import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'
import { TrackAPI } from './datasources/track-api'

async function startApolloServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	})

	const { url } = await startStandaloneServer(server, {
		context: async () => {
			const { cache } = server
			return {
				// name it however you want
				dataSources: {
					trackAPI: new TrackAPI({ cache }),
				},
			}
		},
	})
	console.log(`
  🚀 Server is running! 
  📮 Query at ${url}
  `)
}

startApolloServer()

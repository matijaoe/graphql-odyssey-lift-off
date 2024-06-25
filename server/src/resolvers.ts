import { DataSourceContext } from './context'
import { Resolvers } from './types'

export const resolvers: Resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		tracksForHome: (_parent, _args, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome()
		},
	},
	Track: {
		author: ({ authorId }, _args, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId)
		},
	},
}

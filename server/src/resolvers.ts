import { Resolvers } from './types'

export const resolvers: Resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome()
		},
		track: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getTrack(id)
		},
	},
	Track: {
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId)
		},
		modules: ({ id: trackId }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(trackId)
		},
	},
	Module: {
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId)
		},
		track: ({ trackId }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrack(trackId)
		},
	},
}

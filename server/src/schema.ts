import gql from 'graphql-tag'

export const typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
		"Fetch a specific track, provided a track's ID"
		track(id: ID!): Track
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"the track's title"
		title: String!
		"the track's main author"
		author: Author!
		"the track's main illustration to display in track card or track page detail"
		thumbnail: String
		"the track's approximate length to complete, in minutes"
		length: Int
		"the number of modules this track contains"
		modulesCount: Int
		"The track's complete description, can be in Markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"the track's complete array of Modules"
		modules: [Module!]!
	}

	"A Module is a single unit of teaching. Multiple Modules compose a Track"
	type Module {
		id: ID!
		"The Module's title"
		title: String!
		track: Track
		author: Author
		topic: String!
		"The Module's length in minutes"
		length: Int!
		content: String!
		videoUrl: String!
	}

	"Author of a complete Track"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}
`

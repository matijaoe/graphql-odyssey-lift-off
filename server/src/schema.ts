import gql from 'graphql-tag'

export const typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
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
		modules: [Module!]!
	}

	# type Module {
	# 	id: ID!
	# 	title: String!
	# 	track: Track!
	# 	authorId: Author!
	# 	topic: String!
	# 	length: Int!
	# 	content: String!
	# 	videoUrl: String!
	# }

	"A Module is a single unit of teaching. Multiple Modules compose a Track"
	type Module {
		id: ID!
		"The Module's title"
		title: String!
		"The Module's length in minutes"
		length: Int
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

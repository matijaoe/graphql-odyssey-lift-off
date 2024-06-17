import React from 'react'
import { Layout, QueryResult } from '../components'
import { gql } from '../__generated__'
import { useQuery } from '@apollo/client'
import TrackCard from '../containers/track-card'

const TRACKS = gql(`
  query TracksForHome {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`)

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
	const { data, loading, error } = useQuery(TRACKS)

	return (
		<Layout grid>
			<QueryResult
				error={error}
				loading={loading}
				data={data}
			>
				{data?.tracksForHome.map((track) => (
					<TrackCard
						key={track.id}
						track={track}
					/>
				))}
			</QueryResult>
		</Layout>
	)
}

export default Tracks

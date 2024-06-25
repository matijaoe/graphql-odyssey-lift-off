import { Author, Track } from './types'

type WithId<T, K extends keyof T> = Omit<T, K> & {
	[P in `${Extract<K, string>}Id`]: string
}

export type TrackModel = WithId<Track, 'author'>

export type AuthorModel = Author

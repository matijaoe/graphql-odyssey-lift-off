import { Author, Module, Track } from './types'

// Replace related entity with its ID
type WithId<T, K extends keyof T> = Omit<T, K> & {
	[P in `${Extract<K, string>}Id`]: string
}

export type TrackModel = WithId<Track, 'author'>

export type AuthorModel = Author

export type ModuleModel = WithId<Module, 'author'> & WithId<Module, 'track'>

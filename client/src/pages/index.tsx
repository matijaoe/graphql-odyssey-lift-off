import { BrowserRouter, Route, Routes } from 'react-router-dom'
/** importing our pages */
import Track from './track'
import Tracks from './tracks'

export default function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<Tracks />}
					path="/"
				/>
				<Route
					element={<Track />}
					path="/track/:trackId"
				/>
			</Routes>
		</BrowserRouter>
	)
}

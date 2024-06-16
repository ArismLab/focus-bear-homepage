import Roadmap from '@components/Roadmap'
import { HomeSEO } from '@components/SEO'
import Architecture from '@components/Architecture'
import Home from '@components/Home'

const App = (): JSX.Element => {
	return (
		<>
			<HomeSEO />
			<div>
				<Home />
				<Roadmap />
				<Architecture />
			</div>
		</>
	)
}

export default App

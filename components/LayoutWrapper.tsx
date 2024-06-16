import { useRouter } from 'next/router'
import TransitionWrapper from '@components/TransitionWrapper'
import Header from '@components/Header'
import Footer from '@components/Footer'

const LayoutWrapper = ({ children }: Wrapper): JSX.Element => {
	const router = useRouter()

	return (
		<>
			<TransitionWrapper router={router}>
				<div className="bg-global flex flex-col">
					<Header />
					<main className="w-full">
						<div className="flex flex-col">{children}</div>
					</main>
					<Footer />
				</div>
			</TransitionWrapper>
		</>
	)
}

export default LayoutWrapper

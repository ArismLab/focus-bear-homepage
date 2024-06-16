import React from 'react'
import Phase from './Phase'
const Roadmap = () => {
	return (
		<div className="w-full">
			<p
				className="w-full pb-10 pt-20 text-center text-3xl font-medium lg:py-20 lg:text-5xl"
				id="roadmap"
			>
				Our Roadmap
			</p>
			<div className="flex w-full justify-between px-5 lg:px-20">
				<div className="hidden h-full w-2/5 lg:grid">
					<img
						className="auto h-auto w-fit object-cover"
						src="/static/marketplace.png"
					/>
				</div>
				<div className="flex w-full flex-col gap-10 lg:grid lg:w-3/5 lg:grid-cols-2">
					<div className="flex flex-col gap-10">
						<Phase
							time="Q1 2024"
							name="Initial Development Phase"
							plans={{
								'Project Inception': [
									'Research and market analysis',
									'Core team formation',
									'Initial whitepaper draft',
								],
								Conceptualization: [
									'Game mechanics and tokenomics design',
									'Blockchain platform selection: Starknet',
									'Preliminary smart contract development',
								],
							}}
						/>
						<Phase
							time="Q2-2 2024"
							name="Mainnet Launch: Official Launch"
							plans={{
								'Beta Version Enhancements': [
									'Advanced gameplay features and levels',
									'Partnerships and Collaborations',
									'Final Preparations',
								],
								'Partnerships and Collaborations': [
									'Establish partnerships with other blockchain projects',
									'Collaborate with influencers',
									'Expand marketing efforts',
								],
								'Final Preparations': [
									'Finalize all game features and mechanics',
									'Complete thorough security audits',
									'Optimize smart contracts for mainnet deployment',
								],
								'Mainnet Launch': [
									'Launch date: June 16th, 2024 (TBE)',
									'Deploy smart contracts on the mainnet',
									'Launch the full version of the game',
									'Execute extensive marketing campaign',
								],
								'Post-Launch Activities': [
									'Monitor and support initial launch phase',
									'Address any immediate issues and bugs',
									'Plan for future updates and expansions',
								],
							}}
						/>
					</div>
					<div className="flex flex-col gap-10">
						<Phase
							time="Q2-1 2024"
							name="Testnet Launch: Alpha Release"
							plans={{
								'Alpha Version Development': [
									'Basic gameplay mechanics implementation',
									'Initial NFT creation and integration',
									'Smart contract testing on testnet',
								],
								'Community Involvement': [
									'Alpha testing with select community members',
									'Collect feedback and implement improvements',
									'Host AMA(Ask Me Anything) sessions',
								],
								'Security Measures': [
									'Conduct preliminary security audits',
									'Implement basic anti-cheat mechanisms',
									'Set up bug bounty program',
								],
								'Community Building': [
									'Launch website and social media channels',
									'Community engagement and feedback collection',
									'Initial marketing campaigns',
								],
							}}
						/>
						<Phase
							time="Q3-2024 and Beyond"
							name="Future Plans"
							plans={{
								'Continuous Improvement': [
									'Regular content updates and new features',
									'Expand game universe, new events, collabration with other application, NFTs Collection',
									'Introduce new NFT assets and collectibles',
								],
								'Community Engagement': [
									'Continue to collect and act on user feedback',
									'Strengthen community governance and involvement',
								],
								'Long-Term Vision': [
									'Explore multi-chain integration',
									'Expand ecosystem with additional GameFi projects',
									'Aim for mass adoption and mainstream recognition',
								],
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Roadmap

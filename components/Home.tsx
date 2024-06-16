import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Home = () => {
	return (
		<div
			className="flex w-full flex-col place-items-center items-center gap-10 lg:flex-row lg:gap-0"
			id="home"
		>
			<div className="flex w-full flex-col items-center justify-center gap-5 lg:w-1/3">
				<h1 className="text-center text-3xl font-bold text-zinc-800 lg:text-5xl">
					<span
						className="text-primary bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent
          "
					>
						Focus Bear
					</span>{' '}
					App
				</h1>
				<p className="text-center text-xl text-zinc-600">
					Welcome to a promising focus app on{' '}
					<span className="text-primary">Starknet</span> blockchain
				</p>
				<div className="flex place-items-center items-center gap-3">
					<a
						href="https://github.com/ArismLab"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillGithub className="h-12 w-12 text-3xl text-black hover:cursor-pointer hover:opacity-50 lg:text-5xl" />
					</a>
					<a
						href="https://twitter.com/ArismLab"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillTwitterCircle className="h-12 w-12 text-3xl text-blue-400 hover:cursor-pointer hover:opacity-50 lg:text-5xl" />
					</a>
					<a
						href="https://t.me/ArismLab"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTelegram className="h-11 w-11 text-3xl text-blue-500 hover:cursor-pointer hover:opacity-50 lg:text-5xl" />
					</a>
				</div>
			</div>
			<img
				src="/static/bearMarket.png"
				className="mx-auto h-auto w-2/3 object-cover"
			/>
		</div>
	)
}

export default Home

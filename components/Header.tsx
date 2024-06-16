import React from 'react'
import Image from '@components/Image'
import Link from '@components/Link'

const Header = () => {
	return (
		<div className="flex w-full place-items-center items-center justify-between">
			<Link className="group m-5 p-5 px-5 lg:px-20" href="/">
				<div className="flex items-center gap-5">
					<Image
						alt="Arism logo"
						src="/static/bearToken.png"
						width={50}
						height={50}
						className="transition duration-200 ease-in-out group-hover:opacity-50"
					/>
					<h1 className="text-xl font-extralight text-black transition duration-200 ease-in-out group-hover:text-opacity-50 lg:text-2xl">
						Focus Bear
					</h1>
				</div>
			</Link>
			<div className="hidden justify-evenly lg:flex">
				<Link className="group m-5 p-5" href="#home">
					<h1 className="text-lg font-extralight text-black transition duration-200 ease-in-out group-hover:text-opacity-50">
						Home
					</h1>
				</Link>
				<Link className="group m-5 p-5" href="#roadmap">
					<h1 className="text-lg font-extralight text-black transition duration-200 ease-in-out group-hover:text-opacity-50">
						Roadmap
					</h1>
				</Link>
				<Link className="group m-5 p-5" href="#architecture">
					<h1 className="text-lg font-extralight text-black transition duration-200 ease-in-out group-hover:text-opacity-50">
						Architecture
					</h1>
				</Link>
			</div>
		</div>
	)
}

export default Header

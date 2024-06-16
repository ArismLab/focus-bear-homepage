import React from 'react'

const Architecture = () => {
	return (
		<div className="h-full w-full lg:h-screen">
			<p
				className="my-10 w-full text-center text-3xl font-medium lg:mt-20 lg:text-5xl"
				id="architecture"
			>
				Our Architecture
			</p>
			<div className="h-full w-full">
				<img
					src="/static/mechanism.png"
					className="mx-auto h-auto w-screen object-cover lg:h-screen lg:w-auto"
				/>
			</div>
		</div>
	)
}

export default Architecture

import React, { useState } from 'react'

const Phase = ({
	time,
	name,
	plans,
}: {
	time: string
	name: string
	plans: Record<string, string[]>
}) => {
	const [expand, setExpand] = useState<number>(-1)

	return (
		<div className="flex w-full flex-col gap-3">
			<div className="flex flex-col">
				<h2 className="text-lg font-semibold text-zinc-400">{time}</h2>
				<h3 className="text-2xl font-bold">{name}</h3>
			</div>
			<ul className="flex flex-col">
				{Object.entries(plans).map(([plan, details], i) => (
					<button
						key={plan}
						className="hover:bg-black/5"
						onClick={() => setExpand(i === expand ? -1 : i)}
					>
						<li className="mb-0" id={`heading-${i}`}>
							<div
								className="[&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b group relative flex w-full items-center rounded-t-lg border-0 px-5 py-4 text-left text-base text-zinc-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3]"
								data-twe-collapse-init
								data-twe-target={`#collapse-${i}`}
								aria-expanded={expand === i ? 'true' : 'false'}
								aria-controls={`collapse-${i}`}
								aria-label="Toggle accordion"
								data-twe-collapse-trigger
							>
								<span className="flex-grow font-medium">{plan}</span>
								<span
									className={`transform transition-transform ${
										expand === i ? 'rotate-180' : ''
									}`}
									data-twe-collapse-indicator
								>
									<svg
										className="h-4 w-4"
										viewBox="0 0 16 16"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8 10.586L2.707 5.293 4.121 3.879 8 7.757 11.879 3.879 13.293 5.293 8 10.586z"
										></path>
									</svg>
								</span>
							</div>
						</li>
						<div
							className="overflow-hidden text-left text-sm transition-all"
							data-twe-collapse
							id={`collapse-${i}`}
							aria-labelledby={`heading-${i}`}
							hidden={expand !== i}
						>
							<ul className="flex flex-col gap-3 px-10 pb-5">
								{details.map((detail, j) => (
									<li key={j} className="text-zinc-800">
										{detail}
									</li>
								))}
							</ul>
						</div>
					</button>
				))}
			</ul>
		</div>
	)
}

export default Phase

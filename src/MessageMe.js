import { bg, fg } from './theme'

export default function MessageMe() {
	return (
		<div
			className={`py-8 px-8 max-w-sm mx-auto ${bg()} ${fg()} rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6`}
		>
			<img
				className="transform block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 hover:scale-110"
				src="https://tailwindcss.com/img/erin-lindford.jpg"
				alt="Erin Lindford's Face"
			/>
			<div className="text-center space-y-2 sm:text-left">
				<div className="space-y-0.5">
					<p className="text-lg font-semibold">Erin Lindford</p>
					<p className="text-gray-500 font-medium">
						Product Engineer
					</p>
				</div>
				<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
					Message
				</button>
			</div>
		</div>
	)
}
MessageMe.displayName = 'MessageMe'

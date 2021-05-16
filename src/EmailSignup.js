import { bg, fgv } from './theme'

const interactText =
	'transform hover:bg-gray-100 hover:-rotate-3 focus:-skew-x-6 focus:rotate-0 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
const interactButton =
	'transform hover:bg-purple-700 hover:rotate-3 hover:scale-110 focus:rotate-0 active:-rotate-3 focus:scale-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'

export default function EmailSignup() {
	return (
		<form className="p-4 flex w-full max-w-sm mx-auto space-x-3">
			<input
				placeholder="email@host.com"
				className={`flex-1 appearance-none border border-transparent w-full py-2 px-4 ${bg()} ${fgv(
					700,
					100,
				)} ${fgv(
					400,
					600,
					'gray',
					'placeholder',
				)} shadow-md rounded-lg text-base ${interactText}`}
			/>
			<button
				className={`flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md ${interactButton}`}
			>
				Sign up
			</button>
		</form>
	)
}
EmailSignup.displayName = 'EmailSignup'

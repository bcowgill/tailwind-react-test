import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

function NewTabLink({ href, children, ...props }) {
	return (
		<a
			className="App-link"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	)
}
NewTabLink.displayName = 'NewTabLink'
NewTabLink.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node.isRequired,
}

// change text, color by screen size
function ScreenSize() {
	return (
		<div className="text-white p-1 w-full h-8 bg-red-500 md:bg-pink-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500">
			<span className="block md:hidden">SMALL</span>
			<span className="hidden md:block lg:hidden">MEDIUM</span>
			<span className="hidden lg:block xl:hidden">LARGE</span>
			<span className="hidden xl:block 2xl:hidden">EXTRA LARGE</span>
			<span className="hidden 2xl:block">TWICE EXTRA LARGE</span>
		</div>
	)
}
ScreenSize.displayName = 'ScreenSize'

function ButtonComponents() {
	// Extracting classes using @apply two button styles two color themes
	return (
		<div className="p-4 space-x-1">
			<button className="btn btn-green">Button</button>
			<button className="btn btn-blue">Button</button>
			<button className="vue btn-green">Button</button>
			<button className="vue btn-blue">Button</button>
		</div>
	)
}
ButtonComponents.dispayName = 'ButtonComponents'

function MessageForYou() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
			<div className="flex-shrink-0">
				<figure className="h-12 w-12" alt="ChitChat Logo">
					<svg
						className="h-12 w-12"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient
								x1="50%"
								y1="0%"
								x2="50%"
								y2="100%"
								id="a"
							>
								<stop stop-color="#2397B3" offset="0%"></stop>
								<stop stop-color="#13577E" offset="100%"></stop>
							</linearGradient>
							<linearGradient
								x1="50%"
								y1="0%"
								x2="50%"
								y2="100%"
								id="b"
							>
								<stop stop-color="#73DFF2" offset="0%"></stop>
								<stop stop-color="#47B1EB" offset="100%"></stop>
							</linearGradient>
						</defs>
						<g fill="none" fill-rule="evenodd">
							<path
								d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
								fill="url(#a)"
								transform="translate(1 1)"
							></path>
							<path
								d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
								fill="url(#b)"
								transform="translate(1 1)"
							></path>
							<path
								d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
								fill="#FFF"
							></path>
						</g>
					</svg>
				</figure>
			</div>
			<div>
				<div className="text-xl font-medium text-black">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	)
}
MessageForYou.displayName = 'MessageForYou'

function MessageMe() {
	return (
		<div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<img
				className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
				src="https://tailwindcss.com/img/erin-lindford.jpg"
				alt="Erin Lindford's Face"
			/>
			<div className="text-center space-y-2 sm:text-left">
				<div className="space-y-0.5">
					<p className="text-lg text-black font-semibold">
						Erin Lindford
					</p>
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

function ArticleTeaser() {
	// stacked layout small screens side by side on larger screens
	return (
		<div className="p-4">
			<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img
							className="h-48 w-full object-cover md:h-full md:w-48"
							src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
							alt="Man looking at item at a store"
						/>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							Case study
						</div>
						<a
							href="#"
							className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
						>
							Finding customers for your new business
						</a>
						<p className="mt-2 text-gray-500">
							Getting a new business off the ground is a lot of
							hard work. Here are five ideas you can use to find
							your first customers.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
ArticleTeaser.displayName = 'ArticleTeaser'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload!!.
				</p>
				<NewTabLink href="https://reactjs.org">Learn React</NewTabLink>
				<NewTabLink href="https://tailwindcss.com/docs/utility-first">
					Learn Tailwind CSS
				</NewTabLink>
			</header>
			<main className="bg-gray-300 p-2 hover:bg-gray-600">
				<MessageForYou />
				<ArticleTeaser />
			</main>
			<footer>
				<MessageMe />
				<ButtonComponents />
				<ScreenSize />
			</footer>
		</div>
	)
}

export default App

import ButtonComponents from './ButtonComponents'
import MessageForYou from './MessageForYou'
import ArticleTeaser from './ArticleTeaser'
import EmailSignup from './EmailSignup'
import ThemePicker from './ThemePicker'
import ScreenSize from './ScreenSize'
import NewTabLink from './NewTabLink'
import MessageMe from './MessageMe'
import { bg, fg } from './theme'
import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className={`App ${bg()} ${fg()}`}>
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
			<main className="bg-gray-300 dark:bg-gray-700 p-2 hover:bg-gray-600">
				<MessageForYou />
				<ArticleTeaser />
			</main>
			<footer>
				<MessageMe />
				<ButtonComponents />
				<EmailSignup />
				<ScreenSize />
				<ThemePicker />
			</footer>
			<div className="h-16">
				<hr />
			</div>
		</div>
	)
}
export default App

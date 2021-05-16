import ChatIcon from './ChatIcon'
import { bg, fg } from './theme'

export default function MessageForYou() {
	return (
		<div
			className={`p-6 max-w-sm mx-auto ${bg()} ${fg()} rounded-xl shadow-md flex items-center space-x-4`}
		>
			<div className="flex-shrink-0">
				<figure
					className="h-12 w-12 transform hover:scale-110"
					alt="ChitChat Logo"
				>
					<ChatIcon />
				</figure>
			</div>
			<div>
				<div className="text-xl font-medium">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	)
}
MessageForYou.displayName = 'MessageForYou'

import PropTypes from 'prop-types'

export default function NewTabLink({ href, children, ...props }) {
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

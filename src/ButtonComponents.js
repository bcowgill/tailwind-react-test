export default function ButtonComponents() {
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

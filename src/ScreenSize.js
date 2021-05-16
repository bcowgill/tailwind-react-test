// change text, color by screen size
export default function ScreenSize() {
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

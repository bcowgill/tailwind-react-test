// change text, color by screen size
export default function ScreenSize() {
	return (
		<div className="fixed bottom-0 text-white p-1 w-full h-8 bg-red-500 md:bg-pink-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500">
			<span className="transform block md:hidden hover:scale-110">
				SMALL
			</span>
			<span className="transform hidden md:block lg:hidden hover:scale-110">
				MEDIUM
			</span>
			<span className="transform hidden lg:block xl:hidden hover:scale-110">
				LARGE
			</span>
			<span className="transform hidden xl:block 2xl:hidden hover:scale-110">
				EXTRA LARGE
			</span>
			<span className="transform hidden 2xl:block hover:scale-110">
				TWICE EXTRA LARGE
			</span>
		</div>
	)
}
ScreenSize.displayName = 'ScreenSize'

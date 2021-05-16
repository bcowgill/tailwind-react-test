import useLocalStorage from './useLocalStorage'

/*
	Works in coordination with CSS and Javascript in the index.html
	The page/manifest.json will be set to the dark gray of the main app logo
	initially and theme is read from localStorage or the OS media query
	preference, then a class of light or dark will be added to the document
	to set the theme.

	The component here shows you the state and allows you to toggle between
	light, dark and OS default.

	See also src/theme.js for setting the bg- and text- classes based on theme.
*/

export default function ThemePicker() {
	const [theme, setTheme] = useLocalStorage('theme')

	function setThemeClass(theme) {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.remove('light')
		if (theme) {
			document.documentElement.classList.add(theme)
		}
		setTheme(theme)
	}

	function handleClick() {
		switch (theme) {
			case 'light': {
				setThemeClass()
				break
			}
			case 'dark': {
				setThemeClass('light')
				break
			}
			default:
				setThemeClass('dark')
		}
	}

	return (
		<button className="m-2 btn btn-blue" onClick={handleClick}>
			{theme ? theme : 'OS default'}
		</button>
	)
}

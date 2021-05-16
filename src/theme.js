// Sets theme based background and foreground colors based on current theme.
// Example output:
// bg() bg-white dark:bg-black
// fg() text-black dark:text-white
// bgv(200, 800) bg-gray-200 dark:bg-gray-800
// fgv(800, 200) text-gray-800 dark:text-gray-200

export function bg(name = 'bg') {
	return `${name}-white dark:${name}-black`
}

export function fg(name = 'text') {
	return `${name}-black dark:${name}-white`
}

export function bgv(weightLight, weightDark, shade = 'gray', name = 'bg') {
	return `${name}-${shade}-${weightLight} dark:${name}-${shade}-${weightDark}`
}

export function fgv(weightLight, weightDark, shade = 'gray', name = 'text') {
	return bgv(weightLight, weightDark, shade, name)
}

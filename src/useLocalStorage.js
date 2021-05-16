import { useState } from 'react'

const displayName = 'useLocalStorage'

const DEBUG = false

const log = DEBUG ? console.warn : () => {}

// Hook
export default function useLocalStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		let result
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key)
			// Parse stored json or if none return initialValue
			result = item ? JSON.parse(item) : initialValue
		} catch (error) {
			// If error also return initialValue
			log(`${displayName}.get`, error)
			result = initialValue
		}
		log(`${displayName}.get`, key, result)
		return result
	})

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			// Save state
			setStoredValue(valueToStore)
			// Save to local storage
			if (valueToStore === null || typeof valueToStore === 'undefined') {
				log(`${displayName}.remove`, key)
				window.localStorage.removeItem(key)
			} else {
				log(`${displayName}.set`, key, valueToStore)
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		} catch (error) {
			// A more advanced implementation would handle the error case
			log(`${displayName}.set`, error)
		}
	}

	return [storedValue, setValue]
}

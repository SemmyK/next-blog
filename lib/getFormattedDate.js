//function that takes string date ( '2023-03-14' ) and returns formated date ( March 17, 2023 )

export default function getFormattedDate(dateString) {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
		new Date(dateString)
	)
}

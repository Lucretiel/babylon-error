module.exports = function(thing) {
	let x

	// None of these are errors
	x = value => true
	x = (value => true)

	x = thing ?
		value => true :
		value => false

	x = thing ?
		value => true :
		(value => false)

	x = thing ?
		(value => true) :
		(value => false)

	// But these are. You'll only get one parse error at a time, so uncomment
	// them 1 by 1 to see.
	x = thing() ?
		(value => true) :
		value => false

	/*
	x = (thing) ?
		(value => true) :
		value => false
	*/

	/*
	x = (thing ?
		(value => true) :
		value => false)
	*/

	/*
	The pattern seems to be that babel runs into an error when it sees the
	following pattern:

	    <some expression> ?
	    	<parenthesized arrow function> :
	    	<non-parenthesized arrow function>

	The indentation / spacing / newlines don't matter, nor do parenthesis around
	the initial condition expression, nor around the ENTIRE conditional
	expression. I haven't tested it with non-arrow functions, because I assume
	the error has to do with the = character in the => token.
	*/
}

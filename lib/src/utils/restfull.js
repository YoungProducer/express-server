export default handlers => (req, res) => {
	// Extract method from request object
	const method = (req.method || '').toLowerCase();

	// Check if handler exists for HTTP verb
	if (!(method in handlers)) {
		// If no handler exists set allow headers for applicable verbs
		res.set(
			'Allow',
			Object.keys(handlers)
				.join(', ')
				.toUpperCase()
		);
		// Send HTTP 405 response back to client
		res.sendStatus(405);
	} else {
		// Invoke handler passing through request and response objects.
		handlers[method](req, res);
	}
};
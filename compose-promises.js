const composeM =
	(flatMap) =>
	(...ms) =>
		ms.reduce((f, g) => (x) => g(x)[flatMap](f));

const composePromises = composeM("then");

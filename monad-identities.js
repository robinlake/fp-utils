{
	// Identity monad
	const Id = (value) => ({
		// Functor mapping
		// Preserve the wrapping for .map() by
		// passing the mapped value into the type
		// lift:
		map: (f) => Id.of(f(value)),
		// Monad chaining
		// Discard one level of wrapping
		// by omitting the .of() type lift:
		flatMap: (f) => f(value),

		// Just a convenient way to inspect
		// the values:
		toString: () => `Id(${value})`,
	});

	// The type lift for this monad is just
	// a reference to the factory
	Id.of = Id;
	const g = (n) => Id(n + 1);
	const f = (n) => Id(n * 2);
	// Left identity
	// unit(x).flatMap(f) ==== f(x)
	trace("Id monad left identity")([Id(x).flatMap(f), f(x)]);
	// Id monad left identity: Id(40), Id(40)

	// Right identity
	// m.flatMap(unit) ==== m
	trace("Id monad right identity")([Id(x).flatMap(Id.of), Id(x)]);
	// Id monad right identity: Id(20), Id(20)

	// Associativity
	// m.flatMap(f).flatMap(g) ====
	// m.flatMap(x => f(x).flatMap(g)
	trace("Id monad associativity")([
		Id(x).flatMap(g).flatMap(f),
		Id(x).flatMap((x) => g(x).flatMap(f)),
	]);
	// Id monad associativity: Id(42), Id(42)
}

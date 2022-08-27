// Curry any number of arguments
const curry =
	(f, arr = []) =>
	(...args) =>
		((a) => (a.length === f.length ? f(...a) : curry(f, a)))([
			...arr,
			...args,
		]);

const Identity = (value) => ({
	map: (fn) => Identity(fn(value)),
});

// Generic map function that can work with any functor type
const map = curry((fn, mappable) => mappable.map(fn));
const log = (x) => console.log(x);

// const double = (n) => n * 2;
// const mdouble = map(double);

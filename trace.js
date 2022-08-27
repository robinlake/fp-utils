// inspect the contents of an element, with a label attached
const traceWithLabel = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};

// inspect the contents of an element
const trace = (x) => {
	console.log(x);
	return x;
};


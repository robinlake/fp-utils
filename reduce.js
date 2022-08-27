const reduce = (reducer, initial, arr) => {
	// shared stuff
	let acc = initial;
	for (let i = 0, { length } = arr; i < length; i++) {
	
		// unique stuff in reducer call
		acc = reducer(acc, arr[i]);
		
		// more shared stuff
	 }
 return acc;
};

// reduce((acc, curr) => acc + curr, 0, [1,2,3]); // 6

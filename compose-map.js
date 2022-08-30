const composeMap = (...ms) => ms.reduce((f, g) => (x) => g(x).map(f));

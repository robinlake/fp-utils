// return an array that can handle negative array indexes
// from https://blog.bitsrc.io/a-practical-guide-to-es6-proxy-229079c3c2f0
const negativeArray = (els) => new Proxy(els, {
  get: (target, propKey, receiver) => Reflect.get(target,
    (+propKey < 0) ? String(target.length + +propKey) : propKey, receiver)
});

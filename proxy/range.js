// range function similar to Python. Handles decimals
// from https://blog.bitsrc.io/a-practical-guide-to-es6-proxy-229079c3c2f0
const range = (min, max) => new Proxy(Object.create(null), {
  has: (_, prop) => (+prop >= min && +prop <= max)
})

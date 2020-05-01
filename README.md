## node-microbenchmark
<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>

[![npm version](https://badge.fury.io/js/node-microbenchmark.svg)](https://badge.fury.io/js/node-microbenchmark)

A micro benchmarking library inspired from [google-benchmark](https://github.com/google/benchmark)

Features available:
* Benchmarking synchronous functions
* High precision benchmark (upto nanoseconds precision)

```javascript
const { benchmark, show } = require('node-microbenchmark');

const slowFn = () => {
    for (var i = 0; i < 1e4; ++i);
}

const fastFn = () => {}

benchmark(slowFn);
benchmark(fastFn);

show();
```

![node-microbenchmark](./images/node-microbenchmark.png)

## Future enhancements

* Benchmark async code like promises.

## Author

* [yashLadha](https://github.com/yashLadha)

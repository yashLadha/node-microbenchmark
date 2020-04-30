## node-bench

A micro benchmarking library inspired from [google-benchmark](https://github.com/google/benchmark)

Features available:
    * Benchmarking synchronous functions
    * High precision benchmakr (upto nanoseconds precision)

```javascript
const slowFn = () => {
    for (var i = 0; i < 1e4; ++i);
}

const fastFn = () => {}

benchmark(slowFn);
benchmark(fastFn);

show();
```

## Future enhancements

* Benchmark async code like promises.

## Author

* [yashLadha](https://github.com/yashLadha)

const benchmark = require('../index');

const LONG_NUMBER = 1234567890234678923891289;

const usingBackTick = (stringName) => {
    stringName = `${stringName}`;
    for (let u = 0; u < stringName.length; u++);
};

const usingNormalString = (stringName) => {
    stringName = "" + stringName;
    for (let u = 0; u < stringName.length; u++);
};

const callBackTick = () => usingBackTick(LONG_NUMBER);
const callNormal = () => usingNormalString(LONG_NUMBER);

benchmark.benchmark(callBackTick);
benchmark.benchmark(callNormal);

benchmark.show();

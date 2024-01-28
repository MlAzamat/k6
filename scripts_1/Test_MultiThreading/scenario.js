import test_simple_stub from './test_simple_stub.js';

// Интенсивность запрсоов (RPS / RPM / RPH задаётся далее в timeUnit)
const test_simple_stub_startRate = 1;

// еденица измерения RPS / RPM / RPH
const timeUnit = '1s';

// Длительность теста
const stageTime = '1m';

// Время за которое поднимаемся на новый шаг
const loadTime = '0s';

// кол-во VU на старте
const preAllocatedVus = 1;

// максимальное кол-во VU
const maxVUs = 1000;

// время на опускание VU после теста
const gracefulStop = '10s';

const getStages = (target) => {
  return [
    { target: target, duration: loadTime },
    { target: target, duration: stageTime },
    { target: target * 2, duration: loadTime },
    { target: target * 2, duration: stageTime },
    { target: target * 3, duration: loadTime },
    { target: target * 3, duration: stageTime },    
  ]
}

const getOptions = (startRate, exec) => {
  return {
    executor: 'ramping-arrival-rate',
    preAllocatedVus,
    maxVUs,
    timeUnit,
    startRate,
    gracefulStop,
    stages: getStages(startRate),
    exec
  }
}

export const options = {
  insecureSkipTlsVerify: true,
  scenarios: {
    test_simple_stub_startRate: getOptions(test_simple_stub_startRate, 'test_simple_stub_exec'),

  }
}

export function test_simple_stub_exec() {
  test_simple_stub();
}



import script_get from './scripts/get.js';
import script_post from './scripts/post.js';
import script_put from './scripts/put.js';
import script_delete from './scripts/delete.js';

// Интенсивность запрсоов (RPS / RPM / RPH задаётся далее в timeUnit)
const get_intensity = 100;
const post_intensity = 10;
const put_intensity = 10;
const delete_intensity = 1;

// еденица измерения RPS / RPM / RPH
const timeUnit = '1s';

// Длительность ступени
const stageTime_IncreasingLoad = '20m';
const stageTime_StableLoad = '1h';

// Время за которое поднимаемся на новый шаг
const loadTime = '10s';

// кол-во VU на старте
const preAllocatedVus = 1;

// максимальное кол-во VU
const maxVUs = 1000;

// время на опускание VU после теста
const gracefulStop = '10s';

const getStages_IncreasingLoad = (target) => {
  return [
    { target: target, duration: loadTime },
    { target: target, duration: stageTime_IncreasingLoad },
    { target: target * 2, duration: loadTime },
    { target: target * 2, duration: stageTime_IncreasingLoad },
    { target: target * 3, duration: loadTime },
    { target: target * 3, duration: stageTime_IncreasingLoad },    
  ]
}

const getStages_StableLoad = (target) => {
  return [
    { target: target, duration: loadTime },
    { target: target, duration: stageTime_StableLoad }
  ]
}

const getOptions_IncreasingLoad = (startRate, exec) => {
  return {
    executor: 'ramping-arrival-rate',
    preAllocatedVus,
    maxVUs,
    timeUnit,
    startRate:0,
    gracefulStop,
    stages: getStages_IncreasingLoad(startRate),
    exec
  }
}

const getOptions_StableLoad = (startRate, exec) => {
  return {
    executor: 'ramping-arrival-rate',
    preAllocatedVus,
    maxVUs,
    timeUnit,
    startRate:0,
    gracefulStop,
    stages: getStages_StableLoad(startRate),
    exec
  }
}

export const options = {
//  insecureSkipTlsVerify: true,
  scenarios: {
    script_get: getOptions_IncreasingLoad(get_intensity, 'GET_1'),
    script_post: getOptions_IncreasingLoad(post_intensity, 'POST_1'),
    script_put: getOptions_IncreasingLoad(put_intensity, 'PUT_1'),
    script_delete: getOptions_StableLoad(delete_intensity, 'DELETE_1'),

  },
  /*tlsAuth: [
    {
      cert: open('../pem.pem'),
      key: open('../pem.pem')
    }
  ]
  */
}

export function GET_1() {
  script_get();
}

export function POST_1() {
  script_post();
}

export function PUT_1() {
  script_put();
}

export function DELETE_1() {
  script_delete();
}

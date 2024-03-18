import UC01_get_greeting from './scripts/UC01_get_greeting.js';
import UC02_post_users from './scripts/UC02_post_users.js';
// import UC03_CSES_fts_v1_debtor_info from 'C:/Nikolaenko/K6/scripts/1550/UC03_CSES_fts_v1_debtor_info.js';



export const options = {
  insecureSkipTlsVerify: true,
  noVUConnectionReuse: true,
  // tlsAuth: [
  //   {
  //     cert: open('../cert.pem'),
  //     key: open('../key.pem')
  //   }
  // ],
  scenarios: {
    UC01_get_greeting: {
      executor: 'ramping-arrival-rate',
      startTime: '2s', // the ramping API test starts a little later
      // startRate: 1,
      timeUnit: '1s', // we start at 50 iterations per second
      preAllocatedVUs: 5,
      maxVUs: 10,
      stages: [
        { target: 10, duration: '10s' }, // go from 50 to 200 iters/s in the first 30 seconds
        { target: 10, duration: '1m' }, // hold at 200 iters/s for 3.5 minutes
        { target: 20, duration: '10s' },
        { target: 20, duration: '1m' },
        { target: 30, duration: '10s' },
        { target: 30, duration: '1m' },
        { target: 0, duration: '10s' }
      ]
      // preAllocatedVUs: 50, // how large the initial pool of VUs would be
      // maxVUs: 100, // if the preAllocatedVUs are not enough, we can initialize more
      //tags: { test_type: 'api' }, // different extra metric tags for this scenario
      //env: { MY_CROC_ID: '2' }, // same function, different environment variables
      //exec: 'apitest', // same function as the scenario above, but with different env vars
    },
    UC02_post_users: {
      executor: 'ramping-arrival-rate',
      startTime: '2s', // the ramping API test starts a little later
      // startRate: 1,
      timeUnit: '1s', // we start at 50 iterations per second
      preAllocatedVUs: 5,
      maxVUs: 10,
      stages: [
        { target: 15, duration: '10s' }, // go from 50 to 200 iters/s in the first 30 seconds
        { target: 15, duration: '1m' }, // hold at 200 iters/s for 3.5 minutes
        { target: 25, duration: '10s' },
        { target: 25, duration: '1m' },
        { target: 35, duration: '10s' },
        { target: 35, duration: '1m' },
        { target: 0, duration: '10s' }
      ]
    //   preAllocatedVUs: 50, // how large the initial pool of VUs would be
    //   maxVUs: 100, // if the preAllocatedVUs are not enough, we can initialize more
    //   //tags: { test_type: 'api' }, // different extra metric tags for this scenario
    //   //env: { MY_CROC_ID: '2' }, // same function, different environment variables
    //   //exec: 'apitest', // same function as the scenario above, but with different env vars
    // },
    // UC03_CSES_fts_v1_debtor_info: {
    //   executor: 'ramping-arrival-rate',
    //   startTime: '10s', // the ramping API test starts a little later
    //   startRate: 5,
    //   timeUnit: '1s', // we start at 50 iterations per second
    //   stages: [
    //     { target: 20, duration: '10s' }, // go from 50 to 200 iters/s in the first 30 seconds
    //     { target: 20, duration: '2m' }, // hold at 200 iters/s for 3.5 minutes
    //     { target: 40, duration: '10s' },
    //     { target: 40, duration: '2m' },
    //     { target: 0, duration: '10s' }, // ramp down back to 0 iters/s over the last 30 second
    //   ],
    //   preAllocatedVUs: 50, // how large the initial pool of VUs would be
    //   maxVUs: 100, // if the preAllocatedVUs are not enough, we can initialize more
    //   //tags: { test_type: 'api' }, // different extra metric tags for this scenario
    //   //env: { MY_CROC_ID: '2' }, // same function, different environment variables
    //   //exec: 'apitest', // same function as the scenario above, but with different env vars
     },
  },
};

// export function all() {
//   UC01_CSES_fns_v1_egr_info();
//   // UC02_CSES_rosstat_v1_egr_info();
//   // UC03_CSES_fts_v1_debtor_info();
// }

export default function () {
  UC01_get_greeting();
  UC02_post_users();
}
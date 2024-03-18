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
      startTime: '2s', 
      timeUnit: '1s', 
      preAllocatedVUs: 500,
      maxVUs: 1000,
      stages: [
        { target: 100, duration: '10s' }, 
        { target: 100, duration: '1m' }, 
        { target: 200, duration: '10s' },
        { target: 200, duration: '1m' },
        { target: 300, duration: '10s' },
        { target: 300, duration: '1m' },
        { target: 0, duration: '10s' }
      ]
    },
    UC02_post_users: {
      executor: 'ramping-arrival-rate',
      startTime: '2s',
      timeUnit: '1s',
      preAllocatedVUs: 500,
      maxVUs: 1000,
      stages: [
        { target: 150, duration: '10s' }, 
        { target: 150, duration: '1m' }, 
        { target: 250, duration: '10s' },
        { target: 250, duration: '1m' },
        { target: 350, duration: '10s' },
        { target: 350, duration: '1m' },
        { target: 0, duration: '10s' }
      ]
     },
  },
};


export default function () {
  UC01_get_greeting();
  UC02_post_users();
}
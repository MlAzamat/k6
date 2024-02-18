import http from 'k6/http';
import { Trend } from 'k6/metrics';

let myTrend = new Trend('time_without_TLS');


export let options = {
  stages: [
    { duration: '5s', target: 20 },
    { duration: '5s', target: 40},
    { duration: '5s', target: 0},
  ],
  thresholds: {
    'http_req_duration': ['p(95)<300'],
    'time_without_TLS': ['avg>20']
  },

};

export default function() {

  let res = http.get('http://test.k6.io');
  console.log(String(res.timings.duration));
  console.log(String(res.status));
  myTrend.add(res.timings.duration - res.timings.tls_handshaking);
  
}
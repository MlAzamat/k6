import http from 'k6/http';

export let options = {
  stages: [
    { duration: '5s', target: 20 },
    { duration: '10s', target: 40},
    { duration: '10s', target: 40},
    { duration: '5s', target: 0},
  ]

};

export default function() {

  let res = http.get('http://test.k6.io');
  console.log(String(res.timings.duration));
  console.log(String(res.status));
  
}
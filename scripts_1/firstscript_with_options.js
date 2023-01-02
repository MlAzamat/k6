import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '10s',

};

export default function() {

  http.get('http://test.k6.io');
  console.log("logging");
  sleep(1);
}
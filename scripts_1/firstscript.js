import http from 'k6/http';
import { sleep } from 'k6';


export default function() {

  http.get('http://test.k6.io');
  console.log("YANDEX");

  http.get('http://test.k6.io/');

  console.log("K6");


  sleep(1);
}
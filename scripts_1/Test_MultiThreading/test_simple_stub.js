import http from 'k6/http';
import { sleep } from 'k6';


export default function() {

  http.get('http://localhost:9191/getname?name=Oleg');
  console.log("MultuThreading_SIMPLE_TEST");

  sleep(1);
}
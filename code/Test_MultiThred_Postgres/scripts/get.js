import http from 'k6/http';
import { sleep } from 'k6';


export default function() {

  http.get('http://localhost:8080/profiles/1');
 // console.log("get");

  sleep(1);
}
import http from 'k6/http';
import { sleep } from 'k6';


export default function() {
  
  const url = 'http://localhost:8089/api/v1/bankcard';
  const body = '{"name": "Oleg Vladimirov","number": "1111222233334444","date": "20/29" }';
  const params = {
    headers: {'Content-Type': 'application/json'}
};
  const res = http.post(url,body, params);


  console.log("UC09_post_v1_bankcard");

}
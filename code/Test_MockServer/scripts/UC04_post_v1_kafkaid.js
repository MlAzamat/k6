import http from 'k6/http';
import { sleep } from 'k6';


export default function() {
 

  const url = 'http://localhost:8089/api/v1/kafkaid';
  const body = '{"name": "Ivan-1","id": 4252,"inn": 7}';
  const params = {
    headers: {'Trace': 11223311, 'Content-Type': 'application/json'}
};
  const res = http.post(url,body, params);


  console.log("UC04_post_v1_kafkaid");
}
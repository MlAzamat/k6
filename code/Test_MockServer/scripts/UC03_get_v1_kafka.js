import http from 'k6/http';
import { sleep } from 'k6';


export default function() {
 
  const params = {
    headers: {'trace': '12345'}
  };
  const res = http.get('http://localhost:8089/api/v1/kafka?name=Oleg-18', params);
  
  console.log("get_greeting");
  
}
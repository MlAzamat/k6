import http from 'k6/http';
import { sleep } from 'k6';


export default function() {
  
  const url = 'http://localhost:8089/api/v1/users';
  const body = '{"name": "Marina","location": "Moscow","age": 30 }';
  const params = {
    headers: {'Trace': 11223311, 'Content-Type': 'application/json'}
};
  const res = http.post(url,body, params);


  console.log("UC02_post_users");



 


}
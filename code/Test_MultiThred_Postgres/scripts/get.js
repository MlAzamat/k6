import http from 'k6/http';
import { sleep } from 'k6';
import { random_number, random_letters } from 'E:/GitHub/k6/code/Tools/generator.js';


export default function() {


 const id = random_number(2);

 const url = 'http://localhost:8080/profiles/' + id;

const body = "";

const headers = {
 headers: {
   'Content-Type': 'application/json'
 }
}

let res = http.get(url, body, headers);
 // console.log("get");
 // check(res, {
 //   'GET status 200': r => r.status == 200,
//  })

}
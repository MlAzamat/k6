import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";
import { random_number, random_letters } from 'E:/GitHub/k6/code/Tools/generator.js';

export const options = {

}

//const host = JSON.parse(open('host.json')).etalon_references;


export default function () {

  const id = random_number(3);

  const url = "http://127.0.0.1:8080/profiles/" + id; //'http://' + host + '127.0.0.1:8080/profiles';

  const body = "";

const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
}

let res = http.del(url, body, headers);

check(res, {
  'DELETE status 200 ': r => ( r.status == 200 )
})


}

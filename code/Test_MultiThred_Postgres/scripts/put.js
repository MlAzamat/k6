import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";
import { random_number, random_letters } from 'E:/GitHub/k6/code/Tools/generator.js';

export const options = {

}

//const host = JSON.parse(open('host.json')).etalon_references;


export default function () {

  const name = random_letters(6);
  const lastName = random_letters(8);
  const age = random_number(2);
  const id = random_number(3);

  const url = "http://127.0.0.1:8080/profiles/" + id; //'http://' + host + '127.0.0.1:8080/profiles';

const body = JSON.stringify(
  {
    "firstName": name,
    "lastName": lastName,
    "age": age
  }
);

const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
}

let res = http.put(url, body, headers);

check(res, {
  'PUT status 200 or 204': r => ( r.status == 204 || r.status == 200 )
})

}

import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";
//import { randomNumber, currentDate } from ''./gen_data_fns.js;

export const options = {

}

/*const name = new SharedArray('UC06_mdmcode', function () {
  return JSON.parse(open('testData//uc06_mdmcode/mdmcode.json'));
});

const host = JSON.parse(open('host.json')).etalon_references;
*/

export default function () {

  const name = "Bogdan"; //data_name[Math.floor(Math.random() * data_name.length)].name;
  const lastName = "Nikolaev";
  const age = 22; //randomNumber(2);

  const url = "http://127.0.0.1:8080/profiles"; //'http://' + host + '127.0.0.1:8080/profiles';

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

let res = http.post(url, body, headers);

check(res, {
  'POST status 200': r => r.status == 200
})

}

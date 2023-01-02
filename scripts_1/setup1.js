// 1. init code

import http from "k6/http";

export function setup() {
  let res = http.get("https://httpbin.org/get");
  return { data: res.json() };
    // 2. setup code
  }

  export default function(data) {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify("vu code"));
    // 3. vu code
  }
  

  export function teardown(data) {
    console.log(JSON.stringify(data));
    // 4. teardown code
  }
  


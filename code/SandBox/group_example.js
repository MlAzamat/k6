import { group, check } from "k6";
import http from "k6/http";

export let options = {
    stages: [
      { duration: '1s', target: 20 },
      { duration: '2s', target: 40},
      { duration: '1s', target: 0},
    ],
    thresholds: {
      'http_req_duration': ['p(95)<12000']
    },
  
  };


export default function() {
  group("my user scenario", function() {
    group("front page", function() {
      let res = http.get("https://k6.io");
      check(res, {
        "status code is 200": (res) => res.status == 200,
      });
    });
    group("features page", function() {
      let res = http.get("https://k6.io/features");
      check(res, {
        "status code is 404": (res) => res.status == 404,
      });
    });
  });
};
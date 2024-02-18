import http from 'k6/http';

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000, 
      duration: '1m',
      preAllocatedVUs: 100,
      maxVUs: 1000,
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}
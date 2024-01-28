
import http from 'k6/http';
import { group, check, sleep} from 'k6';
import { SharedArray } from "k6/data";

//import {getRandomIndex} from './actions.js'

export const options = {
insecureSkipTLSVerify: true,
};

const data = new SharedArray('mdm_code', function () {
return JSON.parse(open('D:/Shared/test-data/cpps/UC01_POST_v2_client_bymdmcode_LIGHTMDMCODE_accounts/test_query.json'));
});

const { mdm_code } = data[Math.floor(Math.random() * data.length)];

console.log(mdm_code);

export default function () {

group('UC01_POST_v2_client_bymdmcode_LIGHTMDMCODE_accounts', function () { // Обрамление кода в транзакцию

const url = 'https://product-profile-service-ls1-genr01-cpps-testlt.apps.ls1-genr01.test.vtb.ru/api/v2/client/by_mdm_code/'+ `${mdm_code}` +'/accounts?status=0,1&block=account'; // подставляем номер договора к урлу
const headers = {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrMy1jcHBzLWVwYUB0ZXN0LnZ0Yi5ydSIsInNmYWN0b3IiOiJzbXMiLCJtZXRob2QiOiJsb2dpbiIsImNoYW5uZWwiOiJpbnRlcm5hbCIsInJlYWxtIjoiL3N0YWZmIiwiY3R4aSI6ImM2NzY5N2FkLWE5MWQtNDdlZC1hMDFkLWQwZjNlZWJiMGE2NSIsImlzcyI6Imh0dHBzOi8vcGFzc3BvcnQudnRiLnJ1L3Bhc3Nwb3J0IiwiaWF0IjoxNjAzMjc0MjI3LCJqdGkiOiJkbWF4ZGtEbXFvdllQeVBSWm9zbCIsImV4cCI6OTk5OTk5OTk5OSwidHJ1c3QiOmZhbHNlfQ.qfG--4nyJKZHHOxn6iGvsGBQUoGv5_zCPcpBefKP-hcfZwr8mcPdJfSDUFSevbOUW8_rEUknEsSTKy4rs0v0JSTn_3V0fOZ3tBzQEhG_79Mz0x23h6lTvFZ7f3yOt7m8ai86SLaCG1wBNVyO11ndgmnxGynHgmF3kdXZRl8p-D_XMroXXOWukGvzX7Dff4i6hGm-NTq3nNgK2DVweZNw3K8xQNT9YO-rUBVPiSP-jCoiJmL3ur03Zo7CP900gWmEa5ChiOZj0KvBcndwF40nzx37Xg75ZxxIpCSBQofyxeY9E5imrV0hpAG_FpRGCf79p13JVSXiMBb-sFnt3DhpKw'};
const body = "";
const response = http.post(url, body, { headers }); // сам POST запрос
console.log('URL:' + url);
console.log('Статус:' + response.status);

// check(response, { // проверки есть ли в ответе от сервиса текст 'poaNumber'). аналог 'web_reg_find' из ЛР.
// 'Does poaNumber exist': (res) => res.body.includes('poaNumber')
// });

// console.log('poaFileHash ' + JSON.parse(response.body).poaFileHash); // достаем определенное значение из тела ответа

// sleep(0.05); //sleep_time

});

}


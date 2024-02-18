
Export to CSV
import { LoadJKS, TLS_1_2 } from "k6/x/kafka";

import {

Writer,

Reader,

Connection,

SchemaRegistry,

CODEC_SNAPPY,

SCHEMA_TYPE_JSON,

SCHEMA_TYPE_STRING

} from "k6/x/kafka";





const jks = LoadJKS({

path: "C:/Users/VTB70182345/Desktop/certs/1536/kafka 1536/combined.jks", // путь до jks сертификата.

// Ниже указываются пароль и все алиасы (если алиасы неизвестны, их можно посмотреть через java keytool

// keytool -list -v -keystore <jks_name.jks> -storepass <password> > test.txt

password: "123456",

clientCertAlias: "testissuing1",

clientKeyAlias: "localhost",

clientKeyPassword: "123456",

serverCaAlias: "testrootca",

});

const tlsConfig = {

enableTls: true,

insecureSkipTlsVerify: false,

minVersion: TLS_1_2,



clientCertPem: jks["clientCertsPem"][0],

clientKeyPem: jks["clientKeyPem"],

serverCaPem: jks["serverCaPem"],

};



console.log(Object.keys(jks));

console.log(jks);

console.log(tlsConfig);



// брокеры

const brokers = ["ltcpps-kfc001lv.test.vtb.ru:9092"];

// топик

const topic = "cpps-subo";



const writer = new Writer({

tls: tlsConfig,

brokers: brokers,

topic: topic,

autoCreateTopic: false,

compression: CODEC_SNAPPY,

});



const reader = new Reader({

tls: tlsConfig,

brokers: brokers,

topic: topic,



});





const connection = new Connection({

address: brokers[0],

tls: tlsConfig,

});

const schemaRegistry = new SchemaRegistry();







// if (__VU == 0) {

// connection.createTopic({

// topic: topic,

// tls: tlsConfig,

// configEntries: [

// {

// configName: "compression.type",

// configValue: CODEC_SNAPPY,

// },

// ],

// });

// }



export const options = {

thresholds: {

// Base thresholds to see if the writer or reader is working

kafka_writer_error_count: ["count == 0"],

kafka_reader_error_count: ["count == 0"],

},

};



// function getRandomInt(min, max) {

// return min + Math.floor(Math.random() * (max - min + 1));

// }





export default function () {



let message = [

{

key: schemaRegistry.serialize({

data: "112312ds",

schemaType: SCHEMA_TYPE_STRING,

}),

headers: {

BILLING_TICKET: "BillingTicketHeader",

INFO_SYSTEM_CODE_PRODUCER: "InfoSystemCodeProducerHeader"

},

value: schemaRegistry.serialize({

data: JSON.stringify({

type: "LiquidityManagementCompany",

errors: [],

status: "SUCCESS",

headers: {

entityId: "s46bd334-9875-e313-380c-34f0e2105fcc",

messageId: "1zd11934-4560-9f14-a49e-9ea72d491efc",

eventTimestamp: 1687267720799

},

payload: {

account: {

id: "1784130520122",

number: "4290862662113437052",

status: "activated",

mdmCode: "31234214",

productId: "2816b4a3-d2e9-4c55-8b29-4be64c1be157",

statement: {

statementId: "ИД 1",

statementNumber: "555143-4",

statementExecuteDate: "2023-06-21",

statementSigningDate: "2023-06-21"

},

serviceCode: "mlcAccepting"

}

}

}),

schemaType: SCHEMA_TYPE_STRING,

})

}

];



writer.produce({ messages: message });



message = reader.consume({});



}



export function teardown(data) {

writer.close();

reader.close();

connection.close();

}

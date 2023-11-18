import { LoadJKS, TLS_1_2 } from "k6/x/kafka";

import { generate_inn, generate_ogrn } from './generate_data.js';

import { SharedArray } from "k6/data";

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

  path: "D://Malikov//git_k6//k6//1385//combined_oacs.jks", // путь до jks сертификата.

  // Ниже указываются пароль и все алиасы (если алиасы неизвестны, их можно посмотреть через java keytool

  // keytool -list -v -keystore <jks_name.jks> -storepass <password> > test.txt

  password: "87654321",

  clientCertAlias: "ca",

  clientKeyAlias: "localhost",

  clientKeyPassword: "87654321",

  serverCaAlias: "root ca",

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

  const brokers = ["ltmdmc-kfc001lv.test.vtb.ru:9092"];

// топик

  const topic = "vtb-integration-fns-publication-increment";

 

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

 

 

 

 

export const options = {

  thresholds: {

    kafka_writer_error_count: ["count == 0"],

    kafka_reader_error_count: ["count == 0"],

  },

};

 

 

export default function () {

 

  let message = [

    {

      value: schemaRegistry.serialize({

        data: JSON.stringify({

            "egrul": [

              {

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
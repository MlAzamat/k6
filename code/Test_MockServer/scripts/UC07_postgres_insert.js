
import sql from 'k6/x/sql';




const db = sql.open(
    'postgres',
    'postgres://postgres:1111@localhost:5432/db_test?sslmode=disable'
);

function insert01(poaNumber) {

    db.exec(`INSERT INTO "test" ("text") VALUES('dddddddd');`);
   // db.exec(`INSERT INTO "SearchNumber" ("Search", "currenttime") VALUES('${poaNumber}', '${formattedDate}');`);

  }





export {insert01};
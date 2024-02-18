
import sql from 'k6/x/sql';




const db = sql.open(
    'postgres',
    'postgres://postgres:admin@ltmsab-ls5001wv.test.vtb.ru:5432/mrac?sslmode=disable'
);

function insertUC01(poaNumber) {

    db.exec(`INSERT INTO "RegistrationNumber" ("RegDovNum") VALUES('${poaNumber}');`);
    db.exec(`INSERT INTO "SearchNumber" ("Search", "currenttime") VALUES('${poaNumber}', '${formattedDate}');`);

  }

  function insertUC02(poaNumber) {

    db.exec(`INSERT INTO "Revoke" ("Search", "currenttime") VALUES('${poaNumber}', '${formattedDate}');`);
    // const res = sql.query(db, 'SELECT * FROM "SearchNumber" limit 10');

  }

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);


export {insertUC01, insertUC02};
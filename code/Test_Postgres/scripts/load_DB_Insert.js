import sql from 'k6/x/sql';
import { random_number, random_letters } from 'E:/GitHub/k6/code/Tools/generator.js';

  
  const db = sql.open('postgres', 'postgres://admin:admin@localhost:5432/pg_ml?sslmode=disable');
  
  export default function() {
   
    const name = random_letters(6);
    const lastName = random_letters(8);
    const age = random_number(2);

      let result = sql.query(db, `insert into profile (first_name, last_name, age)
      values ('${name}', '${lastName}', ${age});`)
    }
  
  export function teardown() {
      db.close();
  }
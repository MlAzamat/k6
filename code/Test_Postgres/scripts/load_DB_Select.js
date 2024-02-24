import sql from 'k6/x/sql';
import { random_number, random_letters } from 'E:/GitHub/k6/code/Tools/generator.js';
  
  const db = sql.open('postgres', 'postgres://admin:admin@localhost:5432/pg_ml?sslmode=disable');
  
  export default function() {
   
    const id = random_number(3);
      let result = sql.query(db, `select * from public.profile where id = ${id};`)
    }
  
  export function teardown() {
      db.close();
  }
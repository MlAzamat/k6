import sql from 'k6/x/sql';
import { randomIntBetween } from './utils.js';
import { sleep } from 'k6';



const db = sql.open('postgres', 'postgres://postgres:1111@localhost:5432/db_test?sslmode=disable');

export default function() {
 
    const id = randomIntBetween(1, 400000000);
    let result = sql.query(db, `select * from ocds_arch_db.dossier where dossier_id = ${id} and is_individual = true`)
    console.log({id});
    sleep(0.25);
   
  }

export function teardown() {
    db.close();
}
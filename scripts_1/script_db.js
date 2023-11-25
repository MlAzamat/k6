import sql from 'k6/x/sql';
import { randomIntBetween } from './utils.js';
import { sleep } from 'k6';



const db = sql.open('postgres', 'postgres://ocds_arch_db_admin:6Avx3w2xm4mJr9S2ZF@ltocds-pgc001lk.test.vtb.ru:5432/ocds_arch_db?sslmode=disable');

export default function() {
 
    const id = randomIntBetween(1, 400000000);
    let result = sql.query(db, `select * from ocds_arch_db.dossier where dossier_id = ${id} and is_individual = true`)
    console.log({id});
    sleep(0.25);
   
  }

export function teardown() {
    db.close();
}
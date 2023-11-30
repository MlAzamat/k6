import { generate_inn, generate_ogrn, generate_kpp, generate_okpo, generate_snils, generate_phone, random_characters, random_letters, random_number, random_number_between, current_date, random_small_date, random_date, random_from_list } from './generator.js';

console.log('INN UL ', generate_inn("UL"));
console.log('INN FL ', generate_inn("FL"));
console.log('OGRN UL ', generate_ogrn("UL"));
console.log('OGRN FL ', generate_ogrn("FL"));
console.log('KPP ', generate_kpp());
console.log('OKPO FL ', generate_okpo("FL"));
console.log('OKPO UL ', generate_okpo("UL"));
console.log('SNILS ', generate_snils());
console.log('generate_phone_number_+7 9xx xxx-xx-xx ', generate_phone());
console.log('random_characters ', random_characters(7));
console.log('random_letters ', random_letters(7));
console.log('random_number ', random_number(7));
console.log('random_number_between ', random_number_between(20,700));
console.log('current_date ', current_date(7));
console.log('random_small_date ', random_small_date());
console.log('random_date ', random_date());
console.log('random_from_list ', random_from_list());
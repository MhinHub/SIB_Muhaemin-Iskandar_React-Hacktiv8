//** Pengenalan Modern Javascript, Variable Declaration, Array **//

/*
Pada sesi ini kami mengetahui tentang:
    • Apa itu variable
    • Apa pentingnya variable
    • Mendeklarasikan variable
    • Mengisi variable dengan nilai atau value
    • Memberi nama variable yang baik
    • Apa itu tipe data
    • Berbagai jenis tipe data
    • Tipe data number dan pengoperasianya
    • Tipe data string dan cara memanipulasinya
    • Tipe data boolean
    • Dan bagaimana mengetahui tipe data dari sebuah variable.
    • Apa itu Array
    • Apa itu Jenis Array
    • Mengisi Array
*/

// MODERN JAVASCRIPT
/*
    Mempelajari ES6
*/

// DEKLARASI VARIABLE

var variabel1 = `Apa itu variable? \nVariabel adalah sebuah tempat penyimpanan data yang bersifat dinamis`; // Dalam JS modern, pendeklarasian d\ cara ini jarang/tidak digunakan | tidak ada sistem block scope | Dinamis
let variabel2 = "Variabel penting sekali digunakan dalam setiap pemrograman sebagaimana fungsinya"; // Dinamis | Block Scope
const variabel3 = `${variabel1}\n${variabel2} `; // Konstanta | Block Scope

console.info(variabel3);


// TIPE DATA
console.info(`\nTipe Data \nsebuah pengklasifikasian data berdasarkan jenis data tersebut`);

    // Number
const number1 = 1; // or 1.0
    // String
const string1 = "1"; // Menggunakan "", '', `` 
    // Boolean
const boolean1 = true; // or false


// ARRAY
console.info(`\nArray \nsebuah kumpulan data yang dapat diakses menggunakan index`);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // Merge Array

const array3 = [...array1, ...array2]; // Mengcopy array1 dan array2 ke array3 | Destructuring
/* atau bisa juga dengan
const array3 = array1.concat(array2);
array1.push.apply(array1, array2); //tanpa variabel baru
dll */

// console.info(array1);
console.info(array3);

    // Menghapus Array
array1.splice(0, 3); // Menghapus array1 pada index 0 sampai 3

console.info(array1);

    // Mengosongkan Array
array1.splice(0, array1.length); // Menghapus array1 pada index 0 sesuai panjang array1

console.info(array1);


// let a=prompt('')
// alert (a)
// let =a.
// let harfA= prompt()
// let soz = "Salom, dunyo!"; // Bu yerda yozgan sozni o'zgartiring

// var harfA = soz.includes("a"); // "a" harfini tekshiramiz

// console.log(harfA); // true yoki false chiqadi
// let a=prompt("soz kiriting")

// let= (a.toUpperCase("soz"))
// console.log(a.includes("SOZ"))
// Foydalanuvchidan ismini so'raymiz
var ism = prompt("Ismingizni kiriting:");

// Foydalanuvchidan harf kiritishni so'raymiz
var harf = prompt("Bironta harf kiriting:");

// Foydalanuvchi kiritgan harfning ismida bo'lishini tekshiramiz
if (ism.includes(harf)) {
    alert("Kiritgan ismida bu harf bor!");
} else {
    alert("Kiritgan ismida bu harf yo'q!");
}


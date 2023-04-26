let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array[1,2,3,4,5,6,7];

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba","22",null,undefined,3.13];

// Uzunluk

value = numbers.length;

// Indeksleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];

// Herhangi bir indexteki değeri değiştirme

numbers[2] = 1000;
value = numbers;

// Index Of

value = numbers.indexOf(1000);

// Arrayin Sonuna Değer Ekleme - Push

numbers.push(2000);
value = numbers;

// Arrayin Başına Değer Ekleme - Unshift

numbers.unshift(3000);
value = numbers;

// Sonundan Değer Atma

numbers.pop()
value = numbers;

// Başından Değer Atma

numbers.shift()
value = numbers;

// Belli bir kısmını atma. Index'teki ilk 0,1,2 atma. 3 dahil değil. 

numbers.splice(0,3);

value = numbers;

// Reverse - Elemanları ters çevirme

numbers.reverse();
value = numbers;

// Elemanları sıralama

value = numbers.sort();

value = numbers.sort(function(x,y){ // Küçükten Büyüğe
    return x-y;
});

value = numbers.sort(function(x,y){ // Büyükten Küçüğe
    return y-x;
})


console.log(value);
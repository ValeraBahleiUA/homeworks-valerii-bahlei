let a = 0 || 'string'; //выводит строку, ведь оператор "||" ищет значение ктороые при преобразовании в boolean выходят в true
let b = 1 && 'string'; //выводит строку, ведь среди значений нету таких, которое в boolean равны false, а строка последняя среди них, на ней интерпретатор и остановился
let c = null || 25; //выводит налл, null -- false в boolean 
let e = null || 0 || 35; //выводит 35,  35 -- единственное правдивое значение
let f = null && 0 && 35; //выводит налл, ведь это первое ложное значение

12 + 14 + '12' // возвращает "2612", 12 и 14 добавляет как простые числа, а для добавления к строке, нужно преобразовать в строку
3 + 2 - '1' // возвращает 4. Здесь интерпретатор смог преобразовать строки в цифры И сделать вычитание, так как здесь нет других символов, Кроме цифр
'3' + 2 - 1 // возвращает 31. Сначала было сделано вычитание, а потом сложение строк
true + 2 //  возвращает 3.  Значение истины преобразовывается в единицу
+'10' + 1 //  возвращает 11.  Строка сначала преобразовывается в цифру, а потом происходит обычное сложения
undefined + 2 // NaN
null + 5 // 5. null  может преобразоваться в ноль, в отличии от undefined
true + undefined // NaN 


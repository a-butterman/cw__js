function findMultiples(integer, limit) {
    let num = []; //обьявил переменную с пустым массивом, что бы увидеть все его элементы

    for (let i = 1; i <= limit; i++) { //для определения кратности будем умножать integer i-кол-во раз, где i не может быть больше, чем limit. И после каждой операции, i будет увеличиваться на 1.
        if (integer * i <= limit) { //умножаем integer на i до тех пор, пока результат не станет <= limit.
            num.push(integer * i); //метод .push добавляет значение(результат) в массив num.
        }
    }
    return num; //оператор return после всех выполнений условий функции останавливает ее и возвращает значение в num.
}
/*
Например, при таких значениях:
findMultiples(4, 27)
и вернется в num=[4, 8, 12, 16, 20, 24]
 */

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
 */
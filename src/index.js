/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {

    if (minFirst >= minSecond && maxFirst >= maxSecond){
        return minSecond * maxFirst; 
    } else if (minFirst >= minSecond && maxFirst < maxSecond){
        return minSecond * maxSecond;
    } else if (minFirst < minSecond && maxFirst < maxSecond){
        return minFirst * maxSecond;
    } else if (minFirst < minSecond && maxFirst >= maxSecond){
        return minFirst * maxFirst;
    }
};

const minMaxMultiplyResult = minMaxMultiply(2, 3, 4, 5);
console.log(minMaxMultiplyResult); // 10
alert(`Your result is ${minMaxMultiplyResult}.`);

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {

    return Math.PI * radius**2;
    //return Math.round(Math.PI * radius**2);

};

const square = getSquareOfCircle(4);
console.log(square); // 50.26548245743669
alert(`Area is = ${square}.`);

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
    
    return Math.round(number * 10**accuracy) / 10**accuracy;

};

const fixedValue = getFixedValue(3.2345, 3);
console.log(fixedValue); // 3.235

alert(`Your result is ${fixedValue}.`);


/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {

    if(Math.round(number) % 2 !== 0){
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
};

const floorValue = getFlooroCeil(3.235);
const floorValue2 = getFlooroCeil(4.235);

console.log(floorValue); // 4
console.log(floorValue2); // 4

alert(`Your result is ${floorValue}.`);
alert(`Your result is ${floorValue2}.`);
/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {

    return Math.floor(Math.random() * (to - from + 1) + from);

};

const randomNumber = randomizer(2, 5);
console.log(randomNumber); // от 2 до 5, не знаю сколько)

alert(`Your result is ${randomNumber}.`);
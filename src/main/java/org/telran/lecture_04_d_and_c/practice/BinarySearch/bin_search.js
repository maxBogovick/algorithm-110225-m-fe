
/**
 * Рекурсивная реализация бинарного поиска.
 * 
 * @param {number[]} array - отсортированный массив
 * @param {number} target - искомое значение
 * @param {number} left - левая граница (включительно)
 * @param {number} right - правая граница (включительно)
 * @returns {number} индекс элемента или -1, если не найден
 */
export function binarySearchRecursive(array, target, leftIndex, rightIndex) {
    // Шаг 1: Проверить базовый случай: если left > right, элемент не найден — вернуть -1
    if (leftIndex > rightIndex) {
        return -1;
    }
    // Шаг 2: Найти индекс середины массива:
    const midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    // Шаг 3: Сравнить элемент в середине (array[mid]) с target:
    // - если равны, вернуть mid
    if (array[midIndex] === target) {
        return midIndex;
    } else if (target < array[midIndex]) {
        return binarySearchRecursive(array, target, leftIndex, midIndex -1);
    } else if (target > array[midIndex]) {
        return binarySearchRecursive(array, target, midIndex + 1, rightIndex);
    }
}

/**
 * Вспомогательная обёртка для бинарного поиска, вызывает рекурсивную версию.
 * 
 * @param {number[]} array - отсортированный массив
 * @param {number} target - искомое значение
 * @returns {number} индекс элемента или -1, если не найден
 */
export function binarySearch(array, target) {
    // Шаг 1: Проверить, что массив не пустой и не null
    // Шаг 2: Вызвать рекурсивный метод с начальными границами: 0 и array.length - 1
    if (!array.length) {
        throw new Error("Массив пуст");
    }
    //return -1; // заглушка
    return binarySearchRecursive(array, target, 0, array.length - 1)
}

// --- Тестирование алгоритма ---
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetPresent = 11;
const targetAbsent = 10;

const result1 = binarySearch(sortedArray, targetPresent);
const result2 = binarySearch(sortedArray, targetAbsent);

console.log("Рекурсивный бинарный поиск:");
console.log(`Искомый элемент ${targetPresent} ${result1 !== -1 ? `найден по индексу ${result1}` : 'не найден'}`);
console.log(`Искомый элемент ${targetAbsent} ${result2 !== -1 ? `найден по индексу ${result2}` : 'не найден'}`);

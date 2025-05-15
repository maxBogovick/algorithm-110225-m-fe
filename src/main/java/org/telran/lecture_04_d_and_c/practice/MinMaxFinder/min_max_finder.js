class MinMaxFinder {
    /**
     * Находит минимальное и максимальное значение в массиве
     * @param {number[]} arr - массив чисел
     * @returns {{min: number, max: number}} объект с минимумом и максимумом
     */
    static findMinMax(arr) {
        // Шаг 1: Проверить, что массив не пустой и не undefined
        // Если массив пустой — выбросить исключение (например, через throw Error)

        // Шаг 2: Вызвать вспомогательную рекурсивную функцию с индексами начала и конца массива

        // Шаг 3: Вернуть результат работы рекурсивной функции
        return null; // заглушка
    }

    /**
     * Рекурсивно находит минимум и максимум в диапазоне индексов
     * @param {number[]} arr - массив чисел
     * @param {number} low - начальный индекс
     * @param {number} high - конечный индекс
     * @returns {{min: number, max: number}} объект с найденными значениями
     */
    static findMinMaxRecursive(arr, low, high) {
        // Базовый случай 1: один элемент
        // Вернуть объект, где min = max = arr[low]

        // Базовый случай 2: два элемента
        // Сравнить arr[low] и arr[high], вернуть объект с min и max

        // Рекурсивный случай: больше двух элементов
        // 1. Найти середину диапазона: mid = Math.floor((low + high) / 2)
        // 2. Рекурсивно вызвать функцию для левой половины
        // 3. Рекурсивно вызвать функцию для правой половины
        // 4. Объединить результаты: взять min из двух min, max из двух max
        // 5. Вернуть итоговый объект с min и max

        return null; // заглушка
    }

    /**
     * Преобразует массив в строку для вывода
     * @param {number[]} arr
     * @returns {string}
     */
    static arrayToString(arr) {
        // Вернуть строку формата [1, 2, 3] используя join
        return null; // заглушка
    }
}

// --- Тесты ---
const arr1 = [3, 5, 1, 8, 9, 2, 6, 7, 4];
const result1 = MinMaxFinder.findMinMax(arr1);
console.log("Массив:", MinMaxFinder.arrayToString(arr1));
console.log("Минимум:", result1?.min, ", Максимум:", result1?.max);

const arr2 = [-10, 5, 100, -5, 0, 20, 30];
const result2 = MinMaxFinder.findMinMax(arr2);
console.log("\nМассив:", MinMaxFinder.arrayToString(arr2));
console.log("Минимум:", result2?.min, ", Максимум:", result2?.max);

const arr3 = [42];
const result3 = MinMaxFinder.findMinMax(arr3);
console.log("\nМассив:", MinMaxFinder.arrayToString(arr3));
console.log("Минимум:", result3?.min, ", Максимум:", result3?.max);

try {
    const arr4 = [];
    const result4 = MinMaxFinder.findMinMax(arr4);
    console.log("\nМассив: пустой");
    console.log("Минимум:", result4.min, ", Максимум:", result4.max);
} catch (e) {
    console.log("\nОшибка:", e.message);
}

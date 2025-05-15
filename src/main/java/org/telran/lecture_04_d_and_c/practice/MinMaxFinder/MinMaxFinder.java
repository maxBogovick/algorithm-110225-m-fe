package org.telran.lecture_04_d_and_c.practice.MinMaxFinder;

public class MinMaxFinder {
    /**
     * Находит минимальный и максимальный элементы в массиве
     * @param arr массив чисел
     * @return объект, содержащий минимум и максимум
     */
    public static MinMax findMinMax(int[] arr) {
        // Шаг 1: Проверить, что массив не null и не пустой
        // Если массив пустой или null — выбросить исключение IllegalArgumentException

        // Шаг 2: Вызвать вспомогательный рекурсивный метод с аргументами:
        // массив, индекс начала (0), индекс конца (arr.length - 1)

        // Шаг 3: Вернуть результат работы рекурсивного метода
        throw new UnsupportedOperationException("Method findMinMax is not implemented yet");
    }

    /**
     * Рекурсивно находит минимум и максимум в заданном диапазоне массива
     * @param arr массив
     * @param low нижняя граница диапазона (включительно)
     * @param high верхняя граница диапазона (включительно)
     * @return объект MinMax с найденными значениями
     */
    private static MinMax findMinMaxRecursive(int[] arr, int low, int high) {
        // Базовый случай 1: если в диапазоне один элемент
        // Вернуть MinMax, где min = max = этот элемент

        // Базовый случай 2: если в диапазоне два элемента
        // Сравнить их и вернуть MinMax с меньшим и большим значениями

        // Рекурсивный случай: больше двух элементов
        // 1. Найти середину диапазона: mid = low + (high - low) / 2
        // 2. Рекурсивно вызвать метод для левой половины (low, mid)
        // 3. Рекурсивно вызвать метод для правой половины (mid + 1, high)
        // 4. Объединить результаты: найти min из левого и правого min, max из левого и правого max
        // 5. Вернуть новый MinMax с объединёнными значениями

        throw new UnsupportedOperationException("Method findMinMaxRecursive is not implemented yet");
    }

    public static void main(String[] args) {
        int[] arr1 = {3, 5, 1, 8, 9, 2, 6, 7, 4};
        MinMax result1 = findMinMax(arr1);
        System.out.println("Массив: " + arrayToString(arr1));
        System.out.println("Минимум: " + result1.min + ", Максимум: " + result1.max);

        int[] arr2 = {-10, 5, 100, -5, 0, 20, 30};
        MinMax result2 = findMinMax(arr2);
        System.out.println("\nМассив: " + arrayToString(arr2));
        System.out.println("Минимум: " + result2.min + ", Максимум: " + result2.max);

        // Случай с массивом из одного элемента
        int[] arr3 = {42};
        MinMax result3 = findMinMax(arr3);
        System.out.println("\nМассив: " + arrayToString(arr3));
        System.out.println("Минимум: " + result3.min + ", Максимум: " + result3.max);

        // Пустой массив (обработка краевого случая)
        try {
            int[] arr4 = {};
            MinMax result4 = findMinMax(arr4);
            System.out.println("\nМассив: пустой");
            System.out.println("Минимум: " + result4.min + ", Максимум: " + result4.max);
        } catch (IllegalArgumentException e) {
            System.out.println("\nОшибка: " + e.getMessage());
        }
    }



    /**
     * Вспомогательный метод для вывода массива в виде строки
     * @param arr массив
     * @return строковое представление массива
     */
    private static String arrayToString(int[] arr) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            sb.append(arr[i]);
            if (i < arr.length - 1) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}

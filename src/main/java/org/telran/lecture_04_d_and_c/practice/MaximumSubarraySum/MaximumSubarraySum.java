package org.telran.lecture_04_d_and_c.practice.MaximumSubarraySum;

public class MaximumSubarraySum {

    /**
     * Находит максимальную сумму подмассива с использованием подхода "Разделяй и Властвуй"
     *
     * @param arr   массив чисел
     * @param left  левая граница рассматриваемого подмассива (включительно)
     * @param right правая граница рассматриваемого подмассива (включительно)
     * @return максимальная сумма подмассива
     */
    public static int findMaxSubarraySum(int[] arr, int left, int right) {
        // Базовый случай: один элемент
        // Находим середину
        // Рекурсивно находим максимальную сумму в левой половине
        // Рекурсивно находим максимальную сумму в правой половине
        // Находим максимальную сумму подмассива, пересекающего середину
        // Возвращаем максимум из трех значений
        throw new UnsupportedOperationException("Method findMaxSubarraySum is not implemented yet");
    }

    /**
     * Находит максимальную сумму подмассива, который пересекает середину массива
     *
     * @param arr   массив чисел
     * @param left  левая граница рассматриваемого подмассива
     * @param mid   середина массива
     * @param right правая граница рассматриваемого подмассива
     * @return максимальная сумма подмассива, пересекающего середину
     */
    public static int findMaxCrossingSum(int[] arr, int left, int mid, int right) {
        // Находим максимальную сумму в левой части (включая середину)

        // Находим максимальную сумму в правой части (не включая середину)

        // Возвращаем сумму максимальных левой и правой частей
        throw new UnsupportedOperationException("Method findMaxCrossingSum is not implemented yet");
    }


    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Максимальная сумма подмассива: " + findMaxSubarraySum(arr, 0, arr.length - 1));

        // Дополнительный тестовый пример
        int[] arr2 = {-5, -3, -1, -2, -9};
        System.out.println("Максимальная сумма подмассива: " + findMaxSubarraySum(arr2, 0, arr2.length - 1));
    }
}

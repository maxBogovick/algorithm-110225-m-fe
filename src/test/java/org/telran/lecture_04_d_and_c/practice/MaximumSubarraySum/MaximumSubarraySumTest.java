package org.telran.lecture_04_d_and_c.practice.MaximumSubarraySum;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MaximumSubarraySumTest {

    @Test
    @DisplayName("Классический случай с положительными и отрицательными числами")
    void testMixedNumbers() {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, arr.length - 1);
        assertEquals(6, result); // [4, -1, 2, 1]
    }

    @Test
    @DisplayName("Все отрицательные числа")
    void testAllNegative() {
        int[] arr = {-5, -3, -1, -2, -9};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, arr.length - 1);
        assertEquals(-1, result); // Самый "наименее плохой" элемент
    }

    @Test
    @DisplayName("Все положительные числа")
    void testAllPositive() {
        int[] arr = {1, 2, 3, 4, 5};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, arr.length - 1);
        assertEquals(15, result); // Вся сумма массива
    }

    @Test
    @DisplayName("Один элемент (положительный)")
    void testSinglePositiveElement() {
        int[] arr = {10};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, 0);
        assertEquals(10, result);
    }

    @Test
    @DisplayName("Один элемент (отрицательный)")
    void testSingleNegativeElement() {
        int[] arr = {-7};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, 0);
        assertEquals(-7, result);
    }

    @Test
    @DisplayName("Два элемента, максимальная сумма — один из них")
    void testTwoElements() {
        int[] arr = {-1, 5};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, 1);
        assertEquals(5, result);
    }

    @Test
    @DisplayName("Массив с чередующимися знаками")
    void testAlternatingSigns() {
        int[] arr = {2, -1, 2, -1, 2, -1, 2};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, arr.length - 1);
        assertEquals(5, result); // [2, -1, 2, -1, 2]
    }

    @Test
    @DisplayName("Бросает исключение при пустом массиве")
    void testEmptyArray() {
        int[] arr = {};
        Exception exception = assertThrows(IllegalArgumentException.class, () ->
                MaximumSubarraySum.findMaxSubarraySum(arr, 0, 0));
        assertEquals("Arrays is empty", exception.getMessage());
    }

    @Test
    @DisplayName("Бросает исключение при null-массиве")
    void testNullArray() {
        int[] arr = null;
        Exception exception = assertThrows(IllegalArgumentException.class, () ->
                MaximumSubarraySum.findMaxSubarraySum(arr, 0, 0));
        assertEquals("Arrays is empty", exception.getMessage());
    }

    @Test
    @DisplayName("Сумма максимального подмассива пересекающего середину")
    void testCrossingSum() {
        int[] arr = {2, 3, -10, 4, 5};
        int result = MaximumSubarraySum.findMaxSubarraySum(arr, 0, arr.length - 1);
        assertEquals(9, result); // [4, 5]
    }
}
